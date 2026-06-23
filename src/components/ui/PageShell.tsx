'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_GROUPS } from '@/data/nav';

// ─── Design tokens ─────────────────────────────────────────────
export const T = {
  navy:    '#0F1B5C',
  navyM:   '#1D3FAB',
  amber:   '#D4900A',
  amberBg: '#FEF3C7',
  green:   '#16A34A',
  greenBg: '#F0FDF4',
  red:     '#DC2626',
  redBg:   '#FEF2F2',
  page:    '#F7F8FC',
  white:   '#FFFFFF',
  slate50: '#F8FAFC',
  slate100:'#F1F5F9',
  slate200:'#E2E8F0',
  slate400:'#94A3B8',
  slate500:'#64748B',
  slate600:'#475569',
  slate700:'#334155',
  slate900:'#0F172A',
  text:    '#1A1A2E',
  textMuted:'#6B7280',
  border:  '#E5E7EB',
  shadow:  '0 1px 4px rgba(0,0,0,0.06)',
  shadowMd:'0 4px 16px rgba(0,0,0,0.08)',
};

// ─── Eyebrow pill tag ──────────────────────────────────────────
export function EyebrowTag({ children, color = T.navyM, bg = '#EEF2FF' }: {
  children: React.ReactNode; color?: string; bg?: string;
}) {
  return (
    <span style={{
      display: 'inline-block', fontSize: 11, fontWeight: 500,
      color, background: bg, borderRadius: 20,
      padding: '4px 12px', letterSpacing: '0.04em',
      marginBottom: 8,
    }}>{children}</span>
  );
}

// ─── Section label — now a styled pill, sentence case ──────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <span style={{
        display: 'inline-block', fontSize: 11, fontWeight: 500,
        color: T.navyM, background: '#EEF2FF', borderRadius: 20,
        padding: '4px 12px', letterSpacing: '0.04em',
      }}>{children}</span>
    </div>
  );
}

// ─── Callout box ───────────────────────────────────────────────
export function Callout({ type = 'info', children, style: extra = {} }: {
  type?: 'info' | 'warning' | 'tip' | 'caution';
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const map = {
    info:    { border: T.navyM, bg: '#EEF2FF', icon: 'ℹ️' },
    warning: { border: T.amber, bg: T.amberBg, icon: '⚠️' },
    tip:     { border: T.green, bg: T.greenBg, icon: '💡' },
    caution: { border: T.red,   bg: T.redBg,   icon: '🚨' },
  }[type];
  return (
    <div style={{
      borderLeft: `3px solid ${map.border}`, background: map.bg,
      borderRadius: '0 8px 8px 0', padding: '12px 16px',
      margin: '20px 0', display: 'flex', gap: 10,
      alignItems: 'flex-start', ...extra,
    }}>
      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{map.icon}</span>
      <div style={{ fontSize: 14, color: T.text, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

// ─── Buttons ───────────────────────────────────────────────────
export function Btn({ href, children, variant = 'primary', style: extraStyle = {} }: {
  href?: string; children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: React.CSSProperties;
}) {
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontWeight: 600, fontSize: 14, borderRadius: 24,
    padding: '10px 22px', textDecoration: 'none',
    transition: 'all .15s', cursor: 'pointer', border: 'none',
    fontFamily: 'inherit', whiteSpace: 'nowrap',
  };
  const variants = {
    primary:   { background: T.navyM, color: '#fff' },
    secondary: { background: 'transparent', color: T.navyM, border: `1.5px solid ${T.navyM}` },
    ghost:     { background: 'transparent', color: T.navyM, padding: '8px 4px' },
  };
  const s = { ...base, ...variants[variant], ...extraStyle };
  if (href) return <Link href={href} style={s}>{children}</Link>;
  return <button style={s}>{children}</button>;
}

// ─── Related pages strip ───────────────────────────────────────
export function RelatedStrip({ items }: { items: { label: string; href: string; desc: string; icon?: string }[] }) {
  return (
    <section style={{ background: T.slate50, borderTop: `1px solid ${T.border}`, padding: '48px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Related pages</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          {items.map(it => (
            <Link key={it.href + it.label} href={it.href} style={{
              display: 'block', background: T.white, border: `1px solid ${T.border}`,
              borderRadius: 12, padding: '20px 22px', textDecoration: 'none',
              transition: 'box-shadow .15s,transform .15s', boxShadow: T.shadow,
            }}>
              {it.icon && <div style={{ fontSize: 22, marginBottom: 8, width: 40, height: 40, background: '#EEF2FF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{it.icon}</div>}
              <div style={{ fontWeight: 600, fontSize: 14, color: T.text, marginBottom: 4 }}>{it.label}</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 8 }}>{it.desc}</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: T.navyM }}>Explore →</span>
            </Link>
          ))}
        </div>
        {/* Page feedback */}
        <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 14, color: T.textMuted }}>Was this page helpful?</span>
          <button style={{ border: `1px solid ${T.border}`, background: T.white, borderRadius: 8, padding: '6px 14px', fontSize: 13, cursor: 'pointer', color: T.text }}>👍 Yes</button>
          <button style={{ border: `1px solid ${T.border}`, background: T.white, borderRadius: 8, padding: '6px 14px', fontSize: 13, cursor: 'pointer', color: T.text }}>👎 No</button>
        </div>
      </div>
    </section>
  );
}

// ─── Page hero ─────────────────────────────────────────────────
export function PageHero({ bg = T.navy, h1, lead, badge, badgeBg, badgeColor, right, breadcrumbs, stats }: {
  bg?: string; h1: string; lead?: string;
  badge?: string; badgeBg?: string; badgeColor?: string;
  right?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  stats?: { label: string; value: string }[];
}) {
  const isDark = bg.startsWith('#0') || bg.startsWith('#1');
  const textColor = isDark ? '#fff' : T.text;
  const subColor  = isDark ? 'rgba(255,255,255,0.75)' : T.textMuted;
  return (
    <>
      {/* Breadcrumb bar */}
      <nav style={{ background: '#F7F8FC', borderBottom: `1px solid ${T.border}`, height: 44, display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', gap: 6, alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: 13, color: T.textMuted, textDecoration: 'none' }}>Home</Link>
          {breadcrumbs?.map((bc, i) => (
            <span key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ color: T.border, fontSize: 13 }}>›</span>
              {bc.href
                ? <Link href={bc.href} style={{ fontSize: 13, color: T.textMuted, textDecoration: 'none' }}>{bc.label}</Link>
                : <span style={{ fontSize: 13, color: T.navy, fontWeight: 500 }}>{bc.label}</span>}
            </span>
          ))}
        </div>
      </nav>
      {/* Hero */}
      <section style={{ background: bg, paddingTop: 64, paddingBottom: 56, paddingLeft: 24, paddingRight: 24, minHeight: 280 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', minWidth: 240 }}>
              {badge && (
                <EyebrowTag bg={badgeBg || T.amberBg} color={badgeColor || T.amber}>{badge}</EyebrowTag>
              )}
              <h1 style={{
                fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700,
                color: textColor, margin: '0 0 14px', lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>{h1}</h1>
              {lead && (
                <p style={{ fontSize: 18, color: subColor, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>{lead}</p>
              )}
              {/* Inline stats strip */}
              {stats && stats.length > 0 && (
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
                  {stats.map(s => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10, padding: '10px 16px', minWidth: 100 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {right && <div style={{ flex: '0 0 auto' }}>{right}</div>}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Two-column layout with sidebar ────────────────────────────
export function PageLayout({ sidebarGroup, children }: { sidebarGroup?: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const group = NAV_GROUPS.find(g => g.items.some(i => pathname.startsWith(i.href))) || NAV_GROUPS[0];
  const items = sidebarGroup
    ? (NAV_GROUPS.find(g => g.id === sidebarGroup)?.items || group.items)
    : group.items;

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px', display: 'flex', gap: 48, alignItems: 'flex-start' }}>
      {/* Sidebar */}
      <aside style={{ width: 240, flexShrink: 0, position: 'sticky', top: 80 }} className="hidden-mobile">
        <nav style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden', boxShadow: T.shadow }}>
          {items.map(it => {
            const active = pathname === it.href || pathname.startsWith(it.href + '/');
            return (
              <Link key={it.id} href={it.href} style={{
                display: 'block', padding: '11px 16px', fontSize: 14,
                fontWeight: active ? 600 : 400,
                color: active ? T.navyM : T.slate600,
                background: active ? '#EEF2FF' : 'transparent',
                textDecoration: 'none',
                borderLeft: active ? `3px solid ${T.navyM}` : '3px solid transparent',
                transition: 'all .1s',
              }}>
                {it.label}
                {it.badge && (
                  <span style={{
                    marginLeft: 8, fontSize: 10, fontWeight: 700,
                    background: it.badge === 'NEW' ? '#dcfce7' : it.badge === 'LIVE' ? '#fee2e2' : '#dbeafe',
                    color: it.badge === 'NEW' ? '#16a34a' : it.badge === 'LIVE' ? '#dc2626' : '#1d4ed8',
                    borderRadius: 8, padding: '2px 7px', textTransform: 'uppercase',
                  }}>{it.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
      {/* Main content */}
      <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
    </div>
  );
}

// ─── Stats grid ────────────────────────────────────────────────
export function StatsRow({ stats }: { stats: { icon: string; label: string; value: string; sub?: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(160px,1fr))`, gap: 16, marginBottom: 32 }}>
      {stats.map(s => (
        <div key={s.label} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: '18px 20px', boxShadow: T.shadow }}>
          <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{s.label}</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: T.text }}>{s.value}</div>
          {s.sub && <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}

// ─── Standard card ─────────────────────────────────────────────
export function Card({ children, style: extra = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: '24px 28px', boxShadow: T.shadow, ...extra }}>
      {children}
    </div>
  );
}

// ─── Styled table ───────────────────────────────────────────────
export function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: 12, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#F7F8FC', borderBottom: `1px solid ${T.border}` }}>
            {headers.map((h, i) => (
              <th key={i} style={{ color: T.textMuted, fontWeight: 500, padding: '12px 16px', textAlign: 'left', fontSize: 13, whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? T.white : '#FAFAFA', borderBottom: `1px solid ${T.border}` }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: '12px 16px', color: T.text }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────
export function Footer() {
  const col2 = [
    { label: 'What is NDA', href: '/what-is-nda' },
    { label: 'Eligibility', href: '/eligibility' },
    { label: 'Exam Pattern', href: '/exam-pattern' },
    { label: 'Syllabus', href: '/syllabus' },
    { label: 'Previous Year Papers', href: '/previous-year-papers' },
    { label: 'Cutoff Analysis', href: '/cutoff-analysis' },
  ];
  const col3 = [
    { label: 'Study Roadmap', href: '/roadmap' },
    { label: 'Books & Resources', href: '/syllabus/books' },
    { label: 'Mock Tests', href: '/mock-tests' },
    { label: 'SSB Overview', href: '/ssb' },
    { label: 'Psychology Tests', href: '/ssb/psychology' },
    { label: 'Current Affairs', href: '/current-affairs' },
  ];
  const col4 = [
    { label: 'Salary & Perks', href: '/salary' },
    { label: 'Rank Structure', href: '/rank-structure' },
    { label: 'NDA Training Life', href: '/training' },
    { label: 'AIR Rank Predictor', href: '/rank-predictor' },
    { label: 'Defence News', href: '/defence-news' },
    { label: 'Fitness Tracker', href: '/fitness' },
  ];

  const linkStyle: React.CSSProperties = { fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginBottom: 10, transition: 'color .15s' };
  const headStyle: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 };

  return (
    <footer style={{ background: T.navy, color: '#fff', padding: '56px 24px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, background: T.navyM, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🛡️</div>
              <span style={{ fontWeight: 700, fontSize: 18 }}>ConquerNDA</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 220 }}>India's most complete NDA preparation platform — from syllabus to SSB.</p>
          </div>
          {/* Col 2 — NDA Exam */}
          <div>
            <p style={headStyle}>NDA Exam</p>
            {col2.map(l => <Link key={l.href} href={l.href} style={linkStyle}>{l.label}</Link>)}
          </div>
          {/* Col 3 — Preparation + SSB */}
          <div>
            <p style={headStyle}>Preparation & SSB</p>
            {col3.map(l => <Link key={l.href} href={l.href} style={linkStyle}>{l.label}</Link>)}
          </div>
          {/* Col 4 — Career + Tools */}
          <div>
            <p style={headStyle}>Career & Tools</p>
            {col4.map(l => <Link key={l.href} href={l.href} style={linkStyle}>{l.label}</Link>)}
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>© 2026 ConquerNDA. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/privacy" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
