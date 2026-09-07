import { prisma } from "../src/lib/prisma";
import { course1Videos } from "../prisma/seed-data/course1-videos";

async function updateCourse1Videos() {
  try {
    const course = await prisma.course.findUnique({
      where: { slug: "the-living-canvas" },
      include: { modules: true },
    });

    if (!course) {
      console.error("Course 'the-living-canvas' not found");
      return;
    }

    console.log(`Updating ${course.modules.length} modules with video URLs...`);

    for (const module of course.modules) {
      const videoFilename = course1Videos[module.order];
      if (videoFilename) {
        const videoUrl = `/videos/course1/${encodeURIComponent(videoFilename)}`;
        await prisma.module.update({
          where: { id: module.id },
          data: { videoUrl },
        });
        console.log(`✓ Module ${module.order}: ${videoFilename}`);
      } else {
        console.warn(`⚠️  No video found for module ${module.order}`);
      }
    }

    console.log("\n✓ All videos updated!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateCourse1Videos();
