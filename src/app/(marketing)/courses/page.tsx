export const dynamic = 'force-dynamic';

import { prisma } from "@/lib/prisma";
import { CourseCard } from "@/components/marketing/CourseCard";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    where: { isPublished: true },
    orderBy: { order: "asc" },
    include: { _count: { select: { modules: true } } },
  });

  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="eyebrow mb-4">The Atelier</div>
          <h1 className="font-display text-5xl font-semibold text-terra">
            Eight courses. One <span className="gold-word">standard</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-umber">
            Each course carries the Amber name into a different discipline — skin, colour, hair,
            botany, ceremony, business, touch, and the ethics that hold it all together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              slug={course.slug}
              order={course.order}
              title={course.title}
              tagline={course.tagline}
              priceInPaise={course.priceInPaise}
              moduleCount={course._count.modules}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
