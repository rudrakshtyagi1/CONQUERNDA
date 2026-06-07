'use client';
import Link from 'next/link';

export default function ExamPattern() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to ConquerNDA
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">NDA Exam Pattern</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            Structure, Marking Scheme, and Historical Cutoffs
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12 text-[#0D1B2A]">
        
        {/* Paper Structure */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2 text-center">Written Examination</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8 text-center">Paper Structure</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Paper 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#E8F5E9] text-[#2E7D32] px-4 py-1 font-bold text-sm rounded-bl-xl border-b border-l border-[#C5D8F5]">300 Marks</div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-4">Paper I: Mathematics</h3>
              <ul className="space-y-3 text-[#455A7A] mb-6">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Questions</span> <span className="font-semibold text-[#0D1B2A]">120 (MCQ)</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Duration</span> <span className="font-semibold text-[#0D1B2A]">2.5 Hours</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Correct Answer</span> <span className="font-semibold text-[#2E7D32]">+2.50 marks</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Negative Marking</span> <span className="font-semibold text-red-600">-0.83 marks</span></li>
              </ul>
              <div className="bg-gray-50 p-3 rounded-lg text-sm text-center border border-gray-100">
                <span className="text-[#455A7A]">Sectional Qualifying Mark:</span> <span className="font-bold text-[#1565C0]">25% (75 Marks)</span>
              </div>
            </div>

            {/* Paper 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#E8F5E9] text-[#2E7D32] px-4 py-1 font-bold text-sm rounded-bl-xl border-b border-l border-[#C5D8F5]">600 Marks</div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-4">Paper II: GAT</h3>
              <p className="text-xs text-[#455A7A] mb-2 uppercase tracking-wider font-bold">General Ability Test (English + GK)</p>
              <ul className="space-y-3 text-[#455A7A] mb-6">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Questions</span> <span className="font-semibold text-[#0D1B2A]">150 (MCQ)</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Duration</span> <span className="font-semibold text-[#0D1B2A]">2.5 Hours</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Correct Answer</span> <span className="font-semibold text-[#2E7D32]">+4.00 marks</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Negative Marking</span> <span className="font-semibold text-red-600">-1.33 marks</span></li>
              </ul>
              <div className="bg-gray-50 p-3 rounded-lg text-sm text-center border border-gray-100">
                <span className="text-[#455A7A]">Sectional Qualifying Mark:</span> <span className="font-bold text-[#1565C0]">25% (150 Marks)</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-[#E8F2FF] p-6 rounded-2xl border border-[#C5D8F5]">
            <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#0D1B2A] tracking-wide mb-2">Total Selection Marks</h3>
            <p className="text-lg text-[#455A7A]">Written (900) + SSB Interview (900) = <strong className="text-[#1565C0] text-2xl">1800 Marks</strong></p>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Timeline</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">Annual Exam Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-gray-50 text-[#0D1B2A] text-sm uppercase tracking-wider">
                  <th className="p-4 border-b-2 border-gray-200">Cycle</th>
                  <th className="p-4 border-b-2 border-gray-200">Notification</th>
                  <th className="p-4 border-b-2 border-gray-200">Exam Date</th>
                  <th className="p-4 border-b-2 border-gray-200">Result</th>
                </tr>
              </thead>
              <tbody className="text-[#455A7A]">
                <tr>
                  <td className="p-4 border-b border-gray-100 font-bold text-[#1565C0]">NDA 1</td>
                  <td className="p-4 border-b border-gray-100">Dec / Jan</td>
                  <td className="p-4 border-b border-gray-100 bg-[#FFF8E1]">April</td>
                  <td className="p-4 border-b border-gray-100">June / July</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-bold text-[#1565C0]">NDA 2</td>
                  <td className="p-4 border-b border-gray-100">May / June</td>
                  <td className="p-4 border-b border-gray-100 bg-[#FFF8E1]">September</td>
                  <td className="p-4 border-b border-gray-100">November / Dec</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cutoffs */}
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Historical Data</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">5-Year Cutoff Trends</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#1565C0] text-white text-sm uppercase tracking-wider">
                  <th className="p-3 border-b border-[#0D47A1] rounded-tl-lg">Year</th>
                  <th className="p-3 border-b border-[#0D47A1]">Cycle</th>
                  <th className="p-3 border-b border-[#0D47A1]">Written Cutoff (900)</th>
                  <th className="p-3 border-b border-[#0D47A1] rounded-tr-lg">Final Cutoff (1800)</th>
                </tr>
              </thead>
              <tbody className="text-[#455A7A]">
                {[
                  { year: '2024', cycle: 'NDA 2', written: '305', final: '673' },
                  { year: '2024', cycle: 'NDA 1', written: '291', final: '654' },
                  { year: '2023', cycle: 'NDA 2', written: '292', final: '656' },
                  { year: '2023', cycle: 'NDA 1', written: '301', final: '664' },
                  { year: '2022', cycle: 'NDA 2', written: '316', final: '678' },
                  { year: '2022', cycle: 'NDA 1', written: '360', final: '720' },
                  { year: '2021', cycle: 'NDA 2', written: '355', final: '726' },
                  { year: '2021', cycle: 'NDA 1', written: '343', final: '709' },
                  { year: '2020', cycle: 'NDA 2', written: '355', final: '719' },
                  { year: '2020', cycle: 'NDA 1', written: '355', final: '723' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 border-b border-gray-100 font-medium">{row.year}</td>
                    <td className="p-3 border-b border-gray-100">{row.cycle}</td>
                    <td className="p-3 border-b border-gray-100 font-bold text-[#0D1B2A]">{row.written}</td>
                    <td className="p-3 border-b border-gray-100 font-bold text-[#1565C0]">{row.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
