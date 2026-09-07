"use client";

import { useState, useTransition } from "react";
import { submitQuizAction } from "@/app/(dashboard)/dashboard/courses/[slug]/modules/[order]/actions";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export function ModuleQuiz({
  moduleId,
  courseSlug,
  questions,
  previousScorePct,
}: {
  moduleId: string;
  courseSlug: string;
  questions: Question[];
  previousScorePct: number | null;
}) {
  const [answers, setAnswers] = useState<number[]>(() => questions.map(() => -1));
  const [graded, setGraded] = useState(false);
  const [result, setResult] = useState<{ scorePct: number; correctCount: number; total: number } | null>(null);
  const [pending, startTransition] = useTransition();

  const allAnswered = answers.every((a) => a >= 0);

  function selectAnswer(qIndex: number, optionIndex: number) {
    if (graded) return;
    setAnswers((prev) => prev.map((a, i) => (i === qIndex ? optionIndex : a)));
  }

  function handleSubmit() {
    const correctCount = questions.reduce(
      (count, q, i) => (answers[i] === q.correctIndex ? count + 1 : count),
      0
    );
    const scorePct = Math.round((correctCount / questions.length) * 100);
    setResult({ scorePct, correctCount, total: questions.length });
    setGraded(true);

    startTransition(async () => {
      await submitQuizAction(moduleId, courseSlug, answers);
    });
  }

  function handleRetake() {
    setAnswers(questions.map(() => -1));
    setGraded(false);
    setResult(null);
  }

  return (
    <div className="my-8 border border-terra/20 bg-terra/[0.04] p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="eyebrow">Knowledge Check</span>
        {previousScorePct !== null && !graded ? (
          <span className="text-[13px] text-umber">Previous score: {previousScorePct}%</span>
        ) : null}
      </div>

      <div className="flex flex-col gap-6">
        {questions.map((q, qi) => (
          <div key={q.id}>
            <p className="mb-3 text-[15px] leading-relaxed text-ink">
              {qi + 1}. {q.question}
            </p>
            <div className="flex flex-col gap-2">
              {q.options.map((option, oi) => {
                const isSelected = answers[qi] === oi;
                const isCorrect = q.correctIndex === oi;
                let stateClass = "border-terra/20 hover:border-vetiver";
                if (graded) {
                  if (isCorrect) stateClass = "border-vetiver bg-vetiver/10";
                  else if (isSelected) stateClass = "border-redsoil bg-redsoil/5";
                } else if (isSelected) {
                  stateClass = "border-terra";
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={graded}
                    onClick={() => selectAnswer(qi, oi)}
                    className={`border px-4 py-2 text-left text-[15px] text-ink ${stateClass} disabled:cursor-default`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {result ? (
        <div className="mt-6 border-t border-terra/20 pt-4">
          <p className="font-display text-lg text-terra">
            {result.correctCount} of {result.total} correct — {result.scorePct}%
          </p>
          <button
            type="button"
            onClick={handleRetake}
            className="mt-3 text-[13px] uppercase tracking-[0.15em] text-terra border-b border-terra/40 pb-0.5 hover:text-vetiver"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <button
          type="button"
          disabled={!allAnswered || pending}
          onClick={handleSubmit}
          className="mt-6 border border-terra/40 px-6 py-3 text-[13px] uppercase tracking-[0.15em] text-terra hover:bg-vetiver/10 hover:border-vetiver disabled:opacity-40"
        >
          Check Answers
        </button>
      )}
    </div>
  );
}
