"use client";

import { useActionState } from "react";
import { submitPortfolioAction, type PortfolioActionState } from "@/app/(dashboard)/dashboard/courses/[slug]/portfolio/actions";
import { Textarea, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function PortfolioForm({
  slug,
  existingDescription,
  existingLink,
}: {
  slug: string;
  existingDescription?: string;
  existingLink?: string | null;
}) {
  const [state, formAction, pending] = useActionState<PortfolioActionState, FormData>(
    submitPortfolioAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="slug" value={slug} />
      <Textarea
        label="Describe your portfolio"
        name="description"
        rows={6}
        defaultValue={existingDescription}
        hint="What did you make, treat, or practice — and what did it teach you?"
        required
      />
      <Input
        label="Link (optional)"
        name="linkUrl"
        type="url"
        defaultValue={existingLink ?? ""}
        placeholder="https://…"
      />
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      {state?.success ? (
        <p className="text-[14px] text-vetiver">Your portfolio has been submitted.</p>
      ) : null}
      <Button type="submit" disabled={pending} className="mt-2 w-full">
        {pending ? "Submitting…" : "Submit Portfolio"}
      </Button>
    </form>
  );
}
