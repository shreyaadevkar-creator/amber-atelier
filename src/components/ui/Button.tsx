import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "border border-terra/50 bg-terra/10 text-terra px-6 py-3 hover:bg-terra hover:text-champagne hover:border-terra",
  ghost:
    "text-terra border-b border-terra/40 pb-0.5 hover:border-vetiver hover:text-vetiver",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className ?? ""}`} {...props} />
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
