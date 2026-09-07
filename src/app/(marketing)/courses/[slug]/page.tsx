import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatInr } from "@/lib/format";
import { LinkButton } from "@/components/ui/Button";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: { slug, isPublished: true },
    include: { modules: { orderBy: { order: "asc" } } },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <div className="eyebrow mb-4">
            Amber Atelier · Course {ROMAN[course.order - 1] ?? course.order}
          </div>
          <h1 className="font-display text-6xl font-semibold text-terra">{course.title}</h1>
          <p className="mx-auto mt-4 max-w-xl font-display text-lg italic text-umber">
            {course.tagline}
          </p>
        </div>

        <p className="mb-12 text-[17px] leading-relaxed text-ink">{course.description}</p>

        <div className="mb-12 flex items-center justify-between border-y border-terra/20 py-5">
          <div>
            <div className="text-[12px] uppercase tracking-[0.25em] text-umber">Investment</div>
            <div className="font-display text-3xl text-terra">{formatInr(course.priceInPaise)}</div>
          </div>
          <LinkButton href={`/register?next=${encodeURIComponent(`/dashboard/courses/${course.slug}/enroll`)}`}>
            Begin Enrollment
          </LinkButton>
        </div>

        <div className="mb-6 eyebrow">The Modules</div>
        <ol className="flex flex-col gap-4">
          {course.modules.map((mod) => (
            <li key={mod.id} className="flex gap-4 border-b border-terra/10 pb-4">
              <span className="font-display text-base text-turmeric">
                {String(mod.order).padStart(2, "0")}
              </span>
              <div>
                <div className="font-display text-lg text-terra">{mod.title}</div>
                <div className="text-base text-umber">{mod.subtitle}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
