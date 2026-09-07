"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";

export type ExamMetaFormState = { error?: string; success?: boolean } | undefined;
export type ExamQuestionFormState = { error?: string; success?: boolean } | undefined;

const metaSchema = z.object({
  courseId: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().trim().min(1),
  thresholdPct: z.coerce.number().int().min(0).max(100),
});

export async function updateExamMetaAction(
  _prevState: ExamMetaFormState,
  formData: FormData
): Promise<ExamMetaFormState> {
  await requireAdmin();

  const parsed = metaSchema.safeParse({
    courseId: formData.get("courseId"),
    slug: formData.get("slug"),
    title: formData.get("title"),
    thresholdPct: formData.get("thresholdPct"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }
  const { courseId, slug, title, thresholdPct } = parsed.data;

  await prisma.course.update({ where: { id: courseId }, data: { examPassThresholdPct: thresholdPct } });
  await prisma.exam.update({ where: { courseId }, data: { title } });

  revalidatePath(`/admin/courses/${slug}/exam`);
  return { success: true };
}

const questionSchema = z.object({
  examId: z.string().min(1),
  slug: z.string().min(1),
  questionId: z.string().optional(),
  question: z.string().trim().min(1, "Question text is required."),
  optionsText: z.string(),
  correctIndex: z.coerce.number().int().min(0).max(3),
});

export async function upsertExamQuestionAction(
  _prevState: ExamQuestionFormState,
  formData: FormData
): Promise<ExamQuestionFormState> {
  await requireAdmin();

  const parsed = questionSchema.safeParse({
    examId: formData.get("examId"),
    slug: formData.get("slug"),
    questionId: formData.get("questionId") ?? undefined,
    question: formData.get("question"),
    optionsText: formData.get("optionsText"),
    correctIndex: formData.get("correctIndex"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }

  const { examId, slug, questionId, question, optionsText, correctIndex } = parsed.data;
  const options = optionsText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (options.length < 2) {
    return { error: "Please provide at least two answer options." };
  }
  if (correctIndex >= options.length) {
    return { error: "The correct answer number is outside the list of options." };
  }

  if (questionId) {
    await prisma.examQuestion.update({ where: { id: questionId }, data: { question, options, correctIndex } });
  } else {
    const count = await prisma.examQuestion.count({ where: { examId } });
    await prisma.examQuestion.create({ data: { examId, order: count + 1, question, options, correctIndex } });
  }

  revalidatePath(`/admin/courses/${slug}/exam`);
  return { success: true };
}

export async function deleteExamQuestionAction(questionId: string, slug: string) {
  await requireAdmin();
  await prisma.examQuestion.delete({ where: { id: questionId } });
  revalidatePath(`/admin/courses/${slug}/exam`);
}
