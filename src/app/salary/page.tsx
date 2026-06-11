'use client';
import Link from 'next/link';

const salaryData = [
  { rank: 'NDA Cadet', period: 'During Training', pay: '₹56,100', level: 10, pct: 18, color: '#64B5F6' },
  { rank: 'Lieutenant / Sub Lt / Fg Offr', period: '0–2 Years', pay: '₹56,100 – ₹1,77,500', level: 10, pct: 32, color: '#42A5F5' },
  { rank: 'Captain / Lt Commander / Fg Lt', period: '2–6 Years', pay: '₹61,300 – ₹1,93,900', level: 10, pct: 42, color: '#2196F3' },
  { rank: 'Major / Cdr / Sqn Ldr', period: '6–13 Years', pay: '₹69,400 – ₹2,07,200', level: 11, pct: 55, color: '#1E88E5' },
  { rank: 'Lt Colonel / Capt / Wg Cdr', period: '13–26 Years', pay: '₹1,21,200 – ₹2,12,400', level: 12, pct: 68, color: '#1976D2' },
  { rank: 'Colonel / Commodore / Gp Capt', period: '26+ Years', pay: '₹1,30,600 – ₹2,15,900', level: 13, pct: 80, color: '#1565C0' },
  { rank: 'Brigadier / RAdm / AVM', period: 'Senior Level', pay: '₹1,39,600 – ₹2,17,600', level: 13A, pct: 90, color: '#0D47A1' },
  { rank: 'Major General / VAdm / AirMshl', period: 'Flag/General Officer', pay: '₹1,44,200 – ₹2,18,200', level: 14, pct: 95, color: '#0D47A1' },
];

const perks = [
  { icon: '🏠', title: 'Free Housing', desc: 'Government accommodation provided in cantonment areas or HRA allowance' },
  { icon: '🚗', title: 'Transport Allowance', desc: 'Conveyance allowance plus official vehicle for senior ranks' },
  { icon: '🏥', title: 'Full Medical Coverage', desc: 'ECHS — free medical for self, spouse, children, and parents at military hospitals' },
  { icon: '🎓', title: 'Children\'s Education', desc: 'CEA: ₹2,250/month per child. Prestigious Sainik Schools at concessional fees' },
  { icon: '✈️', title: 'Air Travel Entitlement', desc: 'LTC (Leave Travel Concession) for annual travel reimbursement for family' },
  { icon: '⚔️', title: 'Gallantry Pay', desc: 'Additional pay for Param Vir Chakra, Maha Vir Chakra, Vir Chakra awardees' },
  { icon: '🏦', title: 'Pension (OROP)', desc: 'One Rank One Pension — pension continues after retirement based on last rank' },
  { icon: '🏖️', title: 'Canteen Facilities', desc: 'CSD canteen providing goods at subsidised prices — significant cost savings' },
];

export default function SalaryPage() {
  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to ConquerNDA
          </Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9] mb-3">Career & Growth</div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Salary & Perks</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">
            From cadet stipend to General-level pay — complete NDA officer compensation breakdown.
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12">
        {/* Pay Matrix */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">7th Pay Commission</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8">Officer Pay Progression</h2>
          <div className="space-y-4">
            {salaryData.map((row, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-bold text-[#0D1B2A] text-[15px]">{row.rank}</div>
                    <div className="text-[12px] text-[#455A7A]">{row.period}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#1565C0] text-[15px]">{row.pay}</div>
                    <div className="text-[11px] text-[#455A7A]">Level {row.level} pay matrix</div>
                  </div>
                </div>
                <div className="h-2 bg-[#E8F2FF] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${row.pct}%`, background: row.color }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#455A7A] mt-4 text-center">* Basic Pay only. Total take-home is significantly higher due to allowances.</p>
        </div>

        {/* Allowances Table */}
        <div className="bg-white rounded-2xl border border-[#C5D8F5] p-8 shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Key Allowances</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">What Adds to Your Salary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#F4F8FF] text-[#455A7A] text-[11px] uppercase tracking-wider">
                  <th className="p-4 border-b border-[#C5D8F5]">Allowance</th>
                  <th className="p-4 border-b border-[#C5D8F5]">Amount (Approx)</th>
                  <th className="p-4 border-b border-[#C5D8F5]">Notes</th>
                </tr>
              </thead>
              <tbody className="text-[#455A7A]">
                {[
                  ['Dearness Allowance (DA)', '42% of basic pay', 'Revised twice a year'],
                  ['Military Service Pay (MSP)', '₹15,500/month', 'Flat for all officers (except Generals)'],
                  ['House Rent Allowance (HRA)', '24–27% of basic', 'If Govt accommodation not availed'],
                  ['Field Area Allowance', '₹6,300–₹16,900/mo', 'For postings in operational areas'],
                  ['High Altitude Allowance', 'Up to ₹25,000/mo', 'For postings above 9,000 ft'],
                  ['Flying Allowance', '₹25,000/month', 'For Air Force flying personnel'],
                  ['Submarine Allowance', '₹25,000/month', 'For Navy submarine officers'],
                ].map(([a, b, c], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 border-b border-[#E8F2FF] font-medium text-[#0D1B2A]">{a}</td>
                    <td className="p-4 border-b border-[#E8F2FF] font-bold text-[#1565C0]">{b}</td>
                    <td className="p-4 border-b border-[#E8F2FF]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Perks */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Beyond the Paycheck</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-[#0D1B2A] mb-2">{p.title}</h3>
                <p className="text-[12px] text-[#455A7A] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary CTA */}
        <div className="bg-[#1565C0] rounded-2xl p-8 text-white text-center">
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-wide mb-3">Total Package: ₹1.5L – ₹2.5L+ /month</h2>
          <p className="text-[#E8F2FF] text-[15px] max-w-xl mx-auto">When you include MSP, DA, HRA, and allowances, a young Lieutenant takes home over ₹1.2 lakh per month — with free housing, medical, and education on top.</p>
        </div>
      </div>
    </div>
  );
}
