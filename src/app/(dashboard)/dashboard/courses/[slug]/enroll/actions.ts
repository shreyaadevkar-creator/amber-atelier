"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

export type EnrollActionState = { error?: string } | undefined;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function enrollAction(
  _prevState: EnrollActionState,
  formData: FormData
): Promise<EnrollActionState> {
  const slug = String(formData.get("slug") ?? "");
  const user = await requireUser(`/dashboard/courses/${slug}/enroll`);

  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course) {
    return { error: "This course could not be found." };
  }

  const existing = await prisma.enrollment.findUnique({
    where: { userId_courseId: { userId: user.id, courseId: course.id } },
  });
  if (existing) {
    redirect(`/dashboard/courses/${slug}/learn`);
  }

  // Simulated payment processing delay — no real payment gateway is involved.
  await delay(900);

  await prisma.enrollment.create({
    data: {
      userId: user.id,
      courseId: course.id,
      status: "PAID",
      amountPaidPaise: course.priceInPaise,
    },
  });

  redirect(`/dashboard/courses/${slug}/learn`);
}
