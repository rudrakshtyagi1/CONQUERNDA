'use client';
import Link from 'next/link';

export default function SSBGTO() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/ssb" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to SSB Overview
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">SSB GTO Tasks</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            Group Testing Officer Tasks — Leadership in Action
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-10 text-[#0D1B2A]">
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm mb-8">
          <p className="text-[#455A7A] leading-relaxed">
            The Group Testing Officer (GTO) tasks assess your physical fitness, mental agility, teamwork, and leadership skills in group environments. You will be divided into groups of 8-10 candidates. The tasks are spread across Day 3 and Day 4.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors">
            <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">1. Group Discussion (GD)</h3>
            <p className="text-[#455A7A] text-sm mb-3">
              Two topics are discussed back-to-back (one current affairs, one social/abstract). No conclusions are expected.
            </p>
            <div className="text-xs font-bold text-[#1565C0] uppercase">Tip: Be logical, listen, and do not dominate.</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors">
            <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">2. Group Planning Exercise (GPE)</h3>
            <p className="text-[#455A7A] text-sm mb-3">
              A military or disaster scenario is presented on a 3D model. You must write an individual plan, then discuss to form a final group plan.
            </p>
            <div className="text-xs font-bold text-[#1565C0] uppercase">Tip: Prioritize lives over material things.</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors">
            <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">3. Progressive Group Task (PGT)</h3>
            <p className="text-[#455A7A] text-sm mb-3">
              Navigate 4 obstacle lines without touching the ground. You are given helping materials like a plank, rope, and barrel. The difficulty increases progressively.
            </p>
            <div className="text-xs font-bold text-[#1565C0] uppercase">Tip: Look for cantilever solutions.</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors">
            <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">4. Half Group Task (HGT)</h3>
            <p className="text-[#455A7A] text-sm mb-3">
              Similar to PGT, but the group is halved (4-5 members). This gives the GTO a closer look at your individual contribution when the crowd is smaller.
            </p>
            <div className="text-xs font-bold text-[#1565C0] uppercase">Tip: Show your practical intelligence here.</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors">
            <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">5. Individual Obstacles (IO)</h3>
            <p className="text-[#455A7A] text-sm mb-3">
              Complete 10 physical obstacles in 3 minutes. Each obstacle carries marks from 1 to 10 based on difficulty.
            </p>
            <div className="text-xs font-bold text-[#1565C0] uppercase">Tip: Stamina and fearlessness matter.</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors">
            <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">6. Command Task (CT)</h3>
            <p className="text-[#455A7A] text-sm mb-3">
              You are made the commander and asked to choose 2 subordinates from your group to help you solve an obstacle.
            </p>
            <div className="text-xs font-bold text-[#1565C0] uppercase">Tip: Treat subordinates with respect.</div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-2">7. Final Group Task (FGT)</h3>
          <p className="text-[#455A7A] leading-relaxed">
            Also known as the Snake Race or Group Obstacle Race. The entire group carries a heavy tent-like snake through 6 obstacles. It is a highly energetic task where you compete against other groups. The GTO checks your enthusiasm, team spirit, and rule compliance.
          </p>
        </div>
      </div>
    </div>
  );
}
