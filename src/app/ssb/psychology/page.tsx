'use client';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T } from '@/components/ui/PageShell';

export default function PsychologyTestsPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg="#EEF2FF"
        h1="SSB psychology tests"
        lead="TAT, WAT, SRT and SDT — understand what each test assesses and how to prepare."
        breadcrumbs={[{ label: 'SSB', href: '/ssb' }, { label: 'Psychology Tests' }]}
      />

      <PageLayout sidebarGroup="ssb">
        
        {/* TAT */}
        <Card style={{ marginBottom: 32, borderTop: `4px solid ${T.navy}` }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: T.navy, marginBottom: 12 }}>TAT — Thematic Apperception Test</h2>
          <div style={{ marginBottom: 16, fontSize: 14, color: T.text, lineHeight: 1.6 }}>
            <strong>What it is:</strong> 12 pictures (11 with scenes + 1 blank) shown for 30 seconds each. Write a complete story for each within 4 minutes.
            <br /><strong>What is assessed:</strong> Imagination, creativity, positive attitude, leadership potential, Officer-Like Qualities.
            <br /><strong>Duration:</strong> 12 × 4 minutes = ~48 minutes.
          </div>
          <blockquote style={{ borderLeft: `4px solid ${T.amber}`, margin: '0 0 20px 0', padding: '12px 16px', background: T.amberBg, borderRadius: '0 8px 8px 0', fontSize: 14, fontStyle: 'italic', color: T.slate600 }}>
            Example prompt: 'Picture shows a young man in uniform standing near a jeep in a rural area...'
          </blockquote>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Preparation Tips:</h3>
          <ol style={{ paddingLeft: 20, fontSize: 14, color: T.slate600, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Always have a clear hero in your story — they should take initiative and solve the problem.</li>
            <li>Keep stories positive — the hero succeeds even if obstacles exist.</li>
            <li>Show teamwork, leadership, and social awareness in your stories.</li>
            <li>Avoid negative endings — no deaths, failures, or unresolved conflicts.</li>
            <li>Write in simple, clear language — examiners read hundreds of sheets.</li>
          </ol>
        </Card>

        {/* WAT */}
        <Card style={{ marginBottom: 32, borderTop: `4px solid #059669` }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#059669', marginBottom: 12 }}>WAT — Word Association Test</h2>
          <div style={{ marginBottom: 16, fontSize: 14, color: T.text, lineHeight: 1.6 }}>
            <strong>What it is:</strong> 60 stimulus words flashed on screen, one every 15 seconds. Write the first meaningful sentence that comes to your mind.
            <br /><strong>What is assessed:</strong> Subconscious personality, positive thinking, vocabulary, speed of thought.
            <br /><strong>Duration:</strong> 60 × 15 seconds = 15 minutes.
          </div>
          <blockquote style={{ borderLeft: `4px solid ${T.amber}`, margin: '0 0 20px 0', padding: '12px 16px', background: T.amberBg, borderRadius: '0 8px 8px 0', fontSize: 14, fontStyle: 'italic', color: T.slate600 }}>
            Example: Word: 'LEADER' → Your response: 'A good leader puts the team's mission above personal comfort.'
          </blockquote>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Preparation Tips:</h3>
          <ol style={{ paddingLeft: 20, fontSize: 14, color: T.slate600, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Respond instantly — don't overthink. Your first instinct reflects your real personality.</li>
            <li>Write complete sentences, not just one word.</li>
            <li>Keep a positive, action-oriented tone.</li>
            <li>Avoid clichés like 'honesty is the best policy'.</li>
            <li>Practice 30 words daily in timed conditions.</li>
          </ol>
        </Card>

        {/* SRT */}
        <Card style={{ marginBottom: 32, borderTop: `4px solid #D97706` }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#D97706', marginBottom: 12 }}>SRT — Situation Reaction Test</h2>
          <div style={{ marginBottom: 16, fontSize: 14, color: T.text, lineHeight: 1.6 }}>
            <strong>What it is:</strong> 60 practical situations described in a booklet. Write your immediate reaction to each. 30 minutes total.
            <br /><strong>What is assessed:</strong> Practical intelligence, presence of mind, social responsibility, leadership under pressure.
            <br /><strong>Duration:</strong> 30 minutes (30 seconds per situation).
          </div>
          <blockquote style={{ borderLeft: `4px solid ${T.amber}`, margin: '0 0 20px 0', padding: '12px 16px', background: T.amberBg, borderRadius: '0 8px 8px 0', fontSize: 14, fontStyle: 'italic', color: T.slate600 }}>
            Example: 'Situation: You are walking home and see a house on fire with people trapped inside. You...' → 'Check for fire extinguisher, call 112, alert neighbours, help evacuate calmly.'
          </blockquote>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Preparation Tips:</h3>
          <ol style={{ paddingLeft: 20, fontSize: 14, color: T.slate600, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Be practical and action-oriented — not just emotional.</li>
            <li>Think in terms of what a responsible, calm, resourceful officer would do.</li>
            <li>Write at least 2–3 concrete actions per situation.</li>
            <li>Avoid illegal or self-harm responses.</li>
            <li>Speed matters — practice with a timer.</li>
          </ol>
        </Card>

        {/* SDT */}
        <Card style={{ marginBottom: 32, borderTop: `4px solid #7C3AED` }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#7C3AED', marginBottom: 12 }}>SDT — Self Description Test</h2>
          <div style={{ marginBottom: 16, fontSize: 14, color: T.text, lineHeight: 1.6 }}>
            <strong>What it is:</strong> Write what 5 different people say about you — Parents, Teachers, Friends, yourself, and what you want to be.
            <br /><strong>What is assessed:</strong> Self-awareness, consistency of personality, realism, aspirational thinking.
            <br /><strong>Duration:</strong> ~15–20 minutes.
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Preparation Tips:</h3>
          <ol style={{ paddingLeft: 20, fontSize: 14, color: T.slate600, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Be honest — inconsistency between SDT and your interview answers is a red flag.</li>
            <li>Show awareness of your weaknesses and a plan to improve them.</li>
            <li>Each description should feel distinct — parents notice different things than friends.</li>
            <li>Your 'ideal self' section should align with officer qualities.</li>
            <li>Practice writing SDT weekly and compare with your actual behavior.</li>
          </ol>
        </Card>

        <Callout type="tip">
          All 4 tests are cross-referenced by the psychologist. Inconsistency across tests is the most common reason for not being recommended.
        </Callout>

        <Callout type="info" style={{ marginTop: 16 }}>
          There are no model answers for psychology tests. Assessors look at patterns across all 4 tests to build a personality profile.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'SSB Overview', href: '/ssb', desc: '5-day process', icon: '📅' },
        { label: 'GTO Tasks', href: '/ssb/gto', desc: 'Outdoor tasks guide', icon: '🏃' },
        { label: 'Personal Interview', href: '/ssb/personal-interview', desc: 'PI prep', icon: '💬' },
      ]} />
    </div>
  );
}
