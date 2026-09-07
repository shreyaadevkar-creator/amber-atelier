import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid } from "@/lib/gating";
import { PortfolioForm } from "@/components/dashboard/PortfolioForm";

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await requireUser(`/dashboard/courses/${slug}/portfolio`);

  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course) notFound();

  const enrolled = await isEnrolledAndPaid(user.id, course.id);
  if (!enrolled) redirect(`/dashboard/courses/${slug}/enroll`);

  const submission = await prisma.portfolioSubmission.findUnique({
    where: { userId_courseId: { userId: user.id, courseId: course.id } },
  });

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 text-center">
          <div className="eyebrow mb-3">Portfolio</div>
          <h1 className="font-display text-4xl font-semibold text-terra">{course.title}</h1>
          <p className="mt-3 text-base text-umber">
            The final proof of your practice — a description of the work you have made or performed
            through this course.
          </p>
        </div>

        {submission ? (
          <div className="mb-8 border border-terra/20 bg-terra/10 p-5 text-[15px]">
            <div className="mb-2 text-[12px] uppercase tracking-[0.2em] text-umber">
              Status:{" "}
              <span
                className={
                  submission.status === "REJECTED"
                    ? "text-redsoil"
                    : submission.status === "APPROVED"
                      ? "text-vetiver"
                      : "text-turmeric"
                }
              >
                {submission.status}
              </span>
            </div>
            {submission.status === "REJECTED" && submission.adminNote ? (
              <p className="text-ink">Note from the Atelier: {submission.adminNote}</p>
            ) : null}
          </div>
        ) : null}

        <div className="border border-terra/20 bg-terra/10 p-8">
          <PortfolioForm
            slug={slug}
            existingDescription={submission?.description}
            existingLink={submission?.linkUrl}
          />
        </div>
      </div>
    </div>
  );
}
