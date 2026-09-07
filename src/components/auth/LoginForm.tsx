"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginAction, type AuthActionState } from "@/app/(auth)/actions";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function LoginForm({ next }: { next?: string }) {
  const [state, formAction, pending] = useActionState<AuthActionState, FormData>(
    loginAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="eyebrow text-center">Log in to the Atelier</div>
      {next ? <input type="hidden" name="next" value={next} /> : null}
      <Input label="Email" name="email" type="email" autoComplete="email" required />
      <Input label="Password" name="password" type="password" autoComplete="current-password" required />
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      <Button type="submit" disabled={pending} className="mt-2 w-full">
        {pending ? "Signing in…" : "Log In"}
      </Button>
      <p className="text-center text-[14px] text-umber">
        New here?{" "}
        <Link href={next ? `/register?next=${encodeURIComponent(next)}` : "/register"} className="text-terra underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}
