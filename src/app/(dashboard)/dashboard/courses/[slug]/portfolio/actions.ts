"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid, maybeIssueCertificate } from "@/lib/gating";

export type PortfolioActionState = { error?: string; success?: boolean } | undefined;

const schema = z.object({
  slug: z.string().min(1),
  description: z.string().trim().min(20, "Please describe your portfolio in a little more detail."),
  linkUrl: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v ? v : undefined)),
});

export async function submitPortfolioAction(
  _prevState: PortfolioActionState,
  formData: FormData
): Promise<PortfolioActionState> {
  const parsed = schema.safeParse({
    slug: formData.get("slug"),
    description: formData.get("description"),
    linkUrl: formData.get("linkUrl") ?? undefined,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check your submission." };
  }
  const { slug, description, linkUrl } = parsed.data;

  const user = await requireUser(`/dashboard/courses/${slug}/portfolio`);

  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course) return { error: "This course could not be found." };

  const enrolled = await isEnrolledAndPaid(user.id, course.id);
  if (!enrolled) return { error: "You are not enrolled in this course." };

  await prisma.portfolioSubmission.upsert({
    where: { userId_courseId: { userId: user.id, courseId: course.id } },
    update: {
      description,
      linkUrl,
      status: "SUBMITTED",
      submittedAt: new Date(),
      reviewedAt: null,
      reviewedById: null,
      adminNote: null,
    },
    create: {
      userId: user.id,
      courseId: course.id,
      description,
      linkUrl,
    },
  });

  await maybeIssueCertificate(user.id, course.id);

  revalidatePath(`/dashboard/courses/${slug}/portfolio`);
  revalidatePath(`/dashboard/courses/${slug}/certificate`);
  revalidatePath("/dashboard");

  return { success: true };
}
