import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminStudentsPage() {
  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { enrollments: true, certificates: true } },
    },
  });

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="eyebrow mb-3">Admin</div>
        <h1 className="mb-10 font-display text-4xl font-semibold text-terra">Students</h1>

        <div className="border border-terra/20 bg-terra/10">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="border-b border-terra/20 text-[12px] uppercase tracking-[0.15em] text-umber">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Enrollments</th>
                <th className="p-4">Certificates</th>
                <th className="p-4" />
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-terra/10">
                  <td className="p-4 text-ink">{student.name}</td>
                  <td className="p-4 text-umber">{student.email}</td>
                  <td className="p-4 text-ink">{student._count.enrollments}</td>
                  <td className="p-4 text-ink">{student._count.certificates}</td>
                  <td className="p-4">
                    <Link
                      href={`/admin/students/${student.id}`}
                      className="text-[13px] uppercase tracking-[0.1em] text-terra underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {students.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-umber">
                    No students have registered yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
