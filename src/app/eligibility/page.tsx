'use client';
import Link from 'next/link';

export default function Eligibility() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to ConquerNDA
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">NDA Eligibility</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            Age, Education, and Physical Requirements
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-8 text-[#0D1B2A]">
        {/* Age & Marital Status */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#E8F2FF] rounded-lg text-[#1565C0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide">Age Limit</h2>
            </div>
            <p className="text-[#455A7A] mb-4">
              Candidates must be between <strong className="text-[#0D1B2A]">16.5 and 19.5 years</strong> of age at the time of commencement of the course.
            </p>
            <div className="bg-[#F8FAFC] p-4 rounded-lg border border-gray-100">
              <p className="text-sm font-medium mb-1">For NDA 1 2026:</p>
              <p className="text-[#455A7A] text-sm">Born between <span className="font-bold text-[#1565C0]">2nd July 2007</span> and <span className="font-bold text-[#1565C0]">1st July 2010</span></p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#E8F2FF] rounded-lg text-[#1565C0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-7l-2-2"/><path d="M12 15l2-2"/><path d="M12 8V2"/><path d="M8 5h8"/></svg>
              </div>
              <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide">Personal Status</h2>
            </div>
            <ul className="space-y-4 text-[#455A7A]">
              <li className="flex items-start gap-2">
                <span className="text-[#2E7D32] font-bold mt-0.5">✓</span>
                <span><strong>Marital Status:</strong> Must be unmarried throughout the training period.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E7D32] font-bold mt-0.5">✓</span>
                <span><strong>Gender:</strong> Both Male and Female candidates are eligible (since 2022).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E7D32] font-bold mt-0.5">✓</span>
                <span><strong>Nationality:</strong> Citizen of India, or subjects of Nepal/Bhutan (with conditions).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Qualifications */}
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Education Qualifications</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">Academic Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-100 p-5 rounded-xl bg-gray-50">
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#2E7D32] tracking-wide mb-2">Army Wing</h3>
              <p className="text-[#455A7A] text-sm">
                Pass in Class 12th (10+2 pattern) or equivalent examination conducted by a State Education Board or a University. Any stream is accepted.
              </p>
            </div>
            <div className="border border-gray-100 p-5 rounded-xl bg-gray-50">
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-2">Navy & Air Force Wing</h3>
              <p className="text-[#455A7A] text-sm">
                Pass in Class 12th (10+2 pattern) with <strong>Physics and Mathematics</strong> as compulsory subjects.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-[#FFF8E1] text-[#B78103] rounded-lg text-sm flex items-start gap-3">
            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p><strong>Note for 12th Appearing Students:</strong> Candidates currently in Class 12 are highly encouraged to apply. You just need to submit proof of passing by the time of SSB / course commencement.</p>
          </div>
        </div>

        {/* Physical Standards */}
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Medical Fitness</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">Physical Standards</h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="text-[#455A7A] text-xs uppercase font-bold mb-1">Height (Male)</div>
                <div className="text-[#0D1B2A] font-medium">Army/Navy: 157 cm</div>
                <div className="text-[#0D1B2A] font-medium">Air Force: 162.5 cm</div>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="text-[#455A7A] text-xs uppercase font-bold mb-1">Height (Female)</div>
                <div className="text-[#0D1B2A] font-medium">Army/Navy: 152 cm</div>
                <div className="text-[#0D1B2A] font-medium">Air Force: 162.5 cm</div>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="text-[#455A7A] text-xs uppercase font-bold mb-1">Weight</div>
                <div className="text-[#0D1B2A] font-medium">Proportionate to height</div>
                <div className="text-gray-500 text-xs mt-1">(BMI standard ranges apply)</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#0D1B2A] mb-2">Visual Standards</h4>
              <ul className="list-disc list-inside text-[#455A7A] space-y-1 text-sm">
                <li>Army: Better Eye 6/6, Worse Eye 6/9. Limits of Myopia -2.5D, Hypermetropia +2.5D.</li>
                <li>Navy & Air Force: Stricter vision requirements (often 6/6 uncorrected for flying branch).</li>
                <li>Color vision standard CP-III for Army, CP-I for Navy/Air Force.</li>
                <li>LASIK/PRK surgeries are generally <strong>NOT</strong> permitted for the Air Force flying branch.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0D1B2A] mb-2">Other Criteria</h4>
              <ul className="list-disc list-inside text-[#455A7A] space-y-1 text-sm">
                <li>Tattoos: Permanent body tattoos are only permitted on the inner face of the forearm. Tribes with custom tattoos are permitted case-by-case.</li>
                <li>No history of mental breakdown or fits.</li>
                <li>Normal hearing (able to hear a forced whisper at 610 cm).</li>
                <li>Chest expansion should be at least 5 cm.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
