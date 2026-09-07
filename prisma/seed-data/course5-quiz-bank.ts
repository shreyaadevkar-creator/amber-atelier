import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored MCQ knowledge checks for Course V, "The Living Touch."
 *
 * This course's 15-module curriculum was written as narrative teaching content with
 * open-ended reflection prompts and no stored answer key. These questions are a gradable
 * rewrite of the same knowledge points — grounded in each module's real objectives, key
 * terms, and prompts — for instant client-side scoring, not an extraction.
 */
export const course5QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
      {
        question: "What is fascia, as taught in this module?",
        options: [
          "The connective tissue web surrounding and linking muscle throughout the body",
          "A type of muscle fiber",
          "The fluid that lubricates the joints",
          "A synthetic massage lubricant",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why must the lymphatic system rely on external movement and pressure to circulate, unlike blood?",
        options: [
          "Because lymph is thicker than blood",
          "Because the lymphatic system has no pump of its own",
          "Because lymph nodes act as valves that block flow",
          "Because muscles generate lymph fluid directly",
        ],
        correctIndex: 1,
      },
      {
        question: "Where do lymph nodes typically cluster in the body?",
        options: [
          "Neck, underarms, and groin",
          "Wrists, ankles, and knees",
          "Scalp, chest, and lower back",
          "Only in the abdomen",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does massage stroke direction generally move toward the lymph nodes?",
        options: [
          "It feels more relaxing to the client",
          "It supports the lymphatic system's natural drainage pathways",
          "It reduces the amount of oil needed",
          "It is easier on the practitioner's wrists",
        ],
        correctIndex: 1,
      },
      {
        question:
          "According to this module, why does working broadly with the body's fascia and structure often produce better results than working against it?",
        options: [
          "Because fascia has no real function",
          "Because it can release tension that direct pressure alone cannot",
          "Because it burns more calories for the client",
          "Because it requires less training to perform",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What is a bariatric-rated table?",
        options: [
          "Massage equipment rated for a higher weight capacity, essential for inclusive practice",
          "A table with extra padding only",
          "A portable folding table",
          "A table designed only for facials",
        ],
        correctIndex: 0,
      },
      {
        question: "What does \"pressure calibration\" mean in this module?",
        options: [
          "Using the same pressure setting for every client",
          "Matching pressure to each client's individual tolerance rather than one fixed default",
          "Applying the maximum safe pressure at all times",
          "Letting the client physically apply their own pressure",
        ],
        correctIndex: 1,
      },
      {
        question: "What best describes trauma-informed touch?",
        options: [
          "Touch performed silently, without any interruption",
          "Practice that explicitly offers the client control and checks in throughout the service",
          "Touch reserved only for long-standing, returning clients",
          "A technique used only in sports massage",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does this module insist that \"one table setup fits everyone\" was never actually true?",
        options: [
          "Because tables wear out quickly",
          "Because body size, pressure tolerance, and needs vary, so equipment and positioning must adapt accordingly",
          "Because clients always request custom tables",
          "Because insurance requires different tables for different clients",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why should a practitioner check in about pressure more than once during a longer service?",
        options: [
          "Because tolerance and comfort can change over the course of a service, not just at the start",
          "Because it is required paperwork",
          "Because pressure always needs to increase over time",
          "Because clients forget the initial consultation",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "What is an absolute contraindication, as taught in this module?",
        options: [
          "A condition requiring the service be declined entirely",
          "A minor skin condition requiring no changes at all",
          "A condition requiring only extra draping",
          "A client preference that can be overridden",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a relative contraindication?",
        options: [
          "A condition requiring the service be declined entirely",
          "A condition requiring the service be adapted, not necessarily declined",
          "A condition that is irrelevant to bodywork",
          "A condition that only affects facials, not body treatments",
        ],
        correctIndex: 1,
      },
      {
        question: "DVT (deep vein thrombosis) is best described as:",
        options: [
          "A muscle strain from overexertion",
          "A blood clot, typically in the leg, that massage can dangerously dislodge",
          "A skin allergy to massage oil",
          "A contraindication only relevant to waxing services",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why should a health intake form be treated as a safety instrument rather than routine paperwork?",
        options: [
          "Because it protects the business from lawsuits only",
          "Because it surfaces contraindications that determine whether and how a service can safely proceed",
          "Because clients enjoy filling out forms",
          "Because it is only required for payment processing",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why is massage handled differently over a varicose vein compared to the surrounding tissue?",
        options: [
          "Because varicose veins are more ticklish than surrounding skin",
          "Because direct pressure on a varicose vein carries added risk that surrounding tissue does not",
          "Because varicose veins require extra oil to treat",
          "Because it is a purely cosmetic, not medical, concern",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "What is a carrier oil?",
        options: [
          "A synthetic fragrance additive",
          "A base oil that dilutes essential oils to a safe concentration for massage",
          "A hardening agent used in wax",
          "A tool for testing skin sensitivity",
        ],
        correctIndex: 1,
      },
      {
        question: "What is phototoxicity?",
        options: [
          "An allergic reaction to synthetic fragrance",
          "A reaction between certain oils, notably citrus, and UV light, causing burns or pigmentation",
          "A wax temperature measurement error",
          "A reaction that only affects deep skin tones",
        ],
        correctIndex: 1,
      },
      {
        question: "Which essential oil family carries the most notable phototoxicity risk?",
        options: ["Lavender", "Citrus", "Chamomile", "Sandalwood"],
        correctIndex: 1,
      },
      {
        question: "What is the key structural difference between hard wax and soft wax?",
        options: [
          "Hard wax and soft wax are chemically identical",
          "They differ in application and removal, suiting different body areas and skin sensitivities",
          "Soft wax is only ever used on the face",
          "Hard wax is never used in professional practice",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why must wax temperature always be tested on the practitioner's own wrist before every single application?",
        options: [
          "To season the wax before use",
          "To verify the wax is safe and won't burn the client's skin",
          "To check the wax's scent",
          "It is a purely traditional gesture with no safety function",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
      {
        question: "What is Abhyanga?",
        options: [
          "A Japanese pressure-point technique",
          "The traditional Ayurvedic full-body self-oiling practice, historically performed daily",
          "A Hawaiian flowing forearm massage style",
          "A modern percussive massage device",
        ],
        correctIndex: 1,
      },
      {
        question: "What is udvartana, traditionally?",
        options: [
          "A herbal powder body massage for circulation and exfoliation",
          "A form of hot stone therapy",
          "A breathing exercise",
          "A dietary practice",
        ],
        correctIndex: 0,
      },
      {
        question: "In the Vata-Pitta-Kapha framework, what do these three terms represent?",
        options: [
          "Three types of massage oils",
          "The three Ayurvedic constitutional types used to tailor traditional treatment",
          "Three wax temperature settings",
          "Three lymphatic drainage pathways",
        ],
        correctIndex: 1,
      },
      {
        question:
          "According to the Charaka Samhita referenced in this module, how often was Abhyanga traditionally intended to be performed?",
        options: ["Once a year", "Only before weddings", "Daily", "Only in winter"],
        correctIndex: 2,
      },
      {
        question:
          "Why should the dosha framework never replace the medical contraindication screening taught earlier in this course?",
        options: [
          "Because doshas are more medically accurate than contraindication screening",
          "Because a traditional wellness lens does not substitute for identifying medical safety risks",
          "Because doshas are purely decorative language with no other purpose",
          "Because contraindications no longer apply once doshas are considered",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "What is the \"guarding response\"?",
        options: [
          "A client's verbal complaint about pricing",
          "Involuntary muscle tightening triggered by pressure exceeding comfortable tolerance",
          "A stretching technique used in Thai massage",
          "A form of relaxed breathing",
        ],
        correctIndex: 1,
      },
      {
        question: "How does this module define \"effective pressure\"?",
        options: [
          "As much pressure as the client can physically tolerate",
          "Firm enough to engage tissue, held slowly enough to allow genuine release rather than forced compliance",
          "Always light, surface-level pressure",
          "Pressure determined solely by the practitioner's own strength",
        ],
        correctIndex: 1,
      },
      {
        question: "What is low-angle wax removal, and why does it matter?",
        options: [
          "Pulling the strip straight up quickly to save time",
          "Pulling the strip close to parallel to the skin, reducing trauma and ingrown hairs",
          "A technique used only on the face",
          "A method for warming the wax faster",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does this module argue that pain during a massage is not a reliable sign of effectiveness?",
        options: [
          "Because pain always indicates deep, useful tissue release",
          "Because pain more often signals the guarding response rather than genuine, useful release",
          "Because clients cannot accurately sense pain",
          "Because pain is required to release fascia",
        ],
        correctIndex: 1,
      },
      {
        question:
          "How should a practitioner respond to a client who insists \"harder is better\" beyond what is therapeutically useful?",
        options: [
          "Apply the requested pressure regardless of guarding signs",
          "Communicate the pressure philosophy honestly rather than simply complying",
          "End the session immediately without discussion",
          "Ignore the request and continue as planned",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
      {
        question: "What is the professional safe temperature range for hot stones used in this module?",
        options: ["20–25°C", "50–55°C", "70–80°C", "90–100°C"],
        correctIndex: 1,
      },
      {
        question: "How should hot stone temperature always be verified before use on a client?",
        options: [
          "By guessing based on experience alone",
          "By testing it directly, such as against the practitioner's own skin or a thermometer, before client contact",
          "By asking the client to test it themselves",
          "By checking it only once at the start of the day",
        ],
        correctIndex: 1,
      },
      {
        question: "What is \"post-treatment sun sensitivity\"?",
        options: [
          "A permanent skin condition",
          "The increased UV vulnerability of freshly waxed or exfoliated skin",
          "A reaction that only affects hot stone clients",
          "A form of phototoxicity caused only by essential oils",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is freshly waxed or exfoliated skin more vulnerable to sun damage?",
        options: [
          "Because it has just lost a layer of protection, leaving it more exposed",
          "Because wax contains UV-attracting chemicals",
          "Because exfoliation increases melanin production",
          "Because it is always paired with citrus essential oils",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What single habit does this module identify as preventing nearly every heat-related injury it covers?",
        options: [
          "Relying on client feedback alone",
          "Consistently testing and verifying temperature before it ever reaches the client's skin",
          "Using the same stone temperature for every client",
          "Skipping temperature checks once fully trained",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question:
          "Why does lying flat on the back (supine) become unsafe for a pregnant client later in pregnancy?",
        options: [
          "It causes vena cava compression, reducing blood flow",
          "It increases nausea only",
          "It is uncomfortable but carries no real safety risk",
          "It affects only the client's breathing rate",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What position generally replaces supine positioning for pregnancy massage from the second trimester onward?",
        options: [
          "Prone (face-down) position",
          "Side-lying position",
          "Standing position",
          "Inverted position",
        ],
        correctIndex: 1,
      },
      {
        question: "What should generally remain conservative during a postpartum massage?",
        options: [
          "Pressure and technique, given the body's recent recovery from childbirth",
          "Draping only",
          "Session length only",
          "Room temperature only",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should pressure typically be reduced for elderly clients?",
        options: [
          "Because their skin and tissue can be more fragile, and medications or conditions may increase risk",
          "Because elderly clients always request less pressure",
          "Because it saves the practitioner effort",
          "Because it shortens the session time",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why should a teenage client's quiet compliance never be treated as full informed consent?",
        options: [
          "Because minors cannot legally receive massage under any circumstance",
          "Because quiet compliance may reflect discomfort or a wish to please rather than genuine, informed agreement",
          "Because a parent must always answer for them instead",
          "Because consent forms alone are always sufficient",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "Why does the minimum laundering temperature for linens matter?",
        options: [
          "It only affects how soft the linens feel",
          "It ensures a genuine hygiene standard, not merely a visual one",
          "It is purely a cosmetic preference",
          "It has no real bearing on client safety",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does the face cradle require particular sanitation attention?",
        options: [
          "It is the highest-contact surface on the massage table",
          "It is the most expensive part of the table",
          "It is rarely touched by clients",
          "It only needs cleaning once a week",
        ],
        correctIndex: 0,
      },
      {
        question: "What is \"double-dipping\" in waxing, and why is it never acceptable?",
        options: [
          "Applying two layers of wax for better grip, which is standard practice",
          "Reusing a wax applicator in the communal pot after skin contact, which risks cross-contamination",
          "Using two different wax types on one client, which is merely discouraged",
          "Double-checking wax temperature, which is required practice",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should clean and used linens be stored separately?",
        options: [
          "To save on laundry costs",
          "To prevent cross-contamination between sanitized and unsanitized linens",
          "Because clients prefer to see them separated",
          "It has no real hygiene purpose",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which single item, per the double-dipping rule, must never be reused in a communal wax pot after touching a client's skin?",
        options: [
          "The client's linen",
          "The wax applicator",
          "The massage table",
          "The face cradle cover",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "What is \"draping\", as taught in this module?",
        options: [
          "Covering the entire body throughout the service regardless of area",
          "Exposing only the area currently being treated, and fully re-covering before repositioning",
          "A decorative fabric used only in luxury spas",
          "A technique used solely during waxing services",
        ],
        correctIndex: 1,
      },
      {
        question: "What does \"ongoing consent\" mean in a body treatment?",
        options: [
          "Consent given once at booking and never revisited",
          "Reconfirming consent at each stage of a service, not only at initial booking",
          "A legal waiver signed only at the end of a service",
          "Consent that applies only to photography",
        ],
        correctIndex: 1,
      },
      {
        question:
          "What should be reconfirmed immediately before a sensitive-area waxing service begins, even after initial booking?",
        options: [
          "The client's payment method",
          "The client's consent to proceed with that specific service",
          "The client's skincare routine",
          "The room temperature",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why is \"I'm going to end the session here today\" considered a complete sentence, requiring no further justification, when a boundary is crossed?",
        options: [
          "Because practitioners must always justify every decision to the client",
          "Because a practitioner's authority to end a session for their own safety or comfort needs no further explanation",
          "Because it is only used for billing disputes",
          "Because clients must approve the decision first",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does body-treatment photography require particularly careful, specific consent?",
        options: [
          "Because it involves sensitive or exposed body areas beyond general service consent",
          "Because photography is never permitted under any circumstance",
          "Because all clients enjoy being photographed",
          "Because it replaces the need for a health intake form",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question:
          "What do the \"eight-step massage sequence\" and \"six-step waxing sequence\" represent in this module?",
        options: [
          "Optional suggestions practitioners may skip freely",
          "The complete, ordered Amber protocols for each service",
          "A historical account with no practical use today",
          "Marketing terms with no fixed steps",
        ],
        correctIndex: 1,
      },
      {
        question:
          "In general waxing technique, in what relative directions are wax applied and then removed?",
        options: [
          "Applied in the direction of hair growth, removed against it",
          "Applied and removed in the same direction",
          "Direction never matters",
          "Always applied vertically regardless of hair growth",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why should waxing be performed before massage, rather than after, when both services are booked together?",
        options: [
          "Because massage oils on the skin would interfere with wax's ability to grip the hair",
          "Because waxing always takes longer to perform",
          "Because clients prefer waxing first purely for comfort",
          "Because massage must always be scheduled last regardless",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does hair generally need a minimum length before waxing for the wax to grip correctly?",
        options: [
          "Too-short hair won't give the wax enough length to grip and pull it cleanly from the root",
          "Hair length is irrelevant; only wax temperature matters",
          "Longer hair always waxes better regardless of length",
          "Minimum length is only ever a concern for eyebrows",
        ],
        correctIndex: 0,
      },
      {
        question:
          "When checking a finished massage or waxing service, this module's standard asks a practitioner to look for:",
        options: [
          "Even, professional, and complete results",
          "Only that the client says they are satisfied",
          "Only that the scheduled time has elapsed",
          "Only that products were fully used up",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "What are \"Sen lines\" in Thai massage?",
        options: [
          "The traditional energy lines worked during Thai massage stretches",
          "A grading scale for flexibility",
          "A type of wax strip",
          "A Japanese meridian system",
        ],
        correctIndex: 0,
      },
      {
        question: "How is Shiatsu best described?",
        options: [
          "A Hawaiian flowing forearm massage",
          "Japanese finger-pressure technique performed along meridian lines, typically through clothing",
          "A Swedish gliding stroke",
          "An Ayurvedic oil massage",
        ],
        correctIndex: 1,
      },
      {
        question: "What is Lomi Lomi?",
        options: [
          "Hawaiian flowing, forearm-based massage known as \"loving hands\"",
          "A Thai assisted-stretching technique",
          "A Chinese scraping practice",
          "A form of Shiatsu",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Which set of terms make up the foundational Swedish massage stroke vocabulary taught in this module?",
        options: [
          "Sen lines, meridians, marma points",
          "Effleurage, petrissage, tapotement",
          "Abhyanga, udvartana, dosha",
          "Draping, consent, contraindication",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does this module insist on naming each massage tradition specifically (Thai, Shiatsu, Lomi Lomi, Swedish) rather than using a generic term like \"relaxation massage\"?",
        options: [
          "Because generic labeling erases the distinct heritage, technique, and philosophy of each tradition",
          "Because generic terms are illegal to use commercially",
          "Because each tradition is actually identical in practice",
          "Because clients cannot tell the difference anyway",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question: "What are the four pieces of the \"four-piece at-home foundation\" taught in this module?",
        options: [
          "Dry brushing/exfoliation, daily oil or lotion, SPF, and weekly self-oiling",
          "Massage, waxing, sauna, and diet",
          "Retinoid, niacinamide, sunscreen, and cleanser",
          "Abhyanga, udvartana, gua sha, and kobido",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why should a client's body-care routine be adjusted between India's monsoon season and the dry winter season?",
        options: [
          "Because seasonal humidity and dryness change the skin and body's needs, requiring different product choices",
          "Because pricing changes with the season",
          "Because waxing is unavailable during monsoon",
          "Because massage pressure must change with room temperature only",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What is the general waxing maintenance window described in this module, and why does hair length matter within it?",
        options: [
          "Three to five weeks, balancing regrowth length against visible stubble",
          "One week, to avoid any visible regrowth at all",
          "Six months, since wax removes hair permanently",
          "There is no set window; it varies at random",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does this module note that consistent waxing over time tends to produce finer, sparser regrowth?",
        options: [
          "Because repeated removal from the root gradually affects the hair follicle",
          "Because wax permanently bleaches the hair",
          "Because it has no real effect on regrowth at all",
          "Because it only affects hair color, not thickness",
        ],
        correctIndex: 0,
      },
      {
        question: "When prescribing a body-care routine, this module emphasizes recommending within:",
        options: [
          "Only the most expensive options available",
          "A client's budget, without compromising body health",
          "A fixed price point regardless of the client",
          "Whatever product the practitioner personally prefers",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
      {
        question: "What is sugaring, as described in this module?",
        options: [
          "A synthetic laser hair removal method",
          "A natural, body-temperature hair removal paste, a lower-risk alternative to heated wax",
          "A type of massage oil",
          "A percussive massage technique",
        ],
        correctIndex: 1,
      },
      {
        question: "What is a \"percussive massage device\"?",
        options: [
          "A full replacement for a trained practitioner",
          "A handheld tool offering genuine but limited benefit, not a practitioner replacement",
          "A tool used only for waxing",
          "A device with no evidence of any benefit at all",
        ],
        correctIndex: 1,
      },
      {
        question: "Why can't a percussive massage device replace a trained practitioner's judgment?",
        options: [
          "Because it cannot assess contraindications, adapt to individual needs, or apply trained technique",
          "Because it is too expensive for most clients",
          "Because it only works on the face",
          "Because it has been proven completely ineffective",
        ],
        correctIndex: 0,
      },
      {
        question: "What safety advantage does sugaring offer compared to traditional heated wax?",
        options: [
          "Being applied at body temperature, it carries a lower burn risk than heated wax",
          "It is applied well below body temperature",
          "It requires no testing of any kind before use",
          "It has no meaningful safety differences from traditional wax",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this course describe its own stated facts as having a \"shelf life\"?",
        options: [
          "Because evidence and industry practice continue to evolve, and today's facts may be updated over time",
          "Because the course content technically expires after one year",
          "Because facts in bodywork never actually change",
          "Because only wax products have an expiration date",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "What does the capstone portfolio in this final module draw from?",
        options: [
          "A single new module created just for the capstone",
          "Artefacts built across all fourteen preceding modules",
          "Only Module 1",
          "External certification unrelated to this course",
        ],
        correctIndex: 1,
      },
      {
        question: "What must a candidate perform to demonstrate readiness in this final module?",
        options: [
          "A written essay only",
          "A full client service demonstrating the Amber Atelier standard, start to finish",
          "A multiple-choice exam only, with no practical component",
          "A sales pitch to a new client",
        ],
        correctIndex: 1,
      },
      {
        question: "This module asks graduates to articulate the Amber philosophy of bodywork:",
        options: [
          "Only in writing, never aloud",
          "In their own words, to a client or an examiner",
          "Using someone else's script exactly",
          "Only during the first module",
        ],
        correctIndex: 1,
      },
      {
        question: "Completing this final module and its capstone leads to:",
        options: [
          "A refund",
          "Access to Module 1 for the first time",
          "Course V standing as a certified Amber Atelier body & spa practitioner",
          "An unrelated certificate",
        ],
        correctIndex: 2,
      },
      {
        question: "This final module is fundamentally about:",
        options: [
          "A new massage technique",
          "Who you are now as a practitioner, and the work that proves it",
          "A new wax formulation",
          "A pricing strategy",
        ],
        correctIndex: 1,
      },
    ],
  },
];
