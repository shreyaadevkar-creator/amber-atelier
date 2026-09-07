import { AmberSymbol } from "@/components/brand/AmberSymbol";

const LAWS = [
  {
    n: "I",
    title: "Amber shall never discount.",
    body: "No sale. No promotional pricing. No early-bird offers. The price of Amber is the price of Amber.",
  },
  {
    n: "II",
    title: "Amber shall never compromise on materials, formulation, or craft.",
    body: "If a product, course, or experience cannot be executed to the standard, it is postponed or abandoned — never diluted.",
  },
  {
    n: "III",
    title: "Amber shall always credit India explicitly.",
    body: "Every formulation, every technique, every ingredient sourced from Indian heritage is named, honoured, and attributed.",
  },
  {
    n: "IV",
    title: "Amber shall always invest in craft before all else.",
    body: "Before marketing spend. Before expansion. Before profit distribution. The quality of the curriculum is funded first.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
        <AmberSymbol size={56} />
        <div className="eyebrow">About Amber</div>
        <h1 className="max-w-2xl font-display text-5xl font-semibold leading-tight text-terra">
          An Indian luxury house, global from its first breath.
        </h1>
        <p className="max-w-2xl font-display text-lg italic text-umber">
          India is not Amber&rsquo;s origin story. India is Amber&rsquo;s soul, its muse, its living
          material, and its proudest declaration to the world.
        </p>
      </section>

      <section className="bg-terra px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 text-[12px] font-bold uppercase tracking-[0.35em] text-white/80">
            Founded by
          </div>
          <h2 className="mb-6 font-display text-4xl font-semibold">
            Shreya Devkar &amp; Shaila Devkar
          </h2>
          <div className="mx-auto mb-8 grid max-w-xl grid-cols-1 gap-6 text-left sm:grid-cols-2">
            <div>
              <div className="font-display text-lg font-semibold">Shreya Devkar</div>
              <p className="mt-1 text-base font-medium leading-relaxed text-white/90">
                An educator with a deep love for art, the environment, and people.
              </p>
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Shaila Devkar</div>
              <p className="mt-1 text-base font-medium leading-relaxed text-white/90">
                A veteran in beauty, skincare, and wellness, with over 20 years of experience in
                the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow mb-4 text-center">The Company</div>
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="font-display text-2xl font-semibold text-terra">Amber Global Private Limited</div>
              <div className="mt-1 text-sm font-medium text-umber">Registered name</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-terra">2026</div>
              <div className="mt-1 text-sm font-medium text-umber">Founded</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-terra">India</div>
              <div className="mt-1 text-sm font-medium text-umber">Headquartered, Indian-led</div>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base font-medium leading-relaxed text-ink">
            Amber is built to last one hundred years at minimum. Every decision is made with
            that horizon in mind — not the quarter, not the year, not the decade alone. It exists
            to place Indian artistry, botanical heritage, and craftsmanship at the apex of global
            luxury.
          </p>
        </div>
      </section>

      <section className="bg-rainforest px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center text-[12px] font-bold uppercase tracking-[0.35em] text-white/80">
            The Absolute Laws
          </div>
          <div className="flex flex-col gap-8">
            {LAWS.map((law) => (
              <div key={law.n} className="flex gap-5">
                <div className="font-display text-3xl font-semibold text-white/50">{law.n}</div>
                <div>
                  <div className="mb-1 font-display text-xl font-semibold">{law.title}</div>
                  <p className="text-base font-medium leading-relaxed text-white/85">{law.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <p className="mx-auto max-w-xl font-display text-2xl italic text-umber">
          India did not need to be discovered. She needed to be remembered.
        </p>
      </section>
    </div>
  );
}
