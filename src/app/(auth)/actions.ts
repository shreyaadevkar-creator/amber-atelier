"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/auth";
import { createSession, destroyCurrentSession } from "@/lib/session";

export type AuthActionState = { error?: string } | undefined;

const registerSchema = z.object({
  name: z.string().trim().min(1, "Please share your name."),
  email: z.string().trim().email("Please enter a valid email."),
  password: z.string().min(8, "Your password must be at least 8 characters."),
  next: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().trim().email("Please enter a valid email."),
  password: z.string().min(1, "Please enter your password."),
  next: z.string().optional(),
});

function safeNext(next: string | undefined, fallback: string): string {
  if (next && next.startsWith("/") && !next.startsWith("//")) return next;
  return fallback;
}

export async function registerAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    next: formData.get("next") ?? undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check your details." };
  }

  const { name, email, password, next } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "An account with this email already exists. Please log in instead." };
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: { name, email, passwordHash, role: "STUDENT" },
  });

  await createSession(user.id, user.role);
  redirect(safeNext(next, "/dashboard"));
}

export async function loginAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    next: formData.get("next") ?? undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check your details." };
  }

  const { email, password, next } = parsed.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return { error: "That email and password do not match our records." };
  }

  await createSession(user.id, user.role);
  redirect(safeNext(next, user.role === "ADMIN" ? "/admin" : "/dashboard"));
}

export async function logoutAction() {
  await destroyCurrentSession();
  redirect("/");
}
