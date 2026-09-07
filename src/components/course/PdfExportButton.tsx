"use client";

import { useState } from "react";
import { exportNodeToPdf } from "@/lib/pdf";

export function PdfExportButton({
  targetId,
  filename,
  backgroundColor,
  label = "Download PDF",
}: {
  targetId: string;
  filename: string;
  backgroundColor?: string;
  label?: string;
}) {
  const [busy, setBusy] = useState(false);

  async function handleClick() {
    const node = document.getElementById(targetId);
    if (!node) return;
    setBusy(true);
    try {
      await exportNodeToPdf(node, filename, backgroundColor);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      className="inline-flex items-center gap-2 border border-terra/40 px-4 py-2 text-[13px] uppercase tracking-[0.15em] text-terra hover:bg-vetiver/10 hover:border-vetiver disabled:opacity-50"
    >
      {busy ? "Preparing…" : label}
    </button>
  );
}
