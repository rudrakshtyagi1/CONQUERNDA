'use client';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel } from '@/components/ui/PageShell';

const topics = [
  { num: 1, topic: 'Family & background', detail: 'Relationship with parents and siblings, family income, responsibilities at home.', badge: 'Tests rootedness' },
  { num: 2, topic: 'Academics & sports', detail: 'Grades, favourite/least favourite subjects, sports played, positions of responsibility held.', badge: 'Tests discipline' },
  { num: 3, topic: 'Current affairs', detail: 'National and international news of the last 6 months, India\'s foreign relations, and defence updates.', badge: 'Tests awareness' },
  { num: 4, topic: 'Defence knowledge', detail: 'Ranks, commands, weapons, and recent acquisitions of the service you are applying for.', badge: 'Tests motivation' },
  { num: 5, topic: 'Why Armed Forces?', detail: 'Your genuine reason for wanting to serve — not a scripted answer. Must match your PIQ.', badge: 'Tests sincerity' },
  { num: 6, topic: 'Strengths & weaknesses', detail: 'Be specific and honest. Back each point with a real-life example.', badge: 'Tests self-awareness' },
];

const questions = [
  { q: 'Why do you want to join the Defence Forces?', hint: 'Be personal and genuine. Avoid clichés like "I want to serve the nation." Cite a specific formative moment.' },
  { q: 'What if you are not recommended this time?', hint: 'Show resilience without arrogance. You will try again and work on specific weaknesses — name them.' },
  { q: 'Tell me your 3 strengths and 3 weaknesses.', hint: 'Strengths backed with examples. Weaknesses must be real — and show a plan to improve them.' },
  { q: 'Who is your role model and why?', hint: 'Can be a family member. Explain the specific qualities you admire and want to emulate as an officer.' },
  { q: 'Tell me about a time you faced a difficult challenge.', hint: 'Use the STAR format: Situation → Task → Action → Result. Keep it crisp and honest.' },
  { q: 'How do you spend your pocket money?', hint: 'Shows financial responsibility and priorities. Mention savings and any giving-back habits.' },
];

const prepSteps = [
  { num: '01', title: 'Fill the PIQ carefully', desc: 'Everything you write in the Personal Information Questionnaire will be questioned. Think twice before writing each entry.' },
  { num: '02', title: 'Know yourself deeply', desc: 'Spend 2–3 hours writing about yourself — strengths, weaknesses, values, failures, achievements. Surprises in the PI happen when you don\'t know yourself.' },
  { num: '03', title: 'Read defence news daily', desc: '15 minutes of defence-specific news daily for 3 months before your SSB. Know the CDS, all Service Chiefs, and major current acquisitions.' },
  { num: '04', title: 'Practice speaking clearly', desc: 'Record yourself answering mock PI questions. Your tone, pace, and clarity under pressure matters as much as the content.' },
];

export default function PersonalInterviewPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="SSB Day 5"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="Personal interview"
        lead="30–60 minutes of direct, honest conversation that determines if you are officer material."
        breadcrumbs={[{ label: 'SSB', href: '/ssb' }, { label: 'Personal Interview' }]}
        stats={[
          { label: 'Duration', value: '30–60 min' },
          { label: 'Day', value: 'Day 5' },
          { label: 'Conducted by', value: 'Board President' },
        ]}
      />

      <PageLayout sidebarGroup="ssb">

        <Card style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 12 }}>How the interview works</h2>
          <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7, marginBottom: 10 }}>
            The Personal Interview revolves entirely around your <strong>PIQ (Personal Information Questionnaire)</strong> form, which you fill on Day 1. The Interviewing Officer — usually the President or Deputy President — checks if the person in front of them matches the personality profile built by the Psychologist and GTO.
          </p>
          <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>
            Assessors are not looking for perfect answers. They are looking for <strong>authenticity, self-awareness, and pressure handling</strong>.
          </p>
        </Card>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 40 }}>

          {/* Common topics */}
          <div>
            <SectionLabel>Common interview topics</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {topics.map(t => (
                <div key={t.num} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 10, padding: '14px 18px', boxShadow: T.shadow, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#EEF2FF', color: T.navyM, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{t.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <h4 style={{ fontWeight: 600, fontSize: 14, color: T.text }}>{t.topic}</h4>
                      <span style={{ fontSize: 11, fontWeight: 600, color: T.navyM, background: '#EEF2FF', padding: '2px 8px', borderRadius: 20, whiteSpace: 'nowrap' }}>{t.badge}</span>
                    </div>
                    <p style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.5 }}>{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common questions */}
          <div>
            <SectionLabel>Common questions asked</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {questions.map((item, i) => (
                <div key={i} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 10, padding: '16px 18px', boxShadow: T.shadow }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 32, color: '#EEF2FF', fontWeight: 900, lineHeight: 1, flexShrink: 0, marginTop: -4 }}>"</span>
                    <p style={{ fontSize: 14, fontStyle: 'italic', color: T.text, lineHeight: 1.5, fontWeight: 500 }}>{item.q}</p>
                  </div>
                  <div style={{ borderLeft: `3px solid ${T.navyM}`, background: '#EEF2FF', padding: '6px 10px', borderRadius: '0 6px 6px 0', fontSize: 13, color: T.slate600 }}>
                    💡 {item.hint}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Golden rule — amber warning callout */}
        <Callout type="warning" style={{ marginBottom: 40 }}>
          <div>
            <strong style={{ display: 'block', marginBottom: 4 }}>The golden rule — never lie in the PI.</strong>
            The Interviewing Officer is highly trained to catch bluffs and inconsistencies. If you don't know an answer, say: <em>"Sorry sir, I don't know, but I will find out."</em> Honesty is always respected over a confident wrong answer.
          </div>
        </Callout>

        {/* How to prepare */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>How to prepare for the PI</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {prepSteps.map(s => (
              <div key={s.num} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#EEF2FF', marginBottom: 8, lineHeight: 1 }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: T.text }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'SSB Overview', href: '/ssb', desc: 'Full 5-day process', icon: '📅' },
        { label: 'GTO Tasks', href: '/ssb/gto', desc: 'Group outdoor tasks', icon: '🏃' },
        { label: 'Defence News', href: '/defence-news', desc: 'Stay current for PI', icon: '📰' },
      ]} />
    </div>
  );
}
