import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ModuleEditor } from "@/components/admin/ModuleEditor";
import { QuizQuestionEditor } from "@/components/admin/QuizQuestionEditor";

export default async function AdminModuleDetailPage({
  params,
}: {
  params: Promise<{ slug: string; moduleId: string }>;
}) {
  const { slug, moduleId } = await params;

  const mod = await prisma.module.findUnique({
    where: { id: moduleId },
    include: { quizQuestions: { orderBy: { order: "asc" } } },
  });
  if (!mod) notFound();

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/admin/courses/${slug}`}
          className="mb-6 inline-block text-[13px] uppercase tracking-[0.15em] text-umber hover:text-vetiver"
        >
          ← Back to Course
        </Link>
        <div className="eyebrow mb-3">Admin · Module</div>
        <h1 className="mb-10 font-display text-4xl font-semibold text-terra">{mod.title}</h1>

        <div className="mb-12 border border-terra/20 bg-terra/10 p-6">
          <ModuleEditor
            moduleId={mod.id}
            slug={slug}
            title={mod.title}
            subtitle={mod.subtitle}
            objectives={mod.objectives as string[]}
            lessonHtml={mod.lessonHtml}
            activityTitle={mod.activityTitle}
            activityHtml={mod.activityHtml}
          />
        </div>

        <div className="eyebrow mb-4">Knowledge Check Questions</div>
        <QuizQuestionEditor
          moduleId={mod.id}
          slug={slug}
          questions={mod.quizQuestions.map((q) => ({
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
