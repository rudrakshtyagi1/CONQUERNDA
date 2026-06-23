'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel, Table } from '@/components/ui/PageShell';

const fitnessStandards = [
  { test: '1.6 km run', target: 'Under 7:30 min', beginner: '12:00 min', tip: 'Start with walk-jog intervals, reduce by 30s each week', color: '#16A34A' },
  { test: 'Push-ups', target: '40 in 2 min', beginner: '15 reps', tip: 'Perfect form first, then speed — chest to floor each rep', color: '#16A34A' },
  { test: 'Sit-ups', target: '50 in 2 min', beginner: '20 reps', tip: 'Core strength is vital for all GTO tasks', color: '#D97706' },
  { test: 'Pull-ups', target: '10 reps', beginner: '2 reps', tip: 'Start with negatives and band-assisted reps', color: '#DC2626' },
  { test: 'Swimming', target: '200m unaided', beginner: 'Non-swimmer', tip: 'Learn now — NDA requires water confidence', color: '#DC2626' },
];

const weekPlan = [
  { day: 'Monday', abbr: 'Mon', focus: 'Upper body + run', exercises: ['5 km run at easy pace', '3 × 15 push-ups', '3 × 10 dips', '3 × 8 pull-ups'] },
  { day: 'Tuesday', abbr: 'Tue', focus: 'Core + flexibility', exercises: ['4 km tempo run', '3 × 20 sit-ups', '3 × 30s plank', '15 min full-body stretching'] },
  { day: 'Wednesday', abbr: 'Wed', focus: 'Active recovery', exercises: ['30 min brisk walk', 'Yoga or stretching', 'Swimming (if possible)', 'Light mobility work'] },
  { day: 'Thursday', abbr: 'Thu', focus: 'Lower body + run', exercises: ['5 km run at push pace', '3 × 20 squats', '3 × 15 lunges', '3 × 20 calf raises'] },
  { day: 'Friday', abbr: 'Fri', focus: 'Full body circuit', exercises: ['10 rounds: 10 push-ups + 10 squats + 10 sit-ups', '5 km easy run', 'Pull-up practice'] },
  { day: 'Saturday', abbr: 'Sat', focus: 'Long run + obstacles', exercises: ['8–10 km long run', 'Obstacle-style movements', 'Rope climbing if available'] },
  { day: 'Sunday', abbr: 'Sun', focus: 'Rest / light activity', exercises: ['Complete rest or 30-min leisure swim', 'Foam rolling and massage', 'Plan next week targets'] },
];

const phases = [
  { phase: 'Weeks 1–4', title: 'Foundation', color: '#16A34A', items: ['3 km run daily', '10 push-ups × 3 sets', '5 pull-ups × 3 sets', 'Core basics'] },
  { phase: 'Weeks 5–8', title: 'Build', color: '#1D3FAB', items: ['5 km run daily', '20 push-ups × 4 sets', '8 pull-ups × 3 sets', 'Circuit training 3×/week'] },
  { phase: 'Weeks 9–12', title: 'Peak', color: '#DC2626', items: ['8 km run 3×/week', '35 push-ups × 4 sets', '10 pull-ups × 4 sets', 'Full NDA fitness test simulation'] },
];

export default function FitnessPage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="Physical preparation"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="Fitness tracker"
        lead="Physical fitness is non-negotiable for NDA. Build the body the forces demand — systematically."
        breadcrumbs={[{ label: 'Preparation', href: '/roadmap' }, { label: 'Fitness Tracker' }]}
        stats={[
          { label: 'Min run target', value: '7:30' },
          { label: 'Push-up target', value: '40 reps' },
          { label: 'Pull-up target', value: '10 reps' },
          { label: 'Programme length', value: '12 weeks' },
        ]}
      />

      <PageLayout sidebarGroup="preparation">

        {/* Benchmarks table */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Physical benchmarks</SectionLabel>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#F7F8FC', borderBottom: `1px solid ${T.border}` }}>
                  {['Test', 'NDA target', 'Beginner starts at', 'Pro tip'].map((h, i) => (
                    <th key={i} style={{ color: T.textMuted, fontWeight: 500, padding: '12px 16px', textAlign: 'left', fontSize: 13 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fitnessStandards.map((s, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? T.white : '#FAFAFA', borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: T.text }}>{s.test}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontWeight: 700, color: s.color }}>{s.target}</span>
                    </td>
                    <td style={{ padding: '12px 16px', color: T.textMuted }}>{s.beginner}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ borderLeft: `3px solid ${T.navyM}`, background: '#EEF2FF', padding: '6px 10px', borderRadius: '0 6px 6px 0', fontSize: 13, color: T.text }}>
                        💡 {s.tip}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekly plan */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>7-day training schedule</SectionLabel>
          <Card>
            {/* Day tabs */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
              {weekPlan.map((d, i) => (
                <button key={d.day} onClick={() => setActiveDay(i)} style={{
                  padding: '8px 16px', borderRadius: 20, cursor: 'pointer', fontFamily: 'inherit',
                  fontWeight: 600, fontSize: 13, transition: 'all .15s',
                  background: activeDay === i ? T.navyM : T.white,
                  color: activeDay === i ? '#fff' : T.slate600,
                  border: `1.5px solid ${activeDay === i ? T.navyM : T.border}`,
                }}>
                  {d.abbr}
                </button>
              ))}
            </div>
            {/* Active day content */}
            <div style={{ background: T.page, borderRadius: 10, padding: 20, border: `1px solid ${T.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: T.text }}>{weekPlan[activeDay].day}</h3>
                <span style={{ fontSize: 12, fontWeight: 600, background: T.navyM, color: '#fff', padding: '3px 12px', borderRadius: 20 }}>
                  {weekPlan[activeDay].focus}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {weekPlan[activeDay].exercises.map((ex, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: T.slate600 }}>
                    <span style={{ width: 24, height: 24, borderRadius: '50%', background: T.navyM, color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* Progressive overload */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>12-week progressive overload plan</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {phases.map(p => (
              <div key={p.phase} style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: `4px solid ${p.color}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, color: p.color, background: p.color + '18', borderRadius: 20, padding: '3px 10px', marginBottom: 8 }}>{p.phase}</span>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 14, color: T.text }}>{p.title} phase</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: T.slate600 }}>
                      <span style={{ color: p.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Callout type="tip">
          <strong>Consistency beats intensity.</strong> 45 minutes daily for 6 months is infinitely better than 3 hours for 2 weeks. Start slow, build progressively, and never skip rest days.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'SSB Overview', href: '/ssb', desc: 'How the 5-day process works', icon: '📅' },
        { label: 'Study Roadmap', href: '/roadmap', desc: 'Plan your full preparation', icon: '🗺️' },
        { label: 'Mock Tests', href: '/mock-tests', desc: 'Practice papers', icon: '✏️' },
      ]} />
    </div>
  );
}
