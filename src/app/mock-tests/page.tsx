'use client';
import { useState } from 'react';
import { PageHero, PageLayout, StatsRow, Callout, Card, RelatedStrip, Btn, T, SectionLabel } from '@/components/ui/PageShell';

const tests = [
  { id: 1, name: 'Full Mock Test #1', tags: ['Maths + GAT', '5 hrs', '270 Qs', '900 marks'], difficulty: 'Medium', status: 'available' },
  { id: 2, name: 'Full Mock Test #2', tags: ['Maths + GAT', '5 hrs', '270 Qs', '900 marks'], difficulty: 'Hard', status: 'available' },
  { id: 3, name: 'Full Mock Test #3', tags: ['Maths + GAT', '5 hrs', '270 Qs', '900 marks'], difficulty: 'Easy', status: 'available' },
  { id: 4, name: 'Mathematics Only #1', tags: ['Maths', '2.5 hrs', '120 Qs', '300 marks'], difficulty: 'Medium', status: 'available' },
  { id: 5, name: 'GAT Practice #1', tags: ['GAT', '2.5 hrs', '150 Qs', '600 marks'], difficulty: 'Easy', status: 'coming-soon' },
  { id: 6, name: 'Full Mock Test #4', tags: ['Maths + GAT', '5 hrs', '270 Qs', '900 marks'], difficulty: 'Hard', status: 'coming-soon' },
];

const diffColor: Record<string, string> = { Easy: '#16A34A', Medium: '#D97706', Hard: '#DC2626' };
const diffBg: Record<string, string> = { Easy: '#DCFCE7', Medium: '#FEF3C7', Hard: '#FEE2E2' };

export default function MockTestsPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="BETA"
        badgeBg="#DBEAFE"
        badgeColor="#1D4ED8"
        h1="NDA mock tests"
        lead="Full-length timed tests modelled on the real UPSC NDA exam pattern."
        breadcrumbs={[{ label: 'Preparation', href: '/roadmap' }, { label: 'Mock Tests' }]}
      />

      <PageLayout sidebarGroup="preparation">
        {/* How it works */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>How it works</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { num: '01', title: 'Choose a test', desc: 'Select from Full Mock, Subject-wise, or Chapter tests based on your preparation stage.' },
              { num: '02', title: 'Attempt under exam conditions', desc: 'Set a timer, avoid distractions, attempt in one sitting like the real exam.' },
              { num: '03', title: 'Analyse & improve', desc: 'Review your answers, study explanations, track weak areas in your performance dashboard.' },
            ].map(step => (
              <div key={step.num} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 16, padding: '24px', boxShadow: T.shadow }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#EEF2FF', marginBottom: 8 }}>{step.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tests grid */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Available tests</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {tests.map(test => (
              <div key={test.id} style={{
                background: test.status === 'coming-soon' ? T.page : T.white,
                border: `1px solid ${T.border}`,
                borderRadius: 16, padding: '24px',
                boxShadow: test.status === 'available' ? T.shadow : 'none',
                opacity: test.status === 'coming-soon' ? 0.7 : 1,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: T.text }}>{test.name}</h3>
                  <span style={{ fontSize: 12, fontWeight: 700, color: diffColor[test.difficulty], background: diffBg[test.difficulty], padding: '3px 10px', borderRadius: 20 }}>
                    {test.difficulty}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                  {test.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 12, background: T.page, border: `1px solid ${T.border}`, color: T.textMuted, padding: '4px 10px', borderRadius: 20 }}>{tag}</span>
                  ))}
                </div>
                {test.status === 'available' ? (
                  <Btn href={`/mock-tests/${test.id}`} variant="primary" style={{ width: '100%', textAlign: 'center' }}>Start test →</Btn>
                ) : (
                  <div style={{ fontSize: 14, color: T.textMuted, fontStyle: 'italic', textAlign: 'center', padding: '10px', background: T.page, borderRadius: 8 }}>Coming soon</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Performance dashboard */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Your performance (sign in to track)</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 20 }}>
            {[
              { label: 'Tests attempted', value: '0' },
              { label: 'Average score', value: '—' },
              { label: 'Best score', value: '—' },
              { label: 'Accuracy', value: '—' },
            ].map(stat => (
              <div key={stat.label} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px', textAlign: 'center', boxShadow: T.shadow }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: T.navyM, marginBottom: 6 }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: T.textMuted }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <Callout type="info">
            Sign in to save your test scores, track improvement, and unlock advanced analytics.
          </Callout>
        </div>

        <Callout type="tip">
          <strong>Exam simulation tip:</strong> Attempt each mock test under strict exam conditions — no phone, no breaks, 2.5 hours per paper. This trains your concentration for the real exam day.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Previous Papers', href: '/previous-year-papers', desc: 'Real UPSC papers', icon: '📄' },
        { label: 'Syllabus', href: '/syllabus', desc: 'Know what to study', icon: '📚' },
        { label: 'Cutoff Analysis', href: '/cutoff-analysis', desc: 'Target scores', icon: '📈' },
      ]} />
    </div>
  );
}
