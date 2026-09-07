"use client";

import { useActionState, useTransition } from "react";
import {
  updateExamMetaAction,
  upsertExamQuestionAction,
  deleteExamQuestionAction,
  type ExamMetaFormState,
  type ExamQuestionFormState,
} from "@/app/admin/courses/[slug]/exam/actions";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ExamMetaEditor({
  courseId,
  slug,
  title,
  thresholdPct,
}: {
  courseId: string;
  slug: string;
  title: string;
  thresholdPct: number;
}) {
  const [state, formAction, pending] = useActionState<ExamMetaFormState, FormData>(
    updateExamMetaAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-4 border border-terra/20 bg-terra/10 p-6">
      <input type="hidden" name="courseId" value={courseId} />
      <input type="hidden" name="slug" value={slug} />
      <Input label="Exam Title" name="title" defaultValue={title} required />
      <Input
        label="Pass threshold (%)"
        name="thresholdPct"
        type="number"
        min={0}
        max={100}
        defaultValue={thresholdPct}
        required
      />
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      {state?.success ? <p className="text-[14px] text-vetiver">Saved.</p> : null}
      <Button type="submit" disabled={pending} className="self-start">
        {pending ? "Saving…" : "Save"}
      </Button>
    </form>
  );
}

type Question = { id: string; question: string; options: string[]; correctIndex: number };

function QuestionForm({ examId, slug, question }: { examId: string; slug: string; question?: Question }) {
  const [state, formAction, pending] = useActionState<ExamQuestionFormState, FormData>(
    upsertExamQuestionAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-3 border border-terra/20 bg-terra/10 p-4">
      <input type="hidden" name="examId" value={examId} />
      <input type="hidden" name="slug" value={slug} />
      {question ? <input type="hidden" name="questionId" value={question.id} /> : null}
      <Input label="Question" name="question" defaultValue={question?.question} required />
      <Textarea
        label="Options (one per line)"
        name="optionsText"
        defaultValue={question?.options.join("\n")}
        rows={4}
        required
      />
      <Input
        label="Correct answer number (1-based)"
        name="correctIndex"
        type="number"
        min={1}
        max={4}
        defaultValue={question ? question.correctIndex + 1 : 1}
        required
      />
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      {state?.success ? <p className="text-[14px] text-vetiver">Saved.</p> : null}
      <Button type="submit" disabled={pending} className="self-start">
        {pending ? "Saving…" : question ? "Update Question" : "Add Question"}
      </Button>
    </form>
  );
}

function DeleteButton({ questionId, slug }: { questionId: string; slug: string }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        startTransition(() => deleteExamQuestionAction(questionId, slug));
      }}
      className="ml-3 text-[13px] uppercase tracking-[0.1em] text-redsoil underline disabled:opacity-50"
    >
      Delete
    </button>
  );
}

export function ExamQuestionEditor({ examId, slug, questions }: { examId: string; slug: string; questions: Question[] }) {
  return (
    <div className="flex flex-col gap-4">
      {questions.map((q, i) => (
        <details key={q.id} className="border border-terra/15 bg-terra/5 p-3">
          <summary className="cursor-pointer text-[15px] text-ink">
            {i + 1}. {q.question}
            <DeleteButton questionId={q.id} slug={slug} />
          </summary>
          <div className="mt-3">
            <QuestionForm examId={examId} slug={slug} question={q} />
          </div>
        </details>
      ))}
      <div className="eyebrow">Add a question</div>
      <QuestionForm examId={examId} slug={slug} />
    </div>
  );
}
