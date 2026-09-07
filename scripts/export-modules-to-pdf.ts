import { prisma } from "../src/lib/prisma";
import * as fs from "fs";
import * as path from "path";
import puppeteer from "puppeteer";

const OUTPUT_DIR = path.join(__dirname, "../exports/modules");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateModuleHtml(
  courseTitle: string,
  moduleTitle: string,
  moduleSubtitle: string,
  objectives: string[],
  lessonHtml: string,
  keyTerms: Record<string, string>,
  activityTitle: string | null,
  activityHtml: string | null
): Promise<string> {
  const keyTermsHtml =
    Object.keys(keyTerms).length > 0
      ? `
    <div style="margin-top: 40px; padding: 20px; background: #f9f5f0; border-left: 4px solid #C8973A;">
      <h3 style="margin-top: 0; color: #3a2817; font-family: 'Cormorant Garamond', serif; font-size: 20px;">Key Terms</h3>
      <dl style="margin: 0;">
        ${Object.entries(keyTerms)
          .map(
            ([term, definition]) => `
          <dt style="font-weight: 600; margin-top: 12px; color: #3a2817;">${term}</dt>
          <dd style="margin: 4px 0 0 20px; color: #555;">${definition}</dd>
        `
          )
          .join("")}
      </dl>
    </div>
  `
      : "";

  const activityHtmlBlock =
    activityTitle && activityHtml
      ? `
    <div style="margin-top: 40px; padding: 20px; background: #fef5f0; border: 2px solid #D4A574;">
      <h3 style="margin-top: 0; color: #3a2817; font-family: 'Cormorant Garamond', serif; font-size: 20px;">${activityTitle}</h3>
      <div style="color: #333; line-height: 1.6;">${activityHtml}</div>
    </div>
  `
      : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${moduleTitle}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      background: white;
      padding: 40px;
    }

    .header {
      margin-bottom: 40px;
      border-bottom: 2px solid #C8973A;
      padding-bottom: 20px;
    }

    .course-title {
      font-size: 12px;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 42px;
      color: #3a2817;
      font-weight: 400;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 18px;
      color: #8b7355;
      font-style: italic;
    }

    .objectives {
      margin: 30px 0;
      padding: 20px;
      background: #fef9f4;
      border-left: 4px solid #D4A574;
    }

    .objectives h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px;
      color: #3a2817;
      margin-bottom: 12px;
    }

    .objectives ul {
      list-style: none;
      padding-left: 20px;
    }

    .objectives li {
      margin-bottom: 8px;
      position: relative;
      padding-left: 20px;
    }

    .objectives li:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #C8973A;
      font-weight: bold;
    }

    .lesson-content {
      margin: 40px 0;
      line-height: 1.8;
      font-size: 16px;
    }

    .lesson-content h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 24px;
      color: #3a2817;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    .lesson-content h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 20px;
      color: #5a4a3a;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .lesson-content p {
      margin-bottom: 15px;
    }

    .lesson-content img {
      max-width: 100%;
      height: auto;
      margin: 20px 0;
    }

    .lesson-content ul, .lesson-content ol {
      margin-bottom: 15px;
      padding-left: 30px;
    }

    .lesson-content li {
      margin-bottom: 8px;
    }

    .pull-quote {
      margin: 25px 0;
      padding: 20px;
      border-left: 4px solid #C8973A;
      background: #fef9f4;
      font-style: italic;
      color: #5a4a3a;
    }

    .infographic {
      margin: 25px 0;
      padding: 20px;
      background: #f5f0eb;
      border-radius: 4px;
    }

    @media print {
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="course-title">${courseTitle}</div>
    <h1>${moduleTitle}</h1>
    <div class="subtitle">${moduleSubtitle}</div>
  </div>

  <div class="objectives">
    <h2>Learning Objectives</h2>
    <ul>
      ${objectives.map((obj) => `<li>${obj}</li>`).join("")}
    </ul>
  </div>

  <div class="lesson-content">
    ${lessonHtml}
  </div>

  ${keyTermsHtml}
  ${activityHtmlBlock}

  <script>
    // Remove any navigation or footer elements if they exist
    document.querySelectorAll('nav, footer').forEach(el => el.remove());
  </script>
</body>
</html>
  `;
}

async function exportModulesToPdf() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        modules: {
          orderBy: { order: "asc" },
        },
      },
      orderBy: { order: "asc" },
    });

    const browser = await puppeteer.launch({
      headless: "new",
    });

    let exportedCount = 0;

    for (const course of courses) {
      const courseDir = path.join(OUTPUT_DIR, course.slug);
      if (!fs.existsSync(courseDir)) {
        fs.mkdirSync(courseDir, { recursive: true });
      }

      for (const module of course.modules) {
        try {
          const objectives = Array.isArray(module.objectives)
            ? module.objectives
            : Object.values(module.objectives || {});

          const keyTerms =
            typeof module.keyTerms === "object" ? module.keyTerms || {} : {};

          const html = await generateModuleHtml(
            course.title,
            module.title,
            module.subtitle,
            objectives,
            module.lessonHtml,
            keyTerms,
            module.activityTitle,
            module.activityHtml
          );

          const page = await browser.newPage();
          await page.setContent(html);

          const pdfPath = path.join(
            courseDir,
            `Module-${module.order}-${module.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.pdf`
          );

          await page.pdf({
            path: pdfPath,
            format: "A4",
            margin: {
              top: "20mm",
              right: "15mm",
              bottom: "20mm",
              left: "15mm",
            },
            printBackground: true,
          });

          await page.close();
          console.log(`✓ ${course.title} → Module ${module.order}`);
          exportedCount++;
        } catch (error) {
          console.error(
            `✗ Error exporting ${course.slug} module ${module.order}:`,
            error
          );
        }
      }
    }

    await browser.close();
    console.log(`\n✓ Exported ${exportedCount} modules to ${OUTPUT_DIR}`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

exportModulesToPdf();
