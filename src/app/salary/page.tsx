'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel, StatsRow, Btn } from '@/components/ui/PageShell';

const ranks = [
  { rank: 'Lieutenant', basic: '₹56,100', msp: '₹15,500', level: 'Level 10', inhand: '₹80,000–90,000' },
  { rank: 'Captain', basic: '₹61,300', msp: '₹15,500', level: 'Level 10B', inhand: '₹90,000–1,05,000' },
  { rank: 'Major', basic: '₹69,400', msp: '₹15,500', level: 'Level 11', inhand: '₹1,10,000–1,25,000' },
  { rank: 'Lieutenant Colonel', basic: '₹1,21,200', msp: '₹15,500', level: 'Level 12A', inhand: '₹1,60,000–1,80,000' },
  { rank: 'Colonel', basic: '₹1,30,600', msp: '₹15,500', level: 'Level 13', inhand: '₹1,75,000–2,00,000' },
  { rank: 'Brigadier', basic: '₹1,39,600', msp: '₹15,500', level: 'Level 13A', inhand: '₹1,90,000–2,20,000' },
  { rank: 'Major General', basic: '₹1,44,200', msp: '₹15,500', level: 'Level 14', inhand: '₹2,10,000–2,40,000' },
  { rank: 'Lieutenant General', basic: '₹1,82,200', msp: '₹15,500', level: 'Level 15', inhand: '₹2,60,000–3,00,000' },
  { rank: 'General / COAS', basic: '₹2,50,000 (fixed)', msp: '—', level: 'Level 18', inhand: '₹3,00,000+' },
];

const perks = [
  { icon: '🏠', title: 'Free housing', desc: 'Government accommodation throughout service, or HRA (24–27% of basic) if not availed' },
  { icon: '🏥', title: 'Free medical', desc: 'ECHS covers officer and entire family — parents, spouse, and children' },
  { icon: '🛒', title: 'CSD canteen', desc: 'Subsidised groceries and goods at Canteen Stores Department across India' },
  { icon: '📅', title: '60 days leave', desc: 'Annual earned leave + casual leave — best leave structure in any Indian profession' },
  { icon: '💼', title: 'Pension', desc: 'Defined pension scheme continues after retirement, fully inflation-indexed' },
  { icon: '🛡️', title: 'Group insurance', desc: 'AGIF and DSOP Fund provides substantial financial security to family' },
  { icon: '✈️', title: 'Air travel (LTC)', desc: 'Leave Travel Concession for free/subsidised travel across India' },
  { icon: '🎓', title: "Children's education", desc: 'Education allowance and priority admission in Kendriya Vidyalaya and Sainik Schools' },
  { icon: '🏋️', title: 'Sports & clubs', desc: 'Access to officers mess, swimming pools, golf courses, and sports facilities' },
];

export default function SalaryPage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        h1="NDA officer salary & perks"
        lead="Complete breakdown of pay, allowances, and benefits at every stage of your military career."
        breadcrumbs={[{ label: 'Career', href: '/salary' }, { label: 'Salary & Perks' }]}
      />

      <PageLayout sidebarGroup="career">
        {/* Featured starting salary */}
        <Card style={{ borderLeft: `5px solid ${T.amber}`, marginBottom: 32, background: 'linear-gradient(135deg, #FEF3C7 0%, #fff 60%)' }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 auto' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Cadet stipend during training</div>
              <div style={{ fontSize: 44, fontWeight: 800, color: T.amber, lineHeight: 1, marginBottom: 6 }}>₹56,100</div>
              <div style={{ fontSize: 14, color: T.textMuted }}>per month basic pay</div>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontSize: 14, color: T.text, lineHeight: 1.7, marginBottom: 12 }}>
                During your 3 years at NDA and subsequent pre-commissioning training, you receive ₹56,100 monthly stipend. Food, accommodation, clothing, and equipment are <strong>fully provided by the government</strong>.
              </div>
              <div style={{ fontSize: 14, color: T.slate600, background: '#FEF3C7', borderRadius: 10, padding: '10px 14px' }}>
                💡 After commissioning as <strong>Lieutenant</strong>: Basic ₹56,100 + MSP ₹15,500 + DA + HRA + allowances ≈ <strong>₹80,000–₹95,000 total in-hand</strong>
              </div>
            </div>
          </div>
        </Card>

        <StatsRow stats={[
          { icon: '💰', label: 'Cadet stipend', value: '₹56,100/mo' },
          { icon: '🏠', label: 'Housing', value: 'Free', sub: 'Throughout career' },
          { icon: '🏥', label: 'Medical', value: 'Free', sub: 'Family included' },
          { icon: '📅', label: 'Annual leave', value: '60 days', sub: '+ casual leave' },
        ]} />

        {/* Rank-wise pay table */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Rank-wise pay structure (7th Pay Commission)</SectionLabel>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: T.navyM }}>
                  {['Rank', 'Basic Pay', 'MSP', 'Pay Level', 'Approx in-hand'].map((h, i) => (
                    <th key={i} style={{ color: '#fff', fontWeight: 600, padding: '12px 16px', textAlign: 'left', whiteSpace: 'nowrap', fontSize: 13 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ranks.map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? T.white : T.page }}>
                    <td style={{ padding: '11px 16px', fontWeight: 600, color: T.navyM, borderBottom: `1px solid ${T.border}` }}>{r.rank}</td>
                    <td style={{ padding: '11px 16px', color: T.text, borderBottom: `1px solid ${T.border}` }}>{r.basic}</td>
                    <td style={{ padding: '11px 16px', color: T.text, borderBottom: `1px solid ${T.border}` }}>{r.msp}</td>
                    <td style={{ padding: '11px 16px', color: T.textMuted, borderBottom: `1px solid ${T.border}` }}>{r.level}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 600, color: T.green, borderBottom: `1px solid ${T.border}` }}>{r.inhand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Callout type="info">
          Pay figures are approximate and vary by posting location, allowances drawn, and field vs peace area classification. HRA is 24–27% of basic pay in metro cities.
        </Callout>

        {/* Perks grid */}
        <div style={{ marginTop: 40, marginBottom: 32 }}>
          <SectionLabel>Non-cash benefits & perks</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
            {perks.map((p, i) => (
              <div key={i} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 22px', boxShadow: T.shadow, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: T.text, marginBottom: 4 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Callout type="tip">
          The true value of military compensation lies in non-cash benefits. Free housing, free family healthcare, pension, and subsidised canteen make the effective CTC 2–3× the basic pay figure.
        </Callout>
      </PageLayout>

      <RelatedStrip items={[
        { label: 'Rank Structure', href: '/rank-structure', desc: 'Army, Navy & Air Force ranks', icon: '🎖️' },
        { label: 'NDA Training Life', href: '/training', desc: 'Life at the academy', icon: '🪖' },
        { label: 'What is NDA', href: '/what-is-nda', desc: 'Overview & history', icon: '🏛️' },
      ]} />
    </div>
  );
}
