'use client';
import { useState } from 'react';
import { PageHero, PageLayout, StatsRow, Callout, Card, RelatedStrip, EyebrowTag, Btn, T, SectionLabel } from '@/components/ui/PageShell';

const days = [
  { day: 1, label: 'Screening', desc: 'OIR + PPDT' },
  { day: 2, label: 'Psychology', desc: 'TAT, WAT, SRT, SDT' },
  { day: 3, label: 'GTO Part 1', desc: 'Group Outdoor Tasks' },
  { day: 4, label: 'GTO Part 2 & PI', desc: 'Personal Interview' },
  { day: 5, label: 'Conference', desc: 'Final Results' },
];

const olqs = [
  'Effective Intelligence', 'Reasoning Ability', 'Organising Ability', 'Power of Expression',
  'Social Adaptability', 'Cooperation', 'Sense of Responsibility', 'Initiative',
  'Self Confidence', 'Speed of Decision', 'Ability to Influence', 'Liveliness',
  'Stamina', 'Determination', 'Courage'
];

export default function SSBOverviewPage() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        h1="SSB interview — the 5-day process"
        lead="The Services Selection Board tests your Officer-Like Qualities across 5 intense days."
        breadcrumbs={[{ label: 'SSB', href: '/ssb' }, { label: 'SSB Overview' }]}
      />

      <PageLayout sidebarGroup="ssb">
        <StatsRow stats={[
          { icon: '📅', label: 'Duration', value: '5 days' },
          { icon: '🏠', label: 'Venue', value: 'Army/Navy/AF Centers' },
          { icon: '📊', label: 'Recommendation rate', value: '~4%', sub: 'Out of all who appear' },
          { icon: '🏆', label: 'Total marks', value: '900', sub: 'SSB component' },
        ]} />

        {/* Horizontal stepper */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>The 5-day schedule</SectionLabel>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 16 }}>
            {days.map((d) => (
              <div
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                style={{
                  flex: '0 0 auto', width: 140, cursor: 'pointer',
                  background: activeDay === d.day ? T.navyM : T.white,
                  color: activeDay === d.day ? T.white : T.text,
                  border: `1px solid ${activeDay === d.day ? T.navyM : T.border}`,
                  borderRadius: 16, padding: '16px', boxShadow: activeDay === d.day ? T.shadowMd : T.shadow,
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, color: activeDay === d.day ? '#E0E7FF' : T.textMuted, marginBottom: 4 }}>Day {d.day}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{d.label}</div>
                <div style={{ fontSize: 12, color: activeDay === d.day ? '#C7D2FE' : T.slate500 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Day details */}
        <Card style={{ marginBottom: 32 }}>
          {activeDay === 1 && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>Day 1 — Screening</h2>
              <p style={{ marginBottom: 16 }}>
                <strong>OIR Test:</strong> Officers Intelligence Rating test — verbal and non-verbal reasoning, 2 sets of 50 questions each, time-bound. Tests your mental ability and raw intelligence.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>PPDT:</strong> Picture Perception and Discussion Test — you see a hazy picture for 30 seconds, write a story in 4 minutes, then discuss it in a group. Assesses observation, communication, leadership.
              </p>
              <Callout type="warning">
                Only about 30% of reporting candidates pass the Day 1 screening and proceed further.
              </Callout>
            </div>
          )}
          {activeDay === 2 && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>Day 2 — Psychology</h2>
              <p style={{ marginBottom: 16 }}>
                <strong>TAT (Thematic Apperception Test):</strong> 11 pictures + 1 blank slide. Write a story for each. Tests imagination, personality, and Officer-Like Qualities.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>WAT (Word Association Test):</strong> 60 words shown one by one, 15 seconds each. Write the first sentence that comes to mind.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>SRT (Situation Reaction Test):</strong> 60 practical situations, 30 minutes. Write your immediate reaction to each.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>SDT (Self Description Test):</strong> Describe yourself as seen by: your parents, teachers, friends, yourself, and what you want to be.
              </p>
            </div>
          )}
          {activeDay === 3 && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>Day 3 — GTO Part 1</h2>
              <p style={{ marginBottom: 16 }}>
                <strong>Tasks:</strong> Group Discussion (2 topics), Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette (4-minute talk).
              </p>
              <p>Outdoor activities testing your teamwork, physical endurance, and ability to influence a group.</p>
            </div>
          )}
          {activeDay === 4 && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>Day 4 — PI + GTO Part 2</h2>
              <p style={{ marginBottom: 16 }}>
                <strong>Personal Interview:</strong> 30–60 minutes with an interviewing officer. Covers your background, hobbies, current affairs, defence knowledge, and self-awareness.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Individual Obstacles:</strong> 10 obstacles, 3 minutes. Snake race, Burma bridge, high jump wall, etc.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Command Task:</strong> You are made commander, choose 2 assistants from group, complete a task.
              </p>
            </div>
          )}
          {activeDay === 5 && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>Day 5 — Conference</h2>
              <p style={{ marginBottom: 16 }}>
                All assessors (psychologist, GTO, interviewing officer) meet to discuss each candidate. You are called in briefly. Final recommendation or not-recommended is given the same day.
              </p>
            </div>
          )}
        </Card>

        {/* OLQs */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Officer-Like Qualities (OLQs)</SectionLabel>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
            {olqs.map(q => (
              <span key={q} style={{ background: T.white, border: `1px solid ${T.border}`, padding: '8px 16px', borderRadius: 20, fontSize: 13, fontWeight: 500, color: T.text, boxShadow: T.shadow }}>
                {q}
              </span>
            ))}
          </div>
          <Callout type="info">
            OLQs cannot be faked — they are observed consistently across 5 days by multiple assessors. The best preparation is genuine personality development.
          </Callout>
        </div>

        {/* Key stat card */}
        <Card style={{ background: T.navy, color: T.white, textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Only 1 in 25 candidates get recommended.</h2>
          <Btn href="/success-stories" variant="secondary" style={{ borderColor: T.white, color: T.white }}>Read success stories →</Btn>
        </Card>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Psychology Tests', href: '/ssb/psychology', desc: 'TAT, WAT, SRT & SDT', icon: '🧠' },
        { label: 'GTO Tasks', href: '/ssb/gto', desc: 'Group outdoor tasks', icon: '🏃' },
        { label: 'Personal Interview', href: '/ssb/personal-interview', desc: 'PI prep guide', icon: '💬' },
      ]} />
    </div>
  );
}
