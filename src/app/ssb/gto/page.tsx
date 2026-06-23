'use client';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel } from '@/components/ui/PageShell';

const tasks = [
  { num: 1, name: 'Group Discussion (GD)', duration: '~20 min', desc: 'Two topics discussed back-to-back — one current affairs, one social or abstract. No conclusion is expected.', tip: 'Be logical, listen actively, and do not dominate. Bring in others who have not spoken.' },
  { num: 2, name: 'Group Planning Exercise (GPE)', duration: '~45 min', desc: 'A military or disaster scenario on a 3D model. Write an individual plan, then form a final group plan.', tip: 'Prioritise lives over material. Your individual plan and group plan should be coherent.' },
  { num: 3, name: 'Progressive Group Task (PGT)', duration: '~30 min', desc: 'Navigate 4 obstacle lines without touching the ground using planks, ropes, and barrels. Difficulty increases.', tip: 'Think cantilever solutions quickly. Help teammates — individual brilliance is secondary.' },
  { num: 4, name: 'Half Group Task (HGT)', duration: '~20 min', desc: 'Same as PGT but the group is halved (4–5 members). Gives the GTO a closer look at each individual.', tip: 'Show practical intelligence. This is your best chance to stand out as a contributor.' },
  { num: 5, name: 'Individual Obstacles (IO)', duration: '~3 min', desc: 'Complete 10 physical obstacles in 3 minutes. Obstacles are numbered 1–10 by difficulty and marks.', tip: 'Stamina and fearlessness matter. Attempt higher-numbered obstacles first if possible.' },
  { num: 6, name: 'Command Task (CT)', duration: '~15 min', desc: 'You are made the commander and choose 2 subordinates from your group to help you solve an obstacle.', tip: 'Treat subordinates with respect and brief them clearly. The GTO watches leadership style.' },
];

const qualities = [
  { icon: '🚀', title: 'Initiative', desc: 'Taking the lead without waiting to be told. NDA officers must act under uncertainty.' },
  { icon: '🤝', title: 'Cooperation', desc: 'Working effectively as part of a team. Self before team is a red flag for assessors.' },
  { icon: '💪', title: 'Physical courage', desc: 'Willingness to attempt obstacles and take calculated risks.' },
  { icon: '🗣️', title: 'Communication', desc: 'Expressing ideas clearly and listening to others — equally important.' },
];

export default function GTOPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="SSB Day 3 & 4"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="GTO tasks"
        lead="Group Testing Officer tasks assess physical fitness, mental agility, teamwork, and leadership in real group environments."
        breadcrumbs={[{ label: 'SSB', href: '/ssb' }, { label: 'GTO Tasks' }]}
        stats={[
          { label: 'Days', value: 'Day 3 & 4' },
          { label: 'Group size', value: '8–10 cadets' },
          { label: 'Total tasks', value: '7' },
        ]}
      />

      <PageLayout sidebarGroup="ssb">

        {/* Tasks 1–6 grid */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>All 7 GTO tasks</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginBottom: 20 }}>
            {tasks.map(task => (
              <div key={task.num} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.navyM, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{task.num}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: T.text, marginBottom: 2 }}>{task.name}</h3>
                    <span style={{ fontSize: 12, color: T.textMuted }}>{task.duration}</span>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.6, marginBottom: 12, flex: 1 }}>{task.desc}</p>
                <div style={{ borderLeft: `3px solid ${T.navyM}`, background: '#EEF2FF', padding: '8px 12px', borderRadius: '0 6px 6px 0', fontSize: 13, color: T.text }}>
                  💡 {task.tip}
                </div>
              </div>
            ))}
          </div>

          {/* Task 7 — FGT */}
          <div style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: `4px solid ${T.amber}`, borderRadius: 12, padding: '24px 28px', boxShadow: T.shadow }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.amber, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>7</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: T.text }}>Final Group Task (FGT)</h3>
                <span style={{ fontSize: 12, fontWeight: 600, color: T.amber, background: T.amberBg, padding: '2px 10px', borderRadius: 20 }}>Culminating task — most visible</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.6, marginBottom: 12 }}>Also known as the Snake Race or Group Obstacle Race. The entire group carries a heavy canvas tube (the "snake") through 6 obstacles. You compete against other groups. The GTO checks enthusiasm, team spirit, and rule compliance under fatigue.</p>
            <Callout type="warning" style={{ margin: 0 }}>
              This is the final test — energy and team spirit are everything. Give 100% even if you are exhausted. Assessors specifically watch candidates who slow down or disengage here.
            </Callout>
          </div>
        </div>

        {/* What GTO assesses */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>What the GTO is assessing</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {qualities.map(q => (
              <Card key={q.title}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{q.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: T.text, marginBottom: 6 }}>{q.title}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{q.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <Callout type="tip">
          The GTO never tells you the "correct" method for an obstacle. There are multiple valid solutions. The assessor watches <em>how</em> you behave, not whether you succeed.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'SSB Overview', href: '/ssb', desc: 'Full 5-day process', icon: '📅' },
        { label: 'Psychology Tests', href: '/ssb/psychology', desc: 'TAT, WAT, SRT, SDT', icon: '🧠' },
        { label: 'Personal Interview', href: '/ssb/personal-interview', desc: 'PI preparation', icon: '💬' },
      ]} />
    </div>
  );
}
