"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerAction, type AuthActionState } from "@/app/(auth)/actions";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function RegisterForm({ next }: { next?: string }) {
  const [state, formAction, pending] = useActionState<AuthActionState, FormData>(
    registerAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="eyebrow text-center">Begin your Atelier account</div>
      {next ? <input type="hidden" name="next" value={next} /> : null}
      <Input label="Name" name="name" type="text" autoComplete="name" required />
      <Input label="Email" name="email" type="email" autoComplete="email" required />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        hint="At least 8 characters."
        required
      />
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      <Button type="submit" disabled={pending} className="mt-2 w-full">
        {pending ? "Creating your account…" : "Create Account"}
      </Button>
      <p className="text-center text-[14px] text-umber">
        Already enrolled?{" "}
        <Link href={next ? `/login?next=${encodeURIComponent(next)}` : "/login"} className="text-terra underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
