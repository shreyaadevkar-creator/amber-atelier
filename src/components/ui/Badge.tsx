type Tone = "root" | "world" | "future" | "neutral";

const tones: Record<Tone, string> = {
  root: "bg-rainforest/10 text-rainforest border-rainforest/30",
  world: "bg-terra/10 text-terra border-terra/25",
  future: "bg-turmeric/10 text-turmeric border-turmeric/30",
  neutral: "bg-umber/10 text-umber border-umber/25",
};

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: Tone;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-block border px-2 py-0.5 text-[11px] uppercase tracking-[0.15em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
