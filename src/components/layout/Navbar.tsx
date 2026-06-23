'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Search, ChevronDown, Menu, X, Target, Users } from 'lucide-react';
import { NAV_GROUPS } from '@/data/nav';
import { useAuth, getInitials } from '@/context/AuthContext';

// ─── OS DETECTION ─────────────────────────────────────────────────────────────
function useMac() {
  const [isMac, setIsMac] = useState(false);
  useEffect(() => { setIsMac(navigator.platform.toUpperCase().includes('MAC')); }, []);
  return isMac;
}

// ─── AVATAR CIRCLE ────────────────────────────────────────────────────────────
function Avatar({ name, size = 36, url }: { name: string; size?: number; url?: string }) {
  const initials = getInitials(name);
  if (url) return (
    <img src={url} alt={name} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
  );
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: '#EEF2FF', color: '#1D3FAB',
      fontSize: size < 40 ? 13 : 16, fontWeight: 700, display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexShrink: 0, userSelect: 'none',
    }}>{initials}</div>
  );
}

// ─── AUTH MODAL ───────────────────────────────────────────────────────────────
function AuthModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [stage, setStage] = useState('Class 12');
  const [loadingMsg, setLoadingMsg] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingMsg('Sending magic link...');
    const { error } = await signIn(email);
    if (error) {
      alert('Error signing in: ' + error.message);
    } else {
      alert('Check your email for the magic link!');
      onClose();
    }
    setLoadingMsg('');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px', borderRadius: 10,
    border: '1px solid #E5E7EB', fontSize: 14, color: '#1A1A2E',
    background: '#F9FAFB', outline: 'none', boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}
    >
      <div
        style={{ background: '#fff', borderRadius: 16, padding: 32, width: '100%', maxWidth: 440, boxShadow: '0 24px 64px rgba(0,0,0,0.15)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Tabs */}
        <div style={{ display: 'flex', background: '#F3F4F6', borderRadius: 10, padding: 4, marginBottom: 28, gap: 4 }}>
          {(['signin', 'signup'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: '8px 0', borderRadius: 8, border: 'none', cursor: 'pointer',
              fontWeight: 600, fontSize: 14, fontFamily: 'inherit',
              background: tab === t ? '#fff' : 'transparent',
              color: tab === t ? '#1A1A2E' : '#6B7280',
              boxShadow: tab === t ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              transition: 'all .15s',
            }}>{t === 'signin' ? 'Sign in' : 'Sign up'}</button>
          ))}
        </div>

        {tab === 'signin' ? (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A2E', margin: '0 0 6px' }}>Welcome back</h2>
            <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 24px' }}>Sign in to continue your NDA preparation</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input style={inputStyle} type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required />
              <div style={{ position: 'relative' }}>
                <input style={{ ...inputStyle, paddingRight: 44 }} type={showPass ? 'text' : 'password'} placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
                <button type="button" onClick={() => setShowPass(v => !v)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', display: 'flex' }}>
                  <i className={`ti ti-eye${showPass ? '-off' : ''}`} style={{ fontSize: 18 }} />
                </button>
              </div>
              <div style={{ textAlign: 'right', marginTop: -6 }}>
                <a href="#" style={{ fontSize: 13, color: '#1D3FAB', textDecoration: 'none', fontWeight: 500 }}>Forgot password?</a>
              </div>
              <button type="submit" style={{
                width: '100%', padding: '13px 0', borderRadius: 28, background: '#1D3FAB', color: '#fff',
                fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'background .15s',
              }}>{loadingMsg || 'Sign in'}</button>
            </form>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
              <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
              <span style={{ fontSize: 12, color: '#9CA3AF' }}>or</span>
              <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
            </div>
            <button style={{
              width: '100%', padding: '13px 0', borderRadius: 28, background: '#fff', color: '#374151',
              fontWeight: 600, fontSize: 14, border: '1px solid #E5E7EB', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: 'inherit',
              transition: 'background .15s',
            }}>
              <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: 16, height: 16 }} />
              Continue with Google
            </button>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A2E', margin: '0 0 6px' }}>Create your account</h2>
            <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 24px' }}>Join 1,900+ NDA aspirants on ConquerNDA</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input style={inputStyle} type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} required />
              <input style={inputStyle} type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required />
              <div style={{ position: 'relative' }}>
                <input style={{ ...inputStyle, paddingRight: 44 }} type={showPass ? 'text' : 'password'} placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
                <button type="button" onClick={() => setShowPass(v => !v)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', display: 'flex' }}>
                  <i className={`ti ti-eye${showPass ? '-off' : ''}`} style={{ fontSize: 18 }} />
                </button>
              </div>
              <select value={stage} onChange={e => setStage(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                {['Class 10', 'Class 11', 'Class 12', 'Dropper'].map(s => <option key={s}>{s}</option>)}
              </select>
              <button type="submit" style={{
                width: '100%', padding: '13px 0', borderRadius: 28, background: '#1D3FAB', color: '#fff',
                fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              }}>{loadingMsg || 'Create account'}</button>
            </form>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
              <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
              <span style={{ fontSize: 12, color: '#9CA3AF' }}>or</span>
              <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
            </div>
            <button style={{
              width: '100%', padding: '13px 0', borderRadius: 28, background: '#fff', color: '#374151',
              fontWeight: 600, fontSize: 14, border: '1px solid #E5E7EB', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: 'inherit',
            }}>
              <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: 16, height: 16 }} />
              Continue with Google
            </button>
            <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 16 }}>
              By signing up you agree to our{' '}
              <a href="#" style={{ color: '#1D3FAB' }}>Terms</a> and{' '}
              <a href="#" style={{ color: '#1D3FAB' }}>Privacy Policy</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── PROFILE DROPDOWN ─────────────────────────────────────────────────────────
function ProfileDropdown({ onClose, onSignOut }: { onClose: () => void; onSignOut: () => void }) {
  const { user } = useAuth();
  const [confirmSignOut, setConfirmSignOut] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!user) return null;

  const links = [
    { icon: 'ti-user', label: 'My profile', href: '/profile' },
    { icon: 'ti-clipboard-list', label: 'My tests', href: '/mock-tests' },
    { icon: 'ti-bookmark', label: 'Saved pages', href: '/profile#saved' },
    { icon: 'ti-chart-bar', label: 'My progress', href: '/profile#progress' },
    { icon: 'ti-settings', label: 'Settings', href: '/profile#settings' },
    ...(user.plan === 'free' ? [{ icon: 'ti-crown', label: 'Upgrade to Pro', href: '/profile#upgrade', amber: true }] : []),
  ];

  return (
    <div ref={ref} style={{
      position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: 280,
      background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)', zIndex: 200, overflow: 'hidden',
    }}>
      {/* Identity */}
      <div style={{ padding: 16, borderBottom: '1px solid #F3F4F6', display: 'flex', gap: 12, alignItems: 'center' }}>
        <Avatar name={user.name} size={44} url={user.avatarUrl} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#1A1A2E' }}>{user.name}</div>
          <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 6 }}>{user.email}</div>
          <span style={{
            fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 12,
            background: user.plan === 'free' ? '#FEF3C7' : '#EEF2FF',
            color: user.plan === 'free' ? '#92400E' : '#1D3FAB',
          }}>{user.plan === 'free' ? 'Free plan' : '⭐ Pro'}</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #F3F4F6', display: 'flex', gap: 0 }}>
        {[
          { val: user.stats.testsTaken, label: 'Tests' },
          { val: user.stats.avgScore, label: 'Avg score' },
          { val: `${user.stats.streak}🔥`, label: 'Day streak' },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid #F3F4F6' : 'none' }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#1D3FAB' }}>{s.val}</div>
            <div style={{ fontSize: 11, color: '#9CA3AF' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Nav Links */}
      <div style={{ padding: 8 }}>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={onClose} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px',
            borderRadius: 8, fontSize: 14, color: (link as any).amber ? '#D97706' : '#374151',
            textDecoration: 'none', transition: 'background .12s', cursor: 'pointer',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#F3F4F6')}
          onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
          >
            <i className={link.icon} style={{ fontSize: 16, color: (link as any).amber ? '#D97706' : '#6B7280' }} />
            {link.label}
          </Link>
        ))}
      </div>

      {/* Sign Out */}
      <div style={{ padding: 8, borderTop: '1px solid #F3F4F6' }}>
        {confirmSignOut ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', fontSize: 13, color: '#374151' }}>
            <span>Sure?</span>
            <button onClick={onSignOut} style={{ background: '#FEE2E2', color: '#EF4444', border: 'none', borderRadius: 6, padding: '4px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Yes, sign out</button>
            <button onClick={() => setConfirmSignOut(false)} style={{ background: '#F3F4F6', color: '#6B7280', border: 'none', borderRadius: 6, padding: '4px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setConfirmSignOut(true)} style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px',
            borderRadius: 8, fontSize: 14, color: '#374151', background: 'none',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
            transition: 'background .12s',
          }}
          onMouseOver={e => { e.currentTarget.style.background = '#FFF1F2'; e.currentTarget.style.color = '#EF4444'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}
          >
            <i className="ti ti-logout" style={{ fontSize: 16, color: '#EF4444' }} />
            Sign out
          </button>
        )}
      </div>
    </div>
  );
}

// ─── SEARCH MODAL ─────────────────────────────────────────────────────────────
const SEARCH_ITEMS = [
  { label: 'AIR Rank Predictor', desc: 'Predict your rank with UPSC data', href: '/rank-predictor', tag: 'Tool' },
  { label: 'Eligibility Criteria', desc: 'Age, education & physical standards', href: '/eligibility', tag: 'NDA' },
  { label: 'Complete Syllabus', desc: 'Topic-wise syllabus for all subjects', href: '/syllabus', tag: 'NDA' },
  { label: 'Exam Pattern', desc: 'Papers, marks & marking scheme', href: '/exam-pattern', tag: 'NDA' },
  { label: 'Cutoff Analysis', desc: 'Historical cutoff trends', href: '/cutoff-analysis', tag: 'NDA' },
  { label: 'SSB Overview', desc: '5-day selection process', href: '/ssb', tag: 'SSB' },
  { label: 'Salary & Perks', desc: 'Complete pay breakdown', href: '/salary', tag: 'Career' },
];

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const results = query.trim()
    ? SEARCH_ITEMS.filter(i => i.label.toLowerCase().includes(query.toLowerCase()) || i.desc.toLowerCase().includes(query.toLowerCase()))
    : SEARCH_ITEMS.slice(0, 5);

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(4px)', zIndex: 300, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 80, padding: '80px 24px 24px' }}
      onClick={onClose}>
      <div style={{ background: '#fff', borderRadius: 20, width: '100%', maxWidth: 600, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.15)' }}
        onClick={e => e.stopPropagation()}>
        {/* Input row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid #F3F4F6', background: '#FAFAFA' }}>
          <Search size={20} style={{ color: '#1D3FAB', flexShrink: 0 }} />
          <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Search for tools, guides, cutoffs..."
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: 17, fontWeight: 600, color: '#1A1A2E', fontFamily: 'inherit' }} />
          <button onClick={onClose} style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', background: '#E5E7EB', padding: '4px 10px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>ESC</button>
        </div>
        {/* Results */}
        <div style={{ maxHeight: 420, overflowY: 'auto', padding: '8px 10px' }}>
          {results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#9CA3AF', fontSize: 14 }}>No results for &ldquo;{query}&rdquo;</div>
          )}
          {results.map(item => (
            <Link key={item.href} href={item.href} onClick={onClose}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 10px', borderRadius: 12, textDecoration: 'none', transition: 'background .12s' }}
              onMouseOver={e => (e.currentTarget.style.background = '#EEF2FF')}
              onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Search size={15} style={{ color: '#6B7280' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1A2E', marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#6B7280' }}>{item.desc}</div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 12, background: '#EEF2FF', color: '#1D3FAB', flexShrink: 0, whiteSpace: 'nowrap' }}>{item.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MOBILE NAV GROUP ─────────────────────────────────────────────────────────
function MobileNavGroup({ group, onClose }: { group: typeof NAV_GROUPS[0]; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: 4 }}>
      <button onClick={() => setOpen(v => !v)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 16px', borderRadius: 12, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
        fontSize: 15, fontWeight: 600, background: open ? '#EEF2FF' : 'transparent',
        color: open ? '#1D3FAB' : '#374151', transition: 'all .15s',
      }}>
        {group.label}
        <ChevronDown size={16} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s', color: open ? '#1D3FAB' : '#9CA3AF' }} />
      </button>
      {open && (
        <div style={{ paddingLeft: 12, paddingRight: 4, paddingBottom: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {group.items.map(item => (
            <Link key={item.id} href={item.href} onClick={onClose} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10,
              textDecoration: 'none', fontSize: 14, fontWeight: 500, color: '#374151', transition: 'background .12s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#EEF2FF')}
            onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN NAVBAR ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const isMac = useMac();
  const { user, signOut } = useAuth();

  useEffect(() => { setMobileOpen(false); setActiveGroup(null); setProfileOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(v => !v); }
      if (e.key === 'Escape') { setSearchOpen(false); setActiveGroup(null); setProfileOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveGroup(id);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveGroup(null), 150);
  };

  const handleSignOut = () => {
    signOut();
    setProfileOpen(false);
  };

  const currentGroup = NAV_GROUPS.find(g => g.id === activeGroup);

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid #E5E7EB', height: 64 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', gap: 20 }}
          onMouseLeave={handleMouseLeave}>

          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, background: '#1D3FAB', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={18} color="#fff" />
            </div>
            <span style={{ fontSize: 18, fontWeight: 800, color: '#1A1A2E', letterSpacing: '-0.02em' }}>ConquerNDA</span>
          </Link>

          {/* NAV LINKS — desktop */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1, justifyContent: 'center' }} className="hide-mobile">
            {NAV_GROUPS.map(group => (
              <button key={group.id}
                onMouseEnter={() => handleMouseEnter(group.id)}
                onClick={() => setActiveGroup(activeGroup === group.id ? null : group.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: 14, fontWeight: 500, color: activeGroup === group.id ? '#1D3FAB' : '#4B5563',
                  transition: 'color .15s', display: 'flex', alignItems: 'center', gap: 4, padding: 0,
                }}>
                {group.label}
                <ChevronDown size={14} style={{ transition: 'transform .2s', transform: activeGroup === group.id ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>
            ))}
          </nav>

          {/* RIGHT SECTION */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>

            {/* SEARCH BAR — desktop */}
            <div className="hide-mobile" style={{ position: 'relative' }}>
              <div
                onClick={() => setSearchOpen(true)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: searchFocused ? 320 : 260, height: 38,
                  background: searchFocused ? '#fff' : '#F3F4F6',
                  border: `1px solid ${searchFocused ? '#1D3FAB' : '#E5E7EB'}`,
                  boxShadow: searchFocused ? '0 0 0 3px rgba(29,63,171,0.1)' : 'none',
                  borderRadius: 20, padding: '0 12px', cursor: 'pointer',
                  transition: 'all .2s ease',
                }}
                onMouseOver={e => { if (!searchFocused) (e.currentTarget as HTMLElement).style.borderColor = '#1D3FAB'; }}
                onMouseOut={e => { if (!searchFocused) (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB'; }}
              >
                <Search size={16} style={{ color: '#9CA3AF', flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 13, color: '#9CA3AF' }}>Search pages, tools...</span>
                <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#9CA3AF', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 6, padding: '2px 6px', flexShrink: 0, whiteSpace: 'nowrap' }}>
                  {isMac ? '⌘K' : 'Ctrl K'}
                </span>
              </div>
            </div>

            {/* Search icon — mobile only */}
            <button
              className="show-mobile-only"
              onClick={() => setSearchOpen(true)}
              style={{ width: 36, height: 36, borderRadius: '50%', background: '#F3F4F6', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Search size={16} style={{ color: '#6B7280' }} />
            </button>

            {/* DIVIDER */}
            <div className="hide-mobile" style={{ width: 1, height: 24, background: '#E5E7EB', flexShrink: 0 }} />

            {/* AUTH STATE */}
            {user ? (
              <div style={{ position: 'relative' }} ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(v => !v)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 4px 4px',
                    borderRadius: 24, border: 'none', background: profileOpen ? '#F3F4F6' : 'transparent',
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'background .15s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = '#F3F4F6')}
                  onMouseOut={e => { if (!profileOpen) e.currentTarget.style.background = 'transparent'; }}>
                  <Avatar name={user.name} size={36} url={user.avatarUrl} />
                  <span className="hide-mobile" style={{ fontSize: 14, fontWeight: 500, color: '#1A1A2E', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user.name.split(' ')[0].slice(0, 10)}
                  </span>
                  <ChevronDown size={14} className="hide-mobile" style={{ color: '#6B7280', transform: profileOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s', flexShrink: 0 }} />
                </button>
                {profileOpen && (
                  <ProfileDropdown onClose={() => setProfileOpen(false)} onSignOut={handleSignOut} />
                )}
              </div>
            ) : (
              <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button onClick={() => setAuthOpen(true)} style={{
                  background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: 14, fontWeight: 500, color: '#374151', transition: 'color .15s', padding: '8px 4px',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#1D3FAB')}
                onMouseOut={e => (e.currentTarget.style.color = '#374151')}>
                  Sign in
                </button>
                <button onClick={() => setAuthOpen(true)} style={{
                  background: '#1D3FAB', color: '#fff', border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: 14, fontWeight: 500, padding: '8px 18px',
                  borderRadius: 20, transition: 'background .15s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#1630A0')}
                onMouseOut={e => (e.currentTarget.style.background = '#1D3FAB')}>
                  Start free
                </button>
              </div>
            )}

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="show-mobile-only"
              style={{ width: 36, height: 36, borderRadius: 8, background: '#F3F4F6', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Menu size={18} style={{ color: '#4B5563' }} />
            </button>
          </div>
        </div>
      </header>

      {/* MEGA DROPDOWN */}
      {activeGroup && currentGroup && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99, background: '#fff', borderBottom: '1px solid #E5E7EB', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={handleMouseLeave}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 24px 28px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>{currentGroup.label}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
              {currentGroup.items.map(item => (
                <Link key={item.id} href={item.href} onClick={() => setActiveGroup(null)}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', borderRadius: 12, textDecoration: 'none', border: '1px solid transparent', transition: 'all .15s' }}
                  onMouseOver={e => { e.currentTarget.style.background = '#F8FAFF'; e.currentTarget.style.borderColor = '#E5E7EB'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Shield size={16} style={{ color: '#1D3FAB' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1A2E', marginBottom: 2, display: 'flex', gap: 6, alignItems: 'center' }}>
                      {item.label}
                      {item.badge && <span style={{ fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 10, background: '#EEF2FF', color: '#1D3FAB' }}>{item.badge}</span>}
                    </div>
                    {item.desc && <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.4 }}>{item.desc}</div>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <>
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', zIndex: 110 }} onClick={() => setMobileOpen(false)} />
          <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 320, background: '#fff', zIndex: 120, display: 'flex', flexDirection: 'column', boxShadow: '-8px 0 32px rgba(0,0,0,0.12)' }}>
            {/* Drawer header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: '#1A1A2E' }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} style={{ width: 32, height: 32, borderRadius: 8, background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={18} style={{ color: '#4B5563' }} />
              </button>
            </div>

            {/* User or auth buttons */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #E5E7EB' }}>
              {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Avatar name={user.name} size={40} url={user.avatarUrl} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1A2E' }}>{user.name}</div>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 12, background: '#FEF3C7', color: '#92400E' }}>Free plan</span>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => { setMobileOpen(false); setAuthOpen(true); }} style={{
                    flex: 1, padding: '10px 0', borderRadius: 20, border: '1px solid #E5E7EB',
                    background: '#fff', color: '#374151', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}>Sign in</button>
                  <button onClick={() => { setMobileOpen(false); setAuthOpen(true); }} style={{
                    flex: 1, padding: '10px 0', borderRadius: 20, border: 'none',
                    background: '#1D3FAB', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}>Start free</button>
                </div>
              )}
            </div>

            {/* Nav links */}
            <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 12px' }}>
              {NAV_GROUPS.map(group => <MobileNavGroup key={group.id} group={group} onClose={() => setMobileOpen(false)} />)}
            </nav>

            {/* Profile / sign out in footer */}
            {user && (
              <div style={{ padding: '12px 16px', borderTop: '1px solid #E5E7EB', display: 'flex', gap: 10 }}>
                <Link href="/profile" onClick={() => setMobileOpen(false)} style={{ flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 20, border: '1px solid #E5E7EB', color: '#1D3FAB', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>My profile</Link>
                <button onClick={() => { signOut(); setMobileOpen(false); }} style={{ flex: 1, padding: '10px 0', borderRadius: 20, border: 'none', background: '#FEE2E2', color: '#EF4444', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Sign out</button>
              </div>
            )}
          </div>
        </>
      )}

      {/* SEARCH MODAL */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

      {/* AUTH MODAL */}
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}

      {/* CSS helpers */}
      <style>{`
        @media (min-width: 768px) { .show-mobile-only { display: none !important; } }
        @media (max-width: 767px) { .hide-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
