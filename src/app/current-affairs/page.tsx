'use client';
import Link from 'next/link';

const currentAffairs = {
  'Defence & Strategic': [
    { q: 'Which country signed the deal for 26 Rafale Marine jets with India?', a: 'France', detail: 'The G2G deal was signed in April 2026 for the Indian Navy\'s aviation wing.' },
    { q: 'What is the name of India\'s first indigenous aircraft carrier?', a: 'INS Vikrant', detail: 'Commissioned on September 2, 2022. Displaces 45,000 tonnes. Built at Cochin Shipyard.' },
    { q: 'What is \'Agnipath\'?', a: 'A military recruitment scheme', detail: 'Launched in 2022 for short-term enlistment of \'Agniveers\' into Army, Navy, Air Force for 4 years.' },
    { q: 'India\'s first tri-service operation centre is located at?', a: 'Lucknow', detail: 'The Defence Space Agency and Defence Cyber Agency are also under tri-service commands.' },
    { q: 'Which DRDO lab develops ballistic missiles like Agni?', a: 'DRDO, Hyderabad', detail: 'Advanced Systems Laboratory (ASL) is the nodal lab for Agni missile development.' },
  ],
  'Awards & Honours': [
    { q: 'India\'s highest wartime gallantry award is?', a: 'Param Vir Chakra', detail: 'Only 21 Param Vir Chakras have been awarded, of which 14 were posthumous.' },
    { q: 'India\'s highest peacetime gallantry award is?', a: 'Ashoka Chakra', detail: 'Awarded for acts of gallantry in peacetime — can be for anti-militancy operations.' },
    { q: 'Which award is given for distinguished service of the highest order?', a: 'Param Vishisht Seva Medal', detail: 'This is the highest service medal in the Indian Armed Forces.' },
  ],
  'International Relations': [
    { q: 'What does QUAD stand for?', a: 'Quadrilateral Security Dialogue', detail: 'Members: India, USA, Australia, Japan. Focuses on free and open Indo-Pacific.' },
    { q: 'India\'s \'Act East\' policy focuses on engagement with which region?', a: 'Southeast Asia', detail: 'Launched in 2014 as an upgrade from the \'Look East\' policy. Includes ASEAN nations.' },
    { q: 'Which countries are members of BIMSTEC?', a: '7 countries (Bay of Bengal rim)', detail: 'Bangladesh, India, Myanmar, Sri Lanka, Thailand, Nepal, Bhutan.' },
    { q: 'India became a member of which nuclear export control group in 2017?', a: 'MTCR', detail: 'Missile Technology Control Regime. India is also in Wassenaar Arrangement and Australia Group.' },
  ],
  'Geography & Science': [
    { q: 'The Siachen Glacier is in which mountain range?', a: 'Karakoram Range', detail: 'World\'s highest battlefield. India controls it from the NJ9842 line northward.' },
    { q: 'Which strait separates India from Sri Lanka?', a: 'Palk Strait', detail: 'Also known as the Palk Bay. Connected to Gulf of Mannar.' },
    { q: 'India\'s first dedicated military satellite is?', a: 'GSAT-7 (Rukmini)', detail: 'Launched in 2013. Used by Indian Navy for secure communications.' },
    { q: 'What does INS stand for?', a: 'Indian Naval Ship', detail: 'All commissioned Indian Navy vessels carry the INS prefix.' },
  ],
};

export default function CurrentAffairsPage() {
  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">← Back to ConquerNDA</Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9] mb-3">GK Preparation</div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Current Affairs</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">Defence GK, awards, international relations and geography — the pillars of NDA GAT and SSB interview prep.</p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-10">
        <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-2xl p-5 text-[14px] text-[#455A7A]">
          <strong className="text-[#B78103]">Pro Tip:</strong> NDA GAT Paper II (GK section) frequently asks about Indian defence, geography, and current events. For SSB, the Personal Interview expects awareness of the last 6 months. Use these Q&As for daily revision.
        </div>

        {Object.entries(currentAffairs).map(([category, qas]) => (
          <div key={category} className="bg-white rounded-2xl border border-[#C5D8F5] p-8 shadow-sm">
            <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">{category}</h2>
            <div className="space-y-4">
              {qas.map((qa, i) => (
                <details key={i} className="group border border-[#E8F2FF] rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer bg-[#F4F8FF] hover:bg-[#E8F2FF] transition-colors list-none">
                    <span className="font-medium text-[#0D1B2A] text-[14px] pr-4">{i + 1}. {qa.q}</span>
                    <span className="shrink-0 w-6 h-6 bg-[#1565C0] rounded-full text-white flex items-center justify-center text-[12px] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 border-t border-[#E8F2FF] bg-white">
                    <div className="font-bold text-[#2E7D32] text-[15px] mb-1">✓ {qa.a}</div>
                    <div className="text-[13px] text-[#455A7A]">{qa.detail}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* Daily Routine Box */}
        <div className="bg-[#1565C0] text-white rounded-2xl p-8">
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide mb-4">Your Daily GK Routine</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { time: '15 min', task: 'Morning: Read one national newspaper headline section (The Hindu / Indian Express)' },
              { time: '10 min', task: 'Afternoon: Revise 5 Q&As from this page or from Lucent GK' },
              { time: '10 min', task: 'Evening: Watch one defence-related YouTube video or check PIB (Press Info Bureau)' },
            ].map((r) => (
              <div key={r.time} className="bg-[rgba(255,255,255,0.1)] rounded-xl p-5">
                <div className="font-['Bebas_Neue',sans-serif] text-2xl text-[#FFB300]">{r.time}</div>
                <div className="text-[13px] text-[#E8F2FF] mt-2 leading-relaxed">{r.task}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
