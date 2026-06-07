import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const cutoffs = await prisma.cutoffData.findMany({
      orderBy: [{ year: 'desc' }, { examCycle: 'asc' }],
    });
    
    return NextResponse.json({ 
      success: true, 
      cutoffs,
      summary: {
        totalRecords: cutoffs.length,
        yearRange: cutoffs.length > 0 
          ? `${cutoffs[cutoffs.length - 1].year}–${cutoffs[0].year}`
          : 'N/A',
        avgWritten: cutoffs.length > 0
          ? Math.round(cutoffs.reduce((a, b) => a + b.writtenCutoff, 0) / cutoffs.length)
          : 0,
        avgFinal: cutoffs.length > 0
          ? Math.round(cutoffs.reduce((a, b) => a + b.finalCutoff, 0) / cutoffs.length)
          : 0,
      }
    });
  } catch (err) {
    console.error('[cutoffs API]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
