'use client';
import Link from 'next/link';

const defenceNews = [
  {
    category: 'Acquisition',
    tag: 'HOT',
    tagColor: '#DC2626',
    title: 'India Signs Deal for 26 Rafale Marine Fighter Jets for Indian Navy',
    summary: 'India has signed a government-to-government deal with France for 26 Rafale Marine aircraft, strengthening the Indian Navy\'s aircraft carrier capabilities. Delivery expected by 2028-2030.',
    date: 'June 2026',
    source: 'Ministry of Defence',
  },
  {
    category: 'Exercise',
    tag: 'ONGOING',
    tagColor: '#2E7D32',
    title: 'Ex TASMAN SABER 2026: India-Australia Joint Military Exercise',
    summary: 'Indian Army and Australian Defence Forces conduct their biennial joint exercise focusing on counter-terrorism, humanitarian assistance, and interoperability between the two forces.',
    date: 'May 2026',
    source: 'Indian Army HQ',
  },
  {
    category: 'Technology',
    tag: 'NEW',
    tagColor: '#1565C0',
    title: 'DRDO Successfully Tests Hypersonic Missile with Range of 1,500 km',
    summary: 'Defence Research and Development Organisation (DRDO) has achieved a major milestone with the successful test of a hypersonic technology demonstrator vehicle, placing India among the top 4 nations with this capability.',
    date: 'May 2026',
    source: 'DRDO',
  },
  {
    category: 'Personnel',
    tag: 'UPSC',
    tagColor: '#7B1FA2',
    title: 'NDA & NA (I) 2026 Results Declared — 6,012 Qualify for SSB',
    summary: 'UPSC has released the results for NDA & NA (I) 2026 written examination. A total of 6,012 candidates have qualified and will now be called for SSB interviews at various Service Selection Boards.',
    date: 'June 2026',
    source: 'UPSC',
  },
  {
    category: 'Strategy',
    tag: 'IMPORTANT',
    tagColor: '#E65100',
    title: 'Agnipath Scheme: Changes Announced for NDA Entry Cadets',
    summary: 'Ministry of Defence clarifies that NDA entry remains unaffected by the Agnipath/Agniveer scheme. NDA cadets will continue on the regular Short Service Commission/Permanent Commission pathway.',
    date: 'April 2026',
    source: 'MoD Press Bureau',
  },
  {
    category: 'Achievement',
    tag: 'RECORD',
    tagColor: '#16A34A',
    title: 'INS Vikrant Completes First Overseas Deployment to Gulf of Aden',
    summary: 'India\'s indigenous aircraft carrier INS Vikrant successfully completed its first overseas deployment, providing anti-piracy escort in the Gulf of Aden. The deployment showcased India\'s blue-water naval capabilities.',
    date: 'March 2026',
    source: 'Indian Navy',
  },
];

const categories = ['All', 'Acquisition', 'Exercise', 'Technology', 'Personnel', 'Strategy', 'Achievement'];

export default function DefenceNewsPage() {
  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">← Back to ConquerNDA</Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9]">Latest Updates</div>
            <span className="flex items-center gap-1.5 bg-[#DC2626] text-white text-[11px] font-bold px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>LIVE
            </span>
          </div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Defence News</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">Stay ahead with the latest from India's Armed Forces — crucial for SSB interviews and GK prep.</p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16">
        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button key={cat}
              className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all ${cat === 'All' ? 'bg-[#1565C0] text-white' : 'bg-white text-[#455A7A] border border-[#C5D8F5] hover:border-[#1565C0] hover:text-[#1565C0]'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          {defenceNews.map((news, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 shadow-sm hover:shadow-md hover:border-[#90CAF9] transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full text-white" style={{ background: news.tagColor }}>{news.tag}</span>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#455A7A] mb-1">{news.category}</div>
                  <h3 className="font-bold text-[#0D1B2A] text-[16px] mb-2 leading-snug">{news.title}</h3>
                  <p className="text-[14px] text-[#455A7A] leading-relaxed mb-3">{news.summary}</p>
                  <div className="flex items-center gap-4 text-[12px] text-[#455A7A]">
                    <span>📅 {news.date}</span>
                    <span>📌 {news.source}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SSB Relevance Box */}
        <div className="mt-12 bg-[#E8F2FF] border border-[#C5D8F5] rounded-2xl p-8">
          <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-3">Why Defence News Matters for SSB</h3>
          <p className="text-[#455A7A] leading-relaxed mb-4">
            The Personal Interview and Group Discussion in the SSB heavily test your awareness of current defence events. Assessors expect you to know recent acquisitions, exercises, operations, and strategic developments.
          </p>
          <ul className="space-y-2 text-[14px] text-[#455A7A]">
            <li className="flex items-center gap-2"><span className="text-[#1565C0] font-bold">›</span> Read defence news for at least 15 minutes daily</li>
            <li className="flex items-center gap-2"><span className="text-[#1565C0] font-bold">›</span> Know all Chief of Staff names and their recent statements</li>
            <li className="flex items-center gap-2"><span className="text-[#1565C0] font-bold">›</span> Be aware of India's major military exercises in the last 6 months</li>
            <li className="flex items-center gap-2"><span className="text-[#1565C0] font-bold">›</span> Understand India's key strategic partnerships (Quad, BRICS, SCO)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
