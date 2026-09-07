import type { QuizQuestionSeed } from "./course1-quiz-bank";

/**
 * Authored MCQ knowledge checks for Course VIII, "The Living Practice."
 *
 * The source material writes each module's quiz as five open-ended reflection prompts
 * with no stored answer key. These questions are a gradable rewrite of the same
 * knowledge points, for instant client-side scoring — not an extraction.
 */
export const course8QuizBank: { moduleOrder: number; questions: QuizQuestionSeed[] }[] = [
  {
    moduleOrder: 1,
    questions: [
      {
        question: "Name the five core business functions covered across this course.",
        options: [
          "Pricing, clients, finances, marketing, and operations",
          "Technique, hiring, sales, exit planning, and branding",
          "Skincare, haircare, makeup, nails, and wellness",
          "Branding, social media, PR, ads, and influencers",
        ],
        correctIndex: 0,
      },
      {
        question: "Why can technical excellence alone fail to sustain a practice?",
        options: [
          "Because technical skill alone guarantees business success",
          "Because a sustainable practice also depends on business functions like pricing, finances, and marketing, not technique alone",
          "Because clients never value technique",
          "Because technique becomes obsolete within a year",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the specific market gap this course was built to close?",
        options: [
          "The gap between technical beauty training and the business skills needed to run a sustainable practice",
          "A shortage of licensed nail technicians",
          "The lack of skincare ingredient knowledge among practitioners",
          "The absence of a massage certification pathway",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Which module of this course covers pricing in depth, and which covers client relationships?",
        options: [
          "Module 4 covers pricing; Module 3 covers client relationships",
          "Module 1 covers pricing; Module 2 covers client relationships",
          "Module 9 covers pricing; Module 13 covers client relationships",
          "Module 6 covers pricing; Module 7 covers client relationships",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does this module describe Course VIII as completing, rather than replacing, the seven courses before it?",
        options: [
          "Because it teaches the business skills a practitioner needs alongside the technical skills already taught in Courses I–VII",
          "Because it repeats the technical content of earlier courses",
          "Because it replaces the need for technical training entirely",
          "Because it is unrelated to the previous seven courses",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 2,
    questions: [
      {
        question: "What is \"booth/chair rental\" as a business model, per this module?",
        options: [
          "A model paying fixed rent for workspace access, independent of monthly client volume",
          "A model where the salon owner pays the practitioner hourly",
          "A commission-only model with no rent",
          "A cooperative ownership model",
        ],
        correctIndex: 0,
      },
      {
        question: "What is \"sliding-scale pricing,\" as taught in this module?",
        options: [
          "Constant blanket discounting for every client",
          "Bounded, deliberate pricing tiers, such as off-peak or community days, rather than blanket discounting",
          "Charging every client a different, random price",
          "Raising prices only during the busy season",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should a discount always be treated as real, quantifiable revenue loss?",
        options: [
          "Because it isn't actually a loss, only marketing",
          "Because giving up income directly reduces revenue, even when it is framed as a small favour",
          "Because discounts are illegal in a service business",
          "Because discounts only affect the client, never the business",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Name two ways to offer accessible pricing without a race-to-the-bottom discount culture, per this module.",
        options: [
          "Sliding-scale tiers and community pricing days, applied deliberately and boundedly",
          "Discounting every service by half for every client",
          "Refusing to serve budget-conscious clients",
          "Randomly waiving fees whenever a client asks",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this module insist no single business model fits every practitioner?",
        options: [
          "Because practitioners and markets vary, so different employment and business models suit different circumstances",
          "Because only one correct model exists and all others fail",
          "Because business models are irrelevant to a practice's success",
          "Because models change every year and so cannot be studied",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 3,
    questions: [
      {
        question: "What does \"expectation management\" mean, as taught in this module?",
        options: [
          "Proactively setting a realistic, slightly modest expectation before a service begins",
          "Promising the best possible outcome to excite the client",
          "Avoiding any discussion of outcomes before a service",
          "Letting the client set all expectations unprompted",
        ],
        correctIndex: 0,
      },
      {
        question:
          "In the module's case study involving a disputed service, why is neither an automatic refund nor a defensive refusal the correct response?",
        options: [
          "Because the correct response is documented resolution: responding with evidence and a genuine resolution path",
          "Because the client is always right regardless of evidence",
          "Because refunds are never appropriate under any circumstance",
          "Because the practitioner should ignore the complaint entirely",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does documentation, such as timestamped photographs, matter in a service dispute?",
        options: [
          "It provides evidence that supports a fair, genuine resolution rather than a guess or assumption",
          "It has no real bearing on resolving disputes",
          "It is useful only for marketing purposes",
          "It replaces the need for any conversation with the client",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What does \"under-promise, slightly\" mean, and why does it build more trust than an inflated promise?",
        options: [
          "Setting a modest, realistic expectation so the actual result meets or exceeds it, rather than disappointing after an inflated promise",
          "Telling clients the service will likely fail",
          "Promising more than can be delivered, to impress the client",
          "Refusing to discuss expected outcomes at all",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does client retention depend on more than simply repeating correct technique each visit?",
        options: [
          "Because retention rests on the ongoing relationship, trust, and psychology built with a client over time, not on technique alone",
          "Because technique is irrelevant to whether a client returns",
          "Because retention is guaranteed automatically once technique is correct",
          "Because clients never return regardless of relationship quality",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 4,
    questions: [
      {
        question: "Name the three components of a service's true cost, per this module.",
        options: [
          "Cost of goods, labour cost, and overhead",
          "Rent, marketing, and taxes only",
          "Materials and profit only",
          "Labour and marketing only",
        ],
        correctIndex: 0,
      },
      {
        question: "Why must labour be valued at a real hourly rate, rather than treated as free?",
        options: [
          "Because omitting labour cost understates the true cost of a service and undermines sustainable pricing",
          "Because labour has no real cost in a service business",
          "Because clients prefer prices that exclude labour",
          "Because labour is already fully covered by overhead",
        ],
        correctIndex: 0,
      },
      {
        question: "Explain the difference between cost-based and value-based pricing.",
        options: [
          "Cost-based pricing builds upward from calculated true cost; value-based pricing builds from the client's perceived value",
          "The two terms describe the same pricing method",
          "Cost-based pricing ignores materials; value-based pricing ignores labour",
          "Value-based pricing is always lower than cost-based pricing",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why is cost described as the \"non-negotiable floor\" and value as the justification above it?",
        options: [
          "Because a price can never sustainably fall below true cost, while value determines how much above that floor to charge",
          "Because value always outweighs cost when setting a fair price",
          "Because cost and value are unrelated concepts in this module",
          "Because the floor refers to a legal price minimum, not a calculated one",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does an undocumented pattern of discounting, such as a \"friends and family discount,\" erode a business \"quietly and invisibly\"?",
        options: [
          "Because each undocumented discount is a real revenue loss that compounds unnoticed over time",
          "Because friends and family never actually receive real discounts",
          "Because such discounts are illegal",
          "Because discounts only affect the friend or family member, not the business",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 5,
    questions: [
      {
        question: "Who was the \"Nai\" in traditional Indian village life?",
        options: [
          "The village barber, who historically also served as a minor surgeon, messenger, and matchmaker",
          "A dedicated hairdresser with no other role in the village",
          "A traveling merchant unrelated to grooming",
          "A modern salon franchise brand",
        ],
        correctIndex: 0,
      },
      {
        question: "Why did the Nai's position in village life generate such a high degree of social trust?",
        options: [
          "Because the multiple intimate roles the Nai held, beyond grooming, required the community's confidence beyond technique alone",
          "Because the Nai charged the lowest prices in the village",
          "Because the role required no direct interaction with clients",
          "Because the Nai was formally appointed by a government office",
        ],
        correctIndex: 0,
      },
      {
        question: "What does this module mean when it says \"the Nai's business was never really the haircut\"?",
        options: [
          "That the Nai's true product was the trust the community placed in him, with the haircut as only one visible service",
          "That the Nai never actually cut hair",
          "That haircuts were unrelated to the Nai's income",
          "That the module considers the Nai's work purely decorative",
        ],
        correctIndex: 0,
      },
      {
        question: "According to this module, what has always been the beauty professional's true core product?",
        options: [
          "Trust, not technique alone",
          "The lowest price available in the market",
          "The newest technology available",
          "A single signature technique",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this module treat client confidentiality as seriously as a technical safety standard?",
        options: [
          "Because trust, the practitioner's core inherited asset, depends on protecting a client's private information just as much as on physical safety",
          "Because confidentiality is a legal formality unrelated to trust",
          "Because technical safety always matters more than confidentiality",
          "Because client confidentiality only matters in medical settings",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 6,
    questions: [
      {
        question: "What is the simple test for distinguishing an ethical upsell from a pressure sell?",
        options: [
          "Whether the recommendation would still be made even without a commission attached",
          "Whether the client agrees immediately",
          "Whether the product is the most expensive option available",
          "Whether the practitioner personally prefers the product",
        ],
        correctIndex: 0,
      },
      {
        question: "Name the two opposite failure modes this module identifies in selling.",
        options: [
          "Underselling your own worth and overselling unnecessary services",
          "Overpricing and underpricing services equally",
          "Talking too much and talking too little during a consultation",
          "Selling too many products and too few services",
        ],
        correctIndex: 0,
      },
      {
        question: "Why can a commission structure tied purely to sales volume incentivise pressure selling?",
        options: [
          "Because it rewards the amount sold rather than genuine client outcomes, tempting a practitioner to prioritise volume over the client's real needs",
          "Because volume-based commission has no effect on practitioner behaviour",
          "Because pressure selling is required to earn any commission at all",
          "Because commission structures never carry any ethical implications",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why is underselling your own worth described as \"equally damaging\" to overselling unnecessary services?",
        options: [
          "Because both distort a fair, honest exchange of value — one shortchanges the practitioner, the other shortchanges the client",
          "Because underselling has no real consequences for the business",
          "Because only overselling can ever harm a business",
          "Because underselling always leads to more repeat clients",
        ],
        correctIndex: 0,
      },
      {
        question: "What is \"commission incentive design,\" as taught in this module?",
        options: [
          "Structuring pay to reward genuine client outcomes rather than raw sales volume alone",
          "Paying a flat salary with no commission at all",
          "Rewarding only the highest-priced sales, regardless of client benefit",
          "A legal requirement with no connection to ethics",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 7,
    questions: [
      {
        question: "What is a repetitive strain injury (RSI), as defined in this module?",
        options: [
          "Cumulative injury to wrists, hands, or joints from prolonged repetitive fine-motor work",
          "A one-time accidental cut sustained during a service",
          "An allergic reaction to a product",
          "An injury sustained by the client during treatment",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an early signal of burnout, distinct from ordinary tiredness?",
        options: [
          "Dread, emotional flatness, or unexplained physical symptoms",
          "Looking forward to the next workday",
          "A single day of feeling sleepy",
          "Increased enthusiasm for new clients",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is a fully booked calendar not automatically a sign of a healthy business, per this module?",
        options: [
          "Because a full calendar without sustainable boundaries can drive burnout and RSI rather than reflect true business health",
          "Because a full calendar always means the business is failing",
          "Because bookings have no connection to practitioner wellbeing",
          "Because a full calendar guarantees financial success regardless of workload",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this module call protecting your own body \"a business decision, not an indulgence\"?",
        options: [
          "Because a practitioner's body is the core tool of the business, and injury or burnout directly threatens the business's survival",
          "Because protecting the body has no bearing on the business",
          "Because self-care is purely a personal luxury unrelated to work",
          "Because clients expect practitioners to appear tired",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is this module described as the one built to protect the practitioner rather than the client?",
        options: [
          "Because, unlike other modules focused on client care, this one centers the practitioner's own ergonomics, burnout, and boundaries",
          "Because it teaches only client safety protocols",
          "Because it focuses exclusively on pricing",
          "Because it repeats content from an earlier course on skin anatomy",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 8,
    questions: [
      {
        question: "What is a \"leave fund,\" as defined in this module?",
        options: [
          "A deliberately built financial reserve covering income gaps during maternity, medical, or extended leave",
          "A discretionary fund reserved for marketing expenses",
          "A government-provided salary replacement automatically issued to all practitioners",
          "A one-time bonus paid at business launch",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does a self-employed practitioner need to plan for leave differently than a salaried employee?",
        options: [
          "Because self-employment carries no automatic paid leave, so income during leave must be deliberately planned and funded",
          "Because self-employed practitioners never need leave",
          "Because employers always provide leave pay regardless of employment type",
          "Because leave planning only matters for salon owners, not solo practitioners",
        ],
        correctIndex: 0,
      },
      {
        question: "What is \"succession planning,\" as described in this module?",
        options: [
          "The multi-year process of preparing a practice to transfer to a successor or new owner",
          "A single meeting held immediately before retirement",
          "A marketing plan for attracting new clients",
          "A pricing strategy for a practice's final year",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should succession planning begin years before a planned exit, rather than months?",
        options: [
          "Because a smooth transfer of systems, relationships, and client trust takes sustained time to prepare, not a short window",
          "Because succession has no real time requirement",
          "Because a rushed handover is always more effective",
          "Because clients prefer sudden, unannounced ownership changes",
        ],
        correctIndex: 0,
      },
      {
        question:
          "According to this module, the typical career-stage progression moves from a solo starter toward which later stages?",
        options: [
          "Salon owner or mentor, among other later-career stages",
          "Immediate retirement, with no intermediate stages",
          "A return to employee status only",
          "A permanent solo-starter stage with no further progression",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 9,
    questions: [
      {
        question: "What is GST, as described in this module?",
        options: [
          "India's tax framework applying to service businesses above a registration threshold",
          "A type of client loyalty discount",
          "An international export tariff",
          "A mandatory tip added to every invoice",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should bookkeeping be updated regularly rather than reconstructed at year end?",
        options: [
          "Because regular updates keep records accurate and manageable, while reconstructing a year of records at once invites errors and missed obligations",
          "Because bookkeeping is only legally required once a year",
          "Because year-end reconstruction is always more accurate",
          "Because regular bookkeeping has no effect on tax accuracy",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does variable, appointment-driven income make an emergency fund especially important for a practitioner?",
        options: [
          "Because income can fluctuate unpredictably month to month, so a reserve protects against lean periods",
          "Because variable income is always higher than salaried income",
          "Because emergency funds are only relevant to salaried employees",
          "Because appointment-driven income eliminates the need for savings",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this module say liability insurance is \"not a signal of poor practice\"?",
        options: [
          "Because it protects against client injury or property damage claims regardless of how careful and meticulous the practitioner is",
          "Because only careless practitioners need insurance",
          "Because liability insurance replaces the need for safety training",
          "Because insurance is only relevant to large salons, not solo practitioners",
        ],
        correctIndex: 0,
      },
      {
        question: "Name the four components of the practitioner's financial kit described in this module.",
        options: [
          "Bookkeeping/invoicing, tax basics, an emergency fund, and liability insurance",
          "Marketing, hiring, scheduling, and inventory",
          "Pricing, discounts, referrals, and social media",
          "Rent, payroll, product cost, and utilities",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 10,
    questions: [
      {
        question: "What is a \"confident price statement,\" as taught in this module?",
        options: [
          "Stating a price plainly, once, without apology or unsolicited justification",
          "Explaining every cost component in detail before naming a price",
          "Apologising for the price before stating it",
          "Offering an immediate discount alongside every price",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why can an over-explained, apologetic price statement invite negotiation it did not need to invite?",
        options: [
          "Because over-justifying a price signals uncertainty, which can prompt a client to push back or expect a discount",
          "Because clients always ignore explanations entirely",
          "Because explanations make a price legally binding",
          "Because apologising always increases a client's trust",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a \"late-payment policy,\" per this module?",
        options: [
          "A written, pre-decided process for reminders and escalation on an unpaid invoice",
          "An informal, case-by-case reaction to each non-paying client",
          "A policy that automatically forgives all unpaid invoices",
          "A verbal-only agreement with no documentation",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does a pre-decided, written policy outperform an improvised, in-the-moment reaction when handling a non-paying client?",
        options: [
          "Because a written policy applies consistently and professionally, avoiding emotional or inconsistent decisions made under pressure",
          "Because written policies are never necessary once trust is established",
          "Because improvisation is always more effective for client relationships",
          "Because a written policy removes the need for any client communication",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does this module treat money conversations, such as stating a price or negotiating with a vendor, as a form of consultation?",
        options: [
          "Because they require the same honest, confident, client-centered communication taught for consultations elsewhere in the Atelier",
          "Because money conversations have nothing to do with client communication",
          "Because consultations never involve discussing price",
          "Because pricing conversations should be avoided entirely",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 11,
    questions: [
      {
        question: "What is a \"soft launch,\" as defined in this module?",
        options: [
          "Serving a small, invited client group first to gather feedback before a full public opening",
          "Opening at reduced prices for the business's entire first year",
          "Launching without any licensing in place",
          "A launch conducted entirely through paid advertising",
        ],
        correctIndex: 0,
      },
      {
        question: "What does \"location evaluation\" mean in this module?",
        options: [
          "Assessing a space against pricing and target-client data, rather than sentiment alone",
          "Choosing a location based purely on personal emotional attachment",
          "Selecting the cheapest available space regardless of clientele",
          "Avoiding any analysis of a potential location before signing",
        ],
        correctIndex: 0,
      },
      {
        question: "Why must licensing requirements be confirmed rather than assumed, per this module?",
        options: [
          "Because requirements vary and an incorrect assumption can create legal or operational risk before opening",
          "Because licensing is identical everywhere and never needs confirmation",
          "Because licensing only applies to large salons",
          "Because licensing has no real bearing on opening a practice",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does opening out of sequence — for example, signing a lease before confirming licensing — create avoidable risk?",
        options: [
          "Because later steps may reveal the space or plan is unworkable, after money is already committed",
          "Because sequence has no effect on launch outcomes",
          "Because leases are always refundable regardless of licensing",
          "Because licensing should always be confirmed after opening",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of a soft launch, and what should happen during it, per this module?",
        options: [
          "To gather real feedback from a small client group before a full public opening, and to adjust based on that feedback",
          "To generate maximum revenue immediately",
          "To replace the need for any licensing",
          "To avoid ever opening to the public",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 12,
    questions: [
      {
        question: "What does \"omotenashi\" mean, and how does it shape a business model in this module?",
        options: [
          "The Japanese hospitality philosophy of selfless, anticipatory service",
          "A Japanese term for aggressive upselling",
          "A Korean skincare routine unrelated to service style",
          "A discount pricing structure",
        ],
        correctIndex: 0,
      },
      {
        question: "Describe the \"maison\" model and what it prioritises, per this module.",
        options: [
          "The French prestige-house model of specialised artisans under one brand name, prioritising craft and prestige over rapid scale",
          "A rapid-franchise model focused purely on speed of growth",
          "A single-practitioner home-based model with no brand identity",
          "A government-run beauty cooperative",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the \"neighbourhood parlour tradition,\" as named in this module?",
        options: [
          "India's widespread, often home-based, community-embedded beauty-business model",
          "A luxury spa chain found only in five-star hotels",
          "An exclusively online beauty booking platform",
          "A model unique to Europe",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does this module insist India's neighbourhood parlour tradition deserves recognition by name, rather than dismissal as \"informal\"?",
        options: [
          "Because it is a genuine, structurally coherent business model worth studying like any other named global model, not a lesser version of one",
          "Because it is identical to the French maison model",
          "Because it has no real structure worth analysing",
          "Because it only exists in rural areas",
        ],
        correctIndex: 0,
      },
      {
        question: "This module names and describes five global beauty-business models drawn from which regions?",
        options: [
          "Korea, Japan, America, Europe, and India",
          "Only Japan and France",
          "Only the United States",
          "Korea and China exclusively",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 13,
    questions: [
      {
        question: "What is a \"reciprocal referral partnership,\" as defined in this module?",
        options: [
          "A referral relationship sustained by consistently sending business in both directions",
          "A one-directional arrangement where only one business refers clients",
          "A paid advertising contract between two businesses",
          "A partnership requiring no ongoing relationship",
        ],
        correctIndex: 0,
      },
      {
        question: "What is meant by a client's \"journey,\" per this module?",
        options: [
          "A client's full, multi-year relationship with a practice across several services and years, not one isolated booking",
          "A single visit from check-in to checkout",
          "A discount program reserved for repeat visits only",
          "A marketing campaign targeting new clients",
        ],
        correctIndex: 0,
      },
      {
        question: "What makes a referral partnership durable rather than one-sided, according to this module?",
        options: [
          "Consistently sending business in both directions, rather than only receiving referrals",
          "Signing a one-time formal contract",
          "Only referring the highest-paying clients",
          "Avoiding any communication between the two businesses",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does even a solo practitioner operate inside a genuine business network, per this module?",
        options: [
          "Because referral partnerships, client journeys, and professional relationships connect a practice to other businesses regardless of team size",
          "Because solo practitioners have no need for other businesses",
          "Because networks only apply to salons with employees",
          "Because working alone eliminates any need for referrals",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why does this module describe connection, rather than solo achievement, as this course's real final substantive lesson?",
        options: [
          "Because a sustainable practice depends on genuine relationships — referral partners, team culture, and client journeys — not on working in isolation",
          "Because solo achievement is the only true measure of success",
          "Because this module argues practitioners should avoid teams and partnerships",
          "Because connection is unrelated to running a business",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 14,
    questions: [
      {
        question: "What is \"consistent documentation,\" as defined in this module?",
        options: [
          "Regularly sharing real, consented client work as a practice's primary marketing infrastructure",
          "A one-time photoshoot never repeated",
          "Sharing unrelated stock images for marketing",
          "Documentation kept strictly private and never shared",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Why is consistent documentation on one or two platforms often more valuable than chasing every new trend, per this module?",
        options: [
          "Because sustained, focused effort builds a reliable marketing presence, while chasing every trend spreads effort too thin to be effective",
          "Because new platforms are always worse than old ones",
          "Because trends have no effect on marketing",
          "Because clients never look at social media",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a \"genuine differentiator,\" as described in this module?",
        options: [
          "A practice quality, like real sustainability investment, that is substantive rather than a marketing label",
          "Any claim printed on marketing material regardless of truth",
          "A discount offered to new clients",
          "A generic quality shared by every competing business",
        ],
        correctIndex: 0,
      },
      {
        question: "Why does this course describe its own facts as having a \"shelf life\"?",
        options: [
          "Because industry knowledge, trends, and technology evolve, so specific facts will need ongoing re-evaluation over time",
          "Because the course content is permanently accurate and never needs revisiting",
          "Because facts in the beauty business never change",
          "Because shelf life refers only to physical product expiration",
        ],
        correctIndex: 0,
      },
      {
        question:
          "According to this module, what is the one durable skill this entire Atelier has tried to model in every course's final module?",
        options: [
          "The evidence-reading habit — the discipline of evaluating a claim or trend on its merits rather than reacting to it",
          "Memorizing a fixed list of facts",
          "Following whichever trend is currently most popular",
          "Avoiding all new technology permanently",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    moduleOrder: 15,
    questions: [
      {
        question: "What does the capstone project for this course require a graduate to assemble?",
        options: [
          "A complete portfolio built from artefacts created across all fourteen preceding modules",
          "A single essay unrelated to prior coursework",
          "A brand-new skincare formulation",
          "A resume with no business plan",
        ],
        correctIndex: 0,
      },
      {
        question: "What must a graduate present as part of this final module, per its objectives?",
        options: [
          "A full, realistic business plan for a practice of their own design",
          "A marketing slogan only",
          "A single price list with no further detail",
          "A generic template with no personalization",
        ],
        correctIndex: 0,
      },
      {
        question: "In articulating the complete Amber philosophy for this capstone, a graduate is expected to draw on:",
        options: [
          "All eight courses of the Atelier",
          "Only Course VIII",
          "Only the first course, The Living Canvas",
          "No prior coursework at all",
        ],
        correctIndex: 0,
      },
      {
        question: "What does completing this final module and its capstone earn a graduate?",
        options: [
          "Standing as a fully certified Amber Atelier practitioner",
          "A refund on course fees",
          "Automatic enrollment in a ninth course",
          "Exemption from all future coursework requirements",
        ],
        correctIndex: 0,
      },
      {
        question: "This final module is fundamentally framed around:",
        options: [
          "Who the graduate has become after eight courses, and the capstone practice that proves it",
          "A new pricing strategy unrelated to prior learning",
          "A single new skincare ingredient",
          "A marketing campaign template",
        ],
        correctIndex: 0,
      },
    ],
  },
];
