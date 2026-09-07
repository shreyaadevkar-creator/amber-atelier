type AmberSymbolProps = {
  size?: number;
  tone?: "gold" | "ivory";
  className?: string;
};

/**
 * The confirmed Amber hexagonal yantra mark. Fixed geometry per the brand bible —
 * never rotate, stretch, or recolor outside gold-on-light / gold-or-ivory-on-dark.
 */
export function AmberSymbol({ size = 48, tone = "gold", className }: AmberSymbolProps) {
  const stroke = tone === "gold" ? "#C8973A" : "#F5E6CC";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Amber"
    >
      <polygon
        points="65,9 113,36 113,90 65,117 17,90 17,36"
        stroke={stroke}
        strokeWidth="0.75"
        fill="none"
      />
      <polygon
        points="65,23 101,43 101,83 65,103 29,83 29,43"
        stroke={stroke}
        strokeWidth="0.55"
        fill="none"
        opacity=".55"
      />
      <line x1="65" y1="23" x2="65" y2="65" stroke={stroke} strokeWidth="0.6" opacity=".7" />
      <line x1="101" y1="43" x2="65" y2="65" stroke={stroke} strokeWidth="0.6" opacity=".7" />
      <line x1="101" y1="83" x2="65" y2="65" stroke={stroke} strokeWidth="0.6" opacity=".7" />
      <line x1="65" y1="103" x2="65" y2="65" stroke={stroke} strokeWidth="0.6" opacity=".7" />
      <line x1="29" y1="83" x2="65" y2="65" stroke={stroke} strokeWidth="0.6" opacity=".7" />
      <line x1="29" y1="43" x2="65" y2="65" stroke={stroke} strokeWidth="0.6" opacity=".7" />
      <circle cx="65" cy="65" r="3.5" fill={stroke} />
    </svg>
  );
}
