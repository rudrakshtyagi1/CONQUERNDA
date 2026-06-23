'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, Btn, T, SectionLabel } from '@/components/ui/PageShell';

const papers = [
  { year: '2026', session: 'NDA I', mathSize: '2.3 MB', gatSize: '3.1 MB', status: 'available' },
  { year: '2025', session: 'NDA II', mathSize: '2.1 MB', gatSize: '2.9 MB', status: 'available' },
  { year: '2025', session: 'NDA I', mathSize: '2.2 MB', gatSize: '3.0 MB', status: 'available' },
  { year: '2024', session: 'NDA II', mathSize: '2.0 MB', gatSize: '2.8 MB', status: 'available' },
  { year: '2024', session: 'NDA I', mathSize: '2.1 MB', gatSize: '2.9 MB', status: 'available' },
  { year: '2023', session: 'NDA II', mathSize: '1.9 MB', gatSize: '2.7 MB', status: 'available' },
  { year: '2023', session: 'NDA I', mathSize: '2.0 MB', gatSize: '2.8 MB', status: 'available' },
  { year: '2022', session: 'NDA II', mathSize: '1.8 MB', gatSize: '2.6 MB', status: 'available' },
  { year: '2022', session: 'NDA I', mathSize: '1.9 MB', gatSize: '2.7 MB', status: 'available' },
  { year: '2021', session: 'NDA II', mathSize: '1.7 MB', gatSize: '2.5 MB', status: 'available' },
  { year: '2021', session: 'NDA I', mathSize: '1.8 MB', gatSize: '2.6 MB', status: 'available' },
  { year: '2020', session: 'NDA I (merged)', mathSize: '1.8 MB', gatSize: '2.6 MB', status: 'available' },
  { year: '2019', session: 'NDA II', mathSize: '1.6 MB', gatSize: '2.4 MB', status: 'available' },
  { year: '2019', session: 'NDA I', mathSize: '1.7 MB', gatSize: '2.5 MB', status: 'available' },
];

const yearOpts = ['All', '2026', '2025', '2024', '2023', '2022', '2021', '2019–2020'];

export default function PreviousYearPapersPage() {
  const [yearFilter, setYearFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filtered = papers.filter(p => {
    const yearMatch = yearFilter === 'All'
      || p.year === yearFilter
      || (yearFilter === '2019–2020' && ['2019', '2020'].includes(p.year));
    return yearMatch;
  });

  const pillBtn = (label: string, active: boolean, onClick: () => void) => (
    <button onClick={onClick} key={label} style={{
      padding: '8px 18px', borderRadius: 20, border: `1.5px solid ${active ? T.navyM : T.border}`,
      background: active ? T.navyM : T.white, color: active ? '#fff' : T.slate600,
      fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s',
    }}>{label}</button>
  );

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="PYQs 2019–2026"
        badgeBg="#FEF3C7"
        badgeColor="#D4900A"
        h1="NDA previous year papers"
        lead="Download and practice real UPSC question papers — the most effective way to prepare."
        breadcrumbs={[{ label: 'NDA Exam', href: '/what-is-nda' }, { label: 'Previous Year Papers' }]}
      />

      <PageLayout sidebarGroup="nda-exam">
        {/* How to use */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>How to use previous year papers</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { num: '1', title: 'Download the paper', desc: 'Get the official Maths and GAT papers in PDF format.' },
              { num: '2', title: 'Attempt under timed conditions', desc: 'Set a 2.5-hour timer per paper. No phone, no breaks — real exam simulation.' },
              { num: '3', title: 'Analyse with answer key', desc: 'Go through each wrong answer. Note the topic and understand exactly why you were wrong.' },
            ].map(s => (
              <div key={s.num} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, boxShadow: T.shadow }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.navyM, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.textMuted, marginBottom: 8 }}>Filter by year</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {yearOpts.map(y => pillBtn(y, yearFilter === y, () => setYearFilter(y)))}
          </div>
        </div>

        {/* Papers grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20, marginBottom: 32 }}>
          {filtered.map((paper, idx) => (
            <div key={idx} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 16, padding: '24px', boxShadow: T.shadow, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>UPSC NDA</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: T.navyM, background: '#EEF2FF', padding: '4px 12px', borderRadius: 20 }}>{paper.year}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 16 }}>NDA {paper.session} {paper.year}</h3>

              {paper.status === 'available' ? (
                <>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                    <a href="#" style={{ flex: 1, display: 'block', padding: '10px', border: `1.5px solid ${T.navyM}`, borderRadius: 10, color: T.navyM, fontWeight: 600, fontSize: 13, textAlign: 'center', textDecoration: 'none', transition: 'all .15s' }}>
                      ⬇ Maths paper ({paper.mathSize})
                    </a>
                    <a href="#" style={{ flex: 1, display: 'block', padding: '10px', border: `1.5px solid ${T.navyM}`, borderRadius: 10, color: T.navyM, fontWeight: 600, fontSize: 13, textAlign: 'center', textDecoration: 'none', transition: 'all .15s' }}>
                      ⬇ GAT paper ({paper.gatSize})
                    </a>
                  </div>
                  <a href="#" style={{ fontSize: 13, fontWeight: 700, color: T.amber, textDecoration: 'none' }}>Answer key →</a>
                </>
              ) : (
                <div style={{ fontSize: 14, color: T.textMuted, fontStyle: 'italic' }}>Coming soon</div>
              )}
            </div>
          ))}
        </div>

        <Callout type="tip">
          The NDA Mathematics paper is highly consistent — the same topics repeat every cycle. Solving 5 years of papers will expose nearly all question patterns you'll face.
        </Callout>
        <Callout type="info" style={{ marginTop: 16 }}>
          Official papers are released by UPSC. The PDFs here are meant for practice. For official admit cards and results, always visit <strong>upsc.gov.in</strong>.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Mock Tests', href: '/mock-tests', desc: 'Full-length timed tests', icon: '✏️' },
        { label: 'Syllabus', href: '/syllabus', desc: 'Topic-wise breakdown', icon: '📚' },
        { label: 'Cutoff Analysis', href: '/cutoff-analysis', desc: 'Target scores', icon: '📈' },
      ]} />
    </div>
  );
}
