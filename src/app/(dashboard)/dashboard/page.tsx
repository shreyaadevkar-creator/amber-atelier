import Link from "next/link";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { formatInr } from "@/lib/format";
import { getCourseSwatch } from "@/lib/courseSwatch";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default async function DashboardPage() {
  const user = await requireUser();

  const [courses, enrollments, moduleProgress, certificates] = await Promise.all([
    prisma.course.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
      include: { modules: { select: { id: true } } },
    }),
    prisma.enrollment.findMany({ where: { userId: user.id } }),
    prisma.moduleProgress.findMany({
      where: { userId: user.id, completedAt: { not: null } },
    }),
    prisma.certificate.findMany({ where: { userId: user.id } }),
  ]);

  const enrolledCourseIds = new Set(enrollments.map((e) => e.courseId));
  const completedModuleIds = new Set(moduleProgress.map((m) => m.moduleId));
  const certificateCourseIds = new Set(certificates.map((c) => c.courseId));

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <div className="eyebrow mb-3">My Atelier</div>
          <h1 className="font-display text-4xl font-semibold text-terra">
            Welcome, {user.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const isEnrolled = enrolledCourseIds.has(course.id);
            const totalModules = course.modules.length;
            const completedCount = course.modules.filter((m) => completedModuleIds.has(m.id)).length;
            const pct = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;
            const hasCertificate = certificateCourseIds.has(course.id);
            const swatch = getCourseSwatch(course.order);

            return (
              <div key={course.id} className={`flex flex-col ${swatch.bg} p-6`}>
                <span className={`mb-3 text-[12px] font-bold uppercase tracking-[0.35em] ${swatch.sub}`}>
                  Course {ROMAN[course.order - 1] ?? course.order}
                </span>
                <h3 className={`mb-2 font-display text-2xl font-bold ${swatch.text}`}>{course.title}</h3>

                {isEnrolled ? (
                  <>
                    <div className={`mt-2 mb-1 h-1.5 w-full ${swatch.text === "text-white" ? "bg-white/25" : "bg-black/15"}`}>
                      <div
                        className={swatch.text === "text-white" ? "h-1.5 bg-white" : "h-1.5 bg-black"}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className={`mb-5 text-[13px] font-bold uppercase tracking-[0.1em] ${swatch.sub}`}>
                      {completedCount} / {totalModules} modules
                      {hasCertificate ? " · Certified" : ""}
                    </div>
                    <div className={`mt-auto flex flex-col gap-2 text-[13px] font-bold uppercase tracking-[0.15em] ${swatch.text}`}>
                      <Link href={`/dashboard/courses/${course.slug}/learn`} className="hover:underline">
                        Continue Learning →
                      </Link>
                      <Link href={`/dashboard/courses/${course.slug}/exam`} className={`${swatch.sub} hover:underline`}>
                        Examination
                      </Link>
                      <Link href={`/dashboard/courses/${course.slug}/certificate`} className={`${swatch.sub} hover:underline`}>
                        Certificate
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <p className={`mb-5 flex-1 text-base font-medium ${swatch.sub}`}>{course.tagline}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className={`text-[15px] font-bold ${swatch.text}`}>{formatInr(course.priceInPaise)}</span>
                      <Link
                        href={`/dashboard/courses/${course.slug}/enroll`}
                        className={`text-[13px] font-bold uppercase tracking-[0.15em] ${swatch.text} border-b-2 pb-0.5 hover:opacity-80`}
                      >
                        Enroll
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
