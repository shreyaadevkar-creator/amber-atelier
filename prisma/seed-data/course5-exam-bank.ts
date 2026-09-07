import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored 10-question exam for Course V, "The Living Touch," spanning modules across
 * the curriculum. The source material never lists gradable exam questions itself — this
 * bank is authored, not extracted, grounded in each module's real objectives, key terms,
 * and prompts.
 */
export const course5ExamBank: QuizQuestionSeed[] = [
  {
    question: "What is fascia, as taught in the study of the body's architecture?",
    options: [
      "The connective tissue web surrounding and linking muscle throughout the body",
      "A type of bone tissue",
      "The outer layer of skin",
      "A synthetic lubricant",
    ],
    correctIndex: 0,
  },
  {
    question: "What is an absolute contraindication?",
    options: [
      "A condition requiring the service be declined entirely",
      "A condition requiring only a change of massage oil",
      "A condition irrelevant to bodywork",
      "A client preference that can be overridden",
    ],
    correctIndex: 0,
  },
  {
    question:
      "What is phototoxicity, and which essential oil family carries this risk most notably?",
    options: [
      "A wax burn risk linked to lavender oil",
      "A reaction between certain oils, notably citrus, and UV light, causing burns or pigmentation",
      "An allergy commonly linked to sandalwood oil",
      "A dryness issue commonly linked to chamomile oil",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the \"guarding response\"?",
    options: [
      "A relaxed breathing pattern",
      "Involuntary muscle tightening triggered by pressure exceeding comfortable tolerance",
      "A verbal complaint form used after a service",
      "A stretching technique used in Thai massage",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Why does supine (face-up) positioning become unsafe for a pregnant client later in pregnancy?",
    options: [
      "It causes vena cava compression, reducing blood flow",
      "It is simply less comfortable than other positions",
      "It affects only sleep quality, not safety",
      "It has no real medical basis",
    ],
    correctIndex: 0,
  },
  {
    question: "What is \"double-dipping\" in waxing, and why is it never acceptable?",
    options: [
      "Applying a second layer of wax, which is standard practice",
      "Reusing a wax applicator in the communal pot after skin contact, which risks cross-contamination",
      "Double-checking wax temperature, which is required practice",
      "Using two different wax types on one client, which is merely discouraged",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Why should waxing generally be performed before massage when both services are booked together?",
    options: [
      "Because massage oils on the skin would interfere with wax's ability to grip the hair",
      "Because waxing always takes longer to perform",
      "Because clients prefer it that way purely for comfort",
      "Because massage must always be scheduled as the final service",
    ],
    correctIndex: 0,
  },
  {
    question: "How is Shiatsu best described?",
    options: [
      "A Hawaiian flowing forearm massage",
      "Japanese finger-pressure technique performed along meridian lines, typically through clothing",
      "A Swedish gliding stroke",
      "A Thai assisted stretch",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What is the general waxing maintenance window described in this course, and why does hair length matter within it?",
    options: [
      "Three to five weeks, balancing regrowth length against visible stubble",
      "One week only, to avoid any visible regrowth",
      "Six months, since wax removes hair permanently",
      "There is no consistent window; it varies at random",
    ],
    correctIndex: 0,
  },
  {
    question: "Completing the capstone in this course's final module leads to:",
    options: [
      "A refund",
      "Access to Module 1 for the first time",
      "Course V standing as a certified Amber Atelier body & spa practitioner",
      "An unrelated certificate",
    ],
    correctIndex: 2,
  },
];
