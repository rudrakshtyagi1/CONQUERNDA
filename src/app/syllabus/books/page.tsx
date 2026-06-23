'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, EyebrowTag, Btn, T, SectionLabel, Table } from '@/components/ui/PageShell';

const books = [
  { title: 'Mathematics for NDA & NA', author: 'R.S. Aggarwal', subject: 'Mathematics', subjectColor: T.navyM, subjectBg: '#EEF2FF', reason: 'Most comprehensive coverage of all NDA maths topics with practice exercises', },
  { title: 'Pathfinder NDA & NA Entrance Examination', author: 'Arihant Experts', subject: 'All Subjects', subjectColor: '#7C3AED', subjectBg: '#EDE9FE', reason: 'Single-book comprehensive guide — ideal starting point for complete syllabus', },
  { title: 'Wren & Martin High School English Grammar', author: 'P.C. Wren, H. Martin', subject: 'English', subjectColor: T.green, subjectBg: T.greenBg, reason: 'The gold standard for English grammar — used by generations of NDA aspirants', },
  { title: 'Concepts of Physics (Vol 1 & 2)', author: 'H.C. Verma', subject: 'Physics', subjectColor: '#D97706', subjectBg: T.amberBg, reason: 'Deep conceptual understanding + solved examples matching NDA question style', },
  { title: 'NCERT Physics Class 11 & 12', author: 'NCERT', subject: 'Physics', subjectColor: '#D97706', subjectBg: T.amberBg, reason: 'Free, authoritative, covers all NDA Physics topics — mandatory read', },
  { title: 'NCERT Chemistry Class 11 & 12', author: 'NCERT', subject: 'Chemistry', subjectColor: '#059669', subjectBg: '#D1FAE5', reason: 'NDA Chemistry questions are directly based on NCERT concepts', },
  { title: 'General Knowledge 2026', author: 'Manohar Pandey (Arihant)', subject: 'GK', subjectColor: '#DC2626', subjectBg: '#FEE2E2', reason: 'Comprehensive GK with current affairs — updated annually', },
  { title: 'Certificate Physical and Human Geography', author: 'Goh Cheng Leong', subject: 'Geography', subjectColor: T.navyM, subjectBg: '#EEF2FF', reason: 'Best book for physical geography concepts frequently tested in NDA', },
  { title: 'India\'s Struggle for Independence', author: 'Bipan Chandra', subject: 'History', subjectColor: '#7C3AED', subjectBg: '#EDE9FE', reason: 'Covers the freedom movement in depth — essential for History & Polity section', },
];

const tabs = ['All', 'Mathematics', 'English', 'Physics', 'Chemistry', 'GK', 'Geography', 'History'];

export default function BooksPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? books : books.filter(b => b.subject === activeTab || (activeTab === 'GK' && b.subject === 'GK'));

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg="#EEF2FF"
        h1="Best books for NDA preparation"
        lead="Subject-wise recommended books used by toppers and coaching experts. Build the right library."
        breadcrumbs={[{ label: 'Preparation', href: '/roadmap' }, { label: 'Books & Resources' }]}
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

        {/* Books grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20, marginBottom: 40 }}>
          {filtered.map((book, i) => (
            <div key={i} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, boxShadow: T.shadow, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Book cover placeholder */}
              <div style={{ height: 80, background: `linear-gradient(135deg, ${T.navyM}, #0F1B5C)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontSize: 32 }}>
                📚
              </div>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: book.subjectColor, background: book.subjectBg, borderRadius: 20, padding: '3px 12px', marginBottom: 10, alignSelf: 'flex-start' }}>{book.subject}</span>
              <div style={{ fontWeight: 700, fontSize: 15, color: T.text, marginBottom: 4, lineHeight: 1.4 }}>{book.title}</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 12 }}>{book.author}</div>
              <div style={{ fontSize: 13, color: T.slate600, fontStyle: 'italic', borderLeft: `3px solid ${T.border}`, paddingLeft: 12, lineHeight: 1.6 }}>{book.reason}</div>
            </div>
          ))}
        </div>

        {/* Free resources callout */}
        <Card style={{ borderLeft: `4px solid ${T.green}`, marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 28 }}>🎓</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: T.text, marginBottom: 8 }}>Free NCERT resources</div>
              <p style={{ fontSize: 14, color: T.slate600, lineHeight: 1.7, marginBottom: 12 }}>
                NCERT textbooks (Class 6–12) are <strong>free to download</strong> and cover approximately 60–65% of the NDA syllabus. For Physics, Chemistry, History, and Geography especially — start with NCERT before any other book.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Political Science', 'Mathematics'].map(sub => (
                  <span key={sub} style={{ fontSize: 12, fontWeight: 600, color: T.navyM, background: '#EEF2FF', borderRadius: 20, padding: '4px 14px' }}>{sub} NCERT ↗</span>
                ))}
              </div>
              <p style={{ fontSize: 13, color: T.textMuted, marginTop: 10 }}>Download free at <strong>ncert.nic.in</strong></p>
            </div>
          </div>
        </Card>

        <Callout type="tip">
          <strong>Strategy tip:</strong> Do not buy more than 2–3 books per subject. Finishing one book thoroughly is more effective than half-reading five books. Master NCERT first, then move to supplementary books.
        </Callout>
      </PageLayout>

      <RelatedStrip items={[
        { label: 'Syllabus', href: '/syllabus', desc: 'Topic-wise breakdown', icon: '📚' },
        { label: 'Study Roadmap', href: '/roadmap', desc: 'When to study what', icon: '🗺️' },
        { label: 'Mock Tests', href: '/mock-tests', desc: 'Practice full tests', icon: '✏️' },
      ]} />
    </div>
  );
}
