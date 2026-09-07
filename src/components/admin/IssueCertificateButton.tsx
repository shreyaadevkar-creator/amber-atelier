"use client";

import { useTransition } from "react";
import { issueCertificateNowAction } from "@/app/admin/students/[userId]/actions";

export function IssueCertificateButton({ userId, courseId }: { userId: string; courseId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => issueCertificateNowAction(userId, courseId))}
      className="border border-terra/40 px-4 py-2 text-[13px] uppercase tracking-[0.15em] text-terra hover:bg-vetiver/10 hover:border-vetiver disabled:opacity-50"
    >
      {pending ? "Checking…" : "Check & Issue Certificate"}
    </button>
  );
}
