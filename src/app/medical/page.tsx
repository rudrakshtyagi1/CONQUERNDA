'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel, StatsRow } from '@/components/ui/PageShell';

const tabs = [
  { id: 'general', label: 'General physical', items: [
    { name: 'Height & weight', detail: 'Army/Navy minimum 157 cm (male), AF minimum 162.5 cm. Weight proportionate per standard tables. BMI calculated.' },
    { name: 'Chest measurement', detail: 'Minimum 77 cm with at least 5 cm expansion on full inspiration. Flat or barrel chest is disqualifying.' },
    { name: 'Skin examination', detail: 'Tattoos not permitted on face, neck, or hands. Skin diseases like psoriasis, eczema, keloids reviewed.' },
    { name: 'Teeth & oral', detail: 'Minimum 14 dental points required. Decayed or missing teeth must be filled or replaced before the exam.' },
  ]},
  { id: 'vision', label: 'Vision & eyes', items: [
    { name: 'Distant vision', detail: 'Snellen chart at 6m. Army: better eye 6/6, worse 6/9. Air Force flying: 6/6 in both eyes uncorrected.' },
    { name: 'Refraction', detail: 'Myopia max −2.5D for Army/Navy, −0.5D for Air Force. Astigmatism max 0.75D for Air Force.' },
    { name: 'Colour vision', detail: 'Ishihara plates. CP-I required for Air Force flying. CP-III acceptable for Army. Red-green colour blindness disqualifies AF.' },
    { name: 'LASIK', detail: 'Not permitted for Air Force flying. Army/Navy may be considered if surgery was 1+ year prior with no complications.' },
  ]},
  { id: 'hearing', label: 'Hearing', items: [
    { name: 'Pure tone audiometry', detail: 'Hearing loss must not exceed 30 dB in the speech range (500–2000 Hz). Profound loss in one ear is disqualifying.' },
    { name: 'ENT examination', detail: 'Ears, nose, and throat examined. Perforated ear drum, chronic otitis media, or nasal polyps are disqualifying.' },
  ]},
  { id: 'cardio', label: 'Cardiovascular', items: [
    { name: 'ECG', detail: '12-lead ECG performed. Any significant arrhythmia, bundle branch blocks, or ST changes require further investigation.' },
    { name: 'Blood pressure', detail: 'Systolic < 140, Diastolic < 90 required. White coat hypertension may be rechecked. Antihypertensives are disqualifying.' },
  ]},
];

const conditions = [
  { condition: 'Myopia > −2.5D (Army/Navy)', severity: 'Permanent', color: '#DC2626', bg: '#FEF2F2' },
  { condition: 'LASIK (Air Force flying)', severity: 'Permanent', color: '#DC2626', bg: '#FEF2F2' },
  { condition: 'Colour blindness (Air Force)', severity: 'Permanent', color: '#DC2626', bg: '#FEF2F2' },
  { condition: 'Controlled hypertension on medication', severity: 'Permanent', color: '#DC2626', bg: '#FEF2F2' },
  { condition: 'Hearing loss > 30 dB in speech range', severity: 'Permanent', color: '#DC2626', bg: '#FEF2F2' },
  { condition: 'Active tuberculosis', severity: 'Temporary', color: '#D97706', bg: '#FEF3C7' },
  { condition: 'Mild pes planus (flat foot)', severity: 'Case-by-case', color: '#1D4ED8', bg: '#DBEAFE' },
  { condition: 'Mild varicocele', severity: 'Case-by-case', color: '#1D4ED8', bg: '#DBEAFE' },
  { condition: 'Kidney stone (passed, no recurrence)', severity: 'Case-by-case', color: '#1D4ED8', bg: '#DBEAFE' },
  { condition: 'Dental deficiency', severity: 'Temporary', color: '#D97706', bg: '#FEF3C7' },
];

const checklists = [
  { title: 'Before SSB', color: '#16A34A', items: ['Get a full medical checkup 2 months before', 'Fix all dental issues — fill cavities, replace missing teeth', 'Treat any skin condition under dermatologist guidance', 'Correct vision with glasses if needed (Army/Navy)', 'Check your BMI and correct if outside range'] },
  { title: 'Before medical exam', color: T.navyM, items: ['Sleep well the night before', 'Do not wear contact lenses on exam day', 'Carry all previous medical records', 'Declare all conditions honestly — hiding is worse', 'Bring valid photo ID and SSB recommendation letter'] },
];

export default function MedicalPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="After SSB recommendation"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="Medical examination"
        lead="Only recommended candidates undergo this thorough 3–5 day medical board at a military hospital."
        breadcrumbs={[{ label: 'SSB', href: '/ssb' }, { label: 'Medical Examination' }]}
        stats={[
          { label: 'Duration', value: '3–5 days' },
          { label: 'Systems tested', value: '6+' },
          { label: 'Venue', value: 'Military hospital' },
        ]}
      />

      <PageLayout sidebarGroup="ssb">

        <Callout type="warning" style={{ marginBottom: 32 }}>
          The medical examination happens <strong>only after SSB recommendation</strong>. You must first clear the written exam, then the SSB, and only then are you called for the medical board.
        </Callout>

        {/* Test category tabs */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Medical test categories</SectionLabel>
          {/* Tab strip */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => { setActiveTab(tab.id); setOpenItem(null); }} style={{
                padding: '8px 18px', borderRadius: 20, cursor: 'pointer', fontFamily: 'inherit',
                fontWeight: 600, fontSize: 13, transition: 'all .15s',
                background: activeTab === tab.id ? T.navyM : T.white,
                color: activeTab === tab.id ? '#fff' : T.slate600,
                border: `1.5px solid ${activeTab === tab.id ? T.navyM : T.border}`,
              }}>{tab.label}</button>
            ))}
          </div>
          {/* Accordion content */}
          <Card>
            {currentTab.items.map((item, i) => (
              <div key={i} style={{ borderBottom: i < currentTab.items.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                <button onClick={() => setOpenItem(openItem === i ? null : i)} style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', fontWeight: 600, fontSize: 15, color: T.text, fontFamily: 'inherit',
                }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#EEF2FF', color: T.navyM, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{i + 1}</div>
                    {item.name}
                  </div>
                  <svg style={{ width: 16, height: 16, flexShrink: 0, transform: openItem === i ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: T.textMuted }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {openItem === i && (
                  <div style={{ padding: '0 0 16px 34px', fontSize: 14, color: T.slate600, lineHeight: 1.7 }}>
                    {item.detail}
                  </div>
                )}
              </div>
            ))}
          </Card>
        </div>

        {/* Disqualifying conditions table */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Common conditions and their impact</SectionLabel>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#F7F8FC', borderBottom: `1px solid ${T.border}` }}>
                  <th style={{ color: T.textMuted, fontWeight: 500, padding: '12px 16px', textAlign: 'left', fontSize: 13 }}>Medical condition</th>
                  <th style={{ color: T.textMuted, fontWeight: 500, padding: '12px 16px', textAlign: 'left', fontSize: 13 }}>Severity</th>
                </tr>
              </thead>
              <tbody>
                {conditions.map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? T.white : '#FAFAFA', borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: '12px 16px', color: T.text }}>{row.condition}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: row.color, background: row.bg, padding: '3px 10px', borderRadius: 20 }}>{row.severity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Checklists */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel>Preparation checklists</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {checklists.map(cl => (
              <div key={cl.title} style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: `4px solid ${cl.color}`, borderRadius: 12, padding: '20px 24px', boxShadow: T.shadow }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: cl.color, marginBottom: 14 }}>{cl.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {cl.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: T.slate600 }}>
                      <span style={{ color: cl.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Callout type="tip">
          <strong>Declare all conditions honestly.</strong> Concealing a medical condition and being found out later is a permanent disqualification from all Indian Armed Forces — far worse than the condition itself.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Eligibility', href: '/eligibility', desc: 'Physical standards by wing', icon: '✅' },
        { label: 'SSB Overview', href: '/ssb', desc: 'The full 5-day process', icon: '📅' },
        { label: 'Fitness Tracker', href: '/fitness', desc: 'Build physical fitness', icon: '💪' },
      ]} />
    </div>
  );
}
