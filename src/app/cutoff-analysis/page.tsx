'use client';
import { PageHero, PageLayout, StatsRow, Callout, Card, RelatedStrip, Btn, T, SectionLabel } from '@/components/ui/PageShell';

const cutoffs = [
  { year: '2026', exam: 'NDA I', written: 338, max: 900, ssb: 252, final: 692, vac: '400 (est)', highlight: true },
  { year: '2025', exam: 'NDA II', written: 342, max: 900, ssb: 252, final: 711, vac: '400' },
  { year: '2025', exam: 'NDA I', written: 315, max: 900, ssb: 252, final: 688, vac: '400' },
  { year: '2024', exam: 'NDA II', written: 346, max: 900, ssb: 252, final: 723, vac: '400' },
  { year: '2024', exam: 'NDA I', written: 328, max: 900, ssb: 252, final: 699, vac: '400' },
  { year: '2023', exam: 'NDA II', written: 352, max: 900, ssb: 252, final: 717, vac: '395' },
  { year: '2023', exam: 'NDA I', written: 309, max: 900, ssb: 252, final: 668, vac: '395' },
  { year: '2022', exam: 'NDA II', written: 355, max: 900, ssb: 252, final: 705, vac: '400' },
  { year: '2022', exam: 'NDA I', written: 316, max: 900, ssb: 252, final: 683, vac: '370' },
  { year: '2021', exam: 'NDA II', written: 343, max: 900, ssb: 252, final: 714, vac: '400' },
  { year: '2021', exam: 'NDA I', written: 418, max: 900, ssb: 252, final: 722, vac: '400' },
  { year: '2020', exam: 'NDA I (merged)', written: 355, max: 900, ssb: 252, final: 708, vac: '418' },
  { year: '2019', exam: 'NDA II', written: 346, max: 900, ssb: 252, final: 704, vac: '415' },
  { year: '2019', exam: 'NDA I', written: 342, max: 900, ssb: 252, final: 688, vac: '415' },
];

const recentTrend = cutoffs.slice(0, 6);

export default function CutoffAnalysisPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        h1="NDA cutoff analysis"
        lead="Historical written and final cutoffs 2019–2026 — understand the trend and set your target score."
        breadcrumbs={[{ label: 'NDA Exam', href: '/what-is-nda' }, { label: 'Cutoff Analysis' }]}
      />

      <PageLayout sidebarGroup="nda-exam">
        <StatsRow stats={[
          { icon: '📊', label: 'Avg written cutoff', value: '~335/900' },
          { icon: '🎯', label: 'Final cutoff', value: '~708/1800' },
          { icon: '📉', label: 'Trend', value: 'Stable', sub: '±15 marks variation' },
          { icon: '👥', label: 'Vacancies', value: '~400/cycle' },
        ]} />

        {/* Cutoff table */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Year-by-year cutoff data</SectionLabel>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: T.navyM }}>
                  {['Year', 'Exam', 'Written cutoff', 'Written max', 'SSB cutoff', 'Final cutoff', 'Vacancies'].map((h, i) => (
                    <th key={i} style={{ color: '#fff', fontWeight: 600, padding: '12px 16px', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cutoffs.map((row, idx) => (
                  <tr key={idx} style={{ background: row.highlight ? '#EEF2FF' : idx % 2 === 0 ? T.white : T.page }}>
                    <td style={{ padding: '11px 16px', fontWeight: 700, color: row.highlight ? T.navyM : T.text, borderBottom: `1px solid ${T.border}` }}>{row.year}</td>
                    <td style={{ padding: '11px 16px', color: T.text, borderBottom: `1px solid ${T.border}` }}>{row.exam}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 700, color: row.written > 340 ? '#DC2626' : '#16A34A', borderBottom: `1px solid ${T.border}` }}>{row.written}</td>
                    <td style={{ padding: '11px 16px', color: T.textMuted, borderBottom: `1px solid ${T.border}` }}>{row.max}</td>
                    <td style={{ padding: '11px 16px', color: T.textMuted, borderBottom: `1px solid ${T.border}` }}>{row.ssb}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 600, color: T.navyM, borderBottom: `1px solid ${T.border}` }}>{row.final}</td>
                    <td style={{ padding: '11px 16px', color: T.textMuted, borderBottom: `1px solid ${T.border}` }}>{row.vac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visual bar chart */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Written cutoff trend (last 6 cycles)</SectionLabel>
          <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 14, padding: '24px 28px', boxShadow: T.shadow }}>
            {recentTrend.map((r) => (
              <div key={`${r.year}-${r.exam}`} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{ width: 120, fontSize: 13, fontWeight: 600, color: T.text, flexShrink: 0, textAlign: 'right' }}>{r.year} {r.exam}</div>
                <div style={{ flex: 1, background: '#EEF2FF', borderRadius: 99, height: 24, overflow: 'hidden' }}>
                  <div style={{ width: `${(r.written / 900) * 100}%`, height: '100%', background: T.navyM, borderRadius: 99, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
                  </div>
                </div>
                <div style={{ width: 36, fontSize: 14, fontWeight: 700, color: T.navyM, flexShrink: 0 }}>{r.written}</div>
              </div>
            ))}
            <div style={{ marginTop: 8, fontSize: 12, color: T.textMuted, textAlign: 'right' }}>Out of 900 total marks</div>
          </div>
        </div>

        {/* Key insights */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Key insights</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderLeft: `4px solid ${T.amber}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>📊 Written cutoff rarely exceeds 360 out of 900 — focus on accuracy over speed. A score of <strong>350+</strong> puts you in a very strong position.</p>
            </div>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderLeft: `4px solid ${T.navyM}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>🎯 SSB cutoff is consistently <strong>~252 out of 900</strong>. Your SSB performance determines your final rank among written qualifiers.</p>
            </div>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderLeft: `4px solid #16A34A`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>🏆 Final merit is highly competitive — top ~400 candidates out of 4–5 lakh applicants. <strong>Every mark counts</strong> in the written exam.</p>
            </div>
          </div>
        </div>

        <Callout type="info">
          Cutoffs vary each exam cycle based on difficulty, number of vacancies, and candidate pool. Use these as planning benchmarks, not guarantees.
        </Callout>

        {/* CTA */}
        <Card style={{ background: T.navy, marginTop: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Predict your rank based on expected scores</h3>
              <p style={{ color: '#C7D2FE', fontSize: 14 }}>See where your score falls in the historical distribution.</p>
            </div>
            <Btn href="/rank-predictor" variant="primary" style={{ background: T.amber, borderColor: T.amber, color: T.navy, fontWeight: 700 }}>
              Try rank predictor →
            </Btn>
          </div>
        </Card>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Rank Predictor', href: '/rank-predictor', desc: 'Predict your AIR', icon: '🎯' },
        { label: 'Exam Pattern', href: '/exam-pattern', desc: 'Marks & structure', icon: '📋' },
        { label: 'Previous Papers', href: '/previous-year-papers', desc: 'Practice with PYQs', icon: '📄' },
      ]} />
    </div>
  );
}
