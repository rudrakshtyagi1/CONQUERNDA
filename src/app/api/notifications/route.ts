import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const notifications = await prisma.examNotification.findMany({
      where: { isActive: true },
      orderBy: { examYear: 'desc' },
    });
    const news = await prisma.newsArticle.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: 'desc' },
      take: 10,
    });
    return NextResponse.json({ success: true, notifications, news });
  } catch (err) {
    console.error('[notifications API]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
