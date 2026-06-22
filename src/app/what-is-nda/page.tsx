'use client';
import Link from 'next/link';

const stats = [
  { icon: '⏱', label: 'Duration', value: '3 Years' },
  { icon: '🎯', label: 'Intake per cycle', value: '~400 seats' },
  { icon: '📅', label: 'Established', value: '1954' },
  { icon: '📍', label: 'Location', value: 'Khadakwasla, Pune' },
];

const wings = [
  {
    name: 'Army Wing',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    emoji: '🪖',
    desc: 'Trains cadets for branches like Infantry, Armoured Corps, and Artillery. Focused on ground combat tactics, weapon handling, and physical endurance.',
    postLabel: 'Post-NDA training',
    postValue: 'Indian Military Academy (IMA), Dehradun',
  },
  {
    name: 'Navy Wing',
    color: '#1D4ED8',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    emoji: '⚓',
    desc: 'Prepares cadets for roles as Surface, Submarine, or Aviation officers. Training covers navigation, seamanship, and watermanship.',
    postLabel: 'Post-NDA training',
    postValue: 'Indian Naval Academy (INA), Ezhimala',
  },
  {
    name: 'Air Force Wing',
    color: '#0891B2',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    emoji: '✈️',
    desc: 'Develops future Fighter, Transport, and Helicopter pilots. Cadets study aerodynamics, meteorology, and basic aviation concepts.',
    postLabel: 'Post-NDA training',
    postValue: 'Air Force Academy (AFA), Hyderabad',
  },
];

export default function WhatIsNDA() {
  return (
    <div style={{ fontFamily: "'Inter', 'DM Sans', sans-serif", background: '#F7F8FC', color: '#1A1A2E', minHeight: '100vh' }}>

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section style={{ background: '#0F1B5C', minHeight: 340, display: 'flex', alignItems: 'center', overflow: 'visible', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 500, textDecoration: 'none', display: 'inline-block', marginBottom: 24, letterSpacing: '0.01em' }}>
            ← Back to ConquerNDA
          </Link>

          <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Left: heading + sub */}
            <div style={{ flex: '1 1 400px', minWidth: 280 }}>
              <h1 style={{ fontSize: 'clamp(38px, 6vw, 56px)', fontWeight: 700, color: '#ffffff', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                What is NDA?
              </h1>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
                The National Defence Academy — India's cradle of military leadership and the world's first tri-service academy.
              </p>
            </div>

            {/* Right: 2×2 stat grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: '0 0 auto', width: 'min(380px, 100%)' }}>
              {stats.map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '18px 20px', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW ────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Left: body copy */}
          <div style={{ flex: '1 1 500px', minWidth: 280 }}>
            <p style={{ fontSize: 12, fontWeight: 500, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Overview</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 700, color: '#1D3FAB', margin: '0 0 24px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              The ultimate training ground
            </h2>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 18 }}>
              Established in 1954 and located in Khadakwasla, Pune, the National Defence Academy is the Joint Services academy of the Indian Armed Forces. Here, cadets of the three services — the Army, the Navy, and the Air Force — train together before going on to pre-commissioning training at their respective service academies.
            </p>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8 }}>
              The NDA offers a rigorous 3-year training program encompassing academics, physical fitness, and military leadership. Out of lakhs of applicants, only around 400 are selected per cycle, making it one of the most competitive academies in the world.
            </p>
          </div>

          {/* Right: Quick Facts card */}
          <div style={{ flex: '0 1 280px', minWidth: 240, background: '#F7F8FC', borderRadius: 16, padding: 28, borderLeft: '4px solid #D4900A' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Quick facts</p>
            {stats.map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <span style={{ fontSize: 20 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500, marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1A1A2E' }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HISTORY & LEGACY ────────────────────────────────── */}
      <section style={{ background: '#F0F2FA', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>History & Legacy</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 700, color: '#1D3FAB', margin: '0 0 28px', letterSpacing: '-0.02em' }}>
            A tradition of valour
          </h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
            Born out of the lessons of World War II, the concept of a joint tri-service training institution led to the founding of the NDA. The academy's first batch commenced training in 1955. Over the decades, the NDA has produced top military commanders, including several Chiefs of Staff of all three services, as well as heroes who have received the highest gallantry awards the nation can bestow.
          </p>

          {/* Pull quote */}
          <blockquote style={{ borderLeft: '4px solid #D4900A', paddingLeft: 24, margin: '32px 0', fontStyle: 'italic', color: '#4B5563', fontSize: 16, lineHeight: 1.8, background: 'rgba(212,144,10,0.05)', borderRadius: '0 12px 12px 0', padding: '20px 24px' }}>
            "In 2022, NDA became co-educational — a historic milestone for gender-neutral leadership in the armed forces."
          </blockquote>

          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8 }}>
            The NDA's legacy is not merely academic — it is forged on the parade ground, in gruelling obstacle courses, and in the shared bonds of service that last a lifetime. It represents the highest ideal of disciplined, selfless leadership.
          </p>
        </div>
      </section>

      {/* ── 4. THREE WINGS ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Section tag */}
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, color: '#6B7280', background: '#F3F4F6', borderRadius: 20, padding: '4px 14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              The three wings
            </span>
          </div>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#1A1A2E', margin: '0 0 48px', letterSpacing: '-0.02em' }}>
            Choose your path
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {wings.map(w => (
              <div key={w.name} style={{
                background: '#fff', border: `1px solid ${w.border}`, borderRadius: 20, padding: 28,
                display: 'flex', flexDirection: 'column', gap: 0,
                transition: 'box-shadow 0.2s, transform 0.2s',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                {/* Icon badge */}
                <div style={{ width: 52, height: 52, borderRadius: 14, background: w.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 20 }}>
                  {w.emoji}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: w.color, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{w.name}</h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.75, flex: 1, marginBottom: 24 }}>{w.desc}</p>
                {/* Divider */}
                <div style={{ borderTop: `1px solid ${w.border}`, paddingTop: 16 }}>
                  <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{w.postLabel}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1A2E', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {w.postValue}
                    <span style={{ color: w.color, fontSize: 16 }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FOOTER CTA ──────────────────────────────────────── */}
      <section style={{ background: '#0F1B5C', padding: '64px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>Ready to begin?</p>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#fff', margin: '0 0 28px', letterSpacing: '-0.02em' }}>
          Start your NDA preparation today
        </h2>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/rank-predictor" style={{ background: '#D4900A', color: '#fff', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'opacity 0.2s' }}>
            Predict my rank
          </Link>
          <Link href="/syllabus" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
            View syllabus
          </Link>
        </div>
      </section>

    </div>
  );
}
