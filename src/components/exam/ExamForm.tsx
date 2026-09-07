"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { submitExamAction } from "@/app/(dashboard)/dashboard/courses/[slug]/exam/actions";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export function ExamForm({
  courseSlug,
  questions,
  thresholdPct,
}: {
  courseSlug: string;
  questions: Question[];
  thresholdPct: number;
}) {
  const startedAt = useMemo(() => new Date().toISOString(), []);
  const [answers, setAnswers] = useState<number[]>(() => questions.map(() => -1));
  const [graded, setGraded] = useState(false);
  const [result, setResult] = useState<{ scorePct: number; correctCount: number; total: number; passed: boolean } | null>(
    null
  );
  const [pending, startTransition] = useTransition();

  const allAnswered = answers.every((a) => a >= 0);

  function selectAnswer(qIndex: number, optionIndex: number) {
    if (graded) return;
    setAnswers((prev) => prev.map((a, i) => (i === qIndex ? optionIndex : a)));
  }

  function handleSubmit() {
    startTransition(async () => {
      const res = await submitExamAction(courseSlug, startedAt, answers);
      if ("error" in res) return;
      setResult(res);
      setGraded(true);
    });
  }

  if (result) {
    return (
      <div className="border border-terra/20 bg-terra/10 p-8 text-center">
        <div className="eyebrow mb-4">{result.passed ? "Examination Passed" : "Examination Result"}</div>
        <p className="font-display text-4xl text-terra">
          {result.correctCount} / {result.total} — {result.scorePct}%
        </p>
        <p className="mt-3 text-base text-umber">
          The passing standard for this course is {thresholdPct}%.
        </p>
        {result.passed ? (
          <p className="mt-6 text-base text-ink">
            Your next step is the portfolio.{" "}
            <Link href={`/dashboard/courses/${courseSlug}/portfolio`} className="text-terra underline">
              Submit your portfolio
            </Link>{" "}
            to move toward your certificate.
          </p>
        ) : (
          <p className="mt-6 text-base text-ink">
            The standard has not been met this time. You are welcome to prepare further and take the
            examination again.
          </p>
        )}
        {!result.passed ? (
          <button
            type="button"
            onClick={() => {
              setGraded(false);
              setResult(null);
              setAnswers(questions.map(() => -1));
            }}
            className="mt-6 border border-terra/40 px-6 py-3 text-[13px] uppercase tracking-[0.15em] text-terra hover:bg-vetiver/10 hover:border-vetiver"
          >
            Retake Examination
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {questions.map((q, qi) => (
        <div key={q.id} className="border border-terra/20 bg-terra/10 p-6">
          <p className="mb-4 text-[16px] leading-relaxed text-ink">
            {qi + 1}. {q.question}
          </p>
          <div className="flex flex-col gap-2">
            {q.options.map((option, oi) => (
              <button
                key={oi}
                type="button"
                onClick={() => selectAnswer(qi, oi)}
                className={`border px-4 py-2 text-left text-[15px] text-ink ${
                  answers[qi] === oi ? "border-terra bg-terra/10" : "border-terra/20 hover:border-vetiver"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
        disabled={!allAnswered || pending}
        onClick={handleSubmit}
        className="self-center border border-terra/40 px-8 py-3 text-[13px] uppercase tracking-[0.15em] text-terra hover:bg-vetiver/10 hover:border-vetiver disabled:opacity-40"
      >
        {pending ? "Submitting…" : "Submit Examination"}
      </button>
    </div>
  );
}
