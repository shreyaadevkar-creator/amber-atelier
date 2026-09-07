import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored MCQ knowledge checks for Course IV, "The Living Hand."
 *
 * The source material writes each module's quiz as five open-ended reflection prompts with
 * no stored answer key. These questions are a gradable rewrite of the same objectives, key
 * terms, and prompts, for instant client-side scoring — not an extraction.
 */
export const course4QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
      {
        question:
          "Which structure is the hidden site beneath the cuticle where new nail cells are produced?",
        options: ["Lunula", "Matrix", "Hyponychium", "Free edge"],
        correctIndex: 1,
      },
      {
        question: "What is the lunula?",
        options: [
          "The hidden structure that produces new nail cells",
          "The visible crescent portion of the matrix at the nail's base",
          "The seal protecting the underside of the nail plate",
          "The dense keratin structure of the nail plate itself",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does damage to the matrix matter more than damage to the visible nail plate?",
        options: [
          "The matrix is where nail cells are actually produced, so damage there affects future growth",
          "The matrix has no real function",
          "The nail plate cannot be damaged",
          "Matrix damage only ever affects toenails",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement about fingernail and toenail growth is correct, per this module?",
        options: [
          "They grow at exactly the same rate",
          "Fingernails and toenails grow at different rates, for identifiable reasons",
          "Growth rate has no bearing on nail health",
          "Toenails do not grow at all",
        ],
        correctIndex: 1,
      },
      {
        question: "Why do nails behave more brittle than hair under similar mechanical stress?",
        options: [
          "The nail plate is made of hard keratin, a dense, low-moisture protein distinct from hair's keratin",
          "Nails contain no keratin at all",
          "Hair and nails are chemically identical",
          "Nails are actually softer than hair",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What are Beau's lines?",
        options: [
          "Natural vertical ridges that increase with age",
          "Horizontal grooves marking a past disruption to nail growth",
          "A free-edge nail shape",
          "A capillary refill test",
        ],
        correctIndex: 1,
      },
      {
        question: "What is capillary refill, and why does this module emphasize it?",
        options: [
          "A colour-return test that remains reliable across all skin tones",
          "A cosmetic nail shape",
          "A style of free edge",
          "A treatment for fungal infection",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What should a practitioner use as the true reference point when reading a client's nail bed colour?",
        options: [
          "A generic fair-skin standard",
          "The client's own normal nail bed baseline",
          "A photograph from a textbook",
          "The colour of the cuticle",
        ],
        correctIndex: 1,
      },
      {
        question: "How does ordinary vertical ridging differ from Beau's lines?",
        options: [
          "Ridging runs horizontally while Beau's lines run vertically",
          "Ridging is a normal ageing pattern, while Beau's lines mark a past disruption to growth",
          "They are the same condition under two names",
          "Beau's lines are purely cosmetic and never significant",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does this module caution against diagnostic techniques calibrated only on fair skin?",
        options: [
          "They remain equally accurate on every skin tone",
          "They can misread nail bed colour and health signals on deeper skin tones, so techniques like capillary refill should be relied on instead",
          "They are simply more expensive to perform",
          "They only ever apply to toenails",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "Onychomycosis refers to:",
        options: [
          "A fungal nail infection causing thickening, yellowing, and crumbling",
          "A spoon-shaped nail deformity",
          "An infection of the nail fold",
          "A bulbous fingertip and nail curvature",
        ],
        correctIndex: 0,
      },
      {
        question: "Paronychia is best described as:",
        options: [
          "A fungal infection of the nail plate",
          "Infection of the nail fold — red, swollen, warm, sometimes with pus",
          "Iron-deficiency related spoon nails",
          "A benign vertical ridge",
        ],
        correctIndex: 1,
      },
      {
        question: "Koilonychia (spoon-shaped nails) is sometimes associated with:",
        options: ["Iron-deficiency anaemia", "Fungal infection", "Cardiopulmonary disease", "Ageing alone"],
        correctIndex: 0,
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
        question: "Why must onychomycosis never simply be polished over?",
        options: [
          "Polish has no interaction with fungal infections at all",
          "It is an active infection that must be recognised and appropriately addressed, not cosmetically concealed",
          "Polish actually improves fungal infections",
          "It is not considered a real nail condition",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "The \"toxic trio\" refers to which three traditional polish ingredients?",
        options: [
          "Formaldehyde, toluene, and DBP",
          "EMA, MMA, and acetone",
          "Biotin, keratin, and collagen",
          "UVA, UVB, and LED",
        ],
        correctIndex: 0,
      },
      {
        question: "What does a photoinitiator do in gel polish?",
        options: [
          "It is the light-reactive molecule that cures gel polish under UV/LED light",
          "It removes gel polish during soak-off",
          "It strengthens the natural nail plate",
          "It is simply a fragrance additive",
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
        question:
          "How should marketed nail-strengthening actives like biotin be evaluated, per this module?",
        options: [
          "By marketing claims alone",
          "Against real evidence, since not all show genuine benefit for every client",
          "By price point only",
          "They should never be evaluated at all",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Under what specific condition does biotin supplementation show genuine strengthening benefit?",
        options: [
          "It always strengthens nails regardless of diet",
          "Only when it is correcting an actual biotin deficiency",
          "Only when combined with MMA",
          "It has no evidence of benefit under any condition",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
      {
        question: "What is alta?",
        options: [
          "Traditional red dye for feet and hands, associated with prosperity and auspiciousness",
          "Ceremonial henna hand art",
          "Traditional sesame oil used for massage",
          "A modern gel polish base coat",
        ],
        correctIndex: 0,
      },
      {
        question:
          "How does mehndi's role on the hands differ from henna's role in hair care, taught in Course II?",
        options: [
          "They are identical uses of the same product",
          "Mehndi is ceremonial hand art, distinct from henna's use as a hair treatment",
          "Mehndi is only ever used on toenails",
          "Henna is never used on the hands",
        ],
        correctIndex: 1,
      },
      {
        question: "Til oil is traditionally used for:",
        options: [
          "Warming hand and foot massage",
          "Removing nail polish",
          "Curing gel polish",
          "Treating fungal nail infection",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should alta application never be treated as a fast, generic add-on?",
        options: [
          "Because it carries traditional and symbolic significance that deserves genuine reverence",
          "Because it is chemically hazardous",
          "Because it requires no real skill to apply",
          "Because it is purely decorative with no history behind it",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What principle unites alta, mehndi, and traditional hand-care oils with the rest of the Amber curriculum?",
        options: [
          "Treating heritage practices with the same reverence taught throughout the Atelier",
          "Replacing traditional practices with modern chemistry",
          "Ignoring cultural context in favour of speed",
          "Standardising every tradition into one global technique",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "What is the professional standard for cuticle care, per this module?",
        options: [
          "Cutting the cuticle for a cleaner look",
          "Pushing the cuticle back, preserving its seal against infection",
          "Removing the cuticle entirely with a blade",
          "Ignoring the cuticle altogether",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does cutting live cuticle tissue increase infection risk?",
        options: [
          "It removes a protective seal, creating an entry point for infection",
          "It has no real effect on infection risk",
          "It strengthens the surrounding nail plate",
          "It only ever affects toenails",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the only acceptable method for removing gel or acrylic, per this module?",
        options: [
          "Prying it off with a metal tool",
          "Soaking it off",
          "Filing it off rapidly with a coarse file",
          "Cutting it off with clippers",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does one-direction filing cause less damage than a back-and-forth sawing motion?",
        options: [
          "It reduces heat and structural stress on the nail plate",
          "It is simply faster to perform",
          "It requires a coarser grit file",
          "It has no real effect on the nail plate",
        ],
        correctIndex: 0,
      },
      {
        question:
          "When a client blames \"gel\" for weak, damaged nails, what does this module identify as the usual true cause?",
        options: [
          "The gel product itself is inherently unsafe",
          "Improper technique, such as pry-off removal or over-filing, rather than gel itself",
          "The client's diet",
          "The UV lamp used to cure the gel",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
      {
        question: "What type of radiation do gel-curing nail lamps primarily emit?",
        options: ["UVA", "UVB", "UVC", "Infrared only"],
        correctIndex: 0,
      },
      {
        question:
          "What is the single most effective, simplest protection this module recommends against cumulative lamp exposure?",
        options: [
          "A hand sunscreen habit before curing",
          "Avoiding gel manicures entirely",
          "Using a stronger curing lamp",
          "Wearing gloves with no sunscreen underneath",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is dust extraction important at a nail station, per this module?",
        options: [
          "It reduces the practitioner's occupational exposure to filing dust",
          "It has no real health purpose",
          "It only ever affects the client",
          "It replaces the need for any ventilation",
        ],
        correctIndex: 0,
      },
      {
        question:
          "According to current evidence discussed in this module, occasional gel manicures are generally regarded as:",
        options: [
          "Extremely high risk, requiring avoidance",
          "A manageable risk profile, with the hand sunscreen habit recommended as protection",
          "Completely risk-free, with no precautions needed",
          "More dangerous than direct, unprotected sun exposure",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why should filing dust be treated as an occupational health concern for the practitioner, not just the client?",
        options: [
          "The practitioner is repeatedly exposed to it across many services, unlike a single client",
          "Dust only ever affects clients' nails, not health",
          "Dust exposure is purely a marketing concern",
          "It has no cumulative effect over time",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question:
          "What heightened risk means a diabetic client's nail service requires special caution?",
        options: [
          "Infection and slow-healing risk, requiring push-only cuticle care",
          "Faster nail growth requiring more frequent visits",
          "Excess nail strength requiring stronger filing",
          "No special precautions are actually needed",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What should a practitioner do if she notices a sore or wound on a diabetic client's foot?",
        options: [
          "Continue the service exactly as planned",
          "Address it appropriately rather than proceeding as normal, given the elevated risk",
          "Ignore it, since it is not her concern",
          "Apply polish directly over it",
        ],
        correctIndex: 1,
      },
      {
        question: "Age-related nail thinning is best described as:",
        options: [
          "Slower growth and increased brittleness requiring gentler technique",
          "Faster growth requiring more frequent filing",
          "A condition unique to children",
          "Something that only ever affects toenails",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is cutting the cuticle specifically dangerous for a diabetic client?",
        options: [
          "It removes a protective seal at a time when infection and healing risk are already elevated",
          "It has no additional risk for diabetic clients",
          "It improves circulation in diabetic feet",
          "Diabetic clients cannot feel pain, so it is safe",
        ],
        correctIndex: 0,
      },
      {
        question: "What should a practitioner adapt when serving a child client, per this module?",
        options: [
          "Product and technique choices appropriate to a child",
          "Nothing; children's services are identical to adults'",
          "Only the price of the service",
          "Only the length of the appointment",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "What is an autoclave?",
        options: [
          "Pressurised steam sterilization equipment, the required standard for metal implements",
          "A type of pedicure basin",
          "A porous single-use buffer",
          "A chemical disinfectant spray",
        ],
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
        question: "Why can nail files and buffers not be reliably reused across clients?",
        options: [
          "They are porous tools that cannot be reliably sterilized",
          "They are made of metal and rust easily",
          "They are simply too expensive to sterilize",
          "They have no bearing on infection risk",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the correct response to a tool that has drawn blood during a service?",
        options: [
          "Continue using it for the rest of the service",
          "Set it aside immediately and follow proper sterilization or disposal protocol before any reuse",
          "Rinse it briefly with water and continue",
          "Return it to the shared tool tray for the next client",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the difference between cleaning, disinfecting, and sterilizing?",
        options: [
          "They are three distinct levels of decontamination, each required in different situations",
          "They are all the same process under different names",
          "Only sterilizing is ever necessary",
          "Cleaning is more effective than sterilizing",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "What must informed consent for extensions include, per this module?",
        options: [
          "Full understanding of maintenance, removal, and natural-nail impact before service",
          "Only the price of the service",
          "A verbal agreement with no further explanation",
          "Nothing; extensions require no special consent",
        ],
        correctIndex: 0,
      },
      {
        question: "Onychophagia refers to:",
        options: [
          "Chronic nail-biting, often linked to anxiety or repetitive behaviour patterns",
          "A fungal nail infection",
          "A ceremonial hand art",
          "A measurement of nail growth rate",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is scolding language inappropriate when addressing a client's nail-biting?",
        options: [
          "It is judgmental and unhelpful, given the behaviour's link to anxiety or repetitive patterns",
          "Scolding is always the fastest way to stop biting",
          "Clients generally enjoy being scolded",
          "It has no effect on the client either way",
        ],
        correctIndex: 0,
      },
      {
        question:
          "How can a protective extension service genuinely help a client working to stop biting her nails?",
        options: [
          "By providing a physical barrier that supports her effort, approached with care rather than judgment",
          "By punishing her for the habit",
          "By making her nails weaker so she stops caring about them",
          "It cannot meaningfully help at all",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What is the correct way to request photo consent before posting a completed look?",
        options: [
          "Post it first, then ask afterward",
          "Ask directly and respectfully before posting",
          "Assume consent unless the client objects",
          "Never ask, since it is unnecessary",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question: "What condition is required of the nail plate immediately before polish application?",
        options: [
          "It should be oil-free",
          "It should be freshly oiled",
          "It should be left damp",
          "It should be buffed with a coarse file",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the single most common cause of premature polish lifting, per this module?",
        options: [
          "Residual oil or moisture left on the nail plate before polish",
          "Using too many coats of polish",
          "Curing under an LED lamp",
          "Filing in a single direction",
        ],
        correctIndex: 0,
      },
      {
        question: "Why must cuticle work always follow a soak or soften step?",
        options: [
          "Softened cuticle can be worked on more safely and effectively",
          "It has no bearing on the outcome",
          "Cuticle work should actually precede soaking",
          "Soaking is only ever relevant for pedicures",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should blade-based callus tools be avoided, per this module?",
        options: [
          "They pose a safety and technique risk compared to gentler alternatives",
          "They are simply more expensive than files",
          "They work too slowly to be practical",
          "They are required by law to be avoided",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this module describe massage as a genuine step, not a filler add-on?",
        options: [
          "It is a meaningful, deliberate part of the service, not something to merely pass the time",
          "Massage involves no real technique",
          "It is optional and rarely actually performed",
          "It replaces the need for cuticle care",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "Kundan-stone embellishment is:",
        options: [
          "A traditional Indian stone-setting technique used in bridal nail art",
          "A Korean minimalist finish",
          "A Japanese detailing tool",
          "A synthetic gel base coat",
        ],
        correctIndex: 0,
      },
      {
        question: "The \"glazed\" nail finish is associated with which tradition, and what is its character?",
        options: [
          "Korean; a soft, glassy, minimalist trend",
          "Indian; ornate bridal stone-setting",
          "Japanese; intricate precision detail art",
          "American; a bold, high-shine French tip",
        ],
        correctIndex: 0,
      },
      {
        question: "Where did the \"French\" manicure actually originate, per this module?",
        options: [
          "It was popularised in 1970s Hollywood, despite its name",
          "It originated in Paris in the 1800s",
          "It has no documented origin",
          "It originated in Japan",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this module insist on naming each nail-art tradition's true origin?",
        options: [
          "To give appropriate credit and avoid misattributing a cultural technique",
          "Origin has no bearing on how a technique is taught",
          "To discourage practising techniques from other cultures",
          "Because origin alone determines pricing",
        ],
        correctIndex: 0,
      },
      {
        question: "What philosophy connects the Korean glazed finish to Course III?",
        options: [
          "A shared minimalist, less-is-more philosophy",
          "A shared use of kundan stones",
          "A shared origin in 1970s Hollywood",
          "No connection exists between them",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question: "What are the four pieces of the at-home foundation routine, per this module?",
        options: [
          "Cuticle oil, SPF hand cream, gentle remover, and protective gloves",
          "Base coat, top coat, cuticle oil, and buffer",
          "Acetone, primer, gel base, and top coat",
          "Filing tools, buffer, cuticle nipper, and polish",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does monsoon season raise fungal infection risk, per this module?",
        options: [
          "Increased moisture and dampness create conditions favourable to fungal growth",
          "Cold, dry air dries out the nail plate",
          "Monsoon season has no real bearing on fungal risk",
          "UV exposure increases sharply during monsoon",
        ],
        correctIndex: 0,
      },
      {
        question: "What is \"lever-effect damage\"?",
        options: [
          "Structural strain on regrown nail beneath an overdue extension or gel infill",
          "Damage caused by cutting the cuticle",
          "Damage from UV lamp exposure",
          "A type of fungal infection",
        ],
        correctIndex: 0,
      },
      {
        question: "Why might household gloves be one of the highest-impact recommendations in this module?",
        options: [
          "They protect hands from repeated chemical and water exposure at low cost and effort",
          "They are the most expensive item in the routine",
          "They replace the need for cuticle oil entirely",
          "They have no real protective value",
        ],
        correctIndex: 0,
      },
      {
        question:
          "If a client can only afford one product from the foundation routine, what does this module suggest?",
        options: [
          "Prioritise the single item identified as offering the most meaningful protection for the investment",
          "Recommend the most expensive option available",
          "Recommend whichever product happens to be trending",
          "Discourage a partial routine entirely",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
      {
        question: "What is a reusable press-on system?",
        options: [
          "A lower-chemical-exposure alternative to repeated gel or acrylic cycles",
          "A single-use disposable nail tip",
          "A type of UV-curing lamp",
          "A fungal nail treatment product",
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
        question: "What sustainability case supports high-quality reusable press-on systems?",
        options: [
          "They reduce repeated chemical exposure and product waste compared to gel or acrylic cycles",
          "They require more product per service than gel",
          "They are always disposed of after a single wear",
          "They offer no environmental advantage at all",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this course describe its own facts as having a \"shelf life\"?",
        options: [
          "Because nail-care science and industry practice continue to evolve over time",
          "Because the facts taught are permanently fixed and unchanging",
          "Because the course itself will be discontinued",
          "Because facts expire on a fixed calendar date",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What is the one durable skill this module asks practitioners to carry forward, regardless of new trends?",
        options: [
          "The ability to evaluate new claims and techniques with informed judgment",
          "Memorising every current product formulation",
          "Avoiding all new technology permanently",
          "Relying solely on price to judge quality",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "What does the capstone portfolio draw from, per this module?",
        options: [
          "Artefacts built across all fourteen preceding modules",
          "A single module chosen at random",
          "External certifications unrelated to this course",
          "Only the final exam score",
        ],
        correctIndex: 0,
      },
      {
        question: "What must a candidate demonstrate to complete the capstone service?",
        options: [
          "A full client service demonstrating the Amber Atelier standard, start to finish",
          "Only a written essay",
          "A single nail-art technique in isolation",
          "Product knowledge only, with no live service",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a candidate expected to do with the Amber philosophy of nail care?",
        options: [
          "Articulate it in their own words to a client or examiner",
          "Memorise it verbatim from the textbook",
          "Avoid discussing it entirely",
          "Leave it undefined for the client",
        ],
        correctIndex: 0,
      },
      {
        question: "What does completing this module grant a candidate?",
        options: [
          "Course IV standing as a certified Amber Atelier nail practitioner",
          "Automatic enrollment in Course V",
          "A refund on course fees",
          "Nothing beyond a certificate of attendance",
        ],
        correctIndex: 0,
      },
      {
        question: "This final module is fundamentally about:",
        options: [
          "Who the practitioner is now, and the work that proves it",
          "A new chemical formulation",
          "A pricing strategy for services",
          "A single nail-art trend",
        ],
        correctIndex: 0,
      },
    ],
  },
];
