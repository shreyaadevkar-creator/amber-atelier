import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid } from "@/lib/gating";

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await requireUser(`/dashboard/courses/${slug}/learn`);

  const course = await prisma.course.findUnique({
    where: { slug },
    include: { modules: { orderBy: { order: "asc" } } },
  });
  if (!course) notFound();

  const enrolled = await isEnrolledAndPaid(user.id, course.id);
  if (!enrolled) redirect(`/dashboard/courses/${slug}/enroll`);

  const progress = await prisma.moduleProgress.findMany({
    where: { userId: user.id, moduleId: { in: course.modules.map((m) => m.id) } },
  });
  const completedIds = new Set(progress.filter((p) => p.completedAt).map((p) => p.moduleId));

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <div className="eyebrow mb-3">Amber Atelier</div>
          <h1 className="font-display text-5xl font-semibold text-terra">{course.title}</h1>
          <p className="mt-2 font-display text-lg italic text-umber">{course.subtitle}</p>
          <p className="mt-5 text-[17px] leading-relaxed text-ink">{course.description}</p>
        </div>

        <div className="mb-8 flex gap-6 border-y border-terra/20 py-4 text-[13px] uppercase tracking-[0.15em]">
          <Link href={`/dashboard/courses/${slug}/exam`} className="text-terra hover:text-vetiver">
            Examination
          </Link>
          <Link href={`/dashboard/courses/${slug}/portfolio`} className="text-terra hover:text-vetiver">
            Portfolio
          </Link>
          <Link href={`/dashboard/courses/${slug}/certificate`} className="text-terra hover:text-vetiver">
            Certificate
          </Link>
        </div>

        <div className="eyebrow mb-4">Modules</div>
        <ol className="flex flex-col gap-3">
          {course.modules.map((mod) => {
            const done = completedIds.has(mod.id);
            return (
              <li key={mod.id}>
                <Link
                  href={`/dashboard/courses/${slug}/modules/${mod.order}`}
                  className="flex items-center gap-4 border border-terra/20 bg-terra/10 p-4 hover:border-vetiver"
                >
                  <span className="font-display text-base text-turmeric">
                    {String(mod.order).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="font-display text-lg text-terra">{mod.title}</div>
                    <div className="text-[15px] text-umber">{mod.subtitle}</div>
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.15em] text-vetiver">
                    {done ? "Complete" : ""}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
