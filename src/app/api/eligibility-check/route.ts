import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { dob, education, gender = 'male' } = body;

    if (!dob || !education) {
      return NextResponse.json({ error: 'dob and education are required' }, { status: 400 });
    }

    const dobDate = new Date(dob);
    const today = new Date();
    const ageMs = today.getTime() - dobDate.getTime();
    const ageYears = ageMs / (1000 * 60 * 60 * 24 * 365.25);

    // NDA exam in April 2026 (NDA 1) — Age calculated on 1 Jan 2026
    // Candidate must be born between 02 Jan 2007 and 01 Jan 2010 (for NDA 1 2026)
    const examDate = new Date('2026-04-13');
    const ageAtExam = (examDate.getTime() - dobDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    const minAge = 16.5;
    const maxAge = 19.5;
    const ageEligible = ageAtExam >= minAge && ageAtExam <= maxAge;

    const eduOptions = ['class10', 'class11', 'class12', 'graduate'];
    const eduLevel = eduOptions.indexOf(education);
    const educationEligible = eduLevel >= 2; // class12 or graduate

    const checks = [
      {
        label: 'Age Requirement',
        status: ageEligible ? 'pass' : 'fail',
        detail: ageEligible
          ? `You will be ${ageAtExam.toFixed(1)} years old on exam day — within the 16.5 to 19.5 year window.`
          : `You will be ${ageAtExam.toFixed(1)} years old on exam day — outside the 16.5 to 19.5 year window.`,
      },
      {
        label: 'Education Requirement',
        status: educationEligible ? 'pass' : 'conditional',
        detail: educationEligible
          ? 'You meet the 10+2 educational requirement for NDA.'
          : 'You must be in Class 12 or have passed it. Appearing candidates are eligible.',
      },
      {
        label: 'Marital Status',
        status: 'info',
        detail: 'You must be unmarried at the time of application and throughout training.',
      },
      {
        label: 'Nationality',
        status: 'info',
        detail: 'Must be a citizen of India, Bhutan, Nepal, or a Person of Indian Origin from specified countries.',
      },
      {
        label: 'Physical Standards',
        status: 'info',
        detail: `Minimum height: ${gender === 'female' ? '152 cm' : 'Army/Navy: 157 cm, Air Force: 162.5 cm'}. Weight must be proportionate.`,
      },
    ];

    const overallEligible = ageEligible && educationEligible;

    return NextResponse.json({
      success: true,
      result: {
        overallEligible,
        ageAtExam: parseFloat(ageAtExam.toFixed(2)),
        checks,
        recommendation: overallEligible
          ? 'You appear to be eligible. Please verify all conditions with the official UPSC notification.'
          : 'You may not meet some eligibility criteria. Check the details below.',
      },
    });
  } catch (err) {
    console.error('[eligibility-check API]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
