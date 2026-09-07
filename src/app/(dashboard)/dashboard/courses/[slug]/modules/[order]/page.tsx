import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { isEnrolledAndPaid } from "@/lib/gating";
import { LessonBody } from "@/components/course/LessonBody";
import { DownloadablePack } from "@/components/course/DownloadablePack";
import { ModuleQuiz } from "@/components/course/ModuleQuiz";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string; order: string }>;
}) {
  const { slug, order } = await params;
  const orderNum = Number(order);
  const user = await requireUser(`/dashboard/courses/${slug}/modules/${order}`);

  const course = await prisma.course.findUnique({
    where: { slug },
    include: { modules: { orderBy: { order: "asc" } } },
  });
  if (!course) notFound();

  const enrolled = await isEnrolledAndPaid(user.id, course.id);
  if (!enrolled) redirect(`/dashboard/courses/${slug}/enroll`);

  const mod = course.modules.find((m) => m.order === orderNum);
  if (!mod) notFound();

  const [quizQuestions, downloadables, progress] = await Promise.all([
    prisma.moduleQuizQuestion.findMany({ where: { moduleId: mod.id }, orderBy: { order: "asc" } }),
    prisma.downloadable.findMany({ where: { moduleId: mod.id }, orderBy: { order: "asc" } }),
    prisma.moduleProgress.findUnique({ where: { userId_moduleId: { userId: user.id, moduleId: mod.id } } }),
  ]);

  const objectives = mod.objectives as string[];
  const keyTerms = mod.keyTerms as { term: string; definition: string }[];

  const prevModule = course.modules.find((m) => m.order === orderNum - 1);
  const nextModule = course.modules.find((m) => m.order === orderNum + 1);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/dashboard/courses/${slug}/learn`}
          className="mb-8 inline-block text-[13px] uppercase tracking-[0.15em] text-umber hover:text-vetiver"
        >
          ← All Modules
        </Link>

        <div className="mb-2 font-display text-sm uppercase tracking-[0.3em] text-turmeric">
          Module {String(mod.order).padStart(2, "0")}
        </div>
        <h1 className="mb-2 font-display text-4xl font-semibold text-terra">{mod.title}</h1>
        <p className="mb-8 font-display text-lg italic text-umber">{mod.subtitle}</p>

        {mod.videoUrl ? (
          <div className="mb-8 overflow-hidden rounded-lg bg-ink">
            <video
              controls
              style={{ aspectRatio: "16/9", width: "100%", display: "block" }}
              className="bg-black"
            >
              <source src={mod.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}

        {objectives.length > 0 ? (
          <div className="mb-8 border-l-2 border-vetiver bg-white p-5">
            <div className="mb-3 text-[12px] uppercase tracking-[0.25em] text-turmeric">
              By the end of this module, you will be able to
            </div>
            <ul className="flex flex-col gap-2">
              {objectives.map((obj) => (
                <li key={obj} className="pl-4 text-[15px] text-ink relative">
                  <span className="absolute left-0 text-turmeric">✦</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <LessonBody html={mod.lessonHtml} />

        {keyTerms.length > 0 ? (
          <div className="amber-key-terms">
            <div className="mb-3 text-[12px] uppercase tracking-[0.25em] text-turmeric">
              Key terms from this module
            </div>
            {keyTerms.map((kt) => (
              <div key={kt.term} className="amber-key-term">
                <b>{kt.term}</b> — {kt.definition}
              </div>
            ))}
          </div>
        ) : null}

        {mod.activityHtml ? (
          <div className="my-8 border border-vetiver/25 bg-vetiver/5 p-6">
            <div className="mb-2 text-[12px] uppercase tracking-[0.25em] text-vetiver">
              Practical Activity {mod.activityTitle ? `· ${mod.activityTitle}` : ""}
            </div>
            <div className="amber-body-html" dangerouslySetInnerHTML={{ __html: mod.activityHtml }} />
          </div>
        ) : null}

        <DownloadablePack moduleId={mod.id} moduleTitle={mod.title} downloadables={downloadables} />

        {quizQuestions.length > 0 ? (
          <ModuleQuiz
            moduleId={mod.id}
            courseSlug={slug}
            questions={quizQuestions.map((q) => ({
              id: q.id,
              question: q.question,
              options: q.options as string[],
              correctIndex: q.correctIndex,
            }))}
            previousScorePct={progress?.quizScorePct ?? null}
          />
        ) : null}

        <div className="mt-12 flex justify-between border-t border-terra/20 pt-6 text-[13px] uppercase tracking-[0.15em]">
          {prevModule ? (
            <Link href={`/dashboard/courses/${slug}/modules/${prevModule.order}`} className="text-terra hover:text-vetiver">
              ← {prevModule.title}
            </Link>
          ) : (
            <span />
          )}
          {nextModule ? (
            <Link href={`/dashboard/courses/${slug}/modules/${nextModule.order}`} className="text-terra hover:text-vetiver">
              {nextModule.title} →
            </Link>
          ) : (
            <Link href={`/dashboard/courses/${slug}/exam`} className="text-terra hover:text-vetiver">
              Proceed to Examination →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
