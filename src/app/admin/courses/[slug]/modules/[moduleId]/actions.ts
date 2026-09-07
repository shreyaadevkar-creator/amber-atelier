"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";

export type ModuleFormState = { error?: string; success?: boolean } | undefined;
export type QuizQuestionFormState = { error?: string; success?: boolean } | undefined;

const moduleSchema = z.object({
  moduleId: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().trim().min(1),
  subtitle: z.string().trim().min(1),
  objectives: z.string(),
  lessonHtml: z.string(),
  activityTitle: z.string().optional(),
  activityHtml: z.string().optional(),
});

export async function updateModuleAction(
  _prevState: ModuleFormState,
  formData: FormData
): Promise<ModuleFormState> {
  await requireAdmin();

  const parsed = moduleSchema.safeParse({
    moduleId: formData.get("moduleId"),
    slug: formData.get("slug"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    objectives: formData.get("objectives"),
    lessonHtml: formData.get("lessonHtml"),
    activityTitle: formData.get("activityTitle") ?? undefined,
    activityHtml: formData.get("activityHtml") ?? undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }

  const { moduleId, slug, title, subtitle, objectives, lessonHtml, activityTitle, activityHtml } = parsed.data;

  const objectivesList = objectives
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  await prisma.module.update({
    where: { id: moduleId },
    data: {
      title,
      subtitle,
      objectives: objectivesList,
      lessonHtml,
      activityTitle: activityTitle || null,
      activityHtml: activityHtml || null,
    },
  });

  revalidatePath(`/admin/courses/${slug}/modules/${moduleId}`);
  revalidatePath(`/dashboard/courses/${slug}/modules`);

  return { success: true };
}

const quizQuestionSchema = z.object({
  moduleId: z.string().min(1),
  slug: z.string().min(1),
  questionId: z.string().optional(),
  question: z.string().trim().min(1, "Question text is required."),
  optionsText: z.string(),
  correctIndex: z.coerce.number().int().min(0).max(3),
});

export async function upsertQuizQuestionAction(
  _prevState: QuizQuestionFormState,
  formData: FormData
): Promise<QuizQuestionFormState> {
  await requireAdmin();

  const parsed = quizQuestionSchema.safeParse({
    moduleId: formData.get("moduleId"),
    slug: formData.get("slug"),
    questionId: formData.get("questionId") ?? undefined,
    question: formData.get("question"),
    optionsText: formData.get("optionsText"),
    correctIndex: formData.get("correctIndex"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }

  const { moduleId, slug, questionId, question, optionsText, correctIndex } = parsed.data;
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
    await prisma.moduleQuizQuestion.update({
      where: { id: questionId },
      data: { question, options, correctIndex },
    });
  } else {
    const count = await prisma.moduleQuizQuestion.count({ where: { moduleId } });
    await prisma.moduleQuizQuestion.create({
      data: { moduleId, order: count + 1, question, options, correctIndex },
    });
  }

  revalidatePath(`/admin/courses/${slug}/modules/${moduleId}`);
  return { success: true };
}

export async function deleteQuizQuestionAction(questionId: string, slug: string, moduleId: string) {
  await requireAdmin();
  await prisma.moduleQuizQuestion.delete({ where: { id: questionId } });
  revalidatePath(`/admin/courses/${slug}/modules/${moduleId}`);
}
