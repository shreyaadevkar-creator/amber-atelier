import { AmberSymbol } from "./AmberSymbol";

type WordmarkProps = {
  variant?: "horizontal" | "stacked";
  tone?: "gold" | "ivory";
  symbolSize?: number;
};

export function Wordmark({ variant = "horizontal", tone = "gold", symbolSize = 28 }: WordmarkProps) {
  const textColor = tone === "gold" ? "text-deepink" : "text-champagne";

  if (variant === "stacked") {
    return (
      <div className="flex flex-col items-center gap-3">
        <AmberSymbol size={symbolSize + 16} tone={tone} />
        <div className={`font-display text-3xl font-semibold tracking-[0.3em] ${textColor}`}>AMBER</div>
        <div className="w-16 border-t border-gold/40" />
        <div className="font-display text-[12px] font-medium tracking-[0.35em] text-umber">INDIA</div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <AmberSymbol size={symbolSize} tone={tone} />
      <div className="flex flex-col">
        <span className={`font-display text-2xl font-semibold tracking-[0.28em] ${textColor}`}>AMBER</span>
        <span className="font-display text-[11px] font-medium tracking-[0.3em] text-umber">INDIA</span>
      </div>
    </div>
  );
}
