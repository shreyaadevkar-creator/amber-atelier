"use client";

import { useState, useTransition } from "react";
import { approvePortfolioAction, rejectPortfolioAction } from "@/app/admin/students/[userId]/actions";

export function PortfolioReviewForm({ portfolioId }: { portfolioId: string }) {
  const [note, setNote] = useState("");
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note for rejection (optional)"
        className="border border-turmeric/30 bg-transparent px-3 py-2 text-[15px] text-ink focus:border-vetiver focus:outline-none"
      />
      <div className="flex gap-3">
        <button
          type="button"
          disabled={pending}
          onClick={() => startTransition(() => approvePortfolioAction(portfolioId))}
          className="border border-vetiver/50 px-4 py-2 text-[13px] uppercase tracking-[0.15em] text-vetiver hover:bg-vetiver/10 disabled:opacity-50"
        >
          Approve
        </button>
        <button
          type="button"
          disabled={pending}
          onClick={() => startTransition(() => rejectPortfolioAction(portfolioId, note))}
          className="border border-redsoil/50 px-4 py-2 text-[13px] uppercase tracking-[0.15em] text-redsoil hover:bg-redsoil/10 disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
