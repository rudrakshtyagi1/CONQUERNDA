import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

async function main() {
  const adapter = new PrismaLibSql({ url: 'file:./prisma/dev.db' });
  const prisma = new PrismaClient({ adapter });

  // ─── Seed Cutoff Data (Past 5 Years) ───────────────────────────────────────
  await prisma.cutoffData.deleteMany();
  await prisma.cutoffData.createMany({
    data: [
      { year: 2024, examCycle: 'NDA 2', writtenCutoff: 305, finalCutoff: 673, totalApplied: 500000, totalQualified: 8600 },
      { year: 2024, examCycle: 'NDA 1', writtenCutoff: 291, finalCutoff: 654, totalApplied: 480000, totalQualified: 9000 },
      { year: 2023, examCycle: 'NDA 2', writtenCutoff: 292, finalCutoff: 656, totalApplied: 470000, totalQualified: 8800 },
      { year: 2023, examCycle: 'NDA 1', writtenCutoff: 301, finalCutoff: 664, totalApplied: 460000, totalQualified: 9100 },
      { year: 2022, examCycle: 'NDA 2', writtenCutoff: 316, finalCutoff: 678, totalApplied: 450000, totalQualified: 8500 },
      { year: 2022, examCycle: 'NDA 1', writtenCutoff: 360, finalCutoff: 720, totalApplied: 440000, totalQualified: 8200 },
      { year: 2021, examCycle: 'NDA 2', writtenCutoff: 355, finalCutoff: 726, totalApplied: 430000, totalQualified: 7900 },
      { year: 2021, examCycle: 'NDA 1', writtenCutoff: 343, finalCutoff: 709, totalApplied: 420000, totalQualified: 8100 },
      { year: 2020, examCycle: 'NDA 2', writtenCutoff: 355, finalCutoff: 719, totalApplied: 410000, totalQualified: 8000 },
      { year: 2020, examCycle: 'NDA 1', writtenCutoff: 355, finalCutoff: 723, totalApplied: 400000, totalQualified: 7800 },
    ],
  });

  // ─── Seed Exam Notifications ────────────────────────────────────────────────
  await prisma.examNotification.deleteMany();
  await prisma.examNotification.createMany({
    data: [
      {
        title: 'NDA & NA (II) 2026',
        description: 'UPSC has released the notification for NDA & NA Examination (II) 2026.',
        examCycle: 'NDA 2',
        examYear: 2026,
        notificationDate: new Date('2026-05-28'),
        applicationStart: new Date('2026-05-28'),
        applicationEnd: new Date('2026-06-17'),
        examDate: new Date('2026-09-07'),
        isActive: true,
      },
      {
        title: 'NDA & NA (I) 2026',
        description: 'Results declared for NDA & NA Examination (I) 2026. SSB interviews scheduled.',
        examCycle: 'NDA 1',
        examYear: 2026,
        notificationDate: new Date('2025-12-18'),
        examDate: new Date('2026-04-13'),
        isActive: true,
      },
    ],
  });

  // ─── Seed News Articles ─────────────────────────────────────────────────────
  await prisma.newsArticle.deleteMany();
  await prisma.newsArticle.createMany({
    data: [
      {
        title: 'NDA 2 2026 Notification Released by UPSC',
        slug: 'nda-2-2026-notification-released',
        category: 'notification',
        summary: 'UPSC has officially released the NDA & NA (II) 2026 notification.',
        content: 'The Union Public Service Commission (UPSC) has officially released the NDA & NA (II) 2026 notification.',
        publishedAt: new Date('2026-05-28'),
        isPublished: true,
      },
      {
        title: 'UPSC Announces Changes to NDA Exam Pattern',
        slug: 'nda-exam-pattern-changes-2026',
        category: 'update',
        summary: 'UPSC has announced modifications to the NDA exam structure for the 2026 cycle.',
        content: 'The Union Public Service Commission has announced certain changes to the NDA examination structure.',
        publishedAt: new Date('2026-04-15'),
        isPublished: true,
      },
      {
        title: 'Indian Army Inducts New Batch of NDA Cadets',
        slug: 'new-nda-cadet-batch-2026',
        category: 'training',
        summary: 'A fresh batch of NDA cadets has been inducted at the Khadakwasla campus.',
        content: 'The National Defence Academy at Khadakwasla, Pune welcomed a fresh batch of cadets.',
        publishedAt: new Date('2026-03-01'),
        isPublished: true,
      },
    ],
  });

  console.log('✅ Database seeded successfully!');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
