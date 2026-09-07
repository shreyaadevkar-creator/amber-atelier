"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

export type ContactFormState = { error?: string; success?: boolean } | undefined;

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name."),
  email: z.string().trim().email("Please enter a valid email."),
  subject: z.string().trim().min(1, "Please add a subject."),
  message: z.string().trim().min(10, "Please share a little more detail."),
});

export async function submitContactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check your details." };
  }

  await prisma.contactMessage.create({ data: parsed.data });

  return { success: true };
}
