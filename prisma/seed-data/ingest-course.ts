import { readFileSync, existsSync } from "node:fs";
import * as cheerio from "cheerio";

export type IngestedDownloadable = {
  order: number;
  slug: string;
  tag: string;
  title: string;
  bodyHtml: string;
};

export type IngestedModule = {
  order: number;
  title: string;
  subtitle: string;
  objectives: string[];
  keyTerms: { term: string; definition: string }[];
  lessonHtml: string;
  activityTitle: string | null;
  activityHtml: string | null;
  sourceQuizPrompts: string[];
  downloadables: IngestedDownloadable[];
};

export type IngestedCourse = {
  title: string;
  subtitle: string;
  modules: IngestedModule[];
};

function parseKeyTerm($: cheerio.CheerioAPI, el: ReturnType<cheerio.CheerioAPI>[number]) {
  const node = $(el);
  const term = node.find("b").first().text().trim();
  const fullText = node.text().trim();
  // Strip the leading "Term" and the em-dash separator that follows it.
  const definition = fullText
    .slice(term.length)
    .replace(/^\s*[—-]\s*/, "")
    .trim();
  return { term, definition };
}

/**
 * Parses a single Amber course's HTML export (the "…_complete.html" +
 * optional "…_downloadables.html" pair) into structured module data. Every
 * course in /Courses shares the identical markup produced for Course I
 * (verified: .module, .mod-title, .obj-list, .key-term, .quiz-q,
 * .activity-title/body, .download-note a, .dl-card/.dl-tag/.dl-title/.dl-body).
 */
export function ingestCourseFromHtml(
  completeHtmlPath: string,
  downloadablesHtmlPath: string | null,
  label: string
): IngestedCourse {
  const completeHtml = readFileSync(completeHtmlPath, "utf-8");
  const $ = cheerio.load(completeHtml);

  const courseTitle = $(".course-title").first().text().trim();
  const courseSub = $(".course-sub").first().text().trim();

  const downloadableById = new Map<
    string,
    { tag: string; title: string; bodyHtml: string }
  >();

  if (downloadablesHtmlPath && existsSync(downloadablesHtmlPath)) {
    const downloadablesHtml = readFileSync(downloadablesHtmlPath, "utf-8");
    const $dl = cheerio.load(downloadablesHtml);
    $dl(".dl-card").each((_, el) => {
      const id = $dl(el).attr("id");
      if (!id) return;
      downloadableById.set(id, {
        tag: $dl(el).find(".dl-tag").first().text().trim(),
        title: $dl(el).find(".dl-title").first().text().trim(),
        bodyHtml: ($dl(el).find(".dl-body").first().html() ?? "").trim(),
      });
    });
  } else {
    console.warn(`[ingest-course:${label}] No downloadables file found — modules will have no companion pack.`);
  }
  const referencedIds = new Set<string>();

  const modules: IngestedModule[] = [];

  $(".module").each((i, el) => {
    const order = i + 1;
    const node = $(el);

    const title = node.find(".mod-title").first().text().trim();
    const subtitle = node.find(".mod-sub").first().text().trim();

    const objectives = node
      .find(".obj-list li")
      .map((_, li) => $(li).text().trim())
      .get();

    const keyTerms = node
      .find(".key-term")
      .map((_, kt) => parseKeyTerm($, kt))
      .get();

    const sourceQuizPrompts = node
      .find(".quiz-q")
      .map((_, q) => $(q).text().trim())
      .get();

    const activityTitleRaw = node.find(".activity-title").first().text().trim();
    const activityHtmlRaw = node.find(".activity-body").first().html();
    const activityTitle = activityTitleRaw.length > 0 ? activityTitleRaw : null;
    const activityHtml = activityHtmlRaw ? activityHtmlRaw.trim() : null;

    const anchorIds = node
      .find(".download-note a")
      .map((_, a) => {
        const href = $(a).attr("href") ?? "";
        const hashIndex = href.indexOf("#");
        return hashIndex >= 0 ? href.slice(hashIndex + 1) : "";
      })
      .get()
      .filter((id) => id.length > 0);

    const downloadables: IngestedDownloadable[] = [];
    anchorIds.forEach((id, idx) => {
      referencedIds.add(id);
      const dl = downloadableById.get(id);
      if (!dl) {
        console.warn(`[ingest-course:${label}] Module ${order}: no downloadable found for anchor "${id}"`);
        return;
      }
      downloadables.push({ order: idx + 1, slug: id, ...dl });
    });

    const scriptClone = node.find(".script").first().clone();
    scriptClone.find(".key-terms, .download-note, .quiz, .activity").remove();
    const lessonHtml = (scriptClone.html() ?? "").trim();

    modules.push({
      order,
      title,
      subtitle,
      objectives,
      keyTerms,
      lessonHtml,
      activityTitle,
      activityHtml,
      sourceQuizPrompts,
      downloadables,
    });
  });

  for (const id of downloadableById.keys()) {
    if (!referencedIds.has(id)) {
      console.warn(`[ingest-course:${label}] Downloadable "${id}" is never referenced by any module.`);
    }
  }

  return { title: courseTitle, subtitle: courseSub, modules };
}
