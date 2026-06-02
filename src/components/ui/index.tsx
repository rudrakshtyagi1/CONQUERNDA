'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

/* ===== ANIMATED COUNTER ===== */
export function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / 1800, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref} className="mono">{prefix}{count}{suffix}</span>;
}

/* ===== GLASS CARD ===== */
export function GlassCard({ children, className = '', hover = true, onClick }: {
  children: React.ReactNode; className?: string; gold?: boolean; hover?: boolean; onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className={`card ${hover ? 'card-interactive' : 'card-flat'} ${className}`}>
      {children}
    </div>
  );
}

/* ===== SECTION HEADER ===== */
export function SectionHeader({ tag, title, subtitle, center = false }: {
  tag?: string; title: string; subtitle?: string; center?: boolean;
}) {
  return (
    <div className={`mb-8 ${center ? 'text-center' : ''}`}>
      {tag && <div className="label mb-2">{tag}</div>}
      <h2 className="heading-lg mb-2">{title}</h2>
      {subtitle && <p className="text-[var(--text-secondary)] text-[15px] max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ===== STAT BOX ===== */
export function StatBox({ value, numValue, label, sublabel, suffix = '', prefix = '' }: {
  value?: string; numValue?: number; label: string; sublabel?: string; suffix?: string; prefix?: string;
}) {
  return (
    <div className="card card-flat text-center p-5">
      <div className="text-3xl font-bold text-[var(--blue)] mb-1">
        {numValue != null ? <AnimatedCounter value={numValue} suffix={suffix} prefix={prefix} /> : value}
      </div>
      <div className="text-sm font-semibold text-[var(--slate-800)]">{label}</div>
      {sublabel && <div className="text-[13px] font-medium text-[var(--slate-500)] mt-0.5">{sublabel}</div>}
    </div>
  );
}

/* ===== BADGE ===== */
export function Badge({ children, variant = 'blue' }: { children: React.ReactNode; variant?: 'gold' | 'blue' | 'red' | 'green' }) {
  const cls = { gold: 'badge-gold', blue: 'badge-blue', red: 'badge-red', green: 'badge-green' };
  return <span className={`badge ${cls[variant]}`}>{children}</span>;
}

/* ===== GRID ===== */
export function Grid({ children, cols = 3, className = '' }: { children: React.ReactNode; cols?: number; className?: string }) {
  const gc: Record<number, string> = { 1: 'grid-cols-1', 2: 'grid-cols-1 md:grid-cols-2', 3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 4: 'grid-cols-2 md:grid-cols-4' };
  return <div className={`grid ${gc[cols] || gc[3]} gap-5 ${className}`}>{children}</div>;
}

/* ===== DIVIDER ===== */
export function Divider({ label }: { label?: string }) {
  if (!label) return <hr className="border-[var(--border)] my-10" />;
  return (
    <div className="section-divider">
      <div className="line" />
      <span className="label whitespace-nowrap">{label}</span>
      <div className="line" />
    </div>
  );
}

/* ===== ACCORDION ===== */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="card p-0 overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className={i < items.length - 1 ? 'accordion-item' : ''}>
          <button className="accordion-trigger px-6" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <span>{item.q}</span>
            <ChevronDown size={18} className={`text-[var(--slate-400)] transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
          </button>
          <div className="accordion-content" style={{ maxHeight: openIdx === i ? '200px' : '0px' }}>
            <p className="text-[var(--text-secondary)] text-[14px] px-6 pb-5 leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===== GAUGE ===== */
export function Gauge({ value, max = 100, label, color = 'var(--blue)', size = 150 }: {
  value: number; max?: number; label?: string; color?: string; size?: number;
}) {
  const pct = Math.min(value / max, 1);
  const r = (size - 20) / 2;
  const circ = Math.PI * r;
  const offset = circ * (1 - pct);
  return (
    <div className="gauge-container" style={{ width: size, height: size / 2 + 28 }}>
      <svg width={size} height={size / 2 + 10} viewBox={`0 0 ${size} ${size / 2 + 10}`}>
        <path d={`M 10 ${size / 2} A ${r} ${r} 0 0 1 ${size - 10} ${size / 2}`}
          fill="none" stroke="var(--slate-100)" strokeWidth={10} strokeLinecap="round" />
        <path d={`M 10 ${size / 2} A ${r} ${r} 0 0 1 ${size - 10} ${size / 2}`}
          fill="none" stroke={color} strokeWidth={10} strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.34,1.56,0.64,1)' }} />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <div className="text-2xl font-bold mono" style={{ color }}>{value}</div>
        {label && <div className="text-[11px] text-[var(--text-muted)] font-medium">{label}</div>}
      </div>
    </div>
  );
}

export const Card = GlassCard;

/* ===== HORIZONTAL CAROUSEL ===== */
export function HorizontalCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative group">
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto hide-scrollbar gap-5 snap-x snap-mandatory pb-4 px-1"
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
    </div>
  );
}
