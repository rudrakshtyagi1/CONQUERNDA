'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Search, ChevronDown, Menu, X, Target, Home, Users } from 'lucide-react';
import { NAV_GROUPS } from '@/data/nav';

const ICON_MAP: Record<string, any> = {
  Shield, Users, Target, Home,
  // Fallback icon
  Default: Shield,
};

function NavIcon({ name, size = 16 }: { name: string; size?: number }) {
  const Icon = ICON_MAP[name] || ICON_MAP.Default;
  return <Icon size={size} />;
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setActiveGroup(null); }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(v => !v); }
      if (e.key === 'Escape') { setSearchOpen(false); setActiveGroup(null); }
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

  const currentGroup = NAV_GROUPS.find(g => g.id === activeGroup);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6" onMouseLeave={handleMouseLeave}>
          
          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 lg:w-[240px]">
            <div className="w-8 h-8 bg-[#1D4ED8] rounded-md flex items-center justify-center">
              <Shield size={18} className="text-white" />
            </div>
            <div className="text-[18px] font-bold text-[#111827] tracking-tight">ConquerNDA</div>
          </Link>

          {/* CENTER: NAV LINKS */}
          <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {NAV_GROUPS.map(group => (
              <button key={group.id}
                onMouseEnter={() => handleMouseEnter(group.id)}
                onClick={() => setActiveGroup(activeGroup === group.id ? null : group.id)}
                className="text-[14px] font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* RIGHT: SEARCH + BUTTON */}
          <div className="flex items-center justify-end gap-3 lg:gap-4 lg:w-[360px]">
            <button onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-[13px] text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] rounded-full hover:border-[#D1D5DB] transition-all flex-1"
            >
              <Search size={14} className="text-[#9CA3AF]" />
              <span className="flex-1 text-left font-medium">Search exams, cutoffs...</span>
            </button>
            
            <Link href="/rank-predictor" className="hidden sm:flex bg-[#1D4ED8] text-white px-5 py-2 rounded-full text-[13px] font-medium hover:bg-blue-800 transition-colors whitespace-nowrap shadow-sm">
              Start Free
            </Link>

            {/* Mobile Nav Toggle */}
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-[#4B5563] bg-[#F9FAFB] rounded-md border border-[#E5E7EB]">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* MEGA DROPDOWN */}
      {activeGroup && currentGroup && (
        <div className="fixed top-[68px] left-0 right-0 z-[99] bg-white border-b border-[var(--border)] shadow-[0_24px_56px_rgba(0,0,0,0.08)]"
          style={{ animation: 'slide-down 0.15s ease-out both' }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={handleMouseLeave}>
          <div className="max-w-[1400px] mx-auto px-10 py-8">
            <div className="mb-5 border-b border-[var(--slate-100)] pb-3">
              <span className="text-[12px] font-black text-[var(--slate-400)] tracking-wider uppercase">{currentGroup.label}</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {currentGroup.items.map(item => (
                <Link key={item.id} href={item.href} onClick={() => setActiveGroup(null)}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[var(--slate-50)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--blue-50)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--blue)] group-hover:text-white text-[var(--blue)] transition-colors shadow-sm">
                    <NavIcon name={item.icon} size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[15px] font-bold text-[var(--slate-900)] group-hover:text-[var(--blue)] transition-colors">{item.label}</span>
                      {item.badge && <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${item.badge === 'LIVE' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{item.badge}</span>}
                    </div>
                    {item.desc && <p className="text-[13px] font-medium text-[var(--slate-500)] leading-snug">{item.desc}</p>}
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
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110] lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-[320px] bg-white z-[120] lg:hidden flex flex-col shadow-2xl" style={{ animation: 'slide-down 0.2s ease' }}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
              <span className="text-[18px] font-black text-[var(--slate-900)] tracking-tight">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-[var(--slate-100)] text-[var(--slate-600)] hover:bg-[var(--slate-200)]"><X size={18} /></button>
            </div>
            <div className="px-5 py-4 border-b border-[var(--border)]">
              <button onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium text-[var(--slate-500)] bg-[var(--slate-50)] border border-[var(--border)] rounded-2xl">
                <Search size={18} /> Search anything…
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
              {NAV_GROUPS.map(group => <MobileNavGroup key={group.id} group={group} onClose={() => setMobileOpen(false)} />)}
            </nav>
            <div className="p-6 border-t border-[var(--border)] bg-[var(--slate-50)]">
              <Link href="/rank-predictor" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center py-4 rounded-2xl text-[16px]">
                <Target size={18} /> Predict My Rank
              </Link>
            </div>
          </div>
        </>
      )}

      {/* SEARCH MODAL */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

    </>
  );
}

function MobileNavGroup({ group, onClose }: { group: typeof NAV_GROUPS[0]; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2">
      <button onClick={() => setOpen(v => !v)}
        className={`w-full flex items-center justify-between px-5 py-4 text-[16px] font-bold rounded-2xl transition-all ${open ? 'bg-[var(--blue-50)] text-[var(--blue)] shadow-sm' : 'text-[var(--slate-700)] hover:bg-[var(--slate-50)]'}`}>
        {group.label}
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180 text-[var(--blue)]' : 'text-[var(--slate-400)]'}`} />
      </button>
      {open && (
        <div className="pl-5 pr-2 py-3 space-y-2">
          {group.items.map(item => (
            <Link key={item.id} href={item.href} onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 text-[15px] font-bold text-[var(--slate-600)] hover:text-[var(--blue)] hover:bg-[var(--blue-50)] rounded-xl transition-all group">
              <div className="w-8 h-8 rounded-xl bg-[var(--slate-100)] group-hover:bg-[var(--blue)] flex items-center justify-center text-[var(--slate-500)] group-hover:text-white transition-colors">
                <NavIcon name={item.icon} size={14} />
              </div>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

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

  const results = query.trim()
    ? SEARCH_ITEMS.filter(i => i.label.toLowerCase().includes(query.toLowerCase()) || i.desc.toLowerCase().includes(query.toLowerCase()))
    : SEARCH_ITEMS.slice(0, 5);

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[200] flex items-start justify-center pt-24 px-6" onClick={onClose}>
      <div className="bg-white rounded-[24px] shadow-[0_24px_56px_rgba(0,0,0,0.1)] w-full max-w-[640px] overflow-hidden" onClick={e => e.stopPropagation()} style={{ animation: 'slide-down 0.2s ease' }}>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-[var(--border)] bg-[var(--slate-50)]">
          <Search size={22} className="text-[var(--blue)] flex-shrink-0" />
          <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Search for tools, guides, cutoffs..."
            className="flex-1 bg-transparent text-[var(--slate-900)] font-bold text-[18px] outline-none placeholder:text-[var(--slate-400)]" />
          <button onClick={onClose} className="text-[12px] font-black text-[var(--slate-500)] bg-[var(--slate-200)] px-3 py-1.5 rounded-lg hover:bg-[var(--slate-300)] transition-colors">ESC</button>
        </div>
        <div className="max-h-[450px] overflow-y-auto py-4 px-3">
          {results.length === 0 && <div className="text-center py-12 text-[var(--slate-500)] font-bold">No results found for &ldquo;{query}&rdquo;</div>}
          {results.map(item => (
            <Link key={item.href + item.label} href={item.href} onClick={onClose}
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-[var(--blue-50)] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-[var(--slate-100)] flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all">
                <Search size={16} className="text-[var(--slate-500)] group-hover:text-[var(--blue)] transition-colors" />
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="text-[14px] font-bold text-[var(--slate-800)] group-hover:text-[var(--blue)] transition-colors truncate">{item.label}</div>
                <div className="text-[12px] font-medium text-[var(--slate-500)] truncate">{item.desc}</div>
              </div>
              <span className="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: '#EEF2FF', color: '#1D3FAB' }}>{item.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
