"use client";

import { useTransition } from "react";
import { markMessageReadAction } from "@/app/admin/messages/actions";

export function MarkReadButton({ messageId }: { messageId: string }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => markMessageReadAction(messageId))}
      className="border border-vetiver/50 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-vetiver hover:bg-vetiver/10 disabled:opacity-50"
    >
      {pending ? "Marking…" : "Mark as Read"}
    </button>
  );
}
