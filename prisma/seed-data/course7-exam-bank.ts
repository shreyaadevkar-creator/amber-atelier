import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored 10-question exam for Course VII, "The Living Scent," spanning modules
 * across the curriculum. The source material never lists standalone exam
 * questions with a stored answer key — this bank is authored, not extracted.
 */
export const course7ExamBank: QuizQuestionSeed[] = [
  {
    question: "What does the fragrance pyramid describe?",
    options: [
      "The top, middle, and base note structure describing how a scent unfolds over time",
      "A pricing tier for perfume bottles",
      "The packaging hierarchy of a fragrance line",
      "A skin-type classification scale",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the minimum required patch test window before full application of a new fragrance or ubtan formulation?",
    options: ["1 hour", "6 hours", "24 hours", "One week"],
    correctIndex: 2,
  },
  {
    question: "What is curcumin?",
    options: [
      "A synthetic fixative used in modern perfumery",
      "Turmeric's active compound, with documented anti-inflammatory and antioxidant properties",
      "The aromatic compound responsible for sandalwood's scent",
      "A type of gram flour",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the deg-bhapka method?",
    options: [
      "A modern solvent-extraction technique",
      "The traditional copper-vessel steam distillation method used to produce ittar",
      "A patch test protocol",
      "A pricing structure for retail fragrance",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the Proust effect, and why does it matter for wedding fragrance choice?",
    options: [
      "It is a marketing term with no real psychological basis",
      "It is the strong, involuntary link between scent and memory, making fragrance choice emotionally significant",
      "It refers only to how long a scent lasts on skin",
      "It describes how fragrance concentration is measured",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a phototoxic fragrance reaction?",
    options: [
      "An allergic histamine response to any fragrance",
      "Skin burns or pigmentation change caused by certain citrus aromatics reacting with UV light",
      "A reaction limited to synthetic fragrance only",
      "A temporary loss of smell after sun exposure",
    ],
    correctIndex: 1,
  },
  {
    question: "What does \"loaner jewelry hygiene\" refer to?",
    options: [
      "Cleaning a client's own heirloom jewelry only",
      "Sanitising standards applied to any shared, salon-owned jewelry between clients",
      "A pricing policy for jewelry rentals",
      "A rule that jewelry is never shared between clients",
    ],
    correctIndex: 1,
  },
  {
    question: "In the wedding-day finishing sequence, why is fragrance applied last of all?",
    options: [
      "Because fragrance takes the longest to develop",
      "Because it follows hair, face, bindi, and jewelry so it is not disturbed by the steps before it",
      "Because fragrance must always be applied before makeup",
      "Because fragrance has no fixed place in the sequence",
    ],
    correctIndex: 1,
  },
  {
    question: "What is oud, and why is it highly valued in Middle Eastern perfumery tradition?",
    options: [
      "A synthetic citrus fixative",
      "A resinous, highly prized wood central to Middle Eastern perfumery tradition",
      "A turmeric-based paste ceremony",
      "A French perfumery house",
    ],
    correctIndex: 1,
  },
  {
    question: "What is \"clean perfumery\"?",
    options: [
      "A government-regulated safety certification",
      "An unregulated marketing term describing formulations free of certain synthetic compounds",
      "A synonym for IFRA compliance",
      "A traditional ittar distillation method",
    ],
    correctIndex: 1,
  },
];
