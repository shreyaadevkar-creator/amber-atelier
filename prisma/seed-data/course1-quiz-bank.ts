export type QuizQuestionSeed = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

/**
 * Authored MCQ knowledge checks for Course I, "The Living Canvas."
 *
 * The source material (amber_course1_complete.html) writes each module's quiz as five
 * open-ended reflection prompts with no stored answer key. These questions are a gradable
 * rewrite of the same knowledge points, for instant client-side scoring — not an extraction.
 */
export const course1QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
      {
        question: "Which layer of skin makes up roughly 90% of its total thickness?",
        options: ["Epidermis", "Dermis", "Hypodermis", "Stratum corneum"],
        correctIndex: 1,
      },
      {
        question:
          "Roughly how long does the skin's cell turnover cycle take, from stratum basale to shedding?",
        options: ["7 days", "14 days", "28 days", "90 days"],
        correctIndex: 2,
      },
      {
        question: "Which epidermal cell is responsible for producing melanin?",
        options: ["Keratinocyte", "Melanocyte", "Langerhans cell", "Merkel cell"],
        correctIndex: 1,
      },
      {
        question:
          "Which of the following is NOT one of the skin's five vital functions described in this module?",
        options: ["Protection", "Thermoregulation", "Digestion", "Synthesis"],
        correctIndex: 2,
      },
      {
        question: "What is the skin microbiome?",
        options: [
          "A synthetic barrier cream",
          "The living ecosystem of beneficial microbes on the skin",
          "A grading scale for acne",
          "The deepest layer of the dermis",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What does the Fitzpatrick scale classify?",
        options: [
          "Skin type by oiliness",
          "Skin by its UV/sun response",
          "Wrinkle depth",
          "Pore size",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of these is a skin TYPE, independent of skin tone?",
        options: ["Fitzpatrick III", "Deep skin", "Oily", "Melanin-rich"],
        correctIndex: 2,
      },
      {
        question:
          "Why are deeper skin tones more prone to post-inflammatory hyperpigmentation (PIH)?",
        options: [
          "They produce less melanin",
          "Melanocytes in deeper skin react more strongly to inflammation, depositing excess pigment",
          "They are more exposed to UV",
          "They have a thinner epidermis",
        ],
        correctIndex: 1,
      },
      {
        question: "What is elevated on deeper skin tones and must be considered before aggressive treatments?",
        options: ["Vitamin D synthesis", "Keloid/scarring risk", "Sunburn risk", "Sebum production"],
        correctIndex: 1,
      },
      {
        question: "Amber's principle of treating \"conditions, never complexions\" means:",
        options: [
          "Only treat fair skin conditions",
          "Every skin tone deserves accurate, tailored assessment rather than being treated as an exception",
          "Skip consultations for darker skin",
          "Use the same product for everyone",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "What is the \"referral line\" as taught in this module?",
        options: [
          "The point at which a client must be referred to a dermatologist",
          "The border between oily and dry skin",
          "A type of skincare routine",
          "A pricing threshold",
        ],
        correctIndex: 0,
      },
      {
        question: "Melasma is best described as:",
        options: [
          "A bacterial infection",
          "Hormonally driven hyperpigmentation",
          "A form of sunburn",
          "An allergic reaction",
        ],
        correctIndex: 1,
      },
      {
        question: "Acne grading in this module runs from Grade I to Grade IV. Grade IV represents:",
        options: ["Mild comedones", "Severe cystic acne", "No acne", "Only blackheads"],
        correctIndex: 1,
      },
      {
        question: "A consultation, as defined in this module, includes:",
        options: [
          "Only a product sale",
          "The structured history, visual, and touch read before any treatment",
          "A skincare quiz",
          "A payment plan",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of these must always be referred to a dermatologist rather than treated in a facial?",
        options: [
          "Mild dryness",
          "A presentation beyond the practitioner's scope, per the referral line",
          "Combination skin",
          "Sun-kissed skin",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "What is niacinamide primarily known for?",
        options: [
          "Exfoliating dead skin",
          "Barrier-strengthening and oil-regulating action (vitamin B3)",
          "Sun protection",
          "Numbing the skin",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which active is a vitamin A derivative that accelerates cell turnover and boosts collagen?",
        options: ["Niacinamide", "BHA", "Retinoid", "SPF"],
        correctIndex: 2,
      },
      {
        question: "Why should a retinoid and a BHA generally not be layered on the same night?",
        options: [
          "They are the same ingredient",
          "Combining strong actives increases irritation risk without added benefit",
          "They cancel each other's effect completely",
          "They are illegal together",
        ],
        correctIndex: 1,
      },
      {
        question: "The \"deep-skin caution\" applies especially to which Fitzpatrick types?",
        options: ["I–II", "II–III", "IV–VI", "All types equally"],
        correctIndex: 2,
      },
      {
        question: "According to this module, what is the relationship between price and efficacy?",
        options: [
          "Higher price always means higher efficacy",
          "They are not the same measurement — luxury is knowledge, not price",
          "Price determines safety",
          "Cheaper products are always better",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
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
        question: "Saffron's brightening effect works through which mechanism?",
        options: ["Exfoliation", "Tyrosinase inhibition", "Collagen synthesis", "UV absorption"],
        correctIndex: 1,
      },
      {
        question: "Why has wild sandalwood come under ecological pressure?",
        options: [
          "It grows too quickly",
          "It is slow-growing and over-harvested",
          "It is a synthetic ingredient",
          "It is farmed sustainably everywhere",
        ],
        correctIndex: 1,
      },
      {
        question: "What does Amber's sourcing checklist emphasize?",
        options: [
          "Lowest price only",
          "Verifying cultivated or ethically wild-harvested origin",
          "Fastest shipping",
          "Brand popularity",
        ],
        correctIndex: 1,
      },
      {
        question: "\"Natural\" and \"sustainably sourced\" are:",
        options: ["Always the same thing", "Not automatically the same thing", "Legal synonyms", "Irrelevant to skincare"],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "The barrier-first philosophy prioritizes:",
        options: [
          "Aggressive intervention",
          "A resilient skin barrier over aggressive intervention",
          "Fragrance",
          "Packaging",
        ],
        correctIndex: 1,
      },
      {
        question: "\"Over-treated skin\" refers to:",
        options: [
          "Skin treated too rarely",
          "A barrier compromised by excessive actives or aggressive treatment",
          "Skin with too much SPF",
          "Skin that has never used actives",
        ],
        correctIndex: 1,
      },
      {
        question: "A \"reset protocol\" is best described as:",
        options: [
          "Adding more actives quickly",
          "Stripping a routine to essentials to allow barrier recovery",
          "A deep chemical peel",
          "A one-time facial",
        ],
        correctIndex: 1,
      },
      {
        question: "The philosophy behind the East Asian multi-step routine favours:",
        options: [
          "Fewer, harsher steps",
          "Many aggressive treatments",
          "Fewer, gentler, more consistent steps over more, stronger, occasional ones",
          "No routine at all",
        ],
        correctIndex: 2,
      },
      {
        question: "Gentleness as a principle applies to:",
        options: [
          "Only product selection",
          "Both product choice and the practitioner's own hands and technique",
          "Only pricing",
          "Only marketing",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
      {
        question: "Which UV band is primarily responsible for skin ageing (photoageing)?",
        options: ["UVA", "UVB", "UVC", "Infrared"],
        correctIndex: 0,
      },
      {
        question: "Which UV band triggers vitamin D synthesis and causes burning?",
        options: ["UVA", "UVB", "UVC", "Visible light"],
        correctIndex: 1,
      },
      {
        question: "\"Broad-spectrum\" sunscreen means protection against:",
        options: ["Only UVA", "Only UVB", "Both UVA and UVB", "Only visible light"],
        correctIndex: 2,
      },
      {
        question: "Does melanin provide sun protection for deeper skin tones?",
        options: [
          "No protection at all",
          "Complete, absolute protection — sunscreen is unnecessary",
          "Real but non-absolute protection — sunscreen is still necessary",
          "Only protects against UVB",
        ],
        correctIndex: 2,
      },
      {
        question: "According to this module, what is the single highest-leverage step in any skincare routine?",
        options: ["A retinoid", "Sunscreen", "A vitamin C serum", "Exfoliation"],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question: "Intrinsic ageing is best described as:",
        options: [
          "Environment-driven ageing",
          "Genetically programmed, time-driven ageing",
          "Ageing caused only by UV exposure",
          "Ageing that only affects deep skin tones",
        ],
        correctIndex: 1,
      },
      {
        question: "Extrinsic ageing is led primarily by:",
        options: ["Genetics", "UV exposure", "Diet alone", "Sleep position"],
        correctIndex: 1,
      },
      {
        question: "Roughly how much collagen is lost per year after age twenty?",
        options: ["About 0.1%", "About 1%", "About 10%", "About 25%"],
        correctIndex: 1,
      },
      {
        question: "Why must retinoids generally be avoided during pregnancy?",
        options: [
          "They are too expensive",
          "They have no effect during pregnancy",
          "Of documented risk to fetal development",
          "They cause sunburn",
        ],
        correctIndex: 2,
      },
      {
        question: "This module asks practitioners to speak about ageing skin with:",
        options: ["Alarm, to motivate purchases", "Reverence, never alarm", "Indifference", "Clinical detachment only"],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "What is the minimum non-negotiable waiting period for a patch test?",
        options: ["1–2 hours", "24–48 hours", "5 minutes", "One week"],
        correctIndex: 1,
      },
      {
        question: "Why should product be removed from jars with a spatula rather than fingers?",
        options: [
          "It looks more professional only",
          "To prevent cross-contamination",
          "It's required by law",
          "It changes the product's texture",
        ],
        correctIndex: 1,
      },
      {
        question: "Tool sanitation requires:",
        options: [
          "Sterilising all reusable metal tools between every client",
          "Cleaning tools once a week",
          "Using tools without cleaning",
          "Disposing of all metal tools",
        ],
        correctIndex: 0,
      },
      {
        question: "A hygiene log is:",
        options: [
          "A marketing brochure",
          "A documented, dated record of sanitation practice",
          "A client's skincare diary",
          "A price list",
        ],
        correctIndex: 1,
      },
      {
        question: "This module connects hygiene directly to:",
        options: ["Product cost", "Client trust", "Marketing", "Room decor"],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "Informed consent in a consultation means:",
        options: [
          "Persuading the client to buy more",
          "Honest information followed by the client's own decision",
          "Signing a legal waiver only",
          "Skipping explanation to save time",
        ],
        correctIndex: 1,
      },
      {
        question: "Why give a client a specific, honest timeline rather than an optimistic one?",
        options: [
          "To manage realistic expectations rather than inflate them",
          "Optimistic timelines are always accurate",
          "Clients prefer vague answers",
          "It has no bearing on trust",
        ],
        correctIndex: 0,
      },
      {
        question: "\"Insecurity redirection\" means:",
        options: [
          "Ignoring a client's concern",
          "Acknowledging a client's feeling while offering an honest, condition-based alternative",
          "Agreeing to any product request",
          "Refusing to speak with the client",
        ],
        correctIndex: 1,
      },
      {
        question: "According to this module, the true foundation of the consultation room is:",
        options: ["Technique", "Trust", "Pricing", "Product range"],
        correctIndex: 1,
      },
      {
        question: "This module's approach to a client's \"fairness product\" request would be to:",
        options: [
          "Sell it immediately",
          "Gently redirect toward an honest, condition-based alternative",
          "Refuse to serve the client",
          "Ignore the request",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question: "Why is the cleanse in this module called a \"double cleanse\"?",
        options: [
          "It uses two different brands",
          "It combines an oil-based cleanse then a water-based cleanse",
          "It is done twice a day only",
          "It doubles the price",
        ],
        correctIndex: 1,
      },
      {
        question: "Extraction, as taught in this module, refers to:",
        options: ["Removing hair", "The careful clearing of surface congestion only", "A form of chemical peel", "A massage technique"],
        correctIndex: 1,
      },
      {
        question: "Effleurage, petrissage, and tapotement are:",
        options: ["Skincare ingredients", "The classical massage movements", "Types of sunscreen", "Consultation steps"],
        correctIndex: 1,
      },
      {
        question: "Lymphatic drainage massage primarily helps with:",
        options: ["Sun protection", "Clearing fluid and easing puffiness", "Exfoliation", "Hair removal"],
        correctIndex: 1,
      },
      {
        question: "The \"experience layer\" refers to:",
        options: [
          "A skincare product line",
          "The deliberate sensory and human craft that elevates a treatment to luxury",
          "The final step of cleansing",
          "A discount tier",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "Abhyanga is:",
        options: [
          "A Japanese scraping technique",
          "The Ayurvedic warm-oil massage that works the marma points",
          "A Korean skincare step",
          "A sunscreen ingredient",
        ],
        correctIndex: 1,
      },
      {
        question: "Marma points, in Ayurveda, are:",
        options: [
          "Skincare products",
          "The vital junctions of the body, several of which lie on the face",
          "A type of massage tool",
          "A grading scale",
        ],
        correctIndex: 1,
      },
      {
        question: "Kobido is:",
        options: [
          "A Chinese scraping practice",
          "The Japanese \"ancient way of beauty\" — rapid, rhythmic facial massage",
          "An Indian oil massage",
          "A vitamin",
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
        question: "Before any vigorous facial massage or Gua Sha, a practitioner must always:",
        options: ["Skip consultation", "Check for contraindications", "Apply a retinoid first", "Use a chemical peel"],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question: "The core job of an AM routine is primarily to:",
        options: ["Repair overnight damage", "Protect (antioxidant, SPF)", "Deep exfoliate", "Apply retinoids"],
        correctIndex: 1,
      },
      {
        question: "The correct layering order for skincare products generally goes:",
        options: [
          "Thickest to thinnest",
          "Thinnest to thickest, water-based before oil-based",
          "Randomly, order doesn't matter",
          "Oil-based before water-based always",
        ],
        correctIndex: 1,
      },
      {
        question: "For Priya's case, why is niacinamide considered an ideal hero active?",
        options: [
          "It's the cheapest option",
          "It addresses her PIH and congestion gently, per the deep-skin caution",
          "It replaces sunscreen",
          "It's a retinoid alternative with identical effects",
        ],
        correctIndex: 1,
      },
      {
        question: "Why must a BHA and a retinoid not share the same night in a routine?",
        options: [
          "They must always be layered together",
          "Combining them raises irritation risk without added benefit",
          "They are the same ingredient",
          "BHA replaces retinoid entirely",
        ],
        correctIndex: 1,
      },
      {
        question: "What does \"luxury is knowledge, not price\" mean in the context of prescribing a routine?",
        options: [
          "Expensive products are always prescribed",
          "A thoughtful, correctly sequenced routine matters more than price point",
          "Only luxury brands work",
          "Budget routines are ineffective",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
      {
        question: "Microbiome skincare represents a shift from:",
        options: [
          "Doing nothing to doing everything",
          "Stripping the skin to supporting its living ecosystem",
          "Natural to synthetic",
          "Cheap to expensive",
        ],
        correctIndex: 1,
      },
      {
        question: "Personalised skincare is formulation tailored to:",
        options: ["Trends only", "The individual's data, DNA, or microbiome", "Season only", "Brand loyalty"],
        correctIndex: 1,
      },
      {
        question: "Biotech ingredients are generally:",
        options: [
          "Always harmful",
          "Lab-grown or bio-fermented actives that can be effective and sustainable",
          "Illegal",
          "The same as synthetic fragrance",
        ],
        correctIndex: 1,
      },
      {
        question: "The \"five questions\" for evaluating a new skincare claim include all EXCEPT:",
        options: ["Claim", "Evidence", "Source", "Price"],
        correctIndex: 3,
      },
      {
        question: "According to this module, advancing technology makes a skilled human practitioner:",
        options: ["Obsolete", "Less relevant", "More valuable, not less", "Irrelevant to the future"],
        correctIndex: 2,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "The Amber Certified mark, per this module, represents:",
        options: [
          "A one-time credential earned forever",
          "A living promise, earned continuously and withdrawn if the standard isn't upheld",
          "A marketing badge with no requirements",
          "A discount code",
        ],
        correctIndex: 1,
      },
      {
        question: "This module asks graduates to present themselves and their prices with:",
        options: ["Apology and discounts", "Quiet authority", "Aggressive sales tactics", "Urgency language"],
        correctIndex: 1,
      },
      {
        question: "Completing the capstone is required to:",
        options: ["Skip the exam", "Earn your certification", "Get a refund", "Access Module 1"],
        correctIndex: 1,
      },
      {
        question: "Conducting yourself by \"the ethics of the house\" means:",
        options: [
          "Ignoring the brand's standards",
          "Upholding the conduct and standards Amber holds its graduates to",
          "Only following ethics when convenient",
          "Setting your own separate rules",
        ],
        correctIndex: 1,
      },
      {
        question: "This final module is fundamentally about:",
        options: ["A new skincare ingredient", "Who you are now, and the work that proves it", "A pricing strategy", "A marketing campaign"],
        correctIndex: 1,
      },
    ],
  },
];
