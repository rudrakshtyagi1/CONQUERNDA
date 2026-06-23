'use client';
import { PageHero, PageLayout, StatsRow, Callout, Card, RelatedStrip, Btn, T, SectionLabel } from '@/components/ui/PageShell';

export default function EligibilityPage() {
  const wings = [
    {
      wing: 'Army Wing',
      color: '#16A34A',
      bg: '#DCFCE7',
      standards: [
        ['Height', '157 cm (152 cm for certain hills/tribal regions)'],
        ['Weight', 'Proportionate to height'],
        ['Chest', '77 cm minimum with 5 cm expansion'],
        ['Vision', '6/6 in better eye, correctable'],
        ['Colour vision', 'Required (CP-3 or better)'],
      ]
    },
    {
      wing: 'Navy Wing',
      color: '#1D4ED8',
      bg: '#DBEAFE',
      standards: [
        ['Height', '157 cm minimum'],
        ['Weight', 'Proportionate to height'],
        ['Vision', '6/6 in better eye, correctable'],
        ['Colour vision', 'Required'],
        ['Dental', 'Good dental health required'],
      ]
    },
    {
      wing: 'Air Force Wing',
      color: '#7C3AED',
      bg: '#EDE9FE',
      standards: [
        ['Height', '162.5 cm minimum'],
        ['Leg length', '99–120 cm'],
        ['Vision', '6/6 in BOTH eyes (uncorrected)'],
        ['Colour vision', 'Required (CP-1)'],
        ['Hearing', 'Normal hearing in both ears'],
      ]
    }
  ];

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg="#EEF2FF"
        h1="NDA eligibility criteria"
        lead="Know exactly what it takes — age, education, nationality, and physical standards."
        breadcrumbs={[{ label: 'NDA Exam', href: '/what-is-nda' }, { label: 'Eligibility' }]}
      />

      <PageLayout sidebarGroup="nda-exam">
        <StatsRow stats={[
          { icon: '🎂', label: 'Age window', value: '16.5–19.5 yrs' },
          { icon: '🎓', label: 'Education', value: 'Class 12', sub: 'Pass or appearing' },
          { icon: '⚧', label: 'Gender', value: 'Male & Female', sub: 'Since 2022' },
          { icon: '🇮🇳', label: 'Nationality', value: 'Indian Citizen' },
        ]} />

        {/* Age criteria */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Age eligibility by exam cycle</SectionLabel>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: T.navyM }}>
                  {['Exam cycle', 'Notification', 'Age window', 'Born between'].map((h, i) => (
                    <th key={i} style={{ color: '#fff', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['NDA I 2026', 'Dec 2025', '16.5–19.5 years', '2 Jul 2007 to 1 Jan 2010'],
                  ['NDA II 2026', 'May 2026', '16.5–19.5 years', '2 Jan 2007 to 1 Jul 2010'],
                  ['NDA I 2025', 'Dec 2024', '16.5–19.5 years', '2 Jul 2006 to 1 Jan 2009'],
                  ['NDA II 2025', 'May 2025', '16.5–19.5 years', '2 Jan 2006 to 1 Jul 2009'],
                ].map((row, idx) => (
                  <tr key={idx} style={{ background: idx === 0 ? '#EEF2FF' : idx % 2 === 0 ? T.white : T.page }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '12px 16px', color: ci === 0 ? T.navyM : T.text, fontWeight: ci === 0 ? 600 : 400, borderBottom: `1px solid ${T.border}` }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Educational qualification */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Educational qualification</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 20 }}>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderLeft: '4px solid #16A34A', borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22 }}>🪖</span>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#16A34A' }}>Army Wing</h3>
              </div>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>Class 12 with <strong>any stream</strong> from a recognised board. No mandatory subjects required for Army eligibility.</p>
            </div>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderLeft: '4px solid #1D4ED8', borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22 }}>⚓</span>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#1D4ED8' }}>Navy & Air Force Wing</h3>
              </div>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>Class 12 with <strong>Physics AND Mathematics</strong> as mandatory subjects. Without these, you are not eligible for Navy/Air Force.</p>
            </div>
          </div>

          <Callout type="warning">
            Candidates appearing in Class 12 are also eligible to apply, provided they complete the exam before the SSB date.
          </Callout>
        </div>

        {/* Physical standards */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Physical standards by wing</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 20 }}>
            {wings.map((w) => (
              <div key={w.wing} style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: `4px solid ${w.color}`, borderRadius: 14, padding: '20px 24px', boxShadow: T.shadow }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: w.color, marginBottom: 16 }}>{w.wing}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {w.standards.map(([label, val]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, borderBottom: `1px solid ${T.border}`, paddingBottom: 8 }}>
                      <span style={{ color: T.textMuted }}>{label}</span>
                      <span style={{ fontWeight: 600, color: T.text, textAlign: 'right', maxWidth: '55%' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Callout type="info">
            Medical examination happens at the SSB stage after recommendation. These are indicative pre-SSB standards — confirm with the official UPSC notification.
          </Callout>
        </div>

        {/* CTA */}
        <div style={{ background: T.navy, borderRadius: 16, padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 20, marginBottom: 6 }}>Check your eligibility in 2 minutes</h3>
            <p style={{ color: '#C7D2FE', fontSize: 14 }}>Answer a few questions and instantly know if you qualify.</p>
          </div>
          <Btn href="/eligibility-checker" variant="primary" style={{ background: T.amber, borderColor: T.amber, color: T.navy, fontWeight: 700 }}>
            Use eligibility checker →
          </Btn>
        </div>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Exam Pattern', href: '/exam-pattern', desc: 'Papers & marking scheme', icon: '📋' },
        { label: 'What is NDA', href: '/what-is-nda', desc: 'Overview & history', icon: '🏛️' },
        { label: 'Syllabus', href: '/syllabus', desc: 'Topic-wise breakdown', icon: '📚' },
      ]} />
    </div>
  );
}
