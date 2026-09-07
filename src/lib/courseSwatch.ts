export type Swatch = {
  bg: string;
  text: string;
  sub: string;
  border: string;
};

// Bright, fully-saturated fills per course tile — turmeric, rust red, forest
// green, and the rest of the palette — with black or white type chosen for
// contrast rather than the usual brand text colors.
const SWATCHES: Swatch[] = [
  { bg: "bg-terra", text: "text-white", sub: "text-white/80", border: "border-terra" },
  { bg: "bg-turmeric", text: "text-black", sub: "text-black/70", border: "border-turmeric" },
  { bg: "bg-rainforest", text: "text-white", sub: "text-white/80", border: "border-rainforest" },
  { bg: "bg-redsoil", text: "text-white", sub: "text-white/80", border: "border-redsoil" },
  { bg: "bg-vetiver", text: "text-white", sub: "text-white/80", border: "border-vetiver" },
  { bg: "bg-gold", text: "text-black", sub: "text-black/70", border: "border-gold" },
  { bg: "bg-deepink", text: "text-white", sub: "text-white/80", border: "border-deepink" },
  { bg: "bg-sandal", text: "text-black", sub: "text-black/70", border: "border-sandal" },
];

export function getCourseSwatch(order: number): Swatch {
  return SWATCHES[(order - 1) % SWATCHES.length];
}
