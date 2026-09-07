"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid, maybeIssueCertificate } from "@/lib/gating";

export type QuizSubmitResult = { scorePct: number; correctCount: number; total: number } | { error: string };

export async function submitQuizAction(
  moduleId: string,
  courseSlug: string,
  answers: number[]
): Promise<QuizSubmitResult> {
  const user = await requireUser();

  const mod = await prisma.module.findUnique({
    where: { id: moduleId },
    include: { quizQuestions: { orderBy: { order: "asc" } }, course: true },
  });
  if (!mod) return { error: "This module could not be found." };

  const enrolled = await isEnrolledAndPaid(user.id, mod.courseId);
  if (!enrolled) return { error: "You are not enrolled in this course." };

  const total = mod.quizQuestions.length;
  const correctCount = mod.quizQuestions.reduce(
    (count, q, i) => (answers[i] === q.correctIndex ? count + 1 : count),
    0
  );
  const scorePct = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const existing = await prisma.moduleProgress.findUnique({
    where: { userId_moduleId: { userId: user.id, moduleId } },
  });

  await prisma.moduleProgress.upsert({
    where: { userId_moduleId: { userId: user.id, moduleId } },
    update: {
      quizScorePct: scorePct,
      quizAttempts: (existing?.quizAttempts ?? 0) + 1,
      completedAt: existing?.completedAt ?? new Date(),
    },
    create: {
      userId: user.id,
      moduleId,
      quizScorePct: scorePct,
      quizAttempts: 1,
      completedAt: new Date(),
    },
  });

  await maybeIssueCertificate(user.id, mod.courseId);
  revalidatePath(`/dashboard/courses/${courseSlug}/learn`);
  revalidatePath("/dashboard");

  return { scorePct, correctCount, total };
}
