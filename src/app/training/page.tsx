'use client';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel } from '@/components/ui/PageShell';

const phases = [
  { num: 1, title: 'Phase I — Basic training (6 months)', items: ['Introduction to NDA life, discipline, and military ethos', 'Basic drill, weapon handling, map reading, and field craft', 'Physical conditioning: swimming, obstacle courses, cross-country', 'Academic foundation: Maths, Physics, English, General Studies', 'Equitation (horse riding) — a unique NDA tradition'] },
  { num: 2, title: 'Phase II — Academic year 1 (1 year)', items: ['Formal academic curriculum: BSc/BA degree (JNU-affiliated)', 'Service-specific subjects: Navigation (Navy), Aero (Air Force)', 'Summer camp and adventure training: trekking, rafting', 'Sports: mandatory participation in team and individual sports', 'Leadership begins — Junior Duty Cadet roles'] },
  { num: 3, title: 'Phase III — Academic year 2 (1 year)', items: ['Advanced academics — electives and specialisation', 'Cadet Exchange Programs with foreign military academies', 'NDA Cross-Country Run — 25 km endurance test', 'Drill competitions, cultural events, and social activities', 'Wing-specific flying/sailing/adventure exposure'] },
  { num: 4, title: 'Phase IV — Graduating term (6 months)', items: ['Senior leadership roles — appointment as course senior', 'Final qualifying exams for BSc/BA from JNU', 'Overseas naval cruise for Navy cadets', 'The iconic Passing-Out Parade (POP) at Khadakwasla', 'Commission received, posted to service academies'] },
];

const traditions = [
  { icon: '⚔️', name: 'Sword of Honour', desc: 'Awarded to the overall best cadet of the passing-out batch — the highest individual honour at NDA.' },
  { icon: '🏊', name: 'Swimming test', desc: 'Every cadet must clear a 200-metre swim test. Water courage is a core military skill.' },
  { icon: '🍽️', name: 'Messing traditions', desc: 'Formal dinner nights with specific dress codes — silver cutlery, toasts, and strict protocol.' },
  { icon: '🐎', name: 'Equitation', desc: 'All cadets learn horse riding. NDA is one of the few academies globally to maintain this tradition.' },
  { icon: '🚩', name: "Chief's Banner", desc: 'Awarded to the best squadron in drill, sports, and academics during the POP.' },
  { icon: '🎵', name: 'The POP March', desc: 'The Passing-Out Parade marches to Auld Lang Syne — an emotional farewell to cadet life.' },
];

const schedule = [
  { time: '05:30', activity: 'Reveille — bugle call, cadet wakes up', group: 'Morning' },
  { time: '05:45', activity: 'PT — drill square or cross-country run', group: 'Morning' },
  { time: '07:00', activity: 'Ablutions and breakfast in the mess', group: 'Morning' },
  { time: '08:00–13:00', activity: 'Academic periods — 6 × 50-minute classes', group: 'Morning' },
  { time: '13:00', activity: 'Lunch and rest period', group: 'Afternoon' },
  { time: '14:30–16:30', activity: 'Sports — compulsory participation in one sport', group: 'Afternoon' },
  { time: '16:30–18:30', activity: 'Study period or wing-specific activities', group: 'Afternoon' },
  { time: '19:00', activity: 'Dinner in the officers mess', group: 'Evening' },
  { time: '20:00–21:30', activity: 'Self-study period', group: 'Evening' },
  { time: '22:00', activity: 'Lights Out', group: 'Evening' },
];

const groups = ['Morning', 'Afternoon', 'Evening'];
const groupColors: Record<string, string> = { Morning: '#1D3FAB', Afternoon: '#D97706', Evening: '#6B3FA0' };
const groupBg: Record<string, string> = { Morning: '#EEF2FF', Afternoon: '#FEF3C7', Evening: '#F3E8FF' };

export default function TrainingPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="Life at the academy"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="NDA training life"
        lead="3 years that transform a civilian into a military officer. Inside the NDA experience."
        breadcrumbs={[{ label: 'Career', href: '/salary' }, { label: 'NDA Training Life' }]}
        stats={[
          { label: 'Total training', value: '3 years' },
          { label: 'Squadrons', value: '6' },
          { label: 'Battalions', value: '3' },
          { label: 'Degree', value: 'JNU BSc/BA' },
        ]}
      />

      <PageLayout sidebarGroup="career">

        {/* 4 Training phases */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Training timeline</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {phases.map(p => (
              <div key={p.num} style={{ background: T.white, border: `1px solid ${T.border}`, borderLeft: `4px solid ${T.navyM}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', boxShadow: T.shadow }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.navyM, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{p.num}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: T.text }}>{p.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 44 }}>
                  {p.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: T.slate600 }}>
                      <span style={{ color: T.navyM, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Daily schedule timeline */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>A typical day at NDA</SectionLabel>
          <Card>
            {groups.map(g => (
              <div key={g} style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: groupColors[g], background: groupBg[g], display: 'inline-block', padding: '3px 12px', borderRadius: 20, marginBottom: 12 }}>{g}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {schedule.filter(s => s.group === g).map((s, i, arr) => (
                    <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', paddingBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? `1px solid ${T.border}` : 'none', marginBottom: i < arr.length - 1 ? 12 : 0 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: groupColors[g], background: groupBg[g], padding: '4px 10px', borderRadius: 20, flexShrink: 0, fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{s.time}</span>
                      <span style={{ fontSize: 14, color: T.text, paddingTop: 4 }}>{s.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Traditions grid */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Iconic NDA traditions</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {traditions.map(t => (
              <div key={t.name} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: T.text, marginBottom: 6 }}>{t.name}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Callout type="tip">
          The Passing-Out Parade is one of India's most celebrated military ceremonies. Parents and family are invited. Topping your batch earns the Sword of Honour — the most coveted prize in the armed forces.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Rank Structure', href: '/rank-structure', desc: 'Post-commission career path', icon: '⭐' },
        { label: 'SSB Overview', href: '/ssb', desc: 'Selection process', icon: '📅' },
        { label: 'Salary & Perks', href: '/salary', desc: 'Pay and benefits', icon: '💰' },
      ]} />
    </div>
  );
}
