import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored MCQ knowledge checks for Course VII, "The Living Scent."
 *
 * The source material writes each module's quiz as five open-ended reflection prompts
 * with no stored answer key. These questions are a gradable rewrite of the same
 * knowledge points (objectives, key terms, and prompts), for instant client-side
 * scoring — not an extraction.
 */
export const course7QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
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
        question: "What is an \"olfactory family\" as used in bridal and event fragrance work?",
        options: [
          "A single specific perfume brand",
          "A broad scent category, such as floral, woody, oriental, fresh, or chypre",
          "The bottle's concentration tier",
          "A client's personal scent memory",
        ],
        correctIndex: 1,
      },
      {
        question: "How does sillage differ from a fragrance's strength directly on the skin?",
        options: [
          "They are the same thing",
          "Sillage is the scent trail a fragrance leaves in the air, distinct from its strength on skin",
          "Sillage only applies to oil-based ittar",
          "Sillage measures how long a scent lasts on a shelf",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Ordered from strongest to lightest concentration, which sequence is correct?",
        options: [
          "Eau de cologne, eau de toilette, eau de parfum, parfum",
          "Eau de toilette, parfum, eau de cologne, eau de parfum",
          "Parfum, eau de parfum, eau de toilette, eau de cologne",
          "Eau de parfum, parfum, eau de cologne, eau de toilette",
        ],
        correctIndex: 2,
      },
      {
        question:
          "Why does this module call fragrance structure \"the foundation every other skill in this course depends on\"?",
        options: [
          "Because pricing is set entirely by pyramid structure",
          "Because every later skill in the course builds on understanding how a scent unfolds and is classified",
          "Because it is the only topic covered on the final exam",
          "Because it has no bearing on later modules",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What is \"skin chemistry\" as defined in this module?",
        options: [
          "A fragrance's concentration tier",
          "The individual factors — oil level, pH, diet — that shape how a fragrance develops on a given person",
          "The chemical formula printed on a perfume label",
          "The synthetic compounds used as fixatives",
        ],
        correctIndex: 1,
      },
      {
        question: "What is IFRA, and why does it matter to a practising fragrance consultant?",
        options: [
          "A perfume brand; it matters only for luxury clients",
          "The International Fragrance Association, publisher of restricted-use guidance for known allergenic aromatics",
          "An ubtan certification body with no bearing on fragrance",
          "A skin-tone classification scale",
        ],
        correctIndex: 1,
      },
      {
        question: "Why must gram flour (besan) be avoided for a client disclosing a legume allergy?",
        options: [
          "Gram flour is a synthetic fixative unrelated to allergens",
          "Besan is chickpea-derived, so it carries a legume allergy risk requiring a check before use",
          "It has no connection to any allergy",
          "It is only used in fragrance, never in ubtan",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why can the same bottle of fragrance smell noticeably different on two different clients?",
        options: [
          "Bottles from the same batch are never identical",
          "Individual skin chemistry factors, such as oil level, pH, and diet, shape how a fragrance develops",
          "Fragrance never actually changes from person to person",
          "Only ubtan formulas vary between clients, not fragrance",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why should a \"natural\" fragrance or ubtan ingredient never be assumed risk-free without asking?",
        options: [
          "Natural ingredients are always safer than synthetic ones",
          "Natural origin does not rule out allergen or sensitivity risk for a given client",
          "Natural ingredients are banned by IFRA",
          "Because only synthetic ingredients carry any risk",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "What is \"scent-family discovery\" as taught in this module?",
        options: [
          "An open-ended question asking a client's single favourite scent",
          "Guiding a client toward an olfactory family through comparative questions rather than an open-ended prompt",
          "A patch test protocol",
          "A pricing conversation about fragrance tiers",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the minimum required patch test window before full application of a new fragrance or ubtan formulation?",
        options: ["1 hour", "6 hours", "24 hours", "One week"],
        correctIndex: 2,
      },
      {
        question:
          "Why is \"what does she normally wear\" a more useful opening question than \"what's your favourite scent\"?",
        options: [
          "It is shorter to ask",
          "It grounds the consultation in real, lived scent habits rather than an abstract, hard-to-articulate preference",
          "It avoids discussing allergies",
          "It is required by IFRA guidance",
        ],
        correctIndex: 1,
      },
      {
        question: "What should you do if a patch test shows any redness, itching, or swelling?",
        options: [
          "Proceed with full application anyway since the reaction is minor",
          "Do not proceed with that product on that client; treat it as a positive reaction",
          "Wait exactly one more hour and reapply",
          "Dilute the product and reapply immediately",
        ],
        correctIndex: 1,
      },
      {
        question:
          "In the module's case study, why doesn't the client's willingness to \"just deal with it\" settle the matter of a possible reaction?",
        options: [
          "Because the client is always right about her own skin",
          "Because a professional standard of care governs the decision, not the client's own risk tolerance in the moment",
          "Because ubtan reactions are never serious",
          "Because patch tests are optional once a client agrees to proceed",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "What does a fixative do in a fragrance formulation?",
        options: [
          "It brightens the top notes",
          "It is a lower-volatility compound that extends a fragrance's overall wear time",
          "It replaces the need for a base note entirely",
          "It neutralizes allergens in the formula",
        ],
        correctIndex: 1,
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
        question: "What is santalol?",
        options: [
          "Turmeric's active anti-inflammatory compound",
          "The aromatic compound in sandalwood responsible for its distinctive scent",
          "A synonym for gram flour",
          "A modern IFRA-restricted allergen",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Based on this course's key terms, which three ingredients form the traditional ubtan base?",
        options: [
          "Rosewater, alcohol, and clay",
          "Gram flour (besan), turmeric, and sandalwood",
          "Citrus oil, mustard oil, and clay",
          "Oud, saffron, and rosewater",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is \"natural equals better\" not a reliable rule when evaluating fragrance or ubtan ingredients?",
        options: [
          "Because synthetic ingredients are always superior",
          "Because natural origin alone does not guarantee safety, efficacy, or an absence of allergy risk",
          "Because natural ingredients are illegal under IFRA",
          "Because ubtan ingredients are never natural",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
      {
        question: "What is ittar (attar)?",
        options: [
          "A modern alcohol-based Western perfume",
          "Traditional oil-based Indian perfume, produced by steam distillation into a sandalwood oil base",
          "A synthetic fixative used in fragrance layering kits",
          "A type of ubtan paste",
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
        question: "What makes mitti attar distinctive among ittars?",
        options: [
          "It is citrus-forward and phototoxic",
          "It is distilled from baked clay to capture the scent of rain on soil",
          "It is the only ittar with an alcohol base",
          "It is exclusively a synthetic fragrance",
        ],
        correctIndex: 1,
      },
      {
        question: "Since ittar uses an oil base rather than alcohol, how does this change its character on skin?",
        options: [
          "It evaporates identically to an alcohol-based fragrance",
          "It develops differently, generally needing less product and lasting differently than an alcohol-based fragrance",
          "It has no effect on how the scent develops",
          "It requires a stronger patch test protocol than alcohol-based fragrance",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why does this module insist ittar should never be introduced to a client as a generic \"Indian oil perfume\"?",
        options: [
          "Because ittar is not actually from India",
          "Because doing so flattens a centuries-old, specific heritage this course asks practitioners to treat with reverence",
          "Because ittar is a synthetic product, not a traditional one",
          "Because clients are never interested in fragrance heritage",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "What is \"nose fatigue\"?",
        options: [
          "A permanent loss of the sense of smell",
          "The temporary loss of scent perception caused by prolonged or oversaturated exposure to a fragrance",
          "A skin reaction to fragrance overuse",
          "The sillage trail left by a strong fragrance",
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
        question: "What is pulse point application, as described in this module?",
        options: [
          "Spraying fragrance evenly over clothing",
          "Applying fragrance to warm, blood-flow-rich points where scent develops best",
          "Applying fragrance only to hair",
          "A method exclusive to synthetic fragrance",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does an oil-based ittar generally need less product applied than an alcohol-based eau de parfum?",
        options: [
          "Because ittar is always diluted before sale",
          "Because \"less is more\" reflects a real technical principle about how oil-based scent develops and projects, not just taste",
          "Because ittar has no scent until heated",
          "Because ittar is banned from pulse-point application",
        ],
        correctIndex: 1,
      },
      {
        question: "How should a practitioner respond to a client requesting the strongest possible fragrance application?",
        options: [
          "Apply as much product as requested without comment",
          "Explain sillage etiquette and the technical case for restraint, guiding toward correct application",
          "Refuse to serve the client",
          "Substitute a stronger, unrelated fragrance without asking",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
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
        question: "What is a \"covered pulse point\"?",
        options: [
          "Any pulse point on the body",
          "An application zone that will remain shielded from direct sun by clothing or hair throughout an event",
          "A pulse point that has already reacted to fragrance",
          "A point used only for ittar, never spray fragrance",
        ],
        correctIndex: 1,
      },
      {
        question:
          "For a client with confirmed outdoor daytime sun exposure, what should a practitioner do when recommending citrus-forward fragrance?",
        options: [
          "Apply it anywhere on exposed skin as usual",
          "Identify safe, covered application zones and adapt the recommendation for sun exposure",
          "Recommend it be worn only after sunset",
          "Avoid discussing sun exposure with the client entirely",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should fragrance never be applied to broken, irritated, or freshly waxed skin?",
        options: [
          "Because fragrance will not develop properly on that skin",
          "Because compromised skin is more vulnerable to irritation and reaction from fragrance application",
          "Because it voids the patch test result only",
          "Because it changes the fragrance's concentration tier",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is the module's case study reaction described as phototoxic rather than allergic?",
        options: [
          "Because it is an immune histamine response",
          "Because it results from certain citrus aromatics reacting with UV light, not an immune allergic response",
          "Because phototoxic and allergic reactions are identical",
          "Because it only occurs with synthetic fragrance",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question: "Why is heightened smell sensitivity during pregnancy relevant to fragrance application choices?",
        options: [
          "It is not relevant; pregnancy has no effect on scent perception",
          "Pregnancy smell sensitivity favours lighter application to avoid discomfort",
          "It means fragrance must always be avoided entirely during pregnancy",
          "It only affects ubtan, not fragrance, recommendations",
        ],
        correctIndex: 1,
      },
      {
        question: "What adjustment should be made to ubtan formulation for a young child or flower girl?",
        options: [
          "Use the identical adult-strength formulation",
          "Apply a reduced-concentration ubtan appropriate for a child's more delicate skin",
          "Skip the patch test since children rarely react",
          "Substitute pure alcohol-based fragrance instead",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is an alcohol-free, oil-based fragrance format often preferable for drier, more mature skin?",
        options: [
          "Because alcohol-based formats are always more expensive",
          "Because oil-based formats suit drier, more mature skin better than potentially drying alcohol-based formats",
          "Because mature skin cannot detect any fragrance",
          "Because oil-based fragrance never requires a patch test",
        ],
        correctIndex: 1,
      },
      {
        question: "How does this module frame the relationship between life stage and standard of care?",
        options: [
          "Life stage changes the recommendations, but never changes the standard of care",
          "Life stage lowers the standard of care for younger or older clients",
          "Life stage is irrelevant to fragrance or ubtan recommendations",
          "Only pregnancy affects the standard of care",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should a mature client's scent preference never be assumed lighter without asking?",
        options: [
          "Because mature clients always prefer the strongest fragrance available",
          "Because assuming a preference by age rather than asking directly risks a poor, inaccurate match",
          "Because mature skin cannot wear any fragrance",
          "Because scent preference never varies by individual",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "What does the fragrance-layering kit include, as described in this module?",
        options: [
          "Only spray fragrance for touch-ups",
          "A compact selection of ittar, spray, and balm formats for mid-event touch-ups",
          "Ubtan paste ingredients only",
          "A single signature scent bottle",
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
        question:
          "Why must the finishing kit be fully sorted and ready before the final minutes of a booking, not during them?",
        options: [
          "So it can be sold as a retail add-on",
          "So the finishing touches can be executed smoothly at the point they matter most, without last-minute scrambling",
          "Because finishing kits expire after a fixed time",
          "Because clients are never present for the finishing steps",
        ],
        correctIndex: 1,
      },
      {
        question: "How should a client's own heirloom jewelry be handled differently from salon-owned loaner pieces?",
        options: [
          "Identically, with no distinction in handling",
          "With extra care and attention, distinct from the standard loaner sanitising and handling routine",
          "It should never be touched by the practitioner",
          "It should be sanitised more aggressively than loaner pieces",
        ],
        correctIndex: 1,
      },
      {
        question: "What should you do if you discover damage to a client's jewelry during handling?",
        options: [
          "Say nothing and hope it goes unnoticed",
          "Disclose it to the client honestly and promptly, rather than concealing it",
          "Discard the damaged piece without telling the client",
          "Blame the damage on a previous appointment",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "What is \"occasion-matching\" as defined in this module?",
        options: [
          "Matching a fragrance to whatever is currently trending",
          "Selecting a fragrance's weight and family based on season, time of day, and venue",
          "Matching fragrance price to a client's budget only",
          "A synonym for scent-family discovery",
        ],
        correctIndex: 1,
      },
      {
        question: "What does \"rental-versus-purchase transparency\" require?",
        options: [
          "Defaulting to whichever option is more profitable",
          "Presenting both rental and purchase options with clear pricing rather than defaulting to the costlier one",
          "Only offering purchase, never rental",
          "Hiding pricing until after the booking is confirmed",
        ],
        correctIndex: 1,
      },
      {
        question:
          "What is the correct response if a family member insists on using a product already flagged as an allergy risk?",
        options: [
          "Use the product since the family member insisted",
          "Hold the professional boundary and decline, offering a safe alternative",
          "Use half the usual amount of the flagged product",
          "Ask the client to sign a waiver and proceed",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is occasion-matching described as a professional skill rather than simple taste?",
        options: [
          "Because it requires weighing season, venue, and time of day with informed judgment, not just personal preference",
          "Because it is purely a matter of what the client likes best",
          "Because it has no bearing on the client's experience",
          "Because it is identical to scent-family discovery",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of these factors should shape a fragrance recommendation for a specific event, per this module?",
        options: [
          "Personality, season, and venue",
          "Only the client's budget",
          "Only the practitioner's personal favourite scent",
          "Only the time since the client's last patch test",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question: "What is the ubtan ceremony protocol?",
        options: [
          "A single-step paste application with no rinse",
          "The six-step traditional application, rinse, and moisturise sequence for a haldi or ubtan event",
          "A fragrance-only finishing routine",
          "A patch test procedure",
        ],
        correctIndex: 1,
      },
      {
        question: "What does the \"finishing sequence\" place last, after hair and face are complete?",
        options: [
          "The ubtan ceremony itself",
          "Bindi, jewelry, and fragrance",
          "The consultation",
          "The patch test",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should the ubtan paste be rinsed with lukewarm water rather than hot?",
        options: [
          "Hot water sets the paste permanently",
          "Hot water risks irritating or drying the skin more than lukewarm water",
          "Lukewarm water is required only for children",
          "Hot water changes the paste's colour",
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
        question: "Why are the ubtan ceremony and the wedding-day finishing sequence taught as two distinct protocols?",
        options: [
          "Because they serve different events with different steps and purposes, despite both involving adornment",
          "Because they are actually identical and interchangeable",
          "Because only one of them is used in modern weddings",
          "Because the ubtan ceremony has been replaced by the finishing sequence",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "What is gaye holud?",
        options: [
          "The Punjabi turmeric and mustard oil paste ceremony",
          "The Bengali turmeric pre-wedding ceremony",
          "The historic centre of Western perfumery in France",
          "A resinous wood used in Middle Eastern perfumery",
        ],
        correctIndex: 1,
      },
      {
        question: "What is vatna, and what are its core ingredients?",
        options: [
          "A Bengali ceremony using only turmeric",
          "The Punjabi turmeric, sandalwood, and mustard oil pre-wedding paste ceremony",
          "A French perfumery technique",
          "A Middle Eastern oud-based ritual",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is Grasse significant to the history of Western perfumery?",
        options: [
          "It is the origin city of ittar",
          "It is the historic centre of Western perfumery in southern France",
          "It is where gaye holud originated",
          "It is a modern synthetic fragrance lab",
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
        question: "Why does this module insist \"turmeric ceremony\" is not one single, undifferentiated tradition across India?",
        options: [
          "Because turmeric ceremonies are identical everywhere in India",
          "Because distinct regional traditions, such as gaye holud, vatna, and pasupu-kunkuma, each carry their own ingredients and history",
          "Because turmeric is never used in Indian wedding ceremonies",
          "Because only one region in India practices any turmeric ceremony",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question: "What is Amber Edit?",
        options: [
          "A discontinued course module",
          "The Atelier's retail product-line vertical, bridged into directly through this course's fragrance and ubtan work",
          "A synonym for the take-home kit",
          "A patch test brand name",
        ],
        correctIndex: 1,
      },
      {
        question: "What are the three components of a typical take-home kit?",
        options: [
          "A discount coupon, a brochure, and a business card",
          "A client's own signature scent, ubtan blend, and touch-up essentials, packaged for continued use",
          "A patch test kit, a consultation form, and a receipt",
          "Three different retail-brand fragrances unrelated to the booking",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why are fragrance and ubtan uniquely suited to become a take-home retail product, compared to a haircut or bridal look?",
        options: [
          "Because they cannot be replicated at home at all",
          "Because a client's personal scent and ubtan blend can be packaged and continued at home, unlike a one-time hairstyle or makeup look",
          "Because fragrance and ubtan have no retail value",
          "Because haircuts are always more expensive",
        ],
        correctIndex: 1,
      },
      {
        question: "When should a take-home kit be priced and presented?",
        options: [
          "As a surprise addition at checkout",
          "During the consultation, not added as a surprise",
          "Only after the wedding has concluded",
          "It should never be priced separately from the booking",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this course, specifically, build the bridge into Amber Edit rather than an earlier course?",
        options: [
          "Because fragrance and ubtan choices are personal, packageable, and directly extend this course's craft into a retail product",
          "Because Amber Edit has nothing to do with fragrance or ubtan",
          "Because every earlier Amber course already built this same bridge",
          "Because retail products are unrelated to any course content",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
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
      {
        question: "What is cultivated oud, and why does it matter?",
        options: [
          "A synthetic fragrance with no relation to real oud",
          "Sustainably farmed oud, a genuine ethical alternative to pressure on wild Aquilaria populations",
          "A marketing term with no real sourcing difference from wild oud",
          "A banned ingredient under IFRA guidance",
        ],
        correctIndex: 1,
      },
      {
        question: "Why can't AI or digital scent-matching technology replace an experienced nose's judgment?",
        options: [
          "Because AI scent-matching does not exist yet",
          "Because it can assist, but the nuanced judgment of an experienced practitioner remains distinct and necessary",
          "Because AI is always more accurate than a human nose",
          "Because scent-matching technology has no legitimate use at all",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this course describe its own facts as having \"a shelf life\"?",
        options: [
          "Because the course content will be deleted after a fixed period",
          "Because perfumery knowledge, sourcing practices, and technology continue to evolve, so specific facts may become outdated",
          "Because fragrance ingredients physically expire",
          "Because this module is being replaced next year",
        ],
        correctIndex: 1,
      },
      {
        question: "What sustainability concern affects wild oud harvesting, and what is the genuine alternative?",
        options: [
          "No sustainability concern exists; wild oud is unlimited",
          "Pressure on wild Aquilaria populations, addressed by cultivated, sustainably farmed oud",
          "Wild oud harvesting is already fully regulated worldwide",
          "The only alternative is to stop using oud entirely",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "What must be assembled from artefacts built across all fourteen prior modules?",
        options: [
          "A single fragrance bottle",
          "The complete capstone portfolio",
          "A retail price list",
          "A patch test log only",
        ],
        correctIndex: 1,
      },
      {
        question: "What does the capstone performance require, per this module's objectives?",
        options: [
          "A written essay only, with no practical component",
          "A complete scent-and-adornment finishing service on a partner or model, from consultation to finish",
          "A single fragrance recommendation with no consultation",
          "A retail sales pitch only",
        ],
        correctIndex: 1,
      },
      {
        question: "Besides performing the service, what else must a candidate be able to do in this module?",
        options: [
          "Design a new fragrance bottle",
          "Articulate the Amber philosophy of fragrance and ritual in their own words, to a client or an examiner",
          "Recite the fragrance pyramid from memory only",
          "Formulate a brand-new synthetic aromatic",
        ],
        correctIndex: 1,
      },
      {
        question: "What does completing this module and its capstone confer?",
        options: [
          "Access to Module 1",
          "Course VII standing as a certified Amber Atelier scent & adornment specialist",
          "An automatic refund",
          "Enrollment in an unrelated course",
        ],
        correctIndex: 1,
      },
      {
        question: "This final module's subtitle frames it as being fundamentally about:",
        options: [
          "A new retail pricing strategy",
          "Who you are now — and the finished ritual that proves it",
          "A new fragrance ingredient",
          "A marketing campaign for Amber Edit",
        ],
        correctIndex: 1,
      },
    ],
  },
];
