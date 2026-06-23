'use client';
import { useState } from 'react';
import {
  PageHero, PageLayout, Callout, Card,
  RelatedStrip, EyebrowTag, Btn, T, SectionLabel,
} from '@/components/ui/PageShell';

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = 'All' | 'Defence' | 'International' | 'Science & Tech' | 'Polity' | 'Economy' | 'Sports';

interface ArchiveItem {
  date: string;
  headline: string;
  categories: Category[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FILTERS: Category[] = ['All', 'Defence', 'International', 'Science & Tech', 'Polity', 'Economy', 'Sports'];

const CATEGORY_COLORS: Record<Category, { bg: string; color: string }> = {
  'All':           { bg: '#E0E7FF', color: '#3730A3' },
  'Defence':       { bg: '#DCFCE7', color: '#15803D' },
  'International': { bg: '#E0F2FE', color: '#0369A1' },
  'Science & Tech':{ bg: '#F3E8FF', color: '#7E22CE' },
  'Polity':        { bg: '#FEF9C3', color: '#92400E' },
  'Economy':       { bg: '#FFE4E6', color: '#9F1239' },
  'Sports':        { bg: '#FEF3C7', color: '#92400E' },
};

const ARCHIVE: ArchiveItem[] = [
  {
    date: 'June 21, 2026',
    headline: 'Operation Sindoor: IAF conducts precision strikes on terror launch pads across LoC',
    categories: ['Defence'],
  },
  {
    date: 'June 20, 2026',
    headline: "India overtakes Japan to become world's 4th largest economy by nominal GDP",
    categories: ['Economy', 'International'],
  },
  {
    date: 'June 19, 2026',
    headline: 'Supreme Court upholds validity of Waqf Amendment Act 2025',
    categories: ['Polity'],
  },
  {
    date: 'June 18, 2026',
    headline: 'Neeraj Chopra wins gold at Diamond League — qualifies for 2028 Olympics',
    categories: ['Sports'],
  },
  {
    date: 'June 17, 2026',
    headline: 'DRDO develops indigenous propulsion system for Tejas Mk2 combat aircraft',
    categories: ['Science & Tech', 'Defence'],
  },
  {
    date: 'June 16, 2026',
    headline: 'India-China LAC disengagement at Depsang Plain fully completed',
    categories: ['International', 'Defence'],
  },
  {
    date: 'June 15, 2026',
    headline: 'PM Modi inaugurates 400 km Zanskar-Kargil road, boosting strategic connectivity to Ladakh',
    categories: ['Defence'],
  },
  {
    date: 'June 14, 2026',
    headline: 'RBI raises repo rate by 25 bps to 6.75% amid global inflation pressures',
    categories: ['Economy'],
  },
];

const TODAY_BULLETS = [
  'India successfully test-fires Agni-V MIRV ballistic missile, marking a major advancement in strategic deterrence capability',
  'INS Nilgiri, first ship of the P17A frigate project, commissioned into the Indian Navy at Mumbai',
  'India tops medal tally at 14th South Asian Games held in Kathmandu, Nepal',
  'Cabinet approves merger of three defence PSUs to create a streamlined defence manufacturing entity',
  'ISRO successfully launches RISAT-3 earth observation satellite from GSLV Mk III',
  'India and France sign Rafale Marine aircraft deal — 26 jets for Indian Navy carrier operations',
  'Chief of Defence Staff reviews joint theatre command progress with three service chiefs',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CurrentAffairsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredArchive = activeFilter === 'All'
    ? ARCHIVE
    : ARCHIVE.filter(item => item.categories.includes(activeFilter));

  return (
    <>
      <PageHero
        bg="#EEF2FF"
        badge="DAILY"
        badgeBg="#D1FAE5"
        badgeColor="#065F46"
        h1="Daily current affairs for NDA"
        lead="Defence, national, and GK updates curated for NDA aspirants. Focus on what matters for the exam."
        breadcrumbs={[
          { label: 'Preparation', href: '/roadmap' },
          { label: 'Daily Current Affairs' },
        ]}
      />

      <PageLayout sidebarGroup="preparation">
        {/* ── Today's Featured Update ──────────────────────────────────────── */}
        <SectionLabel>Today's Featured Update</SectionLabel>
        <div style={{
          background: T.white,
          border: `1px solid ${T.border}`,
          borderLeft: `4px solid ${T.green}`,
          borderRadius: 16,
          padding: 28,
          marginBottom: 40,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <EyebrowTag bg="#D1FAE5" color="#065F46">Today&apos;s Update</EyebrowTag>
            <span style={{ fontSize: 13, color: T.textMuted, marginLeft: 'auto' }}>June 22, 2026</span>
          </div>

          <h2 style={{
            fontSize: 18,
            fontWeight: 700,
            color: T.text,
            letterSpacing: '-0.02em',
            marginBottom: 18,
          }}>
            Top Stories for NDA Aspirants — Monday, June 22
          </h2>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            {TODAY_BULLETS.map((point, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: '#D1FAE5',
                  color: '#065F46',
                  fontSize: 11,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 2,
                }}>
                  {i + 1}
                </span>
                <p style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: '#374151',
                }}>
                  {point}
                </p>
              </li>
            ))}
          </ul>

          <Btn variant="secondary">Read full update →</Btn>
        </div>

        {/* ── Topic Filter Pills ───────────────────────────────────────────── */}
        <SectionLabel>Filter by Topic</SectionLabel>
        <div style={{
          display: 'flex',
          gap: 8,
          overflowX: 'auto',
          paddingBottom: 8,
          marginBottom: 32,
          scrollbarWidth: 'none',
        }}>
          {FILTERS.map(filter => {
            const isActive = filter === activeFilter;
            const colors = CATEGORY_COLORS[filter];
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  flexShrink: 0,
                  padding: '8px 18px',
                  borderRadius: 999,
                  border: isActive ? 'none' : `1px solid ${T.border}`,
                  background: isActive ? T.navyM : T.white,
                  color: isActive ? T.white : colors.color,
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 2px 8px rgba(29,63,171,0.25)' : 'none',
                  letterSpacing: isActive ? '0.01em' : 0,
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ── Archive Grid ─────────────────────────────────────────────────── */}
        <SectionLabel>
          {activeFilter === 'All' ? 'Past 8 Days' : `${activeFilter} — Recent Updates`}
        </SectionLabel>

        {filteredArchive.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
            color: T.textMuted,
            fontSize: 15,
            background: T.white,
            borderRadius: 16,
            border: `1px solid ${T.border}`,
            marginBottom: 32,
          }}>
            No updates found for <strong>{activeFilter}</strong> in the last 8 days.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
            marginBottom: 32,
          }}>
            {filteredArchive.map((item, i) => (
              <div
                key={i}
                style={{
                  background: T.white,
                  border: `1px solid ${T.border}`,
                  borderRadius: 16,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.09)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                }}
              >
                {/* Date */}
                <span style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: T.textMuted,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {item.date}
                </span>

                {/* Headline */}
                <p style={{
                  margin: 0,
                  fontSize: 15,
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: T.text,
                  letterSpacing: '-0.01em',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {item.headline}
                </p>

                {/* Category pills */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {item.categories.map(cat => (
                    <span
                      key={cat}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 999,
                        background: CATEGORY_COLORS[cat].bg,
                        color: CATEGORY_COLORS[cat].color,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <span style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: T.navyM,
                  marginTop: 'auto',
                  paddingTop: 4,
                  cursor: 'pointer',
                }}>
                  Read more →
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── Tip Callout ──────────────────────────────────────────────────── */}
        <Callout type="tip">
          Focus on defence-related current affairs — appointments, exercises, acquisitions, and
          achievements of the Indian armed forces. These appear most frequently in the NDA GAT.
        </Callout>
      </PageLayout>

      {/* ── Related Strip ────────────────────────────────────────────────── */}
      <RelatedStrip items={[
        { label: 'Syllabus',      href: '/syllabus',      desc: 'Current Events topic guide',  icon: '📚' },
        { label: 'Mock Tests',    href: '/mock-tests',    desc: 'Practice GK sections',         icon: '✏️' },
        { label: 'Defence News',  href: '/defence-news',  desc: 'Latest from the forces',       icon: '📡' },
      ]} />
    </>
  );
}
