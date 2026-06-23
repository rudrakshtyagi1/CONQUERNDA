'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel } from '@/components/ui/PageShell';

const defenceNews = [
  { category: 'Acquisition', tag: 'HOT', tagColor: '#DC2626', tagBg: '#FEE2E2', catColor: '#1D4ED8', catBg: '#DBEAFE', title: 'India signs deal for 26 Rafale Marine fighter jets for Indian Navy', summary: 'India has signed a government-to-government deal with France for 26 Rafale Marine aircraft, strengthening the Indian Navy\'s aircraft carrier capabilities. Delivery expected by 2028–2030.', date: 'June 2026', source: 'Ministry of Defence' },
  { category: 'Exercise', tag: 'ONGOING', tagColor: '#16A34A', tagBg: '#DCFCE7', catColor: '#16A34A', catBg: '#DCFCE7', title: 'Ex TASMAN SABER 2026: India–Australia joint military exercise', summary: 'Indian Army and Australian Defence Forces conduct their biennial joint exercise focusing on counter-terrorism, humanitarian assistance, and interoperability.', date: 'May 2026', source: 'Indian Army HQ' },
  { category: 'Technology', tag: 'NEW', tagColor: '#1D4ED8', tagBg: '#DBEAFE', catColor: '#0891B2', catBg: '#CFFAFE', title: 'DRDO successfully tests hypersonic missile with 1,500 km range', summary: 'DRDO has achieved a major milestone with the successful test of a hypersonic technology demonstrator vehicle, placing India among the top 4 nations with this capability.', date: 'May 2026', source: 'DRDO' },
  { category: 'Personnel', tag: 'UPSC', tagColor: '#7C3AED', tagBg: '#EDE9FE', catColor: '#D97706', catBg: '#FEF3C7', title: 'NDA & NA (I) 2026 results declared — 6,012 qualify for SSB', summary: 'UPSC has released the results for NDA & NA (I) 2026 written examination. A total of 6,012 candidates have qualified for SSB interviews.', date: 'June 2026', source: 'UPSC' },
  { category: 'Strategy', tag: 'IMPORTANT', tagColor: '#D97706', tagBg: '#FEF3C7', catColor: '#7C3AED', catBg: '#EDE9FE', title: 'Agnipath scheme: clarity on NDA entry pathway', summary: 'Ministry of Defence clarifies that NDA entry remains unaffected by the Agnipath scheme. NDA cadets will continue on the regular Short Service/Permanent Commission pathway.', date: 'April 2026', source: 'MoD Press Bureau' },
  { category: 'Achievement', tag: 'RECORD', tagColor: '#16A34A', tagBg: '#DCFCE7', catColor: '#0D9488', catBg: '#CCFBF1', title: 'INS Vikrant completes first overseas deployment to Gulf of Aden', summary: "India's indigenous aircraft carrier INS Vikrant completed its first overseas deployment, providing anti-piracy escort in the Gulf of Aden, showcasing India's blue-water capabilities.", date: 'March 2026', source: 'Indian Navy' },
];

const categories = ['All', 'Acquisition', 'Exercise', 'Technology', 'Personnel', 'Strategy', 'Achievement'];

export default function DefenceNewsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = defenceNews.filter(n => activeFilter === 'All' || n.category === activeFilter);

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="Current affairs"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="Defence news"
        lead="Stay ahead with the latest from India's Armed Forces — crucial for SSB interviews and GK prep."
        breadcrumbs={[{ label: 'Career', href: '/salary' }, { label: 'Defence News' }]}
        stats={[
          { label: 'Updated', value: 'Weekly' },
          { label: 'Categories', value: '6' },
          { label: 'For SSB', value: 'PI + GD' },
        ]}
      />

      <PageLayout sidebarGroup="career">

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{
              padding: '8px 18px', borderRadius: 20, cursor: 'pointer', fontFamily: 'inherit',
              fontWeight: 600, fontSize: 13, transition: 'all .15s',
              background: activeFilter === cat ? T.navyM : T.white,
              color: activeFilter === cat ? '#fff' : T.slate600,
              border: `1.5px solid ${activeFilter === cat ? T.navyM : T.border}`,
            }}>{cat}</button>
          ))}
        </div>

        {/* News cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          {filtered.map((news, i) => (
            <div key={i} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow, display: 'flex', gap: 16, alignItems: 'flex-start', cursor: 'pointer' }}>
              {/* Status badge */}
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: news.tagColor, background: news.tagBg, padding: '3px 10px', borderRadius: 20, display: 'block', whiteSpace: 'nowrap' }}>{news.tag}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Category pill */}
                <span style={{ fontSize: 11, fontWeight: 600, color: news.catColor, background: news.catBg, padding: '2px 10px', borderRadius: 20, display: 'inline-block', marginBottom: 8 }}>{news.category}</span>
                <h3 style={{ fontWeight: 600, fontSize: 16, color: T.text, marginBottom: 8, lineHeight: 1.4 }}>{news.title}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6, marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{news.summary}</p>
                <div style={{ display: 'flex', gap: 16, fontSize: 13, color: T.textMuted }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {news.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {news.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <Callout type="info">
          <div>
            <strong>Why defence news matters for SSB:</strong><br />
            The Personal Interview and Group Discussion heavily test your awareness of current defence events. Assessors expect you to know recent acquisitions, exercises, operations, and strategic developments.
            <ul style={{ marginTop: 10, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Read defence news for at least 15 minutes daily</li>
              <li>Know all Chief of Staff names and recent statements</li>
              <li>Be aware of India's major military exercises in the last 6 months</li>
              <li>Understand India's key strategic partnerships: Quad, BRICS, SCO</li>
            </ul>
          </div>
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Current Affairs', href: '/current-affairs', desc: 'Daily GK updates', icon: '📰' },
        { label: 'SSB Overview', href: '/ssb', desc: 'PI and GD prep', icon: '📅' },
        { label: 'SSB Interview', href: '/ssb/personal-interview', desc: 'Personal interview guide', icon: '💬' },
      ]} />
    </div>
  );
}
