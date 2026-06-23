'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

const STAGES = ['Class 10', 'Class 11', 'Class 12', 'Dropper', 'Appeared'];
const CYCLES = ['NDA I 2026', 'NDA II 2026', 'NDA I 2027'];

function StatCard({ label, value, icon, color }: { label: string; value: string | number; icon: string; color: string }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '20px 24px', flex: 1, minWidth: 160 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
        <i className={icon} style={{ fontSize: 20, color }} />
      </div>
      <div style={{ fontSize: 26, fontWeight: 800, color: '#1A1A2E', marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 13, color: '#6B7280' }}>{label}</div>
    </div>
  );
}

export default function ProfilePage() {
  const { user, signOut, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteInput, setDeleteInput] = useState('');
  const [form, setForm] = useState({
    name: user?.name ?? '',
    email: user?.email ?? '',
    phone: '',
    stage: 'Class 12',
    cycle: 'NDA I 2026',
    location: '',
  });

  // Redirect if not logged in
  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: "'Inter',sans-serif" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1A1A2E', marginBottom: 8 }}>Sign in to view your profile</h1>
        <p style={{ color: '#6B7280', marginBottom: 24 }}>Create a free account to track your progress and access all features.</p>
        <Link href="/" style={{ background: '#1D3FAB', color: '#fff', padding: '12px 28px', borderRadius: 28, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>Go back home</Link>
      </div>
    );
  }

  const initials = user.name.trim().split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2);

  const handleSave = () => {
    updateUser({ name: form.name, email: form.email });
    setEditing(false);
  };

  const handleDelete = () => {
    if (deleteInput === 'DELETE') {
      signOut();
    }
  };

  const activity = [
    { icon: 'ti-file-text', text: 'Viewed NDA Complete Syllabus', time: '2 hours ago' },
    { icon: 'ti-pencil', text: 'Completed Mock Test — Maths Paper I', time: '1 day ago' },
    { icon: 'ti-calculator', text: 'Used AIR Rank Predictor', time: '2 days ago' },
    { icon: 'ti-book', text: 'Read SSB Guide — GTO Tasks', time: '3 days ago' },
    { icon: 'ti-award', text: 'Bookmarked Salary & Perks page', time: '5 days ago' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E5E7EB',
    fontSize: 14, color: '#1A1A2E', background: editing ? '#fff' : '#F9FAFB',
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
    cursor: editing ? 'text' : 'default',
  };

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: '#F7F8FC', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ background: '#F7F8FC', borderBottom: '1px solid #E5E7EB', padding: '12px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', fontSize: 13, color: '#9CA3AF' }}>
          <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link> →{' '}
          <span style={{ color: '#1A1A2E' }}>My Profile</span>
        </div>
      </div>

      {/* PROFILE HERO HEADER */}
      <div style={{ background: '#F7F8FC', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Avatar with edit overlay */}
          <div style={{ position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#EEF2FF', color: '#1D3FAB', fontSize: 22, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {initials}
            </div>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.4)')}
              onMouseOut={e => (e.currentTarget.style.background = 'rgba(0,0,0,0)')}>
              <i className="ti ti-camera" style={{ color: '#fff', fontSize: 20, opacity: 0, transition: 'opacity .2s' }}
                onMouseOver={e => (e.currentTarget.style.opacity = '1')}
                onMouseOut={e => (e.currentTarget.style.opacity = '0')} />
            </div>
          </div>

          {/* Info */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1A1A2E', margin: '0 0 4px' }}>{user.name}</h1>
            <div style={{ fontSize: 14, color: '#6B7280', marginBottom: 8 }}>{user.email}</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: '#9CA3AF' }}>Member since {user.memberSince}</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 12, background: user.plan === 'free' ? '#FEF3C7' : '#EEF2FF', color: user.plan === 'free' ? '#92400E' : '#1D3FAB' }}>
                {user.plan === 'free' ? 'Free plan' : '⭐ Pro'}
              </span>
            </div>
          </div>

          {/* Edit button */}
          {!editing ? (
            <button onClick={() => setEditing(true)} style={{
              padding: '9px 18px', borderRadius: 10, border: '1.5px solid #1D3FAB', background: '#fff',
              color: '#1D3FAB', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
              flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <i className="ti ti-pencil" style={{ fontSize: 15 }} /> Edit profile
            </button>
          ) : (
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setEditing(false)} style={{ padding: '9px 18px', borderRadius: 10, border: '1px solid #E5E7EB', background: '#fff', color: '#6B7280', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>Cancel</button>
              <button onClick={handleSave} style={{ padding: '9px 18px', borderRadius: 10, border: 'none', background: '#1D3FAB', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>Save changes</button>
            </div>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px 80px', display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* Section 1 — Personal details */}
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A1A2E', margin: '0 0 24px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="ti ti-user" style={{ color: '#1D3FAB', fontSize: 20 }} /> Personal details
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {[
              { label: 'Full name', key: 'name', type: 'text' },
              { label: 'Email address', key: 'email', type: 'email' },
              { label: 'Phone number', key: 'phone', type: 'tel' },
            ].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.key as keyof typeof form]}
                  onChange={e => editing && setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                  readOnly={!editing}
                  style={inputStyle}
                  placeholder={editing ? `Enter ${f.label.toLowerCase()}` : '—'}
                />
              </div>
            ))}
            {[
              { label: 'Class / preparation stage', key: 'stage', options: STAGES },
              { label: 'Target exam cycle', key: 'cycle', options: CYCLES },
            ].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</label>
                {editing ? (
                  <select value={form[f.key as keyof typeof form]} onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                    {f.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                ) : (
                  <input readOnly value={form[f.key as keyof typeof form] || '—'} style={inputStyle} />
                )}
              </div>
            ))}
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>State / City</label>
              <input type="text" value={form.location} onChange={e => editing && setForm(prev => ({ ...prev, location: e.target.value }))} readOnly={!editing} style={inputStyle} placeholder={editing ? 'e.g. Mumbai, Maharashtra' : '—'} />
            </div>
          </div>
        </div>

        {/* Section 2 — Prep stats */}
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A1A2E', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="ti ti-chart-bar" style={{ color: '#1D3FAB', fontSize: 20 }} /> Preparation stats
          </h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <StatCard label="Mock tests attempted" value={user.stats.testsTaken} icon="ti-pencil" color="#1D3FAB" />
            <StatCard label="Best score (out of 900)" value={user.stats.bestScore} icon="ti-trophy" color="#D4900A" />
            <StatCard label="Study streak (days)" value={`${user.stats.streak} 🔥`} icon="ti-flame" color="#EF4444" />
            <StatCard label="Topics completed" value={user.stats.topicsComplete} icon="ti-check" color="#059669" />
          </div>
        </div>

        {/* Section 3 — Recent activity */}
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1A1A2E', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="ti ti-history" style={{ color: '#1D3FAB', fontSize: 20 }} /> Recent activity
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {activity.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: i < activity.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={a.icon} style={{ fontSize: 17, color: '#1D3FAB' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, color: '#1A1A2E', fontWeight: 500 }}>{a.text}</div>
                </div>
                <div style={{ fontSize: 12, color: '#9CA3AF', flexShrink: 0, whiteSpace: 'nowrap' }}>{a.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 — Danger zone */}
        <div style={{ border: '1px solid #FEE2E2', borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#EF4444', margin: '0 0 8px' }}>Danger zone</h2>
          <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 20px' }}>Deleting your account is permanent and cannot be undone.</p>
          {!showDeleteConfirm ? (
            <button onClick={() => setShowDeleteConfirm(true)} style={{
              padding: '10px 20px', borderRadius: 10, border: '1.5px solid #EF4444',
              background: '#fff', color: '#EF4444', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
              transition: 'background .15s',
            }}
            onMouseOver={e => { e.currentTarget.style.background = '#FEF2F2'; }}
            onMouseOut={e => { e.currentTarget.style.background = '#fff'; }}>
              Delete my account
            </button>
          ) : (
            <div style={{ background: '#FEF2F2', borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: 14, color: '#374151', margin: 0 }}>
                Type <strong>DELETE</strong> below to confirm permanent deletion:
              </p>
              <input
                type="text" value={deleteInput} onChange={e => setDeleteInput(e.target.value)}
                placeholder="Type DELETE to confirm"
                style={{ padding: '10px 14px', borderRadius: 10, border: '1.5px solid #FCA5A5', background: '#fff', fontSize: 14, outline: 'none', fontFamily: 'inherit', fontWeight: 700, color: '#EF4444' }}
              />
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={handleDelete} disabled={deleteInput !== 'DELETE'} style={{
                  padding: '10px 20px', borderRadius: 10, border: 'none', cursor: deleteInput === 'DELETE' ? 'pointer' : 'not-allowed',
                  background: deleteInput === 'DELETE' ? '#EF4444' : '#FCA5A5', color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: 'inherit',
                }}>Yes, delete my account</button>
                <button onClick={() => { setShowDeleteConfirm(false); setDeleteInput(''); }} style={{
                  padding: '10px 20px', borderRadius: 10, border: '1px solid #E5E7EB', background: '#fff', color: '#374151', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
                }}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
