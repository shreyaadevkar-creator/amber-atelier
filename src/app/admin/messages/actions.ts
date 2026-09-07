"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";

export async function markMessageReadAction(messageId: string) {
  await requireAdmin();
  await prisma.contactMessage.update({ where: { id: messageId }, data: { readAt: new Date() } });
  revalidatePath("/admin/messages");
}
