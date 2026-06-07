import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { correctMath, wrongMath, correctGAT, wrongGAT, unattempted } = body;

    // NDA Marking Scheme
    const MATH_CORRECT = 2.5;
    const MATH_WRONG = -0.833;
    const GAT_CORRECT = 4.0;
    const GAT_WRONG = -1.333;

    const mathCorrect = Number(correctMath) || 0;
    const mathWrong = Number(wrongMath) || 0;
    const gatCorrect = Number(correctGAT) || 0;
    const gatWrong = Number(wrongGAT) || 0;

    if (mathCorrect + mathWrong > 120) {
      return NextResponse.json({ error: 'Math: total attempted cannot exceed 120 questions' }, { status: 400 });
    }
    if (gatCorrect + gatWrong > 150) {
      return NextResponse.json({ error: 'GAT: total attempted cannot exceed 150 questions' }, { status: 400 });
    }

    const mathScore = parseFloat((mathCorrect * MATH_CORRECT + mathWrong * MATH_WRONG).toFixed(2));
    const gatScore = parseFloat((gatCorrect * GAT_CORRECT + gatWrong * GAT_WRONG).toFixed(2));
    const totalScore = parseFloat((mathScore + gatScore).toFixed(2));

    const mathQualifying = mathScore >= 75; // 25% of 300
    const gatQualifying = gatScore >= 150; // 25% of 600

    return NextResponse.json({
      success: true,
      result: {
        mathScore,
        gatScore,
        totalScore,
        breakdown: {
          mathCorrectMarks: parseFloat((mathCorrect * MATH_CORRECT).toFixed(2)),
          mathPenalty: parseFloat((mathWrong * MATH_WRONG).toFixed(2)),
          gatCorrectMarks: parseFloat((gatCorrect * GAT_CORRECT).toFixed(2)),
          gatPenalty: parseFloat((gatWrong * GAT_WRONG).toFixed(2)),
        },
        qualificationStatus: {
          mathQualifying,
          gatQualifying,
          overallQualifying: mathQualifying && gatQualifying,
        },
        percentages: {
          math: parseFloat(((mathScore / 300) * 100).toFixed(1)),
          gat: parseFloat(((gatScore / 600) * 100).toFixed(1)),
          total: parseFloat(((totalScore / 900) * 100).toFixed(1)),
        },
      },
    });
  } catch (err) {
    console.error('[marks-calculator API]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
