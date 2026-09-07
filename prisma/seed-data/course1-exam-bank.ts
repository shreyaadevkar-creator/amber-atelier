import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored 10-question exam for Course I, spanning modules across the curriculum.
 * The source (Module 15's capstone description) specifies "ten questions... sixty minutes"
 * but never lists the questions themselves — this bank is authored, not extracted.
 */
export const course1ExamBank: QuizQuestionSeed[] = [
  {
    question: "Which layer of the skin holds roughly 90% of its thickness, rich in collagen and elastin?",
    options: ["Epidermis", "Dermis", "Hypodermis", "Stratum corneum"],
    correctIndex: 1,
  },
  {
    question: "What does the Fitzpatrick scale actually measure?",
    options: ["Skin's UV/sun response", "Skin oiliness", "Pore size", "Wrinkle depth"],
    correctIndex: 0,
  },
  {
    question: "Which active is a vitamin A derivative that accelerates cell turnover and boosts collagen?",
    options: ["Niacinamide", "BHA", "Retinoid", "SPF"],
    correctIndex: 2,
  },
  {
    question: "What is curcumin?",
    options: [
      "Turmeric's active anti-inflammatory, antioxidant compound",
      "A synthetic preservative",
      "A sunscreen filter",
      "A type of clay",
    ],
    correctIndex: 0,
  },
  {
    question: "A \"reset protocol\" for over-treated skin means:",
    options: [
      "Adding more actives quickly",
      "Stripping a routine to essentials to allow barrier recovery",
      "A deep chemical peel",
      "A one-time facial",
    ],
    correctIndex: 1,
  },
  {
    question: "\"Broad-spectrum\" sunscreen means protection against:",
    options: ["Only UVA", "Only UVB", "Both UVA and UVB", "Only visible light"],
    correctIndex: 2,
  },
  {
    question: "What is the minimum non-negotiable waiting period for a patch test?",
    options: ["1–2 hours", "24–48 hours", "5 minutes", "One week"],
    correctIndex: 1,
  },
  {
    question: "Why is the cleanse in the professional facial called a \"double cleanse\"?",
    options: [
      "It uses two different brands",
      "It combines an oil-based cleanse then a water-based cleanse",
      "It is done twice a day only",
      "It doubles the price",
    ],
    correctIndex: 1,
  },
  {
    question: "Gua Sha is best described as:",
    options: [
      "An Ayurvedic oil massage",
      "The Chinese practice of scraping the skin with a smooth tool for drainage and circulation",
      "A Korean lymphatic technique",
      "A sunscreen application method",
    ],
    correctIndex: 1,
  },
  {
    question: "The \"five questions\" framework taught for evaluating a new skincare claim includes all EXCEPT:",
    options: ["Claim", "Evidence", "Source", "Price"],
    correctIndex: 3,
  },
];
