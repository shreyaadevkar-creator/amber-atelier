const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const COURSES_DIR = "/Users/midnight/Documents/AMBER/Courses";
const OUTPUT_DIR = path.join(__dirname, "../public/course-pdfs");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const courses = [
  { name: "course1", title: "The Living Canvas" },
  { name: "course2", title: "The Living Crown" },
  { name: "course3", title: "The Living Palette" },
  { name: "course4", title: "The Living Hand" },
  { name: "course5", title: "The Living Touch" },
  { name: "course6", title: "The Living Ceremony" },
  { name: "course7", title: "The Living Scent" },
  { name: "course8", title: "The Living Practice" },
];

async function convertHtmlToPdf() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const course of courses) {
    const htmlFile = path.join(COURSES_DIR, `amber_${course.name}_complete.html`);

    if (!fs.existsSync(htmlFile)) {
      console.warn(`⚠️  ${htmlFile} not found, skipping...`);
      continue;
    }

    try {
      const page = await browser.newPage();
      await page.goto(`file://${htmlFile}`, { waitUntil: "networkidle0" });

      const pdfPath = path.join(OUTPUT_DIR, `${course.name}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: "A4",
        margin: { top: "20mm", right: "15mm", bottom: "20mm", left: "15mm" },
        printBackground: true,
      });

      await page.close();
      console.log(`✓ ${course.title} → ${pdfPath}`);
    } catch (error) {
      console.error(`✗ Error converting ${course.name}:`, error.message);
    }
  }

  await browser.close();
  console.log("\n✓ All courses exported to public/course-pdfs/");
}

convertHtmlToPdf().catch(console.error);
