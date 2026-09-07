import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatInr } from "@/lib/format";
import { PortfolioReviewForm } from "@/components/admin/PortfolioReviewForm";
import { IssueCertificateButton } from "@/components/admin/IssueCertificateButton";

export default async function AdminStudentDetailPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const student = await prisma.user.findUnique({ where: { id: userId } });
  if (!student) notFound();

  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: {
      course: {
        include: {
          modules: { select: { id: true } },
          exam: true,
        },
      },
    },
    orderBy: { paidAt: "asc" },
  });

  const rows = await Promise.all(
    enrollments.map(async (enrollment) => {
      const { course } = enrollment;
      const moduleIds = course.modules.map((m) => m.id);

      const [completedCount, latestAttempt, portfolio, certificate] = await Promise.all([
        prisma.moduleProgress.count({
          where: { userId, moduleId: { in: moduleIds }, completedAt: { not: null } },
        }),
        course.exam
          ? prisma.examAttempt.findFirst({
              where: { userId, examId: course.exam.id },
              orderBy: { submittedAt: "desc" },
            })
          : null,
        prisma.portfolioSubmission.findUnique({
          where: { userId_courseId: { userId, courseId: course.id } },
        }),
        prisma.certificate.findUnique({ where: { userId_courseId: { userId, courseId: course.id } } }),
      ]);

      return { enrollment, course, completedCount, totalModules: moduleIds.length, latestAttempt, portfolio, certificate };
    })
  );

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="eyebrow mb-3">Admin · Student</div>
        <h1 className="mb-1 font-display text-4xl font-semibold text-terra">{student.name}</h1>
        <p className="mb-10 text-base text-umber">{student.email}</p>

        <div className="flex flex-col gap-8">
          {rows.map(({ enrollment, course, completedCount, totalModules, latestAttempt, portfolio, certificate }) => (
            <div key={enrollment.id} className="border border-terra/20 bg-terra/10 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-2xl text-terra">{course.title}</h2>
                <span className="text-[13px] text-umber">
                  Paid {formatInr(enrollment.amountPaidPaise)} · {enrollment.paidAt.toDateString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-[15px] sm:grid-cols-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-umber">Modules</div>
                  <div className="text-ink">{completedCount} / {totalModules}</div>
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-umber">Exam</div>
                  <div className="text-ink">
                    {latestAttempt ? `${latestAttempt.scorePct}% ${latestAttempt.passed ? "(passed)" : "(not passed)"}` : "Not attempted"}
                  </div>
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-umber">Portfolio</div>
                  <div className="text-ink">{portfolio ? portfolio.status : "Not submitted"}</div>
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-umber">Certificate</div>
                  <div className="text-ink">{certificate ? certificate.certificateNumber : "Not issued"}</div>
                </div>
              </div>

              {portfolio ? (
                <div className="mt-5 border-t border-terra/15 pt-4">
                  <div className="mb-2 text-[12px] uppercase tracking-[0.15em] text-umber">
                    Portfolio submission
                  </div>
                  <p className="mb-3 text-[15px] text-ink">{portfolio.description}</p>
                  {portfolio.linkUrl ? (
                    <a href={portfolio.linkUrl} className="mb-3 block text-[14px] text-terra underline">
                      {portfolio.linkUrl}
                    </a>
                  ) : null}
                  {portfolio.status === "SUBMITTED" ? (
                    <PortfolioReviewForm portfolioId={portfolio.id} />
                  ) : null}
                </div>
              ) : null}

              {!certificate ? (
                <div className="mt-5 border-t border-terra/15 pt-4">
                  <IssueCertificateButton userId={userId} courseId={course.id} />
                </div>
              ) : null}
            </div>
          ))}
          {rows.length === 0 ? (
            <p className="text-center text-umber">This student has not enrolled in any course yet.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
