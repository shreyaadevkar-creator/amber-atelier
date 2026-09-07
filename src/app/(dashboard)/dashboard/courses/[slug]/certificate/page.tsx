import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid, maybeIssueCertificate } from "@/lib/gating";
import { CertificateDocument } from "@/components/certificate/CertificateDocument";
import { PdfExportButton } from "@/components/course/PdfExportButton";

export default async function CertificatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await requireUser(`/dashboard/courses/${slug}/certificate`);

  const course = await prisma.course.findUnique({
    where: { slug },
    include: { modules: { select: { id: true } }, exam: true },
  });
  if (!course) notFound();

  const enrolled = await isEnrolledAndPaid(user.id, course.id);
  if (!enrolled) redirect(`/dashboard/courses/${slug}/enroll`);

  const certificate = await maybeIssueCertificate(user.id, course.id);

  if (certificate) {
    return (
      <div className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="eyebrow mb-3">Certified</div>
            <h1 className="font-display text-4xl font-medium text-terra">Your certificate is ready</h1>
          </div>
          <CertificateDocument
            id="certificate-doc"
            studentName={user.name}
            courseTitle={course.title}
            certificateNumber={certificate.certificateNumber}
            issuedAt={certificate.issuedAt}
          />
          <div className="mt-8 flex justify-center">
            <PdfExportButton
              targetId="certificate-doc"
              filename={`amber-atelier-${course.slug}-certificate.pdf`}
              backgroundColor="#6B1E1E"
              label="Download Certificate"
            />
          </div>
        </div>
      </div>
    );
  }

  const [latestAttempt, portfolio, completedCount] = await Promise.all([
    course.exam
      ? prisma.examAttempt.findFirst({
          where: { userId: user.id, examId: course.exam.id },
          orderBy: { submittedAt: "desc" },
        })
      : null,
    prisma.portfolioSubmission.findUnique({
      where: { userId_courseId: { userId: user.id, courseId: course.id } },
    }),
    prisma.moduleProgress.count({
      where: { userId: user.id, completedAt: { not: null }, moduleId: { in: course.modules.map((m) => m.id) } },
    }),
  ]);

  const examPassed = Boolean(latestAttempt?.passed);
  const portfolioOk = Boolean(portfolio && portfolio.status !== "REJECTED");
  const modulesComplete = completedCount >= course.modules.length;

  const steps = [
    { label: "Complete every module", done: modulesComplete, href: `/dashboard/courses/${slug}/learn` },
    { label: `Pass the examination (${course.examPassThresholdPct}% or above)`, done: examPassed, href: `/dashboard/courses/${slug}/exam` },
    { label: "Submit your portfolio", done: portfolioOk, href: `/dashboard/courses/${slug}/portfolio` },
  ];

  return (
    <div className="px-6 py-16 text-center">
      <div className="mx-auto max-w-md">
        <div className="eyebrow mb-3">Certificate</div>
        <h1 className="mb-6 font-display text-3xl font-medium text-terra">
          Not yet. A few steps remain before your name is sealed in gold.
        </h1>
        <ul className="flex flex-col gap-3 text-left">
          {steps.map((step) => (
            <li key={step.label} className="flex items-center justify-between border border-terra/20 bg-white/50 px-4 py-3">
              <span className="text-[15px] text-ink">{step.label}</span>
              {step.done ? (
                <span className="text-[13px] uppercase tracking-[0.1em] text-vetiver">Done</span>
              ) : (
                <Link href={step.href} className="text-[13px] uppercase tracking-[0.1em] text-terra underline">
                  Begin
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
