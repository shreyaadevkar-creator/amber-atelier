import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";
import { ingestCourseFromHtml } from "./seed-data/ingest-course";
import { realCourses, type RealCourseMeta } from "./seed-data/real-courses";
import type { QuizQuestionSeed } from "./seed-data/course1-quiz-bank";

import { course1QuizBank } from "./seed-data/course1-quiz-bank";
import { course1ExamBank } from "./seed-data/course1-exam-bank";
import { course2QuizBank } from "./seed-data/course2-quiz-bank";
import { course2ExamBank } from "./seed-data/course2-exam-bank";
import { course3QuizBank } from "./seed-data/course3-quiz-bank";
import { course3ExamBank } from "./seed-data/course3-exam-bank";
import { course4QuizBank } from "./seed-data/course4-quiz-bank";
import { course4ExamBank } from "./seed-data/course4-exam-bank";
import { course5QuizBank } from "./seed-data/course5-quiz-bank";
import { course5ExamBank } from "./seed-data/course5-exam-bank";
import { course6QuizBank } from "./seed-data/course6-quiz-bank";
import { course6ExamBank } from "./seed-data/course6-exam-bank";
import { course7QuizBank } from "./seed-data/course7-quiz-bank";
import { course7ExamBank } from "./seed-data/course7-exam-bank";
import { course8QuizBank } from "./seed-data/course8-quiz-bank";
import { course8ExamBank } from "./seed-data/course8-exam-bank";

type QuizBank = { moduleOrder: number; questions: QuizQuestionSeed[] }[];

const QUIZ_BANKS: Record<number, QuizBank> = {
  1: course1QuizBank,
  2: course2QuizBank,
  3: course3QuizBank,
  4: course4QuizBank,
  5: course5QuizBank,
  6: course6QuizBank,
  7: course7QuizBank,
  8: course8QuizBank,
};

const EXAM_BANKS: Record<number, QuizQuestionSeed[]> = {
  1: course1ExamBank,
  2: course2ExamBank,
  3: course3ExamBank,
  4: course4ExamBank,
  5: course5ExamBank,
  6: course6ExamBank,
  7: course7ExamBank,
  8: course8ExamBank,
};

// Slugs from the placeholder courses (II–VIII) seeded before the real
// curricula arrived. These are removed so the real courses can take their
// place without leaving orphaned rows behind.
const OLD_PLACEHOLDER_SLUGS = [
  "the-painted-face",
  "crowned",
  "the-botanical-pharmacy",
  "the-vermilion-hour",
  "the-maison-standard",
  "of-water-and-warmth",
  "the-practitioners-code",
];

async function cleanupOldPlaceholderCourses() {
  const stale = await prisma.course.findMany({
    where: { slug: { in: OLD_PLACEHOLDER_SLUGS } },
    include: { modules: true, exam: true },
  });

  for (const course of stale) {
    const moduleIds = course.modules.map((m) => m.id);
    if (course.exam) {
      await prisma.examAttempt.deleteMany({ where: { examId: course.exam.id } });
      await prisma.examQuestion.deleteMany({ where: { examId: course.exam.id } });
      await prisma.exam.delete({ where: { id: course.exam.id } });
    }
    if (moduleIds.length > 0) {
      await prisma.moduleQuizQuestion.deleteMany({ where: { moduleId: { in: moduleIds } } });
      await prisma.downloadable.deleteMany({ where: { moduleId: { in: moduleIds } } });
      await prisma.moduleProgress.deleteMany({ where: { moduleId: { in: moduleIds } } });
    }
    await prisma.module.deleteMany({ where: { courseId: course.id } });
    await prisma.portfolioSubmission.deleteMany({ where: { courseId: course.id } });
    await prisma.certificate.deleteMany({ where: { courseId: course.id } });
    await prisma.enrollment.deleteMany({ where: { courseId: course.id } });
    await prisma.course.delete({ where: { id: course.id } });
    console.log(`[seed] Removed retired placeholder course "${course.title}" (${course.slug})`);
  }
}

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME ?? "Amber Admin";

  if (!email || !password) {
    console.warn("[seed] ADMIN_EMAIL / ADMIN_PASSWORD not set — skipping admin seed.");
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, passwordHash, name, role: "ADMIN" },
  });
  console.log(`[seed] Admin user ready: ${email}`);
}

async function seedExam(courseId: string, title: string, questions: QuizQuestionSeed[]) {
  // Once an Exam/ExamQuestion row exists, it's owned by the admin panel from
  // then on — reseeding only fills in rows that are missing, it never
  // overwrites an existing one (admin edits must survive a reseed).
  const exam = await prisma.exam.upsert({
    where: { courseId },
    update: {},
    create: { courseId, title, timeLimitMinutes: 60 },
  });

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const order = i + 1;
    const existing = await prisma.examQuestion.findFirst({ where: { examId: exam.id, order } });
    if (!existing) {
      await prisma.examQuestion.create({
        data: {
          examId: exam.id,
          order,
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
        },
      });
    }
  }
}

async function seedRealCourse(meta: RealCourseMeta) {
  const ingested = ingestCourseFromHtml(meta.completeHtmlFile, meta.downloadablesHtmlFile, meta.slug);

  // Once a Course/Module/quiz question exists, it's owned by the admin panel
  // from then on — reseeding only fills in rows that are missing (a new
  // course, a module that failed to ingest last time), it never overwrites
  // an existing row's content, price, or title (admin edits must survive a
  // reseed).
  const course = await prisma.course.upsert({
    where: { slug: meta.slug },
    update: {},
    create: {
      slug: meta.slug,
      order: meta.order,
      title: ingested.title,
      subtitle: ingested.subtitle,
      tagline: meta.tagline,
      description: meta.description,
      priceInPaise: meta.priceInPaise,
      examPassThresholdPct: 50,
    },
  });

  for (const mod of ingested.modules) {
    const savedModule = await prisma.module.upsert({
      where: { courseId_order: { courseId: course.id, order: mod.order } },
      update: {},
      create: {
        courseId: course.id,
        order: mod.order,
        title: mod.title,
        subtitle: mod.subtitle,
        objectives: mod.objectives,
        lessonHtml: mod.lessonHtml,
        keyTerms: mod.keyTerms,
        activityTitle: mod.activityTitle,
        activityHtml: mod.activityHtml,
        sourceQuizPrompts: mod.sourceQuizPrompts,
      },
    });

    for (const dl of mod.downloadables) {
      await prisma.downloadable.upsert({
        where: { moduleId_slug: { moduleId: savedModule.id, slug: dl.slug } },
        update: { order: dl.order, tag: dl.tag, title: dl.title, bodyHtml: dl.bodyHtml },
        create: {
          moduleId: savedModule.id,
          order: dl.order,
          slug: dl.slug,
          tag: dl.tag,
          title: dl.title,
          bodyHtml: dl.bodyHtml,
        },
      });
    }

    const quizSet = QUIZ_BANKS[meta.order]?.find((q) => q.moduleOrder === mod.order);
    if (quizSet) {
      for (let i = 0; i < quizSet.questions.length; i++) {
        const q = quizSet.questions[i];
        const order = i + 1;
        const existing = await prisma.moduleQuizQuestion.findFirst({
          where: { moduleId: savedModule.id, order },
        });
        if (!existing) {
          await prisma.moduleQuizQuestion.create({
            data: {
              moduleId: savedModule.id,
              order,
              question: q.question,
              options: q.options,
              correctIndex: q.correctIndex,
            },
          });
        }
      }
    } else {
      console.warn(`[seed] No quiz bank found for ${meta.slug} module ${mod.order}`);
    }
  }

  const examBank = EXAM_BANKS[meta.order];
  if (examBank) {
    await seedExam(course.id, `${course.title} — Certification Exam`, examBank);
  } else {
    console.warn(`[seed] No exam bank found for ${meta.slug}`);
  }

  console.log(`[seed] Course "${course.title}" ready with ${ingested.modules.length} modules.`);
}

async function main() {
  await seedAdmin();
  await cleanupOldPlaceholderCourses();
  for (const meta of realCourses) {
    await seedRealCourse(meta);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
