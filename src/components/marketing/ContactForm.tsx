"use client";

import { useActionState } from "react";
import { submitContactAction, type ContactFormState } from "@/app/(marketing)/contact/actions";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(
    submitContactAction,
    undefined
  );

  if (state?.success) {
    return (
      <div className="border border-vetiver/40 bg-vetiver/10 p-8 text-center">
        <p className="font-display text-2xl font-semibold text-vetiver">
          Your message has been received.
        </p>
        <p className="mt-2 text-base font-medium text-ink">
          Someone from the Atelier will write back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" type="text" required />
        <Input label="Email" name="email" type="email" required />
      </div>
      <Input label="Subject" name="subject" type="text" required />
      <Textarea label="Message" name="message" rows={6} required />
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      <Button type="submit" disabled={pending} className="self-start">
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
