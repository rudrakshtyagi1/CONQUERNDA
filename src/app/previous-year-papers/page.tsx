'use client';
import Link from 'next/link';

export default function PreviousYearPapers() {
  const papers = [
    { year: '2026', session: 'NDA 1', status: 'Available' },
    { year: '2025', session: 'NDA 2', status: 'Coming Soon' },
    { year: '2025', session: 'NDA 1', status: 'Coming Soon' },
    { year: '2024', session: 'NDA 2', status: 'Available' },
    { year: '2024', session: 'NDA 1', status: 'Available' },
    { year: '2023', session: 'NDA 2', status: 'Available' },
  ];

  return (
    <div className="min-h-screen bg-surface font-['Inter',sans-serif]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Previous Year Papers</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            Download official UPSC NDA previous year question papers (PYQs) and answer keys.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 text-[#0D1B2A]">
        <div className="grid md:grid-cols-3 gap-6">
          {papers.map((paper, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:-translate-y-1 transition-transform flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0]">UPSC NDA</span>
                {paper.status === 'Available' ? (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-100 text-green-700 uppercase">Available</span>
                ) : (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-gray-100 text-gray-600 uppercase">Coming Soon</span>
                )}
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#0D1B2A] tracking-wide mb-2">NDA {paper.session.split(' ')[1]} {paper.year}</h3>
              <p className="text-[#455A7A] text-sm mb-6 flex-1">
                Official Mathematics and General Ability Test (GAT) papers.
              </p>
              <button 
                disabled={paper.status !== 'Available'}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${
                  paper.status === 'Available' 
                    ? 'bg-[#1D4ED8] text-white hover:bg-blue-800' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {paper.status === 'Available' ? 'Download PDF' : 'Not Released'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
