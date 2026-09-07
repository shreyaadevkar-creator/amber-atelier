import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatInr } from "@/lib/format";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default async function AdminCoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: { order: "asc" },
    include: { _count: { select: { modules: true, enrollments: true } } },
  });

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="eyebrow mb-3">Admin</div>
        <h1 className="mb-10 font-display text-4xl font-semibold text-terra">Courses</h1>

        <div className="border border-terra/20 bg-terra/10">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="border-b border-terra/20 text-[12px] uppercase tracking-[0.15em] text-umber">
                <th className="p-4">Course</th>
                <th className="p-4">Modules</th>
                <th className="p-4">Enrollments</th>
                <th className="p-4">Price</th>
                <th className="p-4">Published</th>
                <th className="p-4" />
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-terra/10">
                  <td className="p-4 text-ink">
                    Course {ROMAN[course.order - 1] ?? course.order} · {course.title}
                  </td>
                  <td className="p-4 text-ink">{course._count.modules}</td>
                  <td className="p-4 text-ink">{course._count.enrollments}</td>
                  <td className="p-4 text-ink">{formatInr(course.priceInPaise)}</td>
                  <td className="p-4 text-ink">{course.isPublished ? "Yes" : "No"}</td>
                  <td className="p-4">
                    <Link
                      href={`/admin/courses/${course.slug}`}
                      className="text-[13px] uppercase tracking-[0.1em] text-terra underline"
                    >
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
