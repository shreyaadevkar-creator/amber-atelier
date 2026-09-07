import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ExamMetaEditor, ExamQuestionEditor } from "@/components/admin/ExamEditor";

export default async function AdminExamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: { slug },
    include: { exam: { include: { questions: { orderBy: { order: "asc" } } } } },
  });
  if (!course) notFound();

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/admin/courses/${slug}`}
          className="mb-6 inline-block text-[13px] uppercase tracking-[0.15em] text-umber hover:text-vetiver"
        >
          ← Back to Course
        </Link>
        <div className="eyebrow mb-3">Admin · Examination</div>
        <h1 className="mb-10 font-display text-4xl font-semibold text-terra">{course.title}</h1>

        {course.exam ? (
          <>
            <div className="mb-12">
              <ExamMetaEditor
                courseId={course.id}
                slug={slug}
                title={course.exam.title}
                thresholdPct={course.examPassThresholdPct}
              />
            </div>
            <div className="eyebrow mb-4">Exam Questions</div>
            <ExamQuestionEditor
              examId={course.exam.id}
              slug={slug}
              questions={course.exam.questions.map((q) => ({
                id: q.id,
                question: q.question,
                options: q.options as string[],
                correctIndex: q.correctIndex,
              }))}
            />
          </>
        ) : (
          <p className="text-umber">This course has no examination yet.</p>
        )}
      </div>
    </div>
  );
}
