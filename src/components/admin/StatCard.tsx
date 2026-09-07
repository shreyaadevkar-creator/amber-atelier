type Tone = "terra" | "turmeric" | "vetiver" | "rainforest";

const tones: Record<Tone, { border: string; fill: string; text: string }> = {
  terra: { border: "border-terra/30", fill: "bg-terra/10", text: "text-terra" },
  turmeric: { border: "border-turmeric/40", fill: "bg-turmeric/10", text: "text-turmeric" },
  vetiver: { border: "border-vetiver/40", fill: "bg-vetiver/10", text: "text-vetiver" },
  rainforest: { border: "border-rainforest/30", fill: "bg-rainforest/10", text: "text-rainforest" },
};

export function StatCard({
  label,
  value,
  tone = "terra",
}: {
  label: string;
  value: string | number;
  tone?: Tone;
}) {
  const t = tones[tone];
  return (
    <div className={`border ${t.border} ${t.fill} p-6`}>
      <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-umber">{label}</div>
      <div className={`font-display text-4xl font-semibold ${t.text}`}>{value}</div>
    </div>
  );
}
