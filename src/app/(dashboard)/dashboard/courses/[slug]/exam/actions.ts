"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid, maybeIssueCertificate } from "@/lib/gating";

export type ExamSubmitResult =
  | { scorePct: number; correctCount: number; total: number; passed: boolean; thresholdPct: number }
  | { error: string };

export async function submitExamAction(
  courseSlug: string,
  startedAtIso: string,
  answers: number[]
): Promise<ExamSubmitResult> {
  const user = await requireUser();

  const course = await prisma.course.findUnique({
    where: { slug: courseSlug },
    include: { exam: { include: { questions: { orderBy: { order: "asc" } } } } },
  });
  if (!course || !course.exam) return { error: "This course's examination could not be found." };

  const enrolled = await isEnrolledAndPaid(user.id, course.id);
  if (!enrolled) return { error: "You are not enrolled in this course." };

  const questions = course.exam.questions;
  const correctCount = questions.reduce(
    (count, q, i) => (answers[i] === q.correctIndex ? count + 1 : count),
    0
  );
  const scorePct = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const passed = scorePct >= course.examPassThresholdPct;

  const attemptCount = await prisma.examAttempt.count({
    where: { userId: user.id, examId: course.exam.id },
  });

  await prisma.examAttempt.create({
    data: {
      userId: user.id,
      examId: course.exam.id,
      attemptNumber: attemptCount + 1,
      answers,
      scorePct,
      passed,
      startedAt: new Date(startedAtIso),
    },
  });

  if (passed) {
    await maybeIssueCertificate(user.id, course.id);
  }

  revalidatePath(`/dashboard/courses/${courseSlug}/exam`);
  revalidatePath(`/dashboard/courses/${courseSlug}/certificate`);
  revalidatePath("/dashboard");

  return { scorePct, correctCount, total: questions.length, passed, thresholdPct: course.examPassThresholdPct };
}
