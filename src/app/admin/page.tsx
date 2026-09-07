import { prisma } from "@/lib/prisma";
import { formatInr } from "@/lib/format";
import { StatCard } from "@/components/admin/StatCard";

export default async function AdminDashboardPage() {
  const [studentCount, enrollments, certificateCount, portfolioPending, unreadMessages] = await Promise.all([
    prisma.user.count({ where: { role: "STUDENT" } }),
    prisma.enrollment.findMany(),
    prisma.certificate.count(),
    prisma.portfolioSubmission.count({ where: { status: "SUBMITTED" } }),
    prisma.contactMessage.count({ where: { readAt: null } }),
  ]);

  const revenuePaise = enrollments.reduce((sum, e) => sum + e.amountPaidPaise, 0);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow mb-3">Admin</div>
        <h1 className="mb-10 font-display text-4xl font-semibold text-terra">The Atelier at a glance</h1>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <StatCard label="Students" value={studentCount} tone="terra" />
          <StatCard label="Enrollments" value={enrollments.length} tone="turmeric" />
          <StatCard label="Certificates Issued" value={certificateCount} tone="vetiver" />
          <StatCard label="Portfolios Awaiting Review" value={portfolioPending} tone="rainforest" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <StatCard label="Revenue (simulated)" value={formatInr(revenuePaise)} tone="terra" />
          <StatCard label="Unread Messages" value={unreadMessages} tone="turmeric" />
        </div>
      </div>
    </div>
  );
}
