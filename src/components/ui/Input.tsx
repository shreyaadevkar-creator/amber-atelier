import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldProps = {
  label: string;
  name: string;
  hint?: string;
};

export function Input({
  label,
  name,
  hint,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] uppercase tracking-[0.25em] text-umber">{label}</span>
      <input
        id={name}
        name={name}
        className="border-0 border-b border-turmeric/30 bg-transparent px-0 py-2 text-[16px] text-ink placeholder:text-umber/50 focus:border-vetiver focus:outline-none"
        {...props}
      />
      {hint ? <span className="text-[13px] text-umber/80">{hint}</span> : null}
    </label>
  );
}

export function Textarea({
  label,
  name,
  hint,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] uppercase tracking-[0.25em] text-umber">{label}</span>
      <textarea
        id={name}
        name={name}
        className="border border-turmeric/30 bg-turmeric/10 px-3 py-2 text-[16px] text-ink placeholder:text-umber/50 focus:border-vetiver focus:outline-none"
        {...props}
      />
      {hint ? <span className="text-[13px] text-umber/80">{hint}</span> : null}
    </label>
  );
}
