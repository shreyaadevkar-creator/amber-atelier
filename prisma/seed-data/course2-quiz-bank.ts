import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored MCQ knowledge checks for Course II, "The Living Crown."
 *
 * The source material writes each module's quiz as five open-ended reflection prompts
 * with no stored answer key. These questions are a gradable rewrite of the same
 * knowledge points (objectives, key terms, and prompts), for instant client-side
 * scoring — not an extraction.
 */
export const course2QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
      {
        question: "Which three layers make up a single hair strand, from outside to inside?",
        options: [
          "Epidermis, dermis, hypodermis",
          "Cuticle, cortex, medulla",
          "Follicle, papilla, bulb",
          "Keratin, melanin, sebum",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the dermal papilla?",
        options: [
          "The visible tip of the hair shaft",
          "The living structure beneath the scalp that produces and nourishes the hair",
          "A gland that produces sebum only",
          "The outermost layer of the cuticle",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which phase of the hair growth cycle is the active growth phase, in which the follicle is producing new hair?",
        options: ["Catagen", "Telogen", "Exogen", "Anagen"],
        correctIndex: 3,
      },
      {
        question:
          "Why do disulfide bonds in keratin matter more to a practitioner than hydrogen or salt bonds?",
        options: [
          "They are temporary and broken by water alone",
          "They are the permanent bonds altered by chemical services such as relaxers and perms",
          "They only exist in the medulla",
          "They have no structural role in hair",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the scalp microbiome?",
        options: [
          "A synthetic protective coating",
          "The living ecosystem of beneficial microbes on the scalp",
          "A medical term for dandruff",
          "The blood supply feeding the follicle",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What determines a person's curl pattern?",
        options: ["Porosity level", "The shape of the hair follicle", "Diet", "Age"],
        correctIndex: 1,
      },
      {
        question:
          "This module describes the curl pattern spectrum from straight to coily as:",
        options: [
          "A hierarchy from best to worst",
          "A spectrum, not a hierarchy",
          "Determined by ethnicity alone",
          "Irrelevant to product choice",
        ],
        correctIndex: 1,
      },
      {
        question: "Porosity refers to:",
        options: [
          "The number of strands per square inch of scalp",
          "The cuticle's ability to absorb and retain moisture",
          "The width of an individual strand",
          "The curl shape of the follicle",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Density and thickness are often confused. Density refers to ___, while thickness refers to ___.",
        options: [
          "strand diameter; strands per square inch of scalp",
          "strands per square inch of scalp; the width of an individual strand",
          "porosity; curl pattern",
          "product absorption; curl shape",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Type 4 hair is the most mechanically fragile texture, despite appearing the most resilient, chiefly because:",
        options: [
          "Its tight coils create more bend points along the strand where breakage can occur",
          "It always has the lowest porosity",
          "It grows faster than other textures",
          "It contains no cuticle layer",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "Pityriasis capitis, commonly known as dandruff, is caused by:",
        options: [
          "An autoimmune reaction",
          "Overgrowth of Malassezia yeast",
          "Sustained tension on the follicle",
          "Genetic hormone sensitivity",
        ],
        correctIndex: 1,
      },
      {
        question: "Alopecia areata is best described as:",
        options: [
          "Genetic, hormone-linked thinning",
          "Autoimmune, patchy hair loss",
          "Hair loss caused by sustained tension",
          "A yeast overgrowth condition",
        ],
        correctIndex: 1,
      },
      {
        question: "Traction alopecia is caused by:",
        options: [
          "Autoimmune attack on follicles",
          "Genetic hormone sensitivity",
          "Sustained tension on the follicle",
          "Malassezia yeast overgrowth",
        ],
        correctIndex: 2,
      },
      {
        question: "\"Scope of practice\" refers to:",
        options: [
          "The list of products a salon stocks",
          "The boundary between what a practitioner may treat and what requires medical referral",
          "The typical length of a service appointment",
          "A certification renewal schedule",
        ],
        correctIndex: 1,
      },
      {
        question:
          "According to this module, referring a client to a doctor or trichologist when a condition is beyond scope is:",
        options: [
          "A sign of failure",
          "A mark of professionalism",
          "Unnecessary if the client insists otherwise",
          "Only required for legal reasons",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "A chemical relaxer works by:",
        options: [
          "Depositing pigment in the cortex",
          "An alkaline process that permanently straightens the strand",
          "Coating the cuticle with a temporary polymer",
          "Boiling internal moisture in the strand",
        ],
        correctIndex: 1,
      },
      {
        question: "A perm is best described as:",
        options: [
          "An ammonia-based colour service",
          "A thioglycolate-based service that permanently curls the strand",
          "A keratin-smoothing treatment",
          "A protein-only conditioning mask",
        ],
        correctIndex: 1,
      },
      {
        question: "Oxidative (permanent) colour uses ammonia and peroxide to:",
        options: [
          "Strip the cuticle only",
          "Deposit pigment in the cortex",
          "Rebuild disulfide bonds",
          "Reduce porosity",
        ],
        correctIndex: 1,
      },
      {
        question: "What does a bond-building treatment do during a chemical service?",
        options: [
          "Adds shine only",
          "Protects disulfide bonds",
          "Lowers the pH of a relaxer",
          "Replaces the need for a patch test",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why are patch and strand tests considered non-negotiable before a chemical service?",
        options: [
          "They are optional courtesy steps",
          "They check for allergic reaction and structural safety before risking damage",
          "They are only required for colour services",
          "They replace the need for a consultation",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
      {
        question: "The word \"shampoo\" originates from:",
        options: [
          "A French cosmetics term",
          "The Sanskrit word for lather",
          "\"Champi,\" the traditional Indian practice of oiled scalp massage",
          "A Victorian-era trademark",
        ],
        correctIndex: 2,
      },
      {
        question: "Which of the following is a natural dye that also conditions the hair?",
        options: ["Bhringraj", "Shikakai", "Henna (mehndi)", "Amla"],
        correctIndex: 2,
      },
      {
        question:
          "What makes coconut oil structurally distinct from many other oils in how it interacts with hair?",
        options: [
          "It cannot penetrate the cuticle at all",
          "It penetrates the strand and reduces protein loss",
          "It bleaches melanin",
          "It only coats the surface, like a silicone",
        ],
        correctIndex: 1,
      },
      {
        question: "Bhringraj, Amla, and Shikakai are described in this module as:",
        options: [
          "Synthetic preservatives",
          "Core botanicals in India's traditional hair pharmacy",
          "Types of chemical relaxers",
          "Modern biotech actives",
        ],
        correctIndex: 1,
      },
      {
        question:
          "This module frames responsible sourcing of slow-growing botanicals as a matter of:",
        options: [
          "No real concern to practitioners",
          "A responsibility to consider, since some botanicals take years, not seasons, to yield",
          "Only the manufacturer's concern",
          "A marketing strategy only",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "Low-manipulation styling means:",
        options: [
          "Styling hair as often as possible",
          "Minimising daily handling of the hair to reduce cumulative mechanical stress",
          "Using only chemical treatments",
          "Avoiding all forms of styling permanently",
        ],
        correctIndex: 1,
      },
      {
        question: "Protective styling is best described as:",
        options: [
          "A one-time deep conditioning treatment",
          "Styles that tuck fragile ends away from friction and daily handling",
          "A chemical relaxer technique",
          "A scalp exfoliation method",
        ],
        correctIndex: 1,
      },
      {
        question: "Cumulative damage refers to:",
        options: [
          "A single traumatic chemical burn",
          "The compounding effect of small, repeated mechanical stresses over time",
          "Damage caused only by UV exposure",
          "Damage that fully heals overnight",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does detangling from the ends upward cause less breakage than a root-to-tip brush stroke?",
        options: [
          "It eases knots gradually rather than forcing through the most tangled area all at once",
          "It uses more heat",
          "It coats the cuticle with oil",
          "It requires a chemical treatment first",
        ],
        correctIndex: 0,
      },
      {
        question:
          "This module identifies low-manipulation styling as mattering most for which texture?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        correctIndex: 3,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
      {
        question: "Photo-oxidation refers to:",
        options: [
          "Chemical relaxing of the strand",
          "UV-driven breakdown of melanin and cuticle protein",
          "A perming reaction",
          "The natural shedding cycle",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is colour-treated hair especially vulnerable to UV damage?",
        options: [
          "It is not more vulnerable than untreated hair",
          "The colour service has already altered the strand's structure, so UV exposure compounds the existing damage",
          "Colour adds a protective UV coating",
          "Dyed hair grows faster, outpacing damage",
        ],
        correctIndex: 1,
      },
      {
        question: "What is \"bubble hair\"?",
        options: [
          "A styling technique using round brushes",
          "Internal fracturing of the strand from boiled internal moisture under excess heat",
          "A porosity test result",
          "A type of protective style",
        ],
        correctIndex: 1,
      },
      {
        question: "A heat protectant works by:",
        options: [
          "Permanently altering disulfide bonds",
          "Coating the strand to raise the damage threshold and distribute heat more evenly",
          "Replacing the need for a patch test",
          "Bleaching the cuticle",
        ],
        correctIndex: 1,
      },
      {
        question:
          "According to this module, is skipping a heat protectant before thermal styling ever optional?",
        options: [
          "Yes, for fine hair only",
          "Yes, if the tool is on a low setting",
          "No — it is never optional before thermal styling",
          "No, only for chemically treated hair",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question: "Telogen effluvium is best described as:",
        options: [
          "Permanent, genetic hair loss",
          "Temporary, synchronized shedding, commonly postpartum or stress-related",
          "Autoimmune, patchy hair loss",
          "A scalp fungal infection",
        ],
        correctIndex: 1,
      },
      {
        question: "Female pattern hair loss is:",
        options: [
          "Always temporary and stress-related",
          "Diffuse, hormone-linked thinning associated with menopause",
          "Caused exclusively by traction",
          "The same condition as alopecia areata",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the biological mechanism behind natural greying?",
        options: [
          "Loss of keratin production",
          "Melanocyte stem cell depletion",
          "Increased sebum production",
          "Disulfide bond breakdown",
        ],
        correctIndex: 1,
      },
      {
        question: "According to this module, greying hair indicates:",
        options: [
          "Weaker hair structurally",
          "A depletion of melanocyte stem cells, not weaker hair",
          "An autoimmune condition",
          "A sign of chemical damage",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does hair often appear fuller during pregnancy?",
        options: [
          "Hormonal shifts prolong the anagen (growth) phase, so fewer hairs shed",
          "Hair follicles multiply during pregnancy",
          "It is a visual illusion caused only by prenatal vitamins",
          "Melanin production doubles",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "The disinfection protocol for tools is best described as:",
        options: [
          "An optional weekly task",
          "The required cleaning sequence for tools between every client",
          "A once-per-day wipe-down",
          "Only necessary for cutting shears",
        ],
        correctIndex: 1,
      },
      {
        question: "Why must shears used for cutting never double as a tool for anything else?",
        options: [
          "To keep them dedicated for cutting and reliably maintained through proper disinfection",
          "Because shears are decorative only",
          "Because it voids a manufacturer's warranty",
          "Because clients prefer dedicated tools for comfort only",
        ],
        correctIndex: 0,
      },
      {
        question: "The four-section and nine-section parts are both examples of:",
        options: [
          "Chemical service safety equipment",
          "Standard sectioning patterns used across cutting, colour, and styling services",
          "Disinfection protocols",
          "Ventilation requirements",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is required protective equipment for chemical services?",
        options: ["A cape only", "Gloves and adequate ventilation", "A blow dryer", "A wide-tooth comb"],
        correctIndex: 1,
      },
      {
        question:
          "Why is a \"quick dip\" not an acceptable substitute for full immersion disinfection?",
        options: [
          "It takes too much time",
          "It does not achieve the contact time needed to properly disinfect the tool",
          "It damages metal tools",
          "It is more expensive than full immersion",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "Informed consent, in the context of a chemical service, means:",
        options: [
          "A signed waiver only",
          "The client's full, plain-language understanding of a service's effects and risks before it begins",
          "A verbal agreement to pay",
          "Skipping explanation to save time",
        ],
        correctIndex: 1,
      },
      {
        question: "A \"staged service\" refers to:",
        options: [
          "A single aggressive treatment",
          "A transformation planned across multiple sessions to protect structural integrity",
          "A discount package",
          "A service performed only for demonstration",
        ],
        correctIndex: 1,
      },
      {
        question: "Texture-neutral language means:",
        options: [
          "Avoiding any description of hair texture",
          "Technical, non-judgmental terminology describing natural hair characteristics",
          "Using only marketing terms",
          "Describing all textures as needing correction",
        ],
        correctIndex: 1,
      },
      {
        question: "According to this module, when should a practitioner decline a service?",
        options: [
          "Whenever a client requests a discount",
          "Never — all requested services should be performed",
          "When it would put a client's hair at unacceptable risk",
          "Only when the salon is fully booked",
        ],
        correctIndex: 2,
      },
      {
        question: "This module frames the consultation as important because:",
        options: [
          "It is required paperwork only",
          "It is often what a client remembers most about a service",
          "It has no bearing on client trust",
          "It replaces the need for a patch test",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question: "Elevation, in a haircut, refers to:",
        options: [
          "The chair height",
          "The angle hair is lifted before cutting, which determines weight distribution and shape",
          "The length of the shears",
          "The client's hair porosity",
        ],
        correctIndex: 1,
      },
      {
        question: "Graduation is created by:",
        options: [
          "0° elevation",
          "Moderate, roughly 45° elevation",
          "90° elevation only",
          "No elevation at all",
        ],
        correctIndex: 1,
      },
      {
        question: "Point cutting and texturising are techniques used to:",
        options: [
          "Add length to the hair",
          "Soften lines and remove bulk without shortening overall length",
          "Permanently curl the strand",
          "Deposit colour pigment",
        ],
        correctIndex: 1,
      },
      {
        question: "Before styling begins, a stylist should check a finished cut for:",
        options: ["Product buildup only", "Balance and symmetry", "Porosity level", "Scalp condition"],
        correctIndex: 1,
      },
      {
        question:
          "Why is it important to cut on clean, detangled hair rather than hair with product buildup?",
        options: [
          "Buildup and tangles distort how the hair falls, hiding the true line and shape being cut",
          "Wet product makes shears rust faster",
          "It has no real effect on the outcome",
          "It only matters for colour services",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "A gajra-adorned braid is:",
        options: [
          "A Japanese updo technique",
          "The traditional Indian plait finished with a ceremonial flower adornment",
          "A Chinese scraping technique",
          "A European romantic updo",
        ],
        correctIndex: 1,
      },
      {
        question: "Cornrows are historically significant because:",
        options: [
          "They are a purely decorative modern trend with no history",
          "They are a West African tradition with historical social meaning, not merely decorative",
          "They originated in Japan",
          "They were invented for competitive styling shows",
        ],
        correctIndex: 1,
      },
      {
        question: "Nihongami is:",
        options: [
          "A West African braiding tradition",
          "Traditional Japanese structural hairstyling built on precision and minimal product",
          "An Indian oiling ritual",
          "A European updo style",
        ],
        correctIndex: 1,
      },
      {
        question:
          "The fishtail braid and chignon are rooted in which styling tradition, and favour what kind of finish?",
        options: [
          "West African tradition, favouring tight structure",
          "European romantic updo techniques, favouring soft, textured finishes",
          "Japanese tradition, favouring rigid precision",
          "Indian tradition, favouring ceremonial adornment",
        ],
        correctIndex: 1,
      },
      {
        question:
          "According to this module, what connects the Indian, West African, Japanese, and European techniques it teaches?",
        options: [
          "They all require identical tools",
          "A shared underlying discipline, despite their different cultural origins and aesthetics",
          "They were all developed in the same decade",
          "None of them require tension control",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question:
          "Why does finer, straighter hair typically need more frequent washing than coily hair?",
        options: [
          "It has lower porosity",
          "Sebum travels down the shaft more easily on straighter hair, so it looks oily sooner",
          "It sheds more per day",
          "It absorbs more product",
        ],
        correctIndex: 1,
      },
      {
        question: "The five building blocks of a complete hair care routine, per this module, are:",
        options: [
          "Wash, rinse, dry, style, repeat",
          "Cleanse, condition, treat, style, protect",
          "Oil, wash, dye, cut, protect",
          "Detangle, cleanse, colour, cut, style",
        ],
        correctIndex: 1,
      },
      {
        question: "A clarifying wash is used to:",
        options: [
          "Add moisture only",
          "Periodically remove product or mineral buildup with a deeper cleanse",
          "Permanently alter curl pattern",
          "Replace conditioner entirely",
        ],
        correctIndex: 1,
      },
      {
        question: "Co-washing refers to:",
        options: [
          "Washing hair with two people at once",
          "Cleansing with conditioner alone, gentler than shampoo",
          "A clarifying treatment for oily scalps",
          "A chemical relaxer step",
        ],
        correctIndex: 1,
      },
      {
        question: "Which textures typically benefit most from co-washing?",
        options: [
          "Fine, straight textures prone to oiliness",
          "Drier textures, such as coilier hair types",
          "Only chemically relaxed hair",
          "Only colour-treated hair",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
      {
        question: "JAK inhibitors are:",
        options: [
          "A class of cosmetic dye",
          "A class of medical treatment showing genuine evidence for autoimmune hair loss",
          "A synthetic botanical extract",
          "A type of heat protectant",
        ],
        correctIndex: 1,
      },
      {
        question: "Regenerative research, as described in this module, refers to:",
        options: [
          "Marketing claims with no scientific basis",
          "Early-stage scientific work on regrowing or regenerating hair follicles",
          "A finished, widely available treatment",
          "A traditional Ayurvedic practice",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Evidence-based personalisation differs from marketed \"personalisation\" because it is based on:",
        options: [
          "Social media trends",
          "Measurable diagnostics, not marketing quizzes",
          "Price point",
          "Brand loyalty programs",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this course describe its own facts as having a \"shelf life\"?",
        options: [
          "Because the course content will be deleted after a year",
          "Because hair and scalp science continues to advance, so today's facts may be revised",
          "Because printed textbooks degrade physically",
          "Because certifications expire every month",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Given this module's theme — that today's facts may not hold, and marketing often outpaces evidence — which skill does it ask practitioners to carry forward above any single technique?",
        options: [
          "Memorizing every current product formulation",
          "The ongoing ability to evaluate new evidence and keep learning as the science evolves",
          "Avoiding all new research until it is decades old",
          "Relying solely on tradition and never adopting new findings",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "The Course II capstone portfolio is assembled from:",
        options: [
          "A single new project unrelated to prior modules",
          "Artefacts built across all fourteen preceding modules",
          "Only the final exam score",
          "A client testimonial only",
        ],
        correctIndex: 1,
      },
      {
        question: "The capstone requires a candidate to perform:",
        options: [
          "A written essay only",
          "A full client service demonstrating the Amber Atelier standard, start to finish",
          "A multiple-choice exam only",
          "A product sales pitch",
        ],
        correctIndex: 1,
      },
      {
        question: "As part of the capstone, a candidate must also be able to:",
        options: [
          "Recite product prices from memory",
          "Articulate the Amber philosophy of hair care in their own words, to a client or examiner",
          "Only demonstrate one isolated technique",
          "Skip the consultation step",
        ],
        correctIndex: 1,
      },
      {
        question: "Successfully completing Module 15 grants a candidate:",
        options: [
          "Access to Module 1",
          "Course II standing as a certified Amber Atelier hair practitioner",
          "A refund",
          "An automatic Course III enrollment",
        ],
        correctIndex: 1,
      },
      {
        question: "This final module is fundamentally about:",
        options: [
          "A new chemical service",
          "Who the practitioner has become across the course, and the work that proves it",
          "A pricing strategy",
          "A single product recommendation",
        ],
        correctIndex: 1,
      },
    ],
  },
];
