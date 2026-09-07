import { prisma } from "@/lib/prisma";

export async function isEnrolledAndPaid(userId: string, courseId: string): Promise<boolean> {
  const enrollment = await prisma.enrollment.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
  return Boolean(enrollment && enrollment.status === "PAID");
}

/**
 * Issues a Certificate once, idempotently, when all three conditions are met:
 *  1. The latest exam attempt for this course's exam passed (>= examPassThresholdPct).
 *  2. A portfolio submission exists for this user + course (submission alone suffices,
 *     matching the product's literal "submission of portfolio" requirement — an admin
 *     can still REJECT a submission afterward to withhold/revoke an unissued certificate).
 *  3. Every module in the course has a completed ModuleProgress row for this user.
 */
export async function maybeIssueCertificate(userId: string, courseId: string) {
  const existing = await prisma.certificate.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
  if (existing) return existing;

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { modules: { select: { id: true } }, exam: true },
  });
  if (!course || !course.exam) return null;

  const latestAttempt = await prisma.examAttempt.findFirst({
    where: { userId, examId: course.exam.id },
    orderBy: { submittedAt: "desc" },
  });
  if (!latestAttempt || !latestAttempt.passed) return null;

  const portfolio = await prisma.portfolioSubmission.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
  if (!portfolio || portfolio.status === "REJECTED") return null;

  if (course.modules.length > 0) {
    const completedCount = await prisma.moduleProgress.count({
      where: {
        userId,
        completedAt: { not: null },
        moduleId: { in: course.modules.map((m) => m.id) },
      },
    });
    if (completedCount < course.modules.length) return null;
  }

  const certificateNumber = `AMBER-C${course.order}-${Date.now().toString(36).toUpperCase()}`;

  return prisma.certificate.create({
    data: {
      userId,
      courseId,
      certificateNumber,
      examAttemptId: latestAttempt.id,
      portfolioSubmissionId: portfolio.id,
    },
  });
}
