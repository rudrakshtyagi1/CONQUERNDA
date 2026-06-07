'use client';
import Link from 'next/link';

export default function SSBOverview() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to ConquerNDA
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">5-Day SSB Selection Process</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            The Ultimate Test of Personality and Officer Like Qualities (OLQs)
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12 text-[#0D1B2A]">
        {/* Intro */}
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-4">What is the SSB Interview?</h2>
          <p className="text-[#455A7A] leading-relaxed mb-4">
            The Service Selection Board (SSB) interview is a rigorous 5-day assessment process designed to evaluate whether a candidate possesses the required <strong className="text-[#0D1B2A]">Officer Like Qualities (OLQs)</strong> to serve in the Indian Armed Forces. 
          </p>
          <div className="flex gap-6 mt-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-1">Written Marks</div>
              <div className="text-2xl font-bold">900</div>
            </div>
            <div className="text-2xl font-bold text-gray-300">+</div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-1">SSB Marks</div>
              <div className="text-2xl font-bold text-[#1565C0]">900</div>
            </div>
            <div className="text-2xl font-bold text-gray-300">=</div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-1">Total Marks</div>
              <div className="text-2xl font-bold text-[#2E7D32]">1800</div>
            </div>
          </div>
        </div>

        {/* The 15 OLQs */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2 text-center">The Assessment Criteria</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8 text-center">The 15 Officer Like Qualities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              'Effective Intelligence', 'Reasoning Ability', 'Organising Ability', 'Power of Expression', 'Social Adaptability',
              'Cooperation', 'Sense of Responsibility', 'Initiative', 'Self-confidence', 'Speed of Decision',
              'Ability to Influence', 'Liveliness', 'Determination', 'Courage', 'Stamina'
            ].map(olq => (
              <div key={olq} className="bg-white border border-[#C5D8F5] p-4 rounded-xl text-center shadow-sm text-sm font-semibold text-[#1565C0] flex items-center justify-center min-h-[80px]">
                {olq}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Process</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#0D1B2A] tracking-wide mb-6">Day-by-Day Timeline</h2>
          
          <div className="space-y-4">
            <Link href="/ssb/screening" className="block bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#FFB300]"></div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">Day 1: Screening</h3>
              <p className="text-[#455A7A] text-sm">OIR Test (Officer Intelligence Rating) and PPDT (Picture Perception & Discussion Test). Only ~30% of candidates proceed past Day 1.</p>
              <div className="mt-4 text-[#1565C0] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Read more →</div>
            </Link>

            <Link href="/ssb/psychology" className="block bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#1E88E5]"></div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">Day 2: Psychology Tests</h3>
              <p className="text-[#455A7A] text-sm">A battery of psychological assessments: TAT, WAT, SRT, and SDT designed to reveal your subconscious traits.</p>
              <div className="mt-4 text-[#1565C0] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Read more →</div>
            </Link>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ssb/gto" className="block bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#43A047]"></div>
                <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">Day 3 & 4: GTO Tasks</h3>
                <p className="text-[#455A7A] text-sm">Outdoor group tasks assessing leadership and teamwork: GD, PGT, HGT, IO, Command Task, and Snake Race.</p>
                <div className="mt-4 text-[#1565C0] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Read more →</div>
              </Link>
              
              <Link href="/ssb/personal-interview" className="block bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:border-[#1565C0] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#8E24AA]"></div>
                <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">Day 3 & 4: Personal Interview</h3>
                <p className="text-[#455A7A] text-sm">A comprehensive 1-on-1 interview assessing your PIQ (Personal Information Questionnaire), awareness, and character.</p>
                <div className="mt-4 text-[#1565C0] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Read more →</div>
              </Link>
            </div>

            <div className="block bg-[#E8F5E9] p-6 rounded-2xl border border-[#A5D6A7] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#2E7D32]"></div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#2E7D32] tracking-wide mb-2">Day 5: Conference</h3>
              <p className="text-[#455A7A] text-sm">All assessors (Psychologist, GTO, Interviewing Officer) sit together with the board president to decide the final recommendation.</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-[#FFF8E1] text-[#B78103] rounded-lg text-sm">
            <strong>Note:</strong> Out of the candidates who make it to the SSB, only about <strong>4% to 6%</strong> are finally recommended. Preparation is key.
          </div>
        </div>

      </div>
    </div>
  );
}
