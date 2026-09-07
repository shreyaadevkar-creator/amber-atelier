import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CourseEditor } from "@/components/admin/CourseEditor";

export default async function AdminCourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: { slug },
    include: { modules: { orderBy: { order: "asc" } }, exam: true },
  });
  if (!course) notFound();

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/admin/courses" className="mb-6 inline-block text-[13px] uppercase tracking-[0.15em] text-umber hover:text-vetiver">
          ← All Courses
        </Link>
        <div className="eyebrow mb-3">Admin · Course</div>
        <h1 className="mb-10 font-display text-4xl font-semibold text-terra">{course.title}</h1>

        <div className="mb-10 border border-terra/20 bg-terra/10 p-6">
          <CourseEditor
            courseId={course.id}
            slug={course.slug}
            title={course.title}
            subtitle={course.subtitle}
            tagline={course.tagline}
            description={course.description}
            priceRupees={Math.round(course.priceInPaise / 100)}
            isPublished={course.isPublished}
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="eyebrow">Modules</div>
          <Link
            href={`/admin/courses/${slug}/exam`}
            className="text-[13px] uppercase tracking-[0.15em] text-terra underline"
          >
            Manage Examination
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {course.modules.map((mod) => (
            <Link
              key={mod.id}
              href={`/admin/courses/${slug}/modules/${mod.id}`}
              className="flex items-center justify-between border border-terra/20 bg-terra/10 p-4 hover:border-vetiver"
            >
              <span className="text-[15px] text-ink">
                {String(mod.order).padStart(2, "0")} · {mod.title}
              </span>
              <span className="text-[13px] uppercase tracking-[0.1em] text-terra">Edit</span>
            </Link>
          ))}
          {course.modules.length === 0 ? (
            <p className="text-center text-umber">No modules yet.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
