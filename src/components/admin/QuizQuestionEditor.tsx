"use client";

import { useActionState, useTransition } from "react";
import {
  upsertQuizQuestionAction,
  deleteQuizQuestionAction,
  type QuizQuestionFormState,
} from "@/app/admin/courses/[slug]/modules/[moduleId]/actions";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

type Question = { id: string; question: string; options: string[]; correctIndex: number };

function QuestionForm({
  moduleId,
  slug,
  question,
}: {
  moduleId: string;
  slug: string;
  question?: Question;
}) {
  const [state, formAction, pending] = useActionState<QuizQuestionFormState, FormData>(
    upsertQuizQuestionAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-3 border border-terra/20 bg-terra/10 p-4">
      <input type="hidden" name="moduleId" value={moduleId} />
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

function DeleteButton({ questionId, slug, moduleId }: { questionId: string; slug: string; moduleId: string }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        startTransition(() => deleteQuizQuestionAction(questionId, slug, moduleId));
      }}
      className="ml-3 text-[13px] uppercase tracking-[0.1em] text-redsoil underline disabled:opacity-50"
    >
      Delete
    </button>
  );
}

export function QuizQuestionEditor({
  moduleId,
  slug,
  questions,
}: {
  moduleId: string;
  slug: string;
  questions: Question[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {questions.map((q, i) => (
        <details key={q.id} className="border border-terra/15 bg-terra/5 p-3">
          <summary className="cursor-pointer text-[15px] text-ink">
            {i + 1}. {q.question}
            <DeleteButton questionId={q.id} slug={slug} moduleId={moduleId} />
          </summary>
          <div className="mt-3">
            <QuestionForm moduleId={moduleId} slug={slug} question={q} />
          </div>
        </details>
      ))}
      <div className="eyebrow">Add a question</div>
      <QuestionForm moduleId={moduleId} slug={slug} />
    </div>
  );
}
