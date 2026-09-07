"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { maybeIssueCertificate } from "@/lib/gating";

export async function approvePortfolioAction(portfolioId: string) {
  const admin = await requireAdmin();
  const portfolio = await prisma.portfolioSubmission.update({
    where: { id: portfolioId },
    data: { status: "APPROVED", reviewedAt: new Date(), reviewedById: admin.id, adminNote: null },
  });
  await maybeIssueCertificate(portfolio.userId, portfolio.courseId);
  revalidatePath(`/admin/students/${portfolio.userId}`);
}

export async function rejectPortfolioAction(portfolioId: string, note: string) {
  const admin = await requireAdmin();
  const portfolio = await prisma.portfolioSubmission.update({
    where: { id: portfolioId },
    data: { status: "REJECTED", reviewedAt: new Date(), reviewedById: admin.id, adminNote: note || null },
  });
  revalidatePath(`/admin/students/${portfolio.userId}`);
}

export async function issueCertificateNowAction(userId: string, courseId: string) {
  await requireAdmin();
  await maybeIssueCertificate(userId, courseId);
  revalidatePath(`/admin/students/${userId}`);
}
