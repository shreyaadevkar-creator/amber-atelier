"use client";

import { useActionState } from "react";
import { enrollAction, type EnrollActionState } from "@/app/(dashboard)/dashboard/courses/[slug]/enroll/actions";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { formatInr } from "@/lib/format";

export function CheckoutForm({ slug, title, priceInPaise }: { slug: string; title: string; priceInPaise: number }) {
  const [state, formAction, pending] = useActionState<EnrollActionState, FormData>(
    enrollAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="slug" value={slug} />
      <div className="flex items-center justify-between border-b border-terra/20 pb-4">
        <span className="text-base text-ink">{title}</span>
        <span className="font-display text-lg text-terra">{formatInr(priceInPaise)}</span>
      </div>

      <Input label="Name on Card" name="cardName" type="text" autoComplete="cc-name" required />
      <Input
        label="Card Number"
        name="cardNumber"
        type="text"
        inputMode="numeric"
        autoComplete="cc-number"
        placeholder="4242 4242 4242 4242"
        required
      />
      <div className="flex gap-4">
        <div className="flex-1">
          <Input label="Expiry" name="cardExpiry" type="text" placeholder="MM/YY" autoComplete="cc-exp" required />
        </div>
        <div className="flex-1">
          <Input label="CVV" name="cardCvv" type="text" inputMode="numeric" autoComplete="cc-csc" required />
        </div>
      </div>

      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}

      <Button type="submit" disabled={pending} className="mt-2 w-full">
        {pending ? "Processing…" : `Pay ${formatInr(priceInPaise)}`}
      </Button>

      <p className="text-center text-[12px] text-umber/70">
        This is a simulated payment for demonstration — no real transaction occurs.
      </p>
    </form>
  );
}
