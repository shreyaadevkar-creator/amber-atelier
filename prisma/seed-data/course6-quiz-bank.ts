import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored MCQ knowledge checks for Course VI, "The Living Ceremony."
 *
 * The source material writes each module's quiz as five open-ended reflection prompts with
 * no stored answer key. These questions are a gradable rewrite of the same objectives, key
 * terms, and prompts, for instant client-side scoring — not an extraction.
 */
export const course6QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
      {
        question:
          "Why is bridal styling treated as one integrated service rather than stacked separate appointments?",
        options: [
          "Because it is more profitable to bill as one service",
          "Because hair, face, drape, and adornment must be planned together, not as separate services",
          "Because clients prefer receiving a single bill",
          "Because it takes less total time than separate appointments",
        ],
        correctIndex: 1,
      },
      {
        question: "What are the four pillars of a complete bridal look?",
        options: [
          "Hair, face, drape, and adornment",
          "Hair, makeup, nails, and jewelry",
          "Consultation, trial, contract, and timeline",
          "Skin, hair, body, and mind",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a \"structural drape\" as taught in this module?",
        options: [
          "A decorative accessory added at the very end",
          "The engineering of fabric, like a sari or lehenga dupatta, as a load-bearing element of the look",
          "A specific hairstyle used only for outdoor weddings",
          "A makeup technique for long wear",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does bridal work carry different stakes than a single-service appointment?",
        options: [
          "It pays a higher hourly rate",
          "It is a fixed-deadline service with no possibility of a next-appointment correction",
          "It requires less product overall",
          "It is shorter in duration",
        ],
        correctIndex: 1,
      },
      {
        question: "According to this module, what does bridal work change about your technical standard?",
        options: [
          "It lowers the standard to work faster",
          "It raises the standard to something entirely new",
          "Nothing — the standard stays the same; only the cost of skipping a step rises",
          "It removes the need for consultation",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What is a \"seated styling plan\"?",
        options: [
          "Hair, drape, and camera-angle planning built around a seated bride from the trial onward",
          "A discount offered to brides who prefer to sit during service",
          "A styling plan reserved only for elderly clients",
          "A spare chair kept in the artist's travelling kit",
        ],
        correctIndex: 0,
      },
      {
        question: "What does hijab-compatible bridal styling focus on?",
        options: [
          "Removing the hijab for the final photographs",
          "Visible features, with under-scarf volume technique offered",
          "Replacing the hijab with a bridal veil",
          "Styling that ignores the scarf entirely",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is a Sikh dastar treated differently from a styling accessory?",
        options: [
          "Because it is costly to work around",
          "Because it is a religious article requiring styling that complements, rather than competes with, it",
          "Because it must be removed before makeup application",
          "Because it is optional and can be styled over freely",
        ],
        correctIndex: 1,
      },
      {
        question: "When consulting with a same-sex couple, what should a stylist avoid doing?",
        options: [
          "Discussing the budget openly",
          "Assuming which partner wants which traditional role",
          "Offering a trial appointment",
          "Taking notes during consultation",
        ],
        correctIndex: 1,
      },
      {
        question: "What does this module say about relying on a single \"one bridal template\"?",
        options: [
          "It works well for most brides",
          "It was never built to serve every real bride",
          "It should be used to keep pricing simple",
          "It applies only to destination weddings",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "What is the \"patch test window\"?",
        options: [
          "The 48-hour minimum period before any new product touches the skin for the first time",
          "A one-hour test performed the morning of the wedding",
          "A single test performed once in a client's lifetime",
          "A display window for henna and product samples",
        ],
        correctIndex: 0,
      },
      {
        question: "What is PPD, and why does \"black henna\" pose a genuine safety risk?",
        options: [
          "A natural oil that moisturises the skin during henna application",
          "An industrial dye sometimes added to \"black henna\" capable of causing severe allergic reactions",
          "A brand name for a specific henna cone",
          "A pigment used only in bridal eye makeup",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is the bridal trial described as evidence for the bride, rather than practice for the artist?",
        options: [
          "It documents the artist's technique for internal training",
          "It gives the bride a reliable preview and reference point for the actual wedding-day look",
          "It exists mainly to justify the trial fee",
          "It replaces the need for a written contract",
        ],
        correctIndex: 1,
      },
      {
        question: "What is a \"timeline buffer\"?",
        options: [
          "A non-refundable cancellation fee",
          "Built-in extra time in a written schedule, accounting for the reality of bridal mornings",
          "A grace period for late payment",
          "The gap between the trial and the wedding date",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should travel and overtime fees be stated in writing well before the wedding morning?",
        options: [
          "To avoid conflict and surprise costs on a day that leaves no room for renegotiation",
          "Because it is required by international law",
          "To justify raising the total price later",
          "Because brides always request a discount otherwise",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "What is a \"film-forming polymer\" in long-wear foundation?",
        options: [
          "A fragrance additive used for scent longevity",
          "The flexible, transfer-resistant film that long-wear foundation dries into",
          "A type of makeup brush fibre",
          "A setting spray ingredient that dissolves easily in water",
        ],
        correctIndex: 1,
      },
      {
        question: "What is lawsone?",
        options: [
          "A synthetic dye added to commercial henna cones",
          "The natural dye molecule in henna leaves that binds to keratin to create a stain",
          "An adhesive used for bonding lashes",
          "A UV-filtering ingredient",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the common chemical base of most professional lash adhesives?",
        options: ["Cyanoacrylate", "Lawsone", "Niacinamide", "Silicone alone"],
        correctIndex: 0,
      },
      {
        question:
          "Why should a heated bonding tool be tested before every single client, rather than only the first of the day?",
        options: [
          "To conserve electricity across the day",
          "Because tool heat and individual skin sensitivity can vary, so re-testing protects each client's safety",
          "Because the tool cools too slowly to need repeated checks",
          "Because it is a legal requirement only for the day's first client",
        ],
        correctIndex: 1,
      },
      {
        question: "According to this module, surviving twelve or more hours of wear depends most on:",
        options: [
          "A correct long-wear layering sequence, where each layer contributes to durability",
          "Using only the most expensive product available",
          "Applying one very thick single layer of foundation",
          "Skipping setting technique to save time",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
      {
        question: "What is Solah Shringar?",
        options: [
          "A modern bridal makeup trend",
          "The traditional framework of sixteen Indian bridal adornments",
          "A single hairstyle used for South Indian weddings",
          "A category of sari fabric",
        ],
        correctIndex: 1,
      },
      {
        question: "What is sindoor?",
        options: [
          "A style of bridal eyeliner",
          "Vermilion powder applied at the hair parting, carrying marital significance for many Hindu brides",
          "A type of bridal bangle",
          "A fragrance used during the ceremony",
        ],
        correctIndex: 1,
      },
      {
        question: "What is a mangalsutra?",
        options: [
          "A decorative anklet",
          "A sacred marriage necklace, never assumed or substituted without the bride's explicit direction",
          "A veil worn only during the pheras",
          "A henna pattern applied to the palms",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should sindoor and mangalsutra never be added to a look without the bride's explicit direction?",
        options: [
          "Because they are expensive items to source",
          "Because they carry specific religious and marital significance that is not the stylist's to assume",
          "Because they are difficult to apply correctly",
          "Because they are purely decorative choices with no meaning",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this module describe Solah Shringar as \"one completed bride,\" not sixteen separate skills?",
        options: [
          "Because typically only one of the sixteen adornments is ever used",
          "Because the sixteen elements are meant to be understood and applied together as an integrated whole",
          "Because sixteen is simply a traditional number with no real meaning",
          "Because most brides choose to skip most of the sixteen elements",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "What is the \"recognition principle\"?",
        options: [
          "The standard that a bridal look should enhance, not obscure, a bride's own features",
          "A rule requiring family approval before finalising a look",
          "A technique for identifying a client's skin tone",
          "A pricing policy tied to trial length",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a \"trial feedback loop\"?",
        options: [
          "Repeating the exact same trial appointment multiple times",
          "Actively asking, rather than waiting, for a bride's honest reaction during a trial",
          "A cycle of photos sent to the bride after the wedding",
          "A refund policy tied to trial satisfaction",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Why is \"does this feel like you?\" considered a better trial question than waiting for unprompted feedback?",
        options: [
          "It is quicker to ask than other questions",
          "It actively surfaces a bride's honest reaction rather than assuming silence means satisfaction",
          "It avoids having to discuss price",
          "It removes the need for a mirror during the trial",
        ],
        correctIndex: 1,
      },
      {
        question:
          "According to this module, how should a stylist respond to a request that conflicts with venue or weather realities?",
        options: [
          "Refuse to discuss the request further",
          "Agree immediately to avoid any conflict",
          "Offer respectful, evidence-based pushback",
          "Ignore the request and proceed as planned",
        ],
        correctIndex: 2,
      },
      {
        question: "What compliment does this module suggest is the true measure of bridal artistry's success?",
        options: [
          "\"You look like a completely different person\"",
          "Being told the bride still looks like herself, only more luminous",
          "Praise from the photographer about lighting",
          "Compliments about the price paid for the service",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
      {
        question: "What is a \"waterproof polymer\" in makeup formulation?",
        options: [
          "A dye that shifts colour with heat",
          "The silicone- or wax-based film that repels water rather than dissolving in it",
          "A fragrance-stabilising additive",
          "A powder-based setting agent only",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should waterproof eye makeup be used on every bridal booking, not just ones with rain forecast?",
        options: [
          "Because it is cheaper than standard formulas",
          "Because happy tears and sweat are a near-certain part of most ceremonies, not only rainy ones",
          "Because it stores for longer once opened",
          "Because it is required by regional law",
        ],
        correctIndex: 1,
      },
      {
        question: "What kind of remover does a waterproof formula typically require, and why?",
        options: [
          "A dedicated oil- or bi-phase-based remover, because the formula won't dissolve in plain water",
          "Plain water alone",
          "No remover is needed for waterproof formulas",
          "An exfoliating scrub",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a \"touch-up window\"?",
        options: [
          "A fixed hourly break scheduled for the artist",
          "A planned pause, mapped to the ceremony's actual schedule, for reinforcing the look",
          "A period before the wedding reserved for booking the trial",
          "The final hour before the ceremony only",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which ceremony moment does this module use as its example of a movement-heavy ritual needing pinning tested under motion?",
        options: ["The reception dance", "The pheras", "The bridal shower", "The engagement photo session"],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question: "Why should matte, dehydrating formulas generally be avoided on more mature, menopausal skin?",
        options: [
          "Because they cost more than hydrating formulas",
          "Because mature skin tends to need more hydration, and dehydrating formulas can emphasise dryness",
          "Because they set too slowly for a wedding timeline",
          "Because they come in fewer shade options",
        ],
        correctIndex: 1,
      },
      {
        question: "What is a \"colour-depositing spray,\" and how should it be offered to a bride?",
        options: [
          "A permanent hair dye applied without discussion",
          "A temporary grey-blending option that should be offered, not assumed",
          "A tanning product used only on the face",
          "A fragrance spray applied to the veil",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which earlier Amber course's positioning knowledge applies directly to planning comfort for a pregnant bride across long hours?",
        options: ["Course I", "Course V", "Course III", "Course II"],
        correctIndex: 1,
      },
      {
        question: "What is a \"comfort buffer\"?",
        options: [
          "A discount offered specifically to pregnant brides",
          "Scheduled time built in for a pregnant or mature bride's physical needs, without apology framing",
          "An extra layer of padding sewn into the gown",
          "A required waiting period before booking",
        ],
        correctIndex: 1,
      },
      {
        question: "What assumption does this module warn against making with a remarrying bride?",
        options: [
          "That she wants a smaller overall budget",
          "That her age or marital history should shape what look she is offered",
          "That she wants a shorter ceremony",
          "That she requires less makeup than a first-time bride",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "What is the \"two-of-everything rule\"?",
        options: [
          "Booking two artists for every wedding",
          "Carrying a genuine backup for any kit item whose failure would stop the service",
          "Charging double the standard rate for bridal bookings",
          "Bringing two of every foundation shade only",
        ],
        correctIndex: 1,
      },
      {
        question: "What does a touch-up kit contain, and how does it differ from the core kit?",
        options: [
          "It is identical to the core kit, only smaller",
          "It is a compact, separate bag for mid-ceremony refreshes, sized for the full party if needed",
          "It contains only hairpins and nothing else",
          "It replaces the need for a core travelling kit",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does a missing product carry more serious consequences on a wedding day than on a normal service day?",
        options: [
          "Because replacement products cost more on a wedding day",
          "Because there is no next-appointment correction — the day is fixed and cannot be repeated",
          "Because wedding-day products are always different from regular ones",
          "There is no real difference in consequence",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this module say on-location work should raise, not lower, the sanitation standard?",
        options: [
          "Because on-location work involves multiple faces from a bridal party in a less controlled environment",
          "Because clients pay a premium for on-location service",
          "Because there is more spare time available on location",
          "Because outdoor air is inherently cleaner",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Per this module's two-of-everything principle, which items should always have a genuine backup in a bridal kit?",
        options: [
          "Only purely decorative items",
          "Core, service-critical items whose failure would stop the service",
          "Only items under a certain price point",
          "Nothing — one of each item is always sufficient",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "What is a \"bride-first redirect\"?",
        options: [
          "Asking family members to leave the consultation room",
          "Acknowledging family input while consistently returning final decisions to the bride",
          "Redirecting the bride toward a cheaper package",
          "Ending the consultation early to avoid conflict",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should package pricing be presented in writing before the trial?",
        options: [
          "To raise the price without further discussion",
          "To prevent budget conflict by setting costs and add-ons clearly ahead of time",
          "It is a formality with no real practical purpose",
          "Because verbal pricing quotes are not permitted",
        ],
        correctIndex: 1,
      },
      {
        question: "What should a budget-reduction conversation offer, instead of a guilt-inducing response?",
        options: [
          "A referral to a different, cheaper artist",
          "Honest, transparent options that fit the adjusted budget",
          "A flat refusal to continue the booking",
          "A surprise discount with no explanation given",
        ],
        correctIndex: 1,
      },
      {
        question: "How should a practitioner respond if pressured to skip a safety step like a patch test?",
        options: [
          "Skip it quietly to avoid tension",
          "Hold the professional boundary and decline to skip it",
          "Skip it only if the pressure is strong enough",
          "Charge extra and skip it anyway",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does a calmly stated boundary reassure a stressed room more than a hesitant one?",
        options: [
          "It ends the conversation more quickly",
          "Calm confidence signals competence and control, which eases tension for everyone present",
          "It discourages any further questions",
          "It demonstrates the artist is financially in charge",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question: "What is the Nivi drape?",
        options: [
          "A Punjabi turban style",
          "The widely recognised general sari draping style, with the pallu over the left shoulder",
          "A Bengali bridal headpiece",
          "A veil-only styling method",
        ],
        correctIndex: 1,
      },
      {
        question: "What is an \"anchor point\" in draping?",
        options: [
          "A decorative brooch pinned for visual effect",
          "A secure pin location — shoulder, waist, or underskirt — essential to a drape's structural integrity",
          "The final location chosen for photographs",
          "A specific fabric weave pattern",
        ],
        correctIndex: 1,
      },
      {
        question: "Why must the drape be pinned and secured before final hair styling, rather than after?",
        options: [
          "Because hair styling could disturb or reposition the already-completed drape's structure",
          "Because draping always takes longer than hair styling",
          "It is purely an aesthetic preference with no functional reason",
          "Because hair products can permanently stain the fabric",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does the photography check happen last, immediately before the ceremony begins?",
        options: [
          "To save time earlier in the wedding-morning schedule",
          "To confirm the finished look reads correctly under real camera and lighting conditions right before it's seen",
          "Because photographers typically arrive late",
          "Because it is considered the least important step",
        ],
        correctIndex: 1,
      },
      {
        question: "Despite regional differences, what do all drape styles rely on, per this module?",
        options: [
          "The same fabric type",
          "The same three anchor points for structural integrity",
          "The same colour palette",
          "The same hairstyle",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "What are the topor and mukut, and which tradition do they belong to?",
        options: [
          "Punjabi bridal bangles",
          "The Bengali bridal headpiece and crown-like framing piece",
          "A South Indian nose ring",
          "A Chinese wedding costume",
        ],
        correctIndex: 1,
      },
      {
        question: "What does \"Nauvari\" refer to in the Maharashtrian bridal tradition?",
        options: ["A nine-yard sari drape style", "A type of hair oil", "A traditional wedding sweet", "A bridal veil"],
        correctIndex: 0,
      },
      {
        question: "What are chooda and kalire?",
        options: [
          "Bengali bridal headpieces",
          "Punjabi bridal bangles and their hanging gold ornaments",
          "South Indian pearl hairline strings",
          "Chinese embroidery patterns",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the Qun Kwa?",
        options: [
          "A South Indian jewelry set",
          "The traditional Chinese red-and-gold embroidered wedding costume",
          "A Punjabi turban style",
          "A Bengali bridal crown",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this module insist \"Indian bridal\" is not a single, generic style?",
        options: [
          "Because only one region has genuine bridal traditions",
          "Because regional traditions such as Bengali, Maharashtrian, and Punjabi each carry distinct structural and technical elements deserving correct naming",
          "Because Indian weddings are uncommon",
          "Because tradition has no professional relevance",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question: "What is \"date exclusivity pricing\"?",
        options: [
          "A discount offered for booking far in advance",
          "Pricing that accounts for holding a single date exclusively for one client",
          "A surcharge applied only to weekend weddings",
          "Pricing set purely by venue location",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should bridal pricing reflect date exclusivity, not just time spent?",
        options: [
          "Because holding a date exclusively means turning away every other potential booking for that day",
          "Because time spent on a booking cannot be measured",
          "Because exclusivity carries no real cost to the business",
          "Because clients generally prefer strict hourly billing",
        ],
        correctIndex: 0,
      },
      {
        question: "What are the roles of a \"lead artist\" and an \"assistant\" on a multi-person bridal-party booking?",
        options: [
          "They perform identical, fully interchangeable roles",
          "The lead artist directs the bride's look and oversees the team, while the assistant supports the wider party",
          "The assistant always holds more seniority than the lead artist",
          "There is no defined hierarchy in bridal team work",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should team roles be assigned before the wedding morning begins?",
        options: [
          "To avoid confusion and delays once time pressure sets in on the day itself",
          "Because roles are expected to change randomly during the event",
          "It makes no real difference to the outcome",
          "Because clients are responsible for assigning roles themselves",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this module recommend a firm booking cap per date, even during high season?",
        options: [
          "To maximise the number of bookings regardless of quality",
          "To protect the quality and attention each fixed-deadline booking requires",
          "Because clients dislike larger styling teams",
          "Because a cap automatically lowers overall pricing",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
      {
        question: "What is an \"AR bridal trial\"?",
        options: [
          "A mandatory replacement for the in-person trial",
          "Augmented-reality preview technology, useful as a starting conversation, not a trial replacement",
          "An advanced skin treatment offered before the wedding",
          "A booking app feature limited to pricing quotes",
        ],
        correctIndex: 1,
      },
      {
        question: "Why can't AR trial technology replace an in-person trial?",
        options: [
          "It cannot capture real texture, fit, movement, and in-person feedback the way a physical trial can",
          "It is more expensive to run than an in-person trial",
          "It is not permitted in most regions",
          "It simply takes longer than an in-person trial",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a \"sustainable ritual\" in bridal practice?",
        options: [
          "A ritual performed only once per wedding season",
          "Reusable, natural, and lower-waste alternatives within traditional bridal adornment",
          "A ritual that skips all traditional elements",
          "A discount offered for smaller wedding parties",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does this course describe its own facts as having a \"shelf life\"?",
        options: [
          "Because trends, technology, and technique evolve, so specific facts will need updating over time",
          "Because the course content is deleted after one year",
          "Because bridal work only happens seasonally",
          "Because the facts in this module are already known to be wrong",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What is the \"one durable skill\" this module asks practitioners to carry forward beyond any specific fact?",
        options: [
          "Memorising every current trend permanently",
          "The habit of reading new evidence and trends with discipline, rather than assuming today's facts are permanent",
          "Avoiding all new technology entirely",
          "Relying only on destination-wedding bookings",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "What does the Course VI capstone portfolio draw from?",
        options: [
          "A single module's content only",
          "Artefacts built across all fourteen modules that came before it",
          "Only the contract and pricing module",
          "Only the trial module",
        ],
        correctIndex: 1,
      },
      {
        question: "What does the capstone require the practitioner to perform?",
        options: [
          "A written exam only, with no practical component",
          "A complete bridal look on a partner or model, from consultation to finish",
          "A single makeup application with no consultation step",
          "A drape demonstration only, without any makeup",
        ],
        correctIndex: 1,
      },
      {
        question: "Who should the practitioner be able to articulate the Amber philosophy of bridal artistry to?",
        options: [
          "Only fellow students",
          "A client or an examiner, in their own words",
          "Only the course instructor",
          "No one — it need not be spoken aloud",
        ],
        correctIndex: 1,
      },
      {
        question: "What does completing this final module grant the practitioner?",
        options: [
          "Access to Course I content",
          "Course VI standing as a certified Amber Atelier bridal and event stylist",
          "A discount on future Amber courses",
          "An honorary mention with no formal certification",
        ],
        correctIndex: 1,
      },
      {
        question: "This final module is fundamentally about:",
        options: [
          "A new draping technique",
          "Who you are now as a bridal artist, and the ceremony that proves it",
          "An update to pricing structure",
          "A newly introduced regional tradition",
        ],
        correctIndex: 1,
      },
    ],
  },
];
