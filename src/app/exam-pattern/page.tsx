'use client';
import { PageHero, PageLayout, StatsRow, Callout, Card, RelatedStrip, Btn, T, SectionLabel } from '@/components/ui/PageShell';

const bars = [
  { label: 'Algebra', pct: 30, qs: 36 },
  { label: 'Calculus', pct: 25, qs: 30 },
  { label: 'Trigonometry', pct: 20, qs: 24 },
  { label: 'Geometry', pct: 15, qs: 18 },
  { label: 'Statistics', pct: 10, qs: 12 },
];

const gatBars = [
  { label: 'English', pct: 33, qs: 50, marks: 200 },
  { label: 'Physics', pct: 20, qs: 30, marks: 120 },
  { label: 'Chemistry', pct: 12, qs: 18, marks: 72 },
  { label: 'GS / Biology', pct: 10, qs: 15, marks: 60 },
  { label: 'History / Polity', pct: 12, qs: 18, marks: 72 },
  { label: 'Geography', pct: 8, qs: 12, marks: 48 },
  { label: 'Current Events', pct: 5, qs: 7, marks: 28 },
];

export default function ExamPatternPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        h1="NDA exam pattern"
        lead="Two papers, 900 marks total. Complete structure, marking scheme, and timing."
        breadcrumbs={[{ label: 'NDA Exam', href: '/what-is-nda' }, { label: 'Exam Pattern' }]}
      />

      <PageLayout sidebarGroup="nda-exam">
        <StatsRow stats={[
          { icon: '📝', label: 'Total Papers', value: '2' },
          { icon: '🏆', label: 'Total Marks', value: '900' },
          { icon: '⏱', label: 'Each paper', value: '2.5 hours' },
          { icon: '❌', label: 'Negative marking', value: 'Yes' },
        ]} />

        {/* Paper cards */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
          {/* Paper I */}
          <div style={{ flex: '1 1 300px', background: T.white, border: `1px solid ${T.border}`, borderTop: `4px solid ${T.navyM}`, borderRadius: 16, padding: '28px 32px', boxShadow: T.shadow }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.navyM, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Paper I</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: T.text, marginBottom: 4 }}>Mathematics</h2>
            <div style={{ display: 'flex', gap: 20, margin: '16px 0', flexWrap: 'wrap' }}>
              {[['300', 'marks'], ['120', 'questions'], ['2.5 hrs', '']].map(([v, l]) => (
                <div key={v}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: T.navyM }}>{v}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#EEF2FF', borderRadius: 10, padding: '12px 16px', marginBottom: 20, fontSize: 14 }}>
              <div>✅ Correct: <strong>+2.5 marks</strong></div>
              <div>❌ Wrong: <strong>−0.83 marks</strong></div>
            </div>
            <SectionLabel>Topic distribution</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {bars.map(b => (
                <div key={b.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                    <span style={{ fontWeight: 500, color: T.text }}>{b.label}</span>
                    <span style={{ color: T.textMuted }}>~{b.qs} qs</span>
                  </div>
                  <div style={{ background: '#EEF2FF', borderRadius: 99, height: 8 }}>
                    <div style={{ width: `${b.pct}%`, height: '100%', background: T.navyM, borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Paper II */}
          <div style={{ flex: '1 1 300px', background: T.white, border: `1px solid ${T.border}`, borderTop: `4px solid ${T.amber}`, borderRadius: 16, padding: '28px 32px', boxShadow: T.shadow }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.amber, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Paper II</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: T.text, marginBottom: 4 }}>General Ability Test</h2>
            <div style={{ display: 'flex', gap: 20, margin: '16px 0', flexWrap: 'wrap' }}>
              {[['600', 'marks'], ['150', 'questions'], ['2.5 hrs', '']].map(([v, l]) => (
                <div key={v}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: T.amber }}>{v}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ background: T.amberBg, borderRadius: 10, padding: '12px 16px', marginBottom: 20, fontSize: 14 }}>
              <div>✅ Correct: <strong>+4 marks</strong></div>
              <div>❌ Wrong: <strong>−1.33 marks</strong></div>
            </div>
            <SectionLabel>Topic distribution</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {gatBars.map(b => (
                <div key={b.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                    <span style={{ fontWeight: 500, color: T.text }}>{b.label}</span>
                    <span style={{ color: T.textMuted }}>~{b.qs} qs</span>
                  </div>
                  <div style={{ background: T.amberBg, borderRadius: 99, height: 8 }}>
                    <div style={{ width: `${b.pct}%`, height: '100%', background: T.amber, borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marking scheme table */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Marking scheme summary</SectionLabel>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: T.navyM }}>
                  {['Paper', 'Correct answer', 'Wrong answer', 'Unattempted'].map((h, i) => (
                    <th key={i} style={{ color: '#fff', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Paper I – Mathematics', '+2.5 marks', '−0.83 marks', '0'],
                  ['Paper II – GAT', '+4 marks', '−1.33 marks', '0'],
                ].map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? T.white : T.page }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: T.navyM, borderBottom: `1px solid ${T.border}` }}>{row[0]}</td>
                    <td style={{ padding: '12px 16px', color: '#16A34A', fontWeight: 600, borderBottom: `1px solid ${T.border}` }}>{row[1]}</td>
                    <td style={{ padding: '12px 16px', color: '#DC2626', fontWeight: 600, borderBottom: `1px solid ${T.border}` }}>{row[2]}</td>
                    <td style={{ padding: '12px 16px', color: T.textMuted, borderBottom: `1px solid ${T.border}` }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Callout type="warning">
          Negative marking is heavy — a wrong answer costs you about 1/3rd of the marks for a correct answer. Avoid random guessing; skip if unsure.
        </Callout>

        {/* SSB marks */}
        <Card style={{ background: 'linear-gradient(135deg,#FEF3C7 0%,#fff 60%)', border: `1px solid ${T.amber}`, marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 56, fontWeight: 900, color: T.amber, lineHeight: 1 }}>900</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>SSB Interview marks</div>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>
                SSB Interview adds 900 marks on top of the written exam.<br />
                <strong>Final merit = Written (900) + SSB (900) = 1800 marks total.</strong>
              </p>
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Btn href="/syllabus" variant="secondary">View complete syllabus →</Btn>
          <Btn href="/cutoff-analysis" variant="ghost">See historical cutoffs →</Btn>
        </div>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Syllabus', href: '/syllabus', desc: 'Topic-wise breakdown', icon: '📚' },
        { label: 'Cutoff Analysis', href: '/cutoff-analysis', desc: 'Historical trends', icon: '📈' },
        { label: 'Previous Papers', href: '/previous-year-papers', desc: 'Practice real PYQs', icon: '📄' },
      ]} />
    </div>
  );
}
