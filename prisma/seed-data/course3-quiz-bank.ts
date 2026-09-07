import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored MCQ knowledge checks for Course III, "The Living Palette."
 *
 * The source material's 15-module curriculum writes each module as narrative teaching content
 * closing with open-ended reflection prompts, with no stored answer key. These questions are a
 * gradable rewrite of the same objectives, key terms, and prompts, for instant client-side
 * scoring — not an extraction.
 */
export const course3QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
      {
        question: "What does the zygomatic bone serve as, in makeup placement?",
        options: [
          "A jawline landmark for contour only",
          "The primary highlight and contour landmark (the cheekbone)",
          "A brow-bone landmark",
          "A chin landmark",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Eyeshadow tends to crease faster on some clients because of the action of which muscle?",
        options: ["Zygomatic bone", "Frontalis", "Orbicularis oculi, the ring muscle around the eye", "Orbicularis oris"],
        correctIndex: 2,
      },
      {
        question: "How many classic face shapes does this module identify?",
        options: ["Four", "Five", "Six", "Eight"],
        correctIndex: 2,
      },
      {
        question:
          "According to this module, proportion guidelines like the rule of thirds/fifths should be understood as:",
        options: [
          "Universal standards of beauty every client should meet",
          "Artistic tools for judging balance, not a hierarchy of correctness",
          "Medical diagnostic criteria",
          "A ranking system for face shapes",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does this module insist that Course I's skin science remains directly relevant to a makeup service?",
        options: [
          "Because makeup replaces skincare entirely",
          "Because every makeup service is applied onto skin, so its condition and health still govern how product behaves",
          "Because colour theory has nothing to do with skin",
          "Because face shape depends on a client's skincare routine",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What is the difference between \"depth\" and \"undertone\" in shade matching?",
        options: [
          "Depth measures warm vs. cool hue; undertone measures lightness",
          "Depth is how light or dark a skin tone is; undertone is the underlying warm, cool, or neutral hue beneath that depth",
          "They are two words for the same concept",
          "Undertone only applies to deep skin tones",
        ],
        correctIndex: 1,
      },
      {
        question: "Colour correction, as taught in this module, works by:",
        options: [
          "Matching a concealer exactly to skin depth",
          "Neutralising discolouration using its opposite on the colour wheel",
          "Applying a lighter foundation shade over discolouration",
          "Using only synthetic pigments",
        ],
        correctIndex: 1,
      },
      {
        question:
          "This module explains that a narrow foundation shade range historically failed deep skin tones because:",
        options: [
          "Deep skin does not need foundation",
          "The industry offered too few shades and undertones at the deeper end of the spectrum, a gap the market has since had to correct",
          "Deep skin has no undertone",
          "Correctors work better than foundation for deep skin",
        ],
        correctIndex: 1,
      },
      {
        question: "Why must foundation and concealer be matched together, per this module's guidance?",
        options: [
          "Only shade must match; undertone is optional",
          "Both shade and undertone must be matched together, never one without the other",
          "Concealer never needs to match foundation",
          "Undertone matching only matters for foundation",
        ],
        correctIndex: 1,
      },
      {
        question: "What does this module identify as the most common application error when using colour correctors?",
        options: [
          "Applying too thick or poorly blended a layer, leaving a visible cast",
          "Using a corrector before cleansing the skin",
          "Applying corrector only on oily skin types",
          "Skipping foundation entirely after correction",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "A patch test, as defined in this module, is performed:",
        options: [
          "After full application, to check the result",
          "As a small, isolated product test before full application, especially for new or fragrance-heavy formulas",
          "Only ever on foundation products",
          "Once per year regardless of new products used",
        ],
        correctIndex: 1,
      },
      {
        question: "What makes a product \"comedogenic\"?",
        options: [
          "It carries a high SPF rating",
          "It contains fragrance",
          "It is likely to clog pores and worsen breakouts",
          "It is a mineral pigment",
        ],
        correctIndex: 2,
      },
      {
        question: "Why is active conjunctivitis an automatic reason to decline eye makeup application?",
        options: [
          "It only affects shade matching",
          "It is a contagious eye condition, and product or tools risk spreading infection or worsening irritation",
          "It has no bearing on eye makeup",
          "It requires stronger product rather than a decline",
        ],
        correctIndex: 1,
      },
      {
        question: "Single-use applicators are required for eye and lip products specifically to:",
        options: [
          "Save money on brushes",
          "Prevent cross-contamination between clients",
          "Improve pigment payoff",
          "Speed up the service",
        ],
        correctIndex: 1,
      },
      {
        question:
          "When a client's presentation goes beyond what a service can safely adapt to, this module teaches the practitioner to:",
        options: [
          "Proceed with the booked service regardless",
          "Recognise that the request calls for referral or declining, rather than application",
          "Apply extra product to conceal the condition",
          "Ask the client to sign a waiver and continue",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "What are the two primary pigment families that give makeup its colour?",
        options: [
          "Mineral pigments and synthetic organic pigments",
          "Natural oils and waxes",
          "Botanical extracts and clays",
          "SPF filters and film-forming agents",
        ],
        correctIndex: 0,
      },
      {
        question: "A film-forming agent in a cosmetic formula is responsible for:",
        options: [
          "Neutralising discolouration",
          "Long-wear, transfer-resistant finish",
          "Sun protection",
          "Fragrance",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does an SPF rating inside makeup not replace a dedicated sunscreen?",
        options: [
          "Makeup SPF is always higher than a dedicated sunscreen's",
          "Makeup is typically not applied in the amount or evenness needed to deliver its full stated protection",
          "SPF cannot legally be added to makeup",
          "Makeup SPF only functions indoors",
        ],
        correctIndex: 1,
      },
      {
        question: "Carmine is:",
        options: [
          "A synthetic red dye with no ethical considerations",
          "An insect-derived red pigment with real ethical and religious relevance that should be proactively disclosed",
          "A mineral pigment mined from the earth",
          "A preservative used mainly in kohl",
        ],
        correctIndex: 1,
      },
      {
        question: "What specific safety risk is associated with some unregulated traditional kohl products?",
        options: ["Excessive fragrance", "Heavy metal (lead) contamination", "Comedogenic clogging only", "UV sensitivity"],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
      {
        question: "Sindoor traditionally signifies:",
        options: [
          "A cosmetic eyeliner style",
          "Married status in many Hindu traditions, typically applied at the hair parting or forehead",
          "A bridal hand adornment",
          "A form of natural sunscreen",
        ],
        correctIndex: 1,
      },
      {
        question: "A bindi is best described as:",
        options: [
          "Purely decorative, with no other meaning",
          "A forehead adornment that can carry religious, marital, or personal decorative meaning",
          "A mandatory element of every bridal package",
          "A synonym for sindoor",
        ],
        correctIndex: 1,
      },
      {
        question: "Ubtan, as taught in this module, is:",
        options: [
          "A synthetic foundation formula",
          "A traditional turmeric-based skin paste used ceremonially and cosmetically",
          "An eyeliner pencil",
          "A form of henna dye",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should a bindi or sindoor never be applied automatically as part of a bridal package?",
        options: [
          "They are costly add-ons",
          "They may carry personal, religious, or ceremonial meaning and require asking the client first",
          "They are considered outdated",
          "They only require a patch test first",
        ],
        correctIndex: 1,
      },
      {
        question: "How does the lead-safety caution from the previous module connect to the kajal tradition discussed here?",
        options: [
          "It does not connect at all",
          "Traditional kajal carries real folk and cosmetic significance, but some unregulated versions carry the same heavy-metal contamination risk flagged earlier",
          "Kajal is always synthetic and inherently safe",
          "Lead contamination is only a concern for lip products",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "The \"skin-first\" philosophy prioritises:",
        options: [
          "Maximum coverage above all else",
          "Visible skin health over maximum coverage",
          "A matte finish over a dewy one",
          "Expensive products over affordable ones",
        ],
        correctIndex: 1,
      },
      {
        question: "\"Skinimalism\" refers to:",
        options: [
          "A heavy-coverage, full-glam approach",
          "A minimal-product, skincare-forward approach to makeup popularised in Korean beauty culture",
          "A synonym for double cleansing",
          "A pricing tier for services",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this module insist that proper makeup removal matters as much as skilled application?",
        options: [
          "Removal is purely cosmetic and has no bearing on skin health",
          "Leaving long-wear makeup on undermines the very skin health the philosophy is built around",
          "Removal only matters for oily skin types",
          "Good application makes removal unnecessary",
        ],
        correctIndex: 1,
      },
      {
        question: "A \"double cleanse\" is required for long-wear makeup because:",
        options: [
          "A single cleanse is always sufficient",
          "A single cleanse is often insufficient to fully dissolve long-wear formulas, requiring a two-step process",
          "It doubles the price of the service",
          "It replaces the need for makeup remover altogether",
        ],
        correctIndex: 1,
      },
      {
        question: "According to this module, why can over-powdering a naturally dry area worsen a finished look?",
        options: [
          "Powder always improves the appearance of dry areas",
          "It can emphasise dryness or texture rather than concealing it, working against a restrained approach",
          "Powder has no visible effect on dry skin",
          "Dry areas should always be avoided entirely during application",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
      {
        question: "Colour temperature, measured in Kelvin, describes:",
        options: [
          "The SPF level of a product",
          "The warmth or coolness of a light source, which affects how pigment reads",
          "The depth of a client's skin tone",
          "The shelf life of a pigment",
        ],
        correctIndex: 1,
      },
      {
        question: "What causes flash-back in photography?",
        options: [
          "Using too little product overall",
          "A white or grey cast caused by reflective SPF filters or shimmer particles catching the flash",
          "Using a matte foundation",
          "Poor camera quality alone",
        ],
        correctIndex: 1,
      },
      {
        question: "Which finish does this module associate with bright, direct stage lighting?",
        options: [
          "A very shimmery, high-shine finish",
          "A more matte or satin finish that resists exaggerated highlighting under strong light",
          "A dewy, glossy finish",
          "No finish or product at all",
        ],
        correctIndex: 1,
      },
      {
        question: "The \"two-light check\" habit taught in this module means:",
        options: [
          "Checking a finished look under two different light sources before declaring the service complete",
          "Applying two coats of foundation",
          "Using two brushes to blend every product",
          "Photographing the client twice",
        ],
        correctIndex: 0,
      },
      {
        question: "Why might a client's evening reception call for a different finish than her daytime meeting?",
        options: [
          "Evening and daytime lighting never actually differ",
          "Different light sources and occasions change how a finish reads, so a warmer or dewier choice may suit evening light better",
          "Daytime occasions always require more product",
          "Finish choice has nothing to do with occasion",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question: "Why is non-comedogenic formulation a priority for teenage, acne-prone clients?",
        options: [
          "It carries stronger pigment",
          "It is formulated not to clog pores, reducing the risk of worsening breakouts",
          "It is always the cheapest option",
          "It contains more shimmer",
        ],
        correctIndex: 1,
      },
      {
        question: "On mature skin, which texture generally performs better than powder or matte formulas for fine lines?",
        options: [
          "Heavier matte powder",
          "Cream or liquid formulas, which settle less into fine lines",
          "No product at all",
          "Only setting powder",
        ],
        correctIndex: 1,
      },
      {
        question: "When a client discloses pregnancy mid-consultation, this module advises the practitioner to:",
        options: [
          "Ignore the disclosure and proceed as planned",
          "Adjust product choice to avoid ingredient categories generally advised against during pregnancy",
          "Decline the service outright",
          "Apply extra retinoid-based product",
        ],
        correctIndex: 1,
      },
      {
        question: "\"Ageless technique,\" as taught in this module, means:",
        options: [
          "Applying the identical approach to every client regardless of age",
          "Adapting texture, finish, and technique to how skin changes across life stages",
          "Avoiding all clients under twenty",
          "Using only anti-ageing products",
        ],
        correctIndex: 1,
      },
      {
        question: "Why might a formula that suited a client in her thirties feel wrong on the same client after menopause?",
        options: [
          "A formula never needs to change over a lifetime",
          "Skin changes over time, so a texture and technique appropriate at one stage may not suit a later one",
          "Only price determines the right formula",
          "Menopause has no bearing on skin",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "\"Decanting\" a product means:",
        options: [
          "Applying product directly from a communal container to every client",
          "Portioning product onto a clean palette to avoid double-dipping communal containers",
          "Discarding old or expired product",
          "Mixing two shades together",
        ],
        correctIndex: 1,
      },
      {
        question: "A \"barrier method\" refers to:",
        options: [
          "A type of foundation formula",
          "A disposable applicator or decanted portion that prevents direct client-to-client product contact",
          "A sanitising spray for brushes",
          "A physical face shield",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the standard quick-sanitising solution for tools between clients?",
        options: ["Plain water", "70% isopropyl alcohol", "Baby shampoo alone", "Vinegar"],
        correctIndex: 1,
      },
      {
        question: "Why do sponges generally require more frequent deep-cleaning than brushes, per this module's protocol?",
        options: [
          "Sponges are cheaper to replace than brushes",
          "Sponges absorb and hold more product and moisture, which this module treats as a greater contamination risk",
          "Sponges are never used with liquid product",
          "Brushes never need cleaning at all",
        ],
        correctIndex: 1,
      },
      {
        question: "Which sign indicates a brush or sponge should be discarded rather than cleaned again?",
        options: [
          "It is more than a week old, regardless of condition",
          "Visible fraying, odour, or product buildup that cleaning no longer resolves",
          "It was used on a single client only",
          "It cost less than a certain price",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "Colourism, as addressed in this module, refers to:",
        options: [
          "A technique for colour-correcting redness",
          "Bias favouring lighter skin tones, which a practitioner should meet with honesty rather than reinforcement",
          "A type of foundation shade range",
          "A synonym for undertone matching",
        ],
        correctIndex: 1,
      },
      {
        question: "When a client asks for significantly lightened foundation shade, this module advises the practitioner to:",
        options: [
          "Comply immediately without discussion",
          "Respond with honesty and care rather than automatic compliance",
          "Refuse to serve the client",
          "Apply the lightest shade available without comment",
        ],
        correctIndex: 1,
      },
      {
        question: "\"Explicit photo consent\" means:",
        options: [
          "Assuming consent because the client booked a public-facing artist",
          "A specific, direct question asked before any client photo is used publicly",
          "Posting first and asking afterward",
          "Consent given once that covers all future photos",
        ],
        correctIndex: 1,
      },
      {
        question: "How should a practitioner respond to language that suggests genuine body image distress?",
        options: [
          "With technique alone, setting the words aside",
          "With care and attentiveness that goes beyond technique",
          "By ending the consultation immediately",
          "By repeating the client's self-criticism back to her",
        ],
        correctIndex: 1,
      },
      {
        question: "This module's core teaching about a request like \"make me look flawless\" is that it:",
        options: [
          "Should always be taken at face value",
          "May require listening beneath the literal words to what the client actually wants",
          "Has no deeper meaning worth exploring",
          "Should be declined as unreasonable",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question: "A \"transition shade\" in eye makeup is:",
        options: [
          "The final highlight shade at the brow bone",
          "A mid-tone eyeshadow blended in the crease before deeper colour is added",
          "A lip colour used between two applications",
          "A shade used only in setting spray",
        ],
        correctIndex: 1,
      },
      {
        question: "The \"flush point\" refers to:",
        options: [
          "The jawline contour line",
          "The natural high point of colour on the cheek, typically the apples",
          "The crease of the eye",
          "The centre of the forehead",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should brows be shaped before eyeshadow is applied, per this module's protocol order?",
        options: [
          "Brows have no bearing on eye makeup",
          "Brow shape frames the eye area and should guide the eye look that follows",
          "Eyeshadow must always be reapplied after brows regardless",
          "Brows are always the last step of the protocol",
        ],
        correctIndex: 1,
      },
      {
        question: "In the Amber application protocol, how do highlight and contour relate to each other?",
        options: [
          "They are placed in the identical spot",
          "Highlight is placed on the face's high points while contour follows the shadow or hollow areas of bone structure",
          "Highlight always replaces contour",
          "Contour is applied only after highlight is removed",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does blush application come after contour and highlight rather than before, in this module's sequencing?",
        options: [
          "Blush has no relationship to contour or highlight placement",
          "So it can be balanced against the sculpting already established, rather than sculpting around the blush",
          "Blush must always be applied first in every method",
          "There is no fixed order taught in this module",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "\"Glass skin\" is:",
        options: [
          "A heavy matte powder finish",
          "An intensely luminous, poreless Korean beauty finish achieved through skincare-forward base work",
          "A French contouring technique",
          "A synonym for strobing",
        ],
        correctIndex: 1,
      },
      {
        question: "Which earlier module's philosophy does glass skin most directly express?",
        options: [
          "The Philosophy of Restraint's skin-first approach",
          "The Practitioner's Kit's hygiene protocol",
          "The Botanical Root's traditional adornment",
          "Makeup Across a Lifetime's age adaptation",
        ],
        correctIndex: 0,
      },
      {
        question: "A gradient lip is achieved by:",
        options: [
          "Applying colour evenly from edge to edge",
          "Concentrating colour at the lip centre and blending it softly outward",
          "Lining the lips darker than the interior fill",
          "Using two contrasting shades on the top and bottom lip",
        ],
        correctIndex: 1,
      },
      {
        question: "The Khaleeji eye is best described as:",
        options: [
          "A soft, barely-there wash of neutral shadow",
          "A dramatic, heavily smoked, winged eye associated with Gulf Arab beauty tradition",
          "A Korean-style straight-across liner",
          "A Western editorial technique exclusively",
        ],
        correctIndex: 1,
      },
      {
        question: "Strobing is:",
        options: [
          "A form of colour correction",
          "Concentrated highlight on the face's highest points for a lit-from-within effect",
          "A technique for shaping brows",
          "A synonym for gradient lip",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question: "The \"seven-piece foundation\" taught in this module refers to:",
        options: [
          "A single foundation product available in seven shades",
          "The minimal, complete everyday makeup kit taught in this module",
          "A special-occasion-only product set",
          "A set of seven brushes",
        ],
        correctIndex: 1,
      },
      {
        question: "For a client during India's monsoon season, this module recommends prioritising:",
        options: [
          "Heavier, oil-based cream formulas only",
          "Water-resistant, long-wear formulas suited to humidity",
          "Matte powder with no other adjustment",
          "Skipping foundation entirely",
        ],
        correctIndex: 1,
      },
      {
        question: "If a client can only afford three products, this module frames the prioritisation as:",
        options: [
          "Always skincare, never colour products",
          "Choosing the essentials that deliver the most impact within her stated budget",
          "Whichever products are most expensive",
          "Declining to recommend anything at all",
        ],
        correctIndex: 1,
      },
      {
        question: "What distinguishes a special-occasion kit from an everyday kit, per this module?",
        options: [
          "Nothing distinguishes them",
          "A special-occasion kit typically adds longer-wear, higher-impact products beyond the everyday essentials",
          "A special-occasion kit is always cheaper",
          "An everyday kit always includes more products",
        ],
        correctIndex: 1,
      },
      {
        question: "Why might powder formulas underperform on drier skin during winter months?",
        options: [
          "Powder always suits dry skin better in winter",
          "Powder can emphasise dryness and flaking rather than the smoother finish a hydrating formula gives",
          "Winter has no effect on skin texture",
          "Powder formulas are inherently water-resistant",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
      {
        question: "AI-assisted shade matching, as described in this module, is:",
        options: [
          "Fully reliable in any lighting condition",
          "Useful, but limited by lighting variability in camera-based recommendations",
          "A full replacement for a practitioner's trained eye",
          "Not yet used anywhere in the industry",
        ],
        correctIndex: 1,
      },
      {
        question: "\"Skincare-cosmetics convergence\" refers to:",
        options: [
          "Makeup replacing skincare entirely",
          "Colour products formulated with genuine, evidence-backed active ingredients",
          "A marketing term with no formulation basis",
          "Skincare brands exiting the makeup category",
        ],
        correctIndex: 1,
      },
      {
        question: "\"Responsibly sourced mica,\" as discussed in this module, addresses:",
        options: [
          "A synthetic pigment safety concern",
          "Documented labour concerns in mica mining regions",
          "SPF filter effectiveness",
          "Carmine's religious relevance",
        ],
        correctIndex: 1,
      },
      {
        question: "How should a practitioner evaluate a skincare-hybrid makeup claim, per this module?",
        options: [
          "Accept any claim printed on the packaging",
          "Distinguish genuine, evidence-backed formulation from surface-level marketing",
          "Assume all such claims are false",
          "Ignore ingredient claims entirely",
        ],
        correctIndex: 1,
      },
      {
        question:
          "According to this module, what kind of skill is more durable than any single technique taught in the course?",
        options: [
          "One specific application technique, mastered once",
          "An ongoing habit of evaluating new claims and technology honestly as the industry evolves",
          "Memorising every ingredient name",
          "Following trends immediately as they emerge",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "The capstone portfolio for Course III is assembled from:",
        options: [
          "Only this final module's content",
          "Artefacts built across all fourteen preceding modules",
          "A single module of the practitioner's choosing",
          "Coursework external to Amber Atelier",
        ],
        correctIndex: 1,
      },
      {
        question: "The capstone client service is meant to demonstrate:",
        options: [
          "A single isolated technique",
          "The complete Amber Atelier standard, start to finish",
          "Only colour theory knowledge",
          "Theoretical knowledge without practical application",
        ],
        correctIndex: 1,
      },
      {
        question: "Completing this final module asks a practitioner to be able to:",
        options: [
          "Skip the practical service requirement",
          "Articulate the Amber philosophy of makeup artistry in her own words, to a client or examiner",
          "Avoid all future consultations",
          "Bypass Course I entirely",
        ],
        correctIndex: 1,
      },
      {
        question: "What does receiving Course III standing certify?",
        options: [
          "Completion of a single module",
          "Certification as an Amber Atelier makeup practitioner",
          "A temporary trial status only",
          "Eligibility for a different, unrelated course",
        ],
        correctIndex: 1,
      },
      {
        question: "This final module is fundamentally about:",
        options: [
          "A new pigment technology",
          "Who you are now as a practitioner, and the work that proves it",
          "A pricing strategy for services",
          "A marketing campaign for the atelier",
        ],
        correctIndex: 1,
      },
    ],
  },
];
