import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored 10-question exam for Course IV, "The Living Hand," spanning modules across the
 * full curriculum. The source material writes each module as open-ended reflection prompts
 * with no stored answer key — this bank is authored, not extracted.
 */
export const course4ExamBank: QuizQuestionSeed[] = [
  {
    question:
      "Which structure is the hidden site beneath the cuticle where new nail cells are produced?",
    options: ["Lunula", "Matrix", "Hyponychium", "Free edge"],
    correctIndex: 1,
  },
  {
    question:
      "Nail clubbing is linked to which category of underlying condition, and what should a practitioner do?",
    options: [
      "Cardiopulmonary conditions; always refer for medical attention",
      "A harmless cosmetic variation; polish over it",
      "Fungal infection; recommend an antifungal cream",
      "Iron deficiency; recommend supplements",
    ],
    correctIndex: 0,
  },
  {
    question: "Why is MMA considered unsafe for professional nail use, unlike EMA?",
    options: [
      "MMA is simply more expensive than EMA",
      "EMA and MMA are chemically identical",
      "MMA is the safe, professional-standard monomer, while EMA is restricted",
      "MMA is the restricted, unsafe monomer, while EMA is the safe professional standard",
    ],
    correctIndex: 3,
  },
  {
    question: "What is the only acceptable method for removing gel or acrylic, per this course?",
    options: [
      "Prying it off with a metal tool",
      "Soaking it off",
      "Filing it off rapidly with a coarse file",
      "Cutting it off with clippers",
    ],
    correctIndex: 1,
  },
  {
    question: "What type of radiation do gel-curing nail lamps primarily emit?",
    options: ["UVA", "UVB", "UVC", "Infrared only"],
    correctIndex: 0,
  },
  {
    question:
      "Why have traditional whirlpool pedicure basins been linked to documented infection outbreaks, and what design addresses it?",
    options: [
      "Their plumbing is hard to disinfect; a pipeless basin design avoids this",
      "They use too much water; a smaller basin fixes this",
      "They are too expensive; a cheaper basin fixes this",
      "There is no documented concern with whirlpool basins",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the single most common cause of premature polish lifting?",
    options: [
      "Residual oil or moisture left on the nail plate before polish",
      "Using too many coats of polish",
      "Curing under an LED lamp",
      "Filing in a single direction",
    ],
    correctIndex: 0,
  },
  {
    question: "Where did the \"French\" manicure actually originate?",
    options: [
      "It was popularised in 1970s Hollywood, despite its name",
      "It originated in Paris in the 1800s",
      "It has no documented origin",
      "It originated in Japan",
    ],
    correctIndex: 0,
  },
  {
    question: "How should a practitioner evaluate a \"smart nail\" health-monitoring claim?",
    options: [
      "With appropriate scepticism, since the technology is early-stage",
      "By accepting all marketing claims at face value",
      "By dismissing the entire category outright, without consideration",
      "By assuming it always works exactly as advertised",
    ],
    correctIndex: 0,
  },
  {
    question: "What does the capstone portfolio draw from?",
    options: [
      "Artefacts built across all fourteen preceding modules",
      "A single module chosen at random",
      "External certifications unrelated to this course",
      "Only the final exam score",
    ],
    correctIndex: 0,
  },
];
