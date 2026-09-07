import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { CheckoutForm } from "@/components/dashboard/CheckoutForm";

export default async function EnrollPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await requireUser(`/dashboard/courses/${slug}/enroll`);

  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course) notFound();

  const existing = await prisma.enrollment.findUnique({
    where: { userId_courseId: { userId: user.id, courseId: course.id } },
  });
  if (existing) redirect(`/dashboard/courses/${slug}/learn`);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-sm">
        <div className="mb-8 text-center">
          <div className="eyebrow mb-3">Enrollment</div>
          <h1 className="font-display text-3xl font-semibold text-terra">{course.title}</h1>
        </div>
        <div className="border border-terra/20 bg-terra/10 p-8">
          <CheckoutForm slug={course.slug} title={course.title} priceInPaise={course.priceInPaise} />
        </div>
      </div>
    </div>
  );
}
