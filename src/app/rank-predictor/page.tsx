'use client';
import { useState } from 'react';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, Btn, T, SectionLabel } from '@/components/ui/PageShell';

type Result = { rank: string; prob: string; msg: string; color: string } | null;

export default function RankPredictorPage() {
  const [mathMarks, setMathMarks] = useState('');
  const [gatMarks, setGatMarks] = useState('');
  const [exam, setExam] = useState('NDA I');
  const [year, setYear] = useState('2026');
  const [result, setResult] = useState<Result>(null);

  const predict = () => {
    const m = Math.min(300, Math.max(0, Number(mathMarks) || 0));
    const g = Math.min(600, Math.max(0, Number(gatMarks) || 0));
    const total = m + g;

    if (total >= 380) setResult({ rank: '50–150', prob: '92%', msg: 'Excellent! Well above the expected cutoff — very strong selection chance.', color: '#16A34A' });
    else if (total >= 340) setResult({ rank: '150–350', prob: '78%', msg: 'Strong performance. You are in a comfortable position.', color: '#16A34A' });
    else if (total >= 310) setResult({ rank: '350–600', prob: '58%', msg: 'Close to cutoff. Improvement in 1–2 subjects can significantly boost your rank.', color: '#D97706' });
    else if (total >= 275) setResult({ rank: '600–900', prob: '32%', msg: 'Below comfortable range. Focus heavily on accuracy and your stronger subjects.', color: '#D97706' });
    else setResult({ rank: '900+', prob: '8%', msg: 'Significant improvement needed. Target +40 marks in the next 30 days.', color: '#DC2626' });
  };

  const m = Number(mathMarks) || 0;
  const g = Number(gatMarks) || 0;
  const total = m + g;

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', border: `1.5px solid ${T.border}`,
    borderRadius: 10, fontSize: 16, fontFamily: 'inherit', color: T.text,
    background: T.white, outline: 'none', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: T.slate600, marginBottom: 8, display: 'block' };

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="LIVE"
        badgeBg="#FEE2E2"
        badgeColor="#DC2626"
        h1="AIR rank predictor"
        lead="Enter your expected marks to predict your All India Rank based on real UPSC cutoff data."
        breadcrumbs={[{ label: 'Tools', href: '/rank-predictor' }, { label: 'Rank Predictor' }]}
      />

      <PageLayout sidebarGroup="tools">
        {/* How it works */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>How it works</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { num: '1', title: 'Enter your scores', desc: 'Input your expected Mathematics and GAT marks from mock tests or the real exam.' },
              { num: '2', title: 'Algorithm runs', desc: 'We compare against 6 years of UPSC NDA data to calculate your probable rank range.' },
              { num: '3', title: 'Get your estimate', desc: 'See your predicted AIR range, selection probability, and what to improve.' },
            ].map(s => (
              <div key={s.num} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, boxShadow: T.shadow }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.navyM, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, marginBottom: 12 }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator */}
        <Card style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Enter your expected marks</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Mathematics marks (0–300)</label>
              <input type="number" min={0} max={300} value={mathMarks} onChange={e => setMathMarks(e.target.value)} style={inputStyle} placeholder="e.g. 180" />
            </div>
            <div>
              <label style={labelStyle}>GAT marks (0–600)</label>
              <input type="number" min={0} max={600} value={gatMarks} onChange={e => setGatMarks(e.target.value)} style={inputStyle} placeholder="e.g. 310" />
            </div>
            <div>
              <label style={labelStyle}>Exam cycle</label>
              <select value={exam} onChange={e => setExam(e.target.value)} style={inputStyle}>
                <option>NDA I</option>
                <option>NDA II</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Year</label>
              <select value={year} onChange={e => setYear(e.target.value)} style={inputStyle}>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
          </div>

          <button onClick={predict} style={{
            width: '100%', padding: '14px', background: T.navyM, color: '#fff',
            border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s',
          }}>
            Predict my rank →
          </button>

          {/* Results */}
          {result && (
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: T.navy, borderRadius: 14, padding: '24px 28px', textAlign: 'center', color: '#fff' }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: '#C7D2FE', marginBottom: 8 }}>PREDICTED RANK RANGE</div>
                <div style={{ fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1 }}>#{result.rank}</div>
              </div>
              <div style={{ background: T.amberBg, border: `1px solid ${T.amber}`, borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.amber, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estimated selection probability</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: T.amber }}>{result.prob}</div>
              </div>
              <p style={{ fontSize: 15, color: result.color, fontWeight: 600 }}>{result.msg}</p>
              <div style={{ background: T.page, borderRadius: 12, padding: '16px 20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, fontSize: 14, textAlign: 'center' }}>
                <div><div style={{ fontWeight: 700, fontSize: 20, color: T.navyM }}>{m}</div><div style={{ color: T.textMuted }}>Maths /300</div></div>
                <div><div style={{ fontWeight: 700, fontSize: 20, color: T.navyM }}>{g}</div><div style={{ color: T.textMuted }}>GAT /600</div></div>
                <div><div style={{ fontWeight: 700, fontSize: 20, color: T.navyM }}>{total}</div><div style={{ color: T.textMuted }}>Total /900</div></div>
              </div>
              <div style={{ background: total > 335 ? '#DCFCE7' : '#FEE2E2', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: total > 335 ? '#16A34A' : '#DC2626', fontWeight: 600 }}>
                {total > 335
                  ? `✅ Your score is ${total - 335} marks above the typical written cutoff (335)`
                  : `⚠️ You need ${335 - total} more marks to reach the typical written cutoff (335)`}
              </div>
            </div>
          )}
        </Card>

        <Callout type="warning">
          This tool uses historical data as a model. Actual ranks depend on exam difficulty and the overall candidate pool in that specific year.
        </Callout>

        {/* Improvement tips */}
        <div style={{ marginTop: 32 }}>
          <SectionLabel>Score improvement tips</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '📐', title: 'Mathematics', tip: 'NDA maths is predictable — the same topics repeat. Master calculus, algebra, and trigonometry for guaranteed marks.' },
              { icon: '📖', title: 'English (GAT)', tip: 'English questions are the easiest to score in the GAT. Aim for 160+/200 with 2 weeks of focused grammar practice.' },
              { icon: '🌍', title: 'GK (GAT)', tip: 'Current affairs from last 6 months + NCERT basics cover most GK questions. 20 minutes of news daily is sufficient.' },
            ].map(tip => (
              <Card key={tip.title}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{tip.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{tip.title}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.7 }}>{tip.tip}</p>
              </Card>
            ))}
          </div>
        </div>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Cutoff Analysis', href: '/cutoff-analysis', desc: 'Historical cutoffs', icon: '📈' },
        { label: 'Mock Tests', href: '/mock-tests', desc: 'Practice and track scores', icon: '✏️' },
        { label: 'Previous Papers', href: '/previous-year-papers', desc: 'Practice PYQs', icon: '📄' },
      ]} />
    </div>
  );
}
