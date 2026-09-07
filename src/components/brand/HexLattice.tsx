type HexLatticeProps = {
  opacity?: number;
  className?: string;
};

/**
 * The Resin Lattice — the master pattern, always low-opacity (8-15%), texture not feature.
 */
export function HexLattice({ opacity = 0.1, className }: HexLatticeProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="amber-hex-lattice" width="44" height="76" patternUnits="userSpaceOnUse">
          <path
            d="M22 0 L44 12.7 L44 38 L22 50.7 L0 38 L0 12.7 Z"
            fill="none"
            stroke="#C8973A"
            strokeWidth="0.6"
          />
          <path
            d="M22 25.3 L44 38 L44 63.3 L22 76 L0 63.3 L0 38 Z"
            fill="none"
            stroke="#C8973A"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#amber-hex-lattice)" />
    </svg>
  );
}
