'use client';
import Link from 'next/link';
import { PageHero, PageLayout, Callout, RelatedStrip, T, SectionLabel, Table } from '@/components/ui/PageShell';

export default function RoadmapPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg="#EEF2FF"
        h1="NDA study roadmap"
        lead="A structured plan whether you are in Class 10, 11, 12, or a dropper."
        breadcrumbs={[{ label: 'Preparation', href: '/roadmap' }, { label: 'Study Roadmap' }]}
      />

      <PageLayout sidebarGroup="preparation">
        <SectionLabel>Choose your stage</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 40 }}>
          <Link href="/roadmap/class-10" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: '4px solid #16A34A', borderRadius: 16, padding: 28, transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: T.shadow }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🌱</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Class 10</h3>
              <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16 }}>Start early, build your base</p>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#16A34A' }}>See roadmap →</div>
            </div>
          </Link>
          <Link href="/roadmap/class-11" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: '4px solid #D4900A', borderRadius: 16, padding: 28, transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: T.shadow }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📖</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Class 11</h3>
              <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16 }}>Core preparation window</p>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#D4900A' }}>See roadmap →</div>
            </div>
          </Link>
          <Link href="/roadmap/class-12" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: '4px solid #1D3FAB', borderRadius: 16, padding: 28, transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: T.shadow }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🎯</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Class 12</h3>
              <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16 }}>Balance boards + NDA</p>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1D3FAB' }}>See roadmap →</div>
            </div>
          </Link>
          <Link href="/roadmap/dropper" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: '4px solid #DC2626', borderRadius: 16, padding: 28, transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: T.shadow }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🔥</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Dropper</h3>
              <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16 }}>Full-time focused prep</p>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#DC2626' }}>See roadmap →</div>
            </div>
          </Link>
        </div>

        <SectionLabel>General 12-month overview</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingLeft: 16, borderLeft: `2px solid ${T.border}`, marginBottom: 40, position: 'relative' }}>
          {[
            { phase: 'Phase 1: Foundation', time: 'Month 1–3', desc: 'Build NCERT basics for all subjects, start with Class 9-10 math.' },
            { phase: 'Phase 2: Build-up', time: 'Month 4–8', desc: 'Cover full NDA syllabus systematically, subject-by-subject.' },
            { phase: 'Phase 3: Revision', time: 'Month 9–10', desc: 'Rapid revision using short notes, solve previous year papers.' },
            { phase: 'Phase 4: Mock Sprint', time: 'Month 11–12', desc: 'Full-length mock tests every week, analyse and fix weak areas.' }
          ].map((step, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: -25, top: 4, width: 14, height: 14, borderRadius: '50%', background: T.navyM, border: `3px solid ${T.page}` }} />
              <div style={{ fontSize: 12, fontWeight: 600, color: T.navyM, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{step.time}</div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{step.phase}</h4>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <SectionLabel>Subject priority guide</SectionLabel>
        <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow, marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: T.navyM }}>
                {['Subject', 'Priority', 'Recommended hrs/week', 'Key resource'].map((h, i) => (
                  <th key={i} style={{ color: '#fff', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Mathematics', 'High 🔴', '10–12 hrs', 'R.D. Sharma + PYQs'],
                ['English', 'High 🔴', '4–5 hrs', 'Wren & Martin'],
                ['Physics', 'Medium 🟡', '4–5 hrs', 'NCERT Class 11–12'],
                ['Chemistry', 'Medium 🟡', '3–4 hrs', 'NCERT Class 11–12'],
                ['General Science', 'Medium 🟡', '3–4 hrs', 'NCERT Class 9–10'],
                ['History', 'Low 🟢', '2–3 hrs', 'NCERT + Spectrum'],
                ['Geography', 'Low 🟢', '2–3 hrs', 'NCERT Class 11'],
                ['Current Affairs', 'High 🔴', 'Daily 30 min', 'Newspapers + Apps'],
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? T.white : T.page }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: T.text, borderBottom: `1px solid ${T.border}` }}>{row[0]}</td>
                  <td style={{ padding: '12px 16px', borderBottom: `1px solid ${T.border}` }}>{row[1]}</td>
                  <td style={{ padding: '12px 16px', color: T.slate600, borderBottom: `1px solid ${T.border}` }}>{row[2]}</td>
                  <td style={{ padding: '12px 16px', color: T.textMuted, borderBottom: `1px solid ${T.border}` }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout type="tip">
          <strong>Consistency beats intensity.</strong> 4 hours daily for 12 months outperforms 12 hours for 3 months. Build a routine and protect it.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Syllabus', href: '/syllabus', desc: 'Complete topic list', icon: '📚' },
        { label: 'Books & Resources', href: '/syllabus/books', desc: 'Best books per subject', icon: '📖' },
        { label: 'Mock Tests', href: '/mock-tests', desc: 'Practice tests', icon: '✏️' },
      ]} />
    </div>
  );
}
