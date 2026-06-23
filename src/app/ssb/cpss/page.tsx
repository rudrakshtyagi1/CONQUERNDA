'use client';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel, StatsRow } from '@/components/ui/PageShell';

const cpssTests = [
  { icon: '✈️', name: 'Instrument comprehension', desc: 'Reading aircraft instruments — interpreting attitude, heading, and altitude under time pressure.', tag: 'Spatial reasoning' },
  { icon: '🧊', name: 'Spatial reasoning', desc: '3D orientation and mental rotation tasks. Visualising aircraft position from multiple angles.', tag: 'Cognitive' },
  { icon: '🕹️', name: 'Control velocity test', desc: 'Joystick and rudder-pedal coordination under time pressure. Tracks hand-eye-foot coordination.', tag: 'Motor control' },
  { icon: '🎮', name: 'Sensory Motor Apparatus (SMA)', desc: 'Simulated flight control with three limbs simultaneously — the most demanding motor task.', tag: 'Multi-limb coordination' },
  { icon: '🧠', name: 'Memory & attention', desc: 'Working memory tasks under distraction. Recall and respond while maintaining a tracking task.', tag: 'Cognitive load' },
  { icon: '🌐', name: 'WOMBAT', desc: 'Situational awareness test in a simulated tactical environment — fast target ID under time limits.', tag: 'Situational awareness' },
];

export default function CPSSPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="Pilots only — Air Force Wing"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="CPSS — Computerised Pilot Selection System"
        lead="The aptitude battery for Air Force pilot aspirants. Conducted at AFCME, New Delhi — and it's a one-time test."
        breadcrumbs={[{ label: 'SSB', href: '/ssb' }, { label: 'CPSS' }]}
      />

      <PageLayout sidebarGroup="ssb">

        <StatsRow stats={[
          { icon: '⏱️', label: 'Duration', value: '2–3 days' },
          { icon: '📍', label: 'Venue', value: 'AFCME, Delhi' },
          { icon: '⚠️', label: 'Attempts allowed', value: 'One time only' },
          { icon: '🎖️', label: 'Who appears', value: 'AF Wing qualifiers' },
        ]} />

        <Callout type="caution" style={{ marginBottom: 32 }}>
          <div>
            <strong>CPSS is a one-time test — there are no repeats.</strong><br />
            CPSS replaced the old PABT (Pilot Aptitude Battery Test). If you fail CPSS, you cannot appear for it again in any future SSB. This makes it the most consequential single test in the Air Force selection process.
          </div>
        </Callout>

        {/* What is CPSS */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>What is CPSS?</SectionLabel>
          <Card>
            <p style={{ fontSize: 15, color: T.slate600, lineHeight: 1.7, marginBottom: 12 }}>
              The Computerised Pilot Selection System (CPSS) is a multi-stage psychometric and psychomotor aptitude test used by the Indian Air Force to assess whether an SSB candidate has the innate aptitude to become a pilot.
            </p>
            <p style={{ fontSize: 15, color: T.slate600, lineHeight: 1.7 }}>
              It is conducted on Day 1 of the SSB for Air Force Wing aspirants, <strong>before</strong> the main SSB screening. Candidates who fail CPSS still continue the SSB for non-flying branches, but cannot be recommended for a flying branch.
            </p>
          </Card>
        </div>

        {/* Test components */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>CPSS test components</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {cpssTests.map(test => (
              <div key={test.name} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{test.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: T.text }}>{test.name}</h3>
                  <span style={{ fontSize: 11, fontWeight: 600, color: T.navyM, background: '#EEF2FF', padding: '2px 8px', borderRadius: 20, whiteSpace: 'nowrap', flexShrink: 0 }}>{test.tag}</span>
                </div>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{test.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who appears */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Who appears for CPSS?</SectionLabel>
          <Card>
            <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>
              Only candidates who have applied for the <strong>Air Force Wing</strong> and have cleared the NDA written examination are required to appear for CPSS. It is conducted on Day 1 of the SSB, immediately after screening. Army and Navy wing candidates do not take CPSS.
            </p>
          </Card>
        </div>

        <Callout type="tip">
          CPSS cannot be practised directly from books. Build spatial reasoning with 3D puzzles and mental rotation apps, improve hand-eye-foot coordination through sports like badminton or football, and stay physically and mentally sharp in the months before your SSB.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'SSB Overview', href: '/ssb', desc: 'Full 5-day process', icon: '📅' },
        { label: 'Medical Examination', href: '/medical', desc: 'Medical standards', icon: '🏥' },
        { label: 'Eligibility', href: '/eligibility', desc: 'Age & education criteria', icon: '✅' },
      ]} />
    </div>
  );
}
