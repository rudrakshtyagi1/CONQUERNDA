'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, RelatedStrip, Btn, T, SectionLabel } from '@/components/ui/PageShell';

const tabs = ['Mathematics', 'English', 'Physics', 'Chemistry', 'General Science', 'History', 'Geography', 'Current Events'];

export default function SyllabusPage() {
  const [activeTab, setActiveTab] = useState('Mathematics');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg="#EEF2FF"
        h1="NDA exam syllabus"
        lead="Complete topic-wise breakdown for Mathematics and GAT papers."
        breadcrumbs={[{ label: 'Preparation', href: '/roadmap' }, { label: 'Syllabus' }]}
      />

      <PageLayout sidebarGroup="preparation">
        {/* Subject filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '8px 18px', borderRadius: 20, border: `1.5px solid ${activeTab === tab ? T.navyM : T.border}`,
              background: activeTab === tab ? T.navyM : T.white, color: activeTab === tab ? '#fff' : T.slate600,
              fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s',
            }}>{tab}</button>
          ))}
        </div>

        <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 16, padding: '24px 32px', boxShadow: T.shadow, marginBottom: 32 }}>
          {activeTab === 'Mathematics' && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>Mathematics (Paper I)</h2>
              <p style={{ color: T.textMuted, marginBottom: 24, fontSize: 14 }}>120 Questions • 300 Marks. Focuses heavily on Class 11 & 12 CBSE syllabus.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { title: 'Algebra', topics: 'Complex numbers, Binomial theorem, Quadratic equations, Logarithms, Permutations & combinations, Sets & relations' },
                  { title: 'Matrices & Determinants', topics: 'Types, operations, determinants, inverse, linear equations' },
                  { title: 'Trigonometry', topics: 'Angles, identities, heights & distances, inverse trig functions' },
                  { title: 'Analytical Geometry 2D & 3D', topics: 'Rectangular Cartesian, lines, circles, conics, distance between points, planes' },
                  { title: 'Differential Calculus', topics: 'Limits, continuity, differentiation, maxima & minima' },
                  { title: 'Integral Calculus', topics: 'Definite & indefinite integrals, differential equations' },
                  { title: 'Vector Algebra', topics: '2D & 3D vectors, scalar/cross products' },
                  { title: 'Statistics & Probability', topics: 'Mean, median, mode, variance, probability theorems, binomial distribution' }
                ].map((item, idx) => (
                  <div key={idx} style={{ border: `1px solid ${T.border}`, borderRadius: 8, overflow: 'hidden' }}>
                    <button
                      onClick={() => toggleAccordion(idx)}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: openAccordion === idx ? '#F8FAFC' : T.white, border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: 600, color: T.text, fontSize: 15 }}
                    >
                      {item.title}
                      <span>{openAccordion === idx ? '−' : '+'}</span>
                    </button>
                    {openAccordion === idx && (
                      <div style={{ padding: '16px 20px', background: T.white, borderTop: `1px solid ${T.border}`, color: T.slate600, fontSize: 14, lineHeight: 1.6 }}>
                        {item.topics}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'English' && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>English (GAT - Part A)</h2>
              <p style={{ color: T.textMuted, marginBottom: 24, fontSize: 14 }}>50 Questions • 200 Marks. Tests basic grammar and vocabulary.</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 12, color: T.slate600, fontSize: 15, lineHeight: 1.6 }}>
                <li><strong>Grammar & Usage:</strong> Tenses, prepositions, conjunctions, articles, sentence correction</li>
                <li><strong>Vocabulary:</strong> Synonyms, antonyms, one-word substitution, idioms & phrases</li>
                <li><strong>Comprehension:</strong> Unseen passages, inference questions</li>
                <li>Spotting Errors, Fill in the Blanks, Sentence Improvement</li>
              </ul>
            </div>
          )}

          {['Physics', 'Chemistry', 'General Science', 'History', 'Geography', 'Current Events'].includes(activeTab) && (
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.navyM, marginBottom: 16 }}>{activeTab} (GAT - Part B)</h2>
              <p style={{ color: T.textMuted, marginBottom: 24, fontSize: 14 }}>Part of the General Knowledge section (100 Questions • 400 Marks total).</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {(
                  activeTab === 'Physics' ? [
                    ['Physical Properties & States of Matter', '8 qs'],
                    ['Motion, Laws of Motion, Newton\'s Laws', '10 qs'],
                    ['Work, Energy & Power', '6 qs'],
                    ['Optics — reflection, refraction, lenses', '8 qs'],
                    ['Electricity & Magnetism', '10 qs'],
                    ['Heat, Temperature, Thermodynamics', '6 qs'],
                    ['Sound & Waves', '5 qs'],
                    ['Modern Physics — atoms, nuclei', '7 qs']
                  ] : activeTab === 'Chemistry' ? [
                    ['Physical & Chemical Changes', '5 qs'],
                    ['Elements, mixtures, compounds', '5 qs'],
                    ['Atoms, molecules, valency', '6 qs'],
                    ['Acids, Bases & Salts', '6 qs'],
                    ['Metals, non-metals', '5 qs'],
                    ['Carbon compounds & organic chemistry basics', '5 qs'],
                    ['Everyday chemistry — soaps, medicines, fertilisers', '4 qs']
                  ] : activeTab === 'General Science' ? [
                    ['Biology basics — cells, tissues, organ systems', '8 qs'],
                    ['Human physiology — digestion, circulation, respiration', '8 qs'],
                    ['Food, nutrition & health', '4 qs'],
                    ['Ecology & environment', '4 qs']
                  ] : activeTab === 'History' ? [
                    ['Ancient India — civilisations, empires', '5 qs'],
                    ['Medieval India — Mughals, Marathas', '5 qs'],
                    ['British India — 1857, Freedom movement, key events', '10 qs'],
                    ['Constitution — Preamble, fundamental rights, directive principles', '5 qs']
                  ] : activeTab === 'Geography' ? [
                    ['Solar system, earth, latitude/longitude', '4 qs'],
                    ['Physical geography — mountains, rivers, climate of India', '10 qs'],
                    ['Economic geography — agriculture, industries, resources', '6 qs'],
                    ['World geography — continents, oceans', '5 qs']
                  ] : [
                    ['Defence news & appointments', 'ongoing'],
                    ['Awards — Gallantry, National', 'ongoing'],
                    ['Sports — Olympic, Commonwealth, Asian Games', 'ongoing'],
                    ['Science & technology breakthroughs', 'ongoing'],
                    ['International events relevant to India', 'ongoing']
                  ]
                ).map((topic, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${T.border}` }}>
                    <span style={{ fontSize: 15, color: T.text, fontWeight: 500 }}>{topic[0]}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, background: T.page, padding: '4px 10px', borderRadius: 12 }}>{topic[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Callout type="tip">
          NCERT textbooks (Class 9–12) cover ~65% of the NDA syllabus and are freely available at ncert.nic.in
        </Callout>

        <div style={{ marginTop: 24, display: 'inline-block' }}>
          <Btn href="#" variant="secondary">⬇ Download full syllabus PDF</Btn>
        </div>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Exam Pattern', href: '/exam-pattern', desc: 'Marks & structure', icon: '📋' },
        { label: 'Books & Resources', href: '/syllabus/books', desc: 'Recommended books', icon: '📖' },
        { label: 'Mock Tests', href: '/mock-tests', desc: 'Practice tests', icon: '✏️' },
      ]} />
    </div>
  );
}
