import Link from "next/link";
import { formatInr } from "@/lib/format";
import { getCourseSwatch } from "@/lib/courseSwatch";

type CourseCardProps = {
  slug: string;
  order: number;
  title: string;
  tagline: string;
  priceInPaise: number;
  moduleCount: number;
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function CourseCard({ slug, order, title, tagline, priceInPaise, moduleCount }: CourseCardProps) {
  const swatch = getCourseSwatch(order);
  return (
    <Link
      href={`/courses/${slug}`}
      className={`group flex flex-col ${swatch.bg} p-7 transition-transform duration-150 hover:-translate-y-1 hover:shadow-xl`}
    >
      <span className={`mb-4 text-[12px] font-bold uppercase tracking-[0.35em] ${swatch.sub}`}>
        Course {ROMAN[order - 1] ?? order}
      </span>
      <h3 className={`mb-2 font-display text-3xl font-bold ${swatch.text}`}>{title}</h3>
      <p className={`mb-6 flex-1 text-base font-medium leading-relaxed ${swatch.sub}`}>{tagline}</p>
      <div className={`flex items-center justify-between text-[13px] font-bold uppercase tracking-[0.15em] ${swatch.text}`}>
        <span>
          {moduleCount} module{moduleCount === 1 ? "" : "s"}
        </span>
        <span>{formatInr(priceInPaise)}</span>
      </div>
    </Link>
  );
}
