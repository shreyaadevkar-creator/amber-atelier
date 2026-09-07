import Link from "next/link";
import { AmberSymbol } from "@/components/brand/AmberSymbol";
import { LinkButton } from "@/components/ui/Button";

const ETHOS = [
  {
    title: "Opulence with Soul",
    body: "Every touch, texture, and tone embodies sacred extravagance — the kind that humbles and inspires.",
    border: "border-terra/30",
    fill: "bg-terra/10",
    heading: "text-terra",
  },
  {
    title: "India, the Muse",
    body: "Our roots are our rebellion. Every detail whispers of Indian artistry, re-imagined for the world.",
    border: "border-turmeric/40",
    fill: "bg-turmeric/10",
    heading: "text-turmeric",
  },
  {
    title: "Earth, the Co-Creator",
    body: "Sustainability is not a checkbox; it is our collaborator. Every decision honours the planet's rhythm.",
    border: "border-vetiver/40",
    fill: "bg-vetiver/10",
    heading: "text-vetiver",
  },
  {
    title: "Legacy over Noise",
    body: "We are not in the business of trends. We are in the business of timeless desire.",
    border: "border-rainforest/30",
    fill: "bg-rainforest/10",
    heading: "text-rainforest",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="flex flex-col items-center gap-8 px-6 py-28 text-center">
        <AmberSymbol size={64} />
        <div className="eyebrow">Amber Global Private Limited · Est. 2026 · India</div>
        <h1 className="max-w-3xl font-display text-6xl font-semibold leading-tight text-terra">
          Once resin. <span className="gold-word">Now</span> gold. Forever light.
        </h1>
        <p className="max-w-xl font-display text-lg italic text-umber">
          The Amber Atelier — where India&rsquo;s artistry is taught as the standard the world has
          been waiting to meet.
        </p>
        <LinkButton href="/courses">Explore the Courses</LinkButton>
      </section>

      <section className="border-t border-terra/15 bg-terra/10 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6">Vision</div>
          <p className="font-display text-3xl italic leading-relaxed text-terra">
            To redefine global luxury from the soul of India — where beauty, consciousness, and
            craftsmanship converge into an experience so rare, it becomes a destiny.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="eyebrow mb-10 text-center">Brand Ethos</div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {ETHOS.map((item) => (
              <div key={item.title} className={`border ${item.border} ${item.fill} p-6`}>
                <h3 className={`mb-2 font-display text-2xl font-semibold ${item.heading}`}>{item.title}</h3>
                <p className="text-base leading-relaxed text-ink">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-terra/15 px-6 py-24 text-center">
        <p className="mx-auto max-w-xl font-display text-2xl italic text-umber">
          India did not need to be discovered. She needed to be remembered.
        </p>
        <div className="mt-8">
          <Link
            href="/courses"
            className="text-[13px] uppercase tracking-[0.2em] text-terra border-b border-terra/40 pb-1 hover:text-vetiver hover:border-vetiver"
          >
            Begin with the Atelier&rsquo;s eight courses
          </Link>
        </div>
      </section>
    </div>
  );
}
