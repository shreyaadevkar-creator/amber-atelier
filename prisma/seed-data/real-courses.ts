export type RealCourseMeta = {
  slug: string;
  order: number;
  completeHtmlFile: string;
  downloadablesHtmlFile: string | null;
  tagline: string;
  description: string;
  priceInPaise: number;
};

const COURSES_DIR = "/Users/midnight/Documents/AMBER/Courses/";

/**
 * Metadata for the eight real Amber Atelier courses. Titles/subtitles are read
 * directly from each course's HTML export at seed time (see ingest-course.ts);
 * this file only carries what isn't in that source — slug, ordering, file
 * locations, price, and the editorial tagline/description shown on the
 * marketing and dashboard pages.
 */
export const realCourses: RealCourseMeta[] = [
  {
    slug: "the-living-canvas",
    order: 1,
    completeHtmlFile: COURSES_DIR + "amber_course1_complete.html",
    downloadablesHtmlFile: COURSES_DIR + "amber_course1_downloadables.html",
    tagline: "Skin science, skincare theory, facial artistry, and the future of skin",
    description:
      "The Living Canvas is the Atelier's foundation course — fifteen modules carrying a practitioner from the architecture of skin itself through consultation, the professional facial, the world's great facial traditions, and the standard that earns certification. It is taught as a science first, and a craft second, because the second cannot be trusted without the first.",
    priceInPaise: 700000,
  },
  {
    slug: "the-living-crown",
    order: 2,
    completeHtmlFile: COURSES_DIR + "amber_course2_complete.html",
    downloadablesHtmlFile: null,
    tagline: "Hair science, scalp health, textured-hair mastery, and the art of styling",
    description:
      "The Living Crown carries a practitioner from the architecture of the hair strand and follicle through every texture the world's curricula have too often overlooked, into cutting, styling, and the Indian traditions of the braid and the gajra. Fifteen modules, built on the conviction that no hair texture is the exception and none is the default.",
    priceInPaise: 600000,
  },
  {
    slug: "the-living-palette",
    order: 3,
    completeHtmlFile: COURSES_DIR + "amber_course3_complete.html",
    downloadablesHtmlFile: COURSES_DIR + "amber_course3_downloadables.html",
    tagline: "Colour theory, face architecture, makeup artistry, and the discipline of restraint",
    description:
      "The Living Palette begins where bone and muscle meet colour — the architecture beneath every brushstroke — and carries a practitioner through undertone, technique, and the editorial and bridal table alike. Fifteen modules in the belief that the most skilled hand is the one that knows precisely when to stop.",
    priceInPaise: 1000000,
  },
  {
    slug: "the-living-hand",
    order: 4,
    completeHtmlFile: COURSES_DIR + "amber_course4_complete.html",
    downloadablesHtmlFile: COURSES_DIR + "amber_course4_downloadables.html",
    tagline: "Nail anatomy, health, sanitation, and the artistry of the manicure and pedicure",
    description:
      "The Living Hand studies the nail as a living structure long before it studies it as a canvas — anatomy, health, and the sanitation discipline that protects every client who ever sits across the table. Fifteen modules building toward genuine artistry in manicure and pedicure, never separated from the science that makes it safe.",
    priceInPaise: 500000,
  },
  {
    slug: "the-living-touch",
    order: 5,
    completeHtmlFile: COURSES_DIR + "amber_course5_complete.html",
    downloadablesHtmlFile: COURSES_DIR + "amber_course5_downloadables.html",
    tagline: "Body science, massage modalities, waxing, and the discipline of the spa protocol",
    description:
      "The Living Touch begins beneath the surface — the muscle, fascia, and lymphatic pathways every stroke moves through — before it teaches the modalities themselves. Fifteen modules across massage, waxing, and the full spa protocol, taught with the same rigour Amber asks of every other discipline it touches.",
    priceInPaise: 500000,
  },
  {
    slug: "the-living-ceremony",
    order: 6,
    completeHtmlFile: COURSES_DIR + "amber_course6_complete.html",
    downloadablesHtmlFile: COURSES_DIR + "amber_course6_downloadables.html",
    tagline: "Bridal and event styling: India's traditions, the drape, and the discipline of full-look integration",
    description:
      "The Living Ceremony treats a wedding look as one integrated system, not five appointments stacked in a row — bridal canvas, drape, and India's own ceremonial traditions, carried through to a finished look that holds for the length of a celebration. Fifteen modules for the practitioner who will stand at the centre of someone's most-photographed day.",
    priceInPaise: 300000,
  },
  {
    slug: "the-living-scent",
    order: 7,
    completeHtmlFile: COURSES_DIR + "amber_course7_complete.html",
    downloadablesHtmlFile: COURSES_DIR + "amber_course7_downloadables.html",
    tagline: "Fragrance, ubtan, and adornment: perfumery heritage, finishing rituals, and the bridge to Amber Edit",
    description:
      "The Living Scent opens with the architecture of fragrance itself — the pyramid, the olfactory families, the way a scent unfolds rather than simply exists — before carrying a practitioner through ubtan, adornment, and the finishing rituals that complete an Amber service. Fifteen modules, and the house's own bridge into its product line, Amber Edit.",
    priceInPaise: 500000,
  },
  {
    slug: "the-living-practice",
    order: 8,
    completeHtmlFile: COURSES_DIR + "amber_course8_complete.html",
    downloadablesHtmlFile: COURSES_DIR + "amber_course8_downloadables.html",
    tagline: "The business of beauty: salon management, client psychology, pricing, ethics, and entrepreneurship",
    description:
      "The Living Practice is the Atelier's capstone — the course that begins with a simple admission, that technical talent alone was never going to be enough, and ends with the standard every Amber Certified practitioner carries into the world. Fifteen modules on salon management, client psychology, pricing, and ethics, for the practitioner ready to build a practice, not just perform a service.",
    priceInPaise: 200000,
  },
];
