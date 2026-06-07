import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Historical UPSC cutoff data as baseline
const CUTOFF_BASELINE = [
  { year: 2024, written: 305, final: 673 },
  { year: 2023, written: 292, final: 656 },
  { year: 2022, written: 360, final: 720 },
];

function predictRank(mathScore: number, gatScore: number): { predictedRank: number; predictedAIR: number } {
  const totalWritten = mathScore + gatScore;
  
  // Linear model based on historical data
  // Approximation: rank = 400 - (score - minCutoff) / (maxScore - minCutoff) * 399
  const avgCutoff = CUTOFF_BASELINE.reduce((a, b) => a + b.written, 0) / CUTOFF_BASELINE.length;
  const maxWrittenScore = 900;
  
  if (totalWritten < avgCutoff) {
    return { predictedRank: 0, predictedAIR: 0 }; // Below cutoff
  }
  
  const normalized = (totalWritten - avgCutoff) / (maxWrittenScore - avgCutoff);
  const predictedRank = Math.max(1, Math.round(8600 - normalized * 8200));
  const predictedAIR = Math.max(1, Math.round(400 - normalized * 380));

  return { predictedRank, predictedAIR };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mathScore, gatScore, examCycle = 'NDA 1', examYear = new Date().getFullYear() } = body;

    // Validate inputs
    if (typeof mathScore !== 'number' || typeof gatScore !== 'number') {
      return NextResponse.json({ error: 'mathScore and gatScore must be numbers' }, { status: 400 });
    }
    if (mathScore < 0 || mathScore > 300 || gatScore < 0 || gatScore > 600) {
      return NextResponse.json({ error: 'mathScore must be 0-300, gatScore must be 0-600' }, { status: 400 });
    }

    const totalScore = mathScore + gatScore;
    const { predictedRank, predictedAIR } = predictRank(mathScore, gatScore);

    // Save to database
    const prediction = await prisma.rankPrediction.create({
      data: {
        mathScore,
        gatScore,
        totalScore,
        predictedRank,
        predictedAIR,
        examCycle,
        examYear,
      },
    });

    return NextResponse.json({
      success: true,
      prediction: {
        id: prediction.id,
        mathScore,
        gatScore,
        totalScore,
        predictedRank,
        predictedAIR,
        belowCutoff: predictedRank === 0,
        confidence: totalScore >= 400 ? 'high' : totalScore >= 300 ? 'medium' : 'low',
        examCycle,
        examYear,
        createdAt: prediction.createdAt,
      },
    });
  } catch (err) {
    console.error('[rank-predictor API]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const recent = await prisma.rankPrediction.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
      select: {
        id: true,
        mathScore: true,
        gatScore: true,
        totalScore: true,
        predictedRank: true,
        predictedAIR: true,
        examCycle: true,
        examYear: true,
        createdAt: true,
      },
    });
    return NextResponse.json({ predictions: recent });
  } catch (err) {
    console.error('[rank-predictor GET]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
