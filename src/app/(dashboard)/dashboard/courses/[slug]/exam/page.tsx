import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid } from "@/lib/gating";
import { ExamForm } from "@/components/exam/ExamForm";

export default async function ExamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await requireUser(`/dashboard/courses/${slug}/exam`);

  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      modules: { select: { id: true } },
      exam: { include: { questions: { orderBy: { order: "asc" } } } },
    },
  });
  if (!course) notFound();

  const enrolled = await isEnrolledAndPaid(user.id, course.id);
  if (!enrolled) redirect(`/dashboard/courses/${slug}/enroll`);

  if (!course.exam || course.exam.questions.length === 0) {
    return (
      <div className="px-6 py-16 text-center">
        <p className="text-umber">The examination for this course is being prepared.</p>
      </div>
    );
  }

  const completedCount = await prisma.moduleProgress.count({
    where: {
      userId: user.id,
      completedAt: { not: null },
      moduleId: { in: course.modules.map((m) => m.id) },
    },
  });
  const allModulesComplete = completedCount >= course.modules.length;

  const lastAttempt = await prisma.examAttempt.findFirst({
    where: { userId: user.id, examId: course.exam.id },
    orderBy: { submittedAt: "desc" },
  });

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <div className="eyebrow mb-3">Examination</div>
          <h1 className="font-display text-4xl font-semibold text-terra">{course.exam.title}</h1>
          <p className="mt-2 text-base text-umber">
            {course.exam.questions.length} questions · Pass at {course.examPassThresholdPct}% or above
          </p>
        </div>

        {!allModulesComplete ? (
          <div className="mb-8 border-l-2 border-turmeric bg-white p-4 text-[15px] text-ink">
            You have not yet completed every module. You are welcome to sit the examination now, or{" "}
            <Link href={`/dashboard/courses/${slug}/learn`} className="text-terra underline">
              return to the modules
            </Link>{" "}
            first.
          </div>
        ) : null}

        {lastAttempt ? (
          <div className="mb-8 text-center text-[15px] text-umber">
            Most recent attempt: {lastAttempt.scorePct}% — {lastAttempt.passed ? "passed" : "not yet passed"}
          </div>
        ) : null}

        <ExamForm
          courseSlug={slug}
          thresholdPct={course.examPassThresholdPct}
          questions={course.exam.questions.map((q) => ({
            id: q.id,
            question: q.question,
            options: q.options as string[],
            correctIndex: q.correctIndex,
          }))}
        />
      </div>
    </div>
  );
}
