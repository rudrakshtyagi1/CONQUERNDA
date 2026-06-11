'use client';
import Link from 'next/link';

const army = ['Second Lieutenant','Lieutenant','Captain','Major','Lieutenant Colonel','Colonel','Brigadier','Major General','Lieutenant General','General (COAS)'];
const navy = ['Sub Lieutenant','Lieutenant','Lieutenant Commander','Commander','Captain','Commodore','Rear Admiral','Vice Admiral','Admiral','Admiral of the Fleet'];
const af = ['Flying Officer','Flight Lieutenant','Squadron Leader','Wing Commander','Group Captain','Air Commodore','Air Vice Marshal','Air Marshal','Air Chief Marshal','Marshal of IAF'];

export default function RankStructure() {
  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">← Back to ConquerNDA</Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9] mb-3">Career Path</div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Rank Structure</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">The complete hierarchy of all three services — Army, Navy, and Air Force.</p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12">
        <div className="bg-[#E8F2FF] border border-[#C5D8F5] rounded-2xl p-6 text-center">
          <p className="text-[#1565C0] font-medium text-[15px]">NDA cadets are commissioned as officers at the <strong>lowest commissioned rank</strong> after completing their respective service academy training.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Army */}
          <div className="bg-white rounded-2xl border border-[#C5D8F5] shadow-sm overflow-hidden">
            <div className="bg-[#2E7D32] p-5 text-white">
              <h2 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide">Indian Army</h2>
              <p className="text-[#A5D6A7] text-[13px] mt-1">After NDA → IMA Dehradun</p>
            </div>
            <div className="p-5">
              {army.map((rank, i) => (
                <div key={rank} className={`flex items-center gap-3 py-3 border-b border-gray-50 last:border-0 ${i === 0 ? 'bg-[#E8F5E9] -mx-5 px-5 rounded-lg mb-1' : ''}`}>
                  <div className="w-7 h-7 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] flex items-center justify-center text-[11px] font-bold text-[#2E7D32] shrink-0">{army.length - i}</div>
                  <span className={`text-[14px] ${i === 0 ? 'font-bold text-[#2E7D32]' : 'text-[#455A7A]'}`}>{rank}</span>
                  {i === 0 && <span className="ml-auto text-[10px] bg-[#2E7D32] text-white px-2 py-0.5 rounded-full font-bold">NDA Entry</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Navy */}
          <div className="bg-white rounded-2xl border border-[#C5D8F5] shadow-sm overflow-hidden">
            <div className="bg-[#1565C0] p-5 text-white">
              <h2 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide">Indian Navy</h2>
              <p className="text-[#90CAF9] text-[13px] mt-1">After NDA → INA Ezhimala</p>
            </div>
            <div className="p-5">
              {navy.map((rank, i) => (
                <div key={rank} className={`flex items-center gap-3 py-3 border-b border-gray-50 last:border-0 ${i === 0 ? 'bg-[#E8F2FF] -mx-5 px-5 rounded-lg mb-1' : ''}`}>
                  <div className="w-7 h-7 rounded-full bg-[#E8F2FF] border border-[#90CAF9] flex items-center justify-center text-[11px] font-bold text-[#1565C0] shrink-0">{navy.length - i}</div>
                  <span className={`text-[14px] ${i === 0 ? 'font-bold text-[#1565C0]' : 'text-[#455A7A]'}`}>{rank}</span>
                  {i === 0 && <span className="ml-auto text-[10px] bg-[#1565C0] text-white px-2 py-0.5 rounded-full font-bold">NDA Entry</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Air Force */}
          <div className="bg-white rounded-2xl border border-[#C5D8F5] shadow-sm overflow-hidden">
            <div className="bg-[#7B1FA2] p-5 text-white">
              <h2 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide">Indian Air Force</h2>
              <p className="text-[#CE93D8] text-[13px] mt-1">After NDA → AFA Hyderabad</p>
            </div>
            <div className="p-5">
              {af.map((rank, i) => (
                <div key={rank} className={`flex items-center gap-3 py-3 border-b border-gray-50 last:border-0 ${i === 0 ? 'bg-[#F3E5F5] -mx-5 px-5 rounded-lg mb-1' : ''}`}>
                  <div className="w-7 h-7 rounded-full bg-[#F3E5F5] border border-[#CE93D8] flex items-center justify-center text-[11px] font-bold text-[#7B1FA2] shrink-0">{af.length - i}</div>
                  <span className={`text-[14px] ${i === 0 ? 'font-bold text-[#7B1FA2]' : 'text-[#455A7A]'}`}>{rank}</span>
                  {i === 0 && <span className="ml-auto text-[10px] bg-[#7B1FA2] text-white px-2 py-0.5 rounded-full font-bold">NDA Entry</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-2xl p-6">
          <h3 className="font-bold text-[#B78103] mb-2">Key Notes on Promotions</h3>
          <ul className="text-[#455A7A] text-[14px] space-y-2 list-disc list-inside">
            <li>Promotions up to Colonel/Captain (Navy)/Group Captain are largely time-based (seniority).</li>
            <li>Above these ranks, promotions are based on merit, ACRs (Annual Confidential Reports), and vacancies.</li>
            <li>The rank of Marshal of the IAF / Admiral of the Fleet / Field Marshal is an honorary rank, rarely conferred.</li>
            <li>NDA cadets, after the passing-out parade, join their respective service academies (IMA, INA, AFA) for final training before commissioning.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
