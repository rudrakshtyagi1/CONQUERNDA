'use client';
import Link from 'next/link';

export default function SSBScreening() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/ssb" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to SSB Overview
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">SSB Day 1 — Screening</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            The first hurdle: OIR and PPDT
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-10 text-[#0D1B2A]">
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-4">OIR Test (Officer Intelligence Rating)</h2>
          <p className="text-[#455A7A] leading-relaxed mb-4">
            The OIR test consists of two booklets covering verbal and non-verbal reasoning. It is designed to evaluate your basic intelligence and problem-solving speed.
          </p>
          <ul className="list-disc list-inside text-[#455A7A] space-y-2 mb-4">
            <li><strong>Duration:</strong> Typically 20-30 minutes per booklet (around 40-50 questions each).</li>
            <li><strong>No Negative Marking:</strong> You must attempt all questions.</li>
            <li><strong>Rating:</strong> Your performance gives you an OIR rating from 1 to 5, where 1 is outstanding. A high OIR rating significantly boosts your chances of being screened in.</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-4">PPDT (Picture Perception & Discussion Test)</h2>
          <p className="text-[#455A7A] leading-relaxed mb-4">
            A hazy, ambiguous picture is shown for 30 seconds. You have 4 minutes to write a story based on it, detailing what led to the situation, what is happening now, and what the final outcome will be.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#0D1B2A] mb-2">1. Story Writing</h4>
              <p className="text-sm text-[#455A7A]">You must identify the main character (hero) and specify their age, gender, and mood. The story should reflect positive action and problem-solving.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0D1B2A] mb-2">2. Narration</h4>
              <p className="text-sm text-[#455A7A]">You will sit in a semicircle with 10-15 candidates. Each candidate gets 1 minute to confidently narrate their story without looking at the paper.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0D1B2A] mb-2">3. Group Discussion</h4>
              <p className="text-sm text-[#455A7A]">Immediately after narration, the group must discuss the different stories and arrive at a common consensus story. This tests your ability to influence, cooperate, and communicate.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#E8F2FF] p-8 rounded-2xl border border-[#C5D8F5]">
          <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-4">Tips for Screening</h3>
          <ul className="space-y-3 text-[#455A7A] text-sm">
            <li className="flex items-start gap-2"><span className="text-[#1565C0] font-bold">→</span> Keep your story realistic and action-oriented. No superheroes or magic.</li>
            <li className="flex items-start gap-2"><span className="text-[#1565C0] font-bold">→</span> Speak clearly and audibly during narration. Do not stutter.</li>
            <li className="flex items-start gap-2"><span className="text-[#1565C0] font-bold">→</span> In the GD, do not shout or argue. Make logical points and support others if their points are valid.</li>
            <li className="flex items-start gap-2"><span className="text-[#1565C0] font-bold">→</span> Be a team player, not a dominator. Listen to others.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
