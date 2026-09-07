"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";

export type CourseFormState = { error?: string; success?: boolean } | undefined;

const schema = z.object({
  courseId: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().trim().min(1, "Title is required."),
  subtitle: z.string().trim().min(1, "Subtitle is required."),
  tagline: z.string().trim().min(1, "Tagline is required."),
  description: z.string().trim().min(1, "Description is required."),
  priceRupees: z.coerce.number().int().min(0, "Price must be zero or more."),
  isPublished: z.coerce.boolean(),
});

export async function updateCourseAction(
  _prevState: CourseFormState,
  formData: FormData
): Promise<CourseFormState> {
  await requireAdmin();

  const parsed = schema.safeParse({
    courseId: formData.get("courseId"),
    slug: formData.get("slug"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    tagline: formData.get("tagline"),
    description: formData.get("description"),
    priceRupees: formData.get("priceRupees"),
    isPublished: formData.get("isPublished") === "on",
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }

  const { courseId, slug, title, subtitle, tagline, description, priceRupees, isPublished } = parsed.data;

  await prisma.course.update({
    where: { id: courseId },
    data: {
      title,
      subtitle,
      tagline,
      description,
      priceInPaise: priceRupees * 100,
      isPublished,
    },
  });

  revalidatePath(`/admin/courses/${slug}`);
  revalidatePath("/admin/courses");
  revalidatePath("/courses");

  return { success: true };
}
