'use client';

import { useState } from 'react';
import { GlassCard, Badge, Gauge, AnimatedCounter, Divider } from '@/components/ui';
import { Target, CheckCircle, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const CFG = {
  math: { correct: 2.5, wrong: 0.83, total: 120, max: 300, min25: 75, min20: 60 },
  gat:  { correct: 4,   wrong: 1.33, total: 150, max: 600, min25: 150, min20: 120 },
};

const RANK_MATRIX = [
  { min:980, max:1800, airMin:1,   airMax:14,   prob:99, tag:'TOPPER ZONE',  color:'#16A34A' },
  { min:930, max:979,  airMin:3,   airMax:62,   prob:98, tag:'OUTSTANDING',  color:'#16A34A' },
  { min:880, max:929,  airMin:6,   airMax:140,  prob:96, tag:'EXCELLENT',    color:'#22C55E' },
  { min:840, max:879,  airMin:21,  airMax:280,  prob:92, tag:'VERY STRONG',  color:'#2563EB' },
  { min:800, max:839,  airMin:59,  airMax:450,  prob:80, tag:'STRONG',       color:'#2563EB' },
  { min:760, max:799,  airMin:150, airMax:620,  prob:62, tag:'GOOD',         color:'#0891B2' },
  { min:720, max:759,  airMin:300, airMax:710,  prob:40, tag:'MODERATE',     color:'#D97706' },
  { min:680, max:719,  airMin:470, airMax:735,  prob:18, tag:'BORDERLINE',   color:'#EA580C' },
  { min:650, max:679,  airMin:620, airMax:900,  prob:6,  tag:'RISKY',        color:'#DC2626' },
  { min:0,   max:649,  airMin:901, airMax:9999, prob:1,  tag:'NOT SELECTED', color:'#DC2626' },
];

const CUTOFFS = [
  { exam:'NDA 1 2025', written:336, final:699 },
  { exam:'NDA 2 2024', written:305, final:673 },
  { exam:'NDA 1 2024', written:291, final:654 },
  { exam:'NDA 2 2023', written:293, final:656 },
  { exam:'NDA 1 2023', written:302, final:664 },
  { exam:'NDA 2 2022', written:316, final:678 },
  { exam:'NDA 1 2022', written:360, final:720 },
  { exam:'NDA 2 2021', written:355, final:726 },
  { exam:'NDA 1 2021', written:343, final:709 },
  { exam:'NDA 2 2020', written:355, final:719 },
];

function calc(c: number, w: number, cfg: { correct: number; wrong: number }) {
  return Math.round((c * cfg.correct - w * cfg.wrong) * 100) / 100;
}

export default function RankPredictorClient() {
  const [step, setStep] = useState(0);
  const [mathC, setMathC] = useState(''); const [mathW, setMathW] = useState('');
  const [gatC, setGatC] = useState(''); const [gatW, setGatW] = useState('');
  const [ssb, setSsb] = useState('');
  const [rule, setRule] = useState<'25'|'20'>('25');
  const [error, setError] = useState('');

  const mc=parseInt(mathC)||0, mw=parseInt(mathW)||0, gc=parseInt(gatC)||0, gw=parseInt(gatW)||0, ssbVal=parseInt(ssb)||0;
  const mathScore = calc(mc, mw, CFG.math), gatScore = calc(gc, gw, CFG.gat);
  const written = mathScore + gatScore, total = written + ssbVal;
  const mathMin = rule==='20'?CFG.math.min20:CFG.math.min25, gatMin = rule==='20'?CFG.gat.min20:CFG.gat.min25;
  const mathOk = mathScore>=mathMin, gatOk = gatScore>=gatMin;
  const band = RANK_MATRIX.find(b=>total>=b.min&&total<=b.max)||RANK_MATRIX[RANK_MATRIX.length-1];

  function next() {
    setError('');
    if (step===0) { if(mc+mw>120){setError('Correct+Wrong cannot exceed 120');return;} setStep(1); }
    else if (step===1) { if(gc+gw>150){setError('Correct+Wrong cannot exceed 150');return;} setStep(2); }
    else if (step===2) { if(mc===0&&gc===0){setError('Enter scores in Step 1 or 2');return;} setStep(3); }
  }

  const steps = ['Mathematics','GAT','SSB & Settings','Results'];
  const inputCls = "w-full bg-[var(--slate-50)] border border-[var(--border)] text-[var(--slate-900)] mono text-2xl font-bold text-center py-4 rounded-xl outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-50)] transition-all";

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-10">
      <div className="mb-8 fade-up">
        <div className="label mb-2">Rank Analysis Engine</div>
        <h1 className="heading-lg mb-2">Predict Your <span className="text-[var(--blue)]">AIR Rank</span></h1>
        <p className="text-[15px] text-[var(--text-secondary)]">Based on verified UPSC NDA data — NDA 1&2 2023, NDA 1 2025. 1900+ candidates analyzed.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 fade-up-d1">
        {[['1900+','Candidates','Analyzed'],['3','Datasets','Real UPSC'],['10','Rank Bands','Calibrated'],['~90%','Accuracy','Estimated']].map(([v,l,s])=>(
          <GlassCard key={l} className="p-4 text-center" hover={false}>
            <div className="text-xl font-bold mono text-[var(--blue)]">{v}</div>
            <div className="text-[13px] font-semibold text-[var(--slate-800)]">{l}</div>
            <div className="text-[11px] text-[var(--text-muted)]">{s}</div>
          </GlassCard>
        ))}
      </div>

      {/* Steps */}
      <div className="flex items-center gap-0 mb-8 fade-up-d2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <button onClick={()=>i<step&&setStep(i)} className={`step-indicator flex-shrink-0 ${i===step?'active':i<step?'done':''}`}>
              {i<step?'✓':i+1}
            </button>
            <span className="hidden sm:block text-[12px] font-semibold ml-2 mr-3 whitespace-nowrap"
              style={{color:i===step?'var(--blue)':i<step?'#16A34A':'var(--text-muted)'}}>{s}</span>
            {i<steps.length-1&&<div className={`step-connector ${i<step?'done':''}`}/>}
          </div>
        ))}
      </div>

      <div className="fade-up">
        {step===0&&(
          <GlassCard className="p-6 lg:p-8" hover={false}>
            <div className="flex justify-between items-start mb-6">
              <div><div className="label mb-1">Step 1 — Paper I</div><div className="text-xl font-bold text-[var(--slate-900)]">Mathematics</div>
                <p className="text-[13px] text-[var(--text-muted)] mt-1">120 questions · +2.5 correct · −0.83 wrong · 300 max</p></div>
              <div className="text-right"><div className="text-3xl font-bold mono text-[var(--blue)]">{mathScore}</div><div className="text-[12px] text-[var(--text-muted)]">/ 300</div></div>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div><label className="text-[13px] font-medium text-[var(--slate-700)] mb-2 block">Correct Answers (max 120)</label><input type="number" min={0} max={120} value={mathC} onChange={e=>setMathC(e.target.value)} className={inputCls} placeholder="0"/></div>
              <div><label className="text-[13px] font-medium text-[var(--slate-700)] mb-2 block">Wrong Answers (max 120)</label><input type="number" min={0} max={120} value={mathW} onChange={e=>setMathW(e.target.value)} className={inputCls} placeholder="0"/></div>
            </div>
            {mc>0&&<><div className="progress-track mb-2"><div className="progress-fill" style={{width:`${Math.min(mathScore/300*100,100)}%`}}/></div>
              <div className={`text-[13px] font-medium text-center ${mathOk?'text-[#16A34A]':'text-[#DC2626]'}`}>{mathOk?`✓ Sectional cleared (need ${mathMin})`:`✗ Need ${(mathMin-mathScore).toFixed(1)} more (min ${mathMin})`}</div></>}
            {error&&<div className="text-[#DC2626] text-[13px] mt-3 font-medium">{error}</div>}
            <div className="flex justify-end mt-6"><button onClick={next} className="btn-primary">Next: GAT Score <ArrowRight size={14}/></button></div>
          </GlassCard>
        )}

        {step===1&&(
          <GlassCard className="p-6 lg:p-8" hover={false}>
            <div className="flex justify-between items-start mb-6">
              <div><div className="label" style={{color:'#7C3AED'}}>Step 2 — Paper II</div><div className="text-xl font-bold text-[var(--slate-900)]">General Ability Test</div>
                <p className="text-[13px] text-[var(--text-muted)] mt-1">150 questions · +4.0 correct · −1.33 wrong · 600 max</p></div>
              <div className="text-right"><div className="text-3xl font-bold mono text-[#7C3AED]">{gatScore}</div><div className="text-[12px] text-[var(--text-muted)]">/ 600</div></div>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div><label className="text-[13px] font-medium text-[var(--slate-700)] mb-2 block">Correct Answers (max 150)</label><input type="number" min={0} max={150} value={gatC} onChange={e=>setGatC(e.target.value)} className={inputCls} placeholder="0"/></div>
              <div><label className="text-[13px] font-medium text-[var(--slate-700)] mb-2 block">Wrong Answers (max 150)</label><input type="number" min={0} max={150} value={gatW} onChange={e=>setGatW(e.target.value)} className={inputCls} placeholder="0"/></div>
            </div>
            {gc>0&&<><div className="progress-track mb-2"><div className="progress-fill" style={{width:`${Math.min(gatScore/600*100,100)}%`,background:'linear-gradient(90deg,#7C3AED,#A78BFA)'}}/></div>
              <div className={`text-[13px] font-medium text-center ${gatOk?'text-[#16A34A]':'text-[#DC2626]'}`}>{gatOk?`✓ Sectional cleared (need ${gatMin})`:`✗ Need ${(gatMin-gatScore).toFixed(1)} more (min ${gatMin})`}</div></>}
            {error&&<div className="text-[#DC2626] text-[13px] mt-3 font-medium">{error}</div>}
            <div className="flex justify-between mt-6">
              <button onClick={()=>setStep(0)} className="btn-outline"><ArrowLeft size={14}/> Back</button>
              <button onClick={next} className="btn-primary">Next: SSB <ArrowRight size={14}/></button>
            </div>
          </GlassCard>
        )}

        {step===2&&(
          <GlassCard className="p-6 lg:p-8" hover={false}>
            <div className="mb-6"><div className="label">Step 3</div><div className="text-xl font-bold text-[var(--slate-900)]">SSB Score & Cutoff Rule</div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-[13px] font-medium text-[var(--slate-700)] mb-2 block">Expected SSB Score (0–900)</label>
                <input type="number" min={0} max={900} value={ssb} onChange={e=>setSsb(e.target.value)} className={inputCls} placeholder="0"/>
                <p className="text-[12px] text-[var(--text-muted)] mt-2 text-center">Leave 0 if not appeared. Avg selected: 410</p>
              </div>
              <div>
                <label className="text-[13px] font-medium text-[var(--slate-700)] mb-2 block">Sectional Cutoff Rule</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['25','20'] as const).map(r=>(
                    <label key={r} className={`flex items-center gap-2 p-4 border rounded-xl cursor-pointer transition-all ${rule===r?'border-[var(--blue)] bg-[var(--blue-50)] ring-2 ring-[var(--blue-50)]':'border-[var(--border)]'}`}>
                      <input type="radio" name="rule" checked={rule===r} onChange={()=>setRule(r)} className="accent-[var(--blue)]"/>
                      <div><div className="text-[14px] font-bold text-[var(--slate-800)]">{r}% Rule</div><div className="text-[11px] text-[var(--text-muted)]">{r==='25'?'Math≥75 · GAT≥150':'Math≥60 · GAT≥120'}</div></div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[var(--blue-50)] rounded-xl p-5 mb-6">
              <div className="label mb-3">Score Preview</div>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[['Math',mathScore,'/300'],['GAT',gatScore,'/600'],['Written',written,'/900'],['Total',total,'/1800']].map(([l,v,m])=>(
                  <div key={l as string}><div className="text-xl font-bold mono text-[var(--blue)]">{v}</div><div className="text-[11px] text-[var(--text-muted)]">{l} {m}</div></div>
                ))}
              </div>
            </div>
            {error&&<div className="text-[#DC2626] text-[13px] mb-3 font-medium">{error}</div>}
            <div className="flex justify-between">
              <button onClick={()=>setStep(1)} className="btn-outline"><ArrowLeft size={14}/> Back</button>
              <button onClick={next} className="btn-primary"><Target size={14}/> Predict My Rank</button>
            </div>
          </GlassCard>
        )}

        {step===3&&(
          <div className="space-y-5 fade-up">
            {!(mathOk&&gatOk)?(
              <GlassCard className="text-center py-10 border-[#FCA5A5]" hover={false}>
                <XCircle size={44} className="text-[#DC2626] mx-auto mb-3"/>
                <div className="text-2xl font-bold text-[#DC2626] mb-2">Sectional Cutoff Not Cleared</div>
                <div className="text-[14px] text-[var(--text-secondary)]">{!mathOk&&`Math: ${mathScore} (need ${mathMin}+) `}{!gatOk&&`GAT: ${gatScore} (need ${gatMin}+)`}</div>
                <button onClick={()=>setStep(0)} className="btn-outline mt-6"><ArrowLeft size={14}/> Edit Scores</button>
              </GlassCard>
            ):(
              <>
                <GlassCard className="text-center py-10 px-6 rounded-2xl" hover={false} style={{borderColor:`${band.color}40`,background:`${band.color}08`} as React.CSSProperties}>
                  <div className="label mb-3">Predicted All India Rank</div>
                  <div className="mono font-bold leading-none mb-3" style={{fontSize:'clamp(44px,6vw,72px)',color:band.color}}>
                    {band.airMax>=9999?'1000+': `${band.airMin}–${band.airMax}`}
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-bold" style={{background:`${band.color}15`,color:band.color}}>{band.tag}</div>
                  <div className="flex justify-center gap-6 mt-4 text-[14px] text-[var(--text-muted)]">
                    <span>Total: <strong className="mono text-[var(--slate-800)]">{total}/1800</strong></span>
                    <span>Probability: <strong className="mono" style={{color:band.color}}>{band.prob}%</strong></span>
                  </div>
                </GlassCard>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <GlassCard className="p-5 flex flex-col items-center" hover={false}>
                    <Gauge value={band.prob} label="Selection %" color={band.color}/>
                    <div className="text-[13px] font-semibold text-[var(--slate-700)] mt-2">Selection Probability</div>
                  </GlassCard>
                  <GlassCard className="p-5 flex flex-col items-center" hover={false}>
                    <Gauge value={Math.round(written/900*100)} label="Written %" color="var(--blue)"/>
                    <div className="text-[13px] font-semibold text-[var(--slate-700)] mt-2">Written Score</div>
                  </GlassCard>
                  <GlassCard className="p-5 flex flex-col items-center" hover={false}>
                    <Gauge value={ssbVal>0?Math.round(ssbVal/900*100):0} label="SSB %" color="#7C3AED"/>
                    <div className="text-[13px] font-semibold text-[var(--slate-700)] mt-2">SSB Score</div>
                  </GlassCard>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <GlassCard className="p-6" hover={false}>
                    <div className="label mb-4">Score Breakdown</div>
                    {[['Mathematics',mathScore,'/ 300'],['General Ability',gatScore,'/ 600'],['Written Total',written,'/ 900'],...(ssbVal>0?[['SSB Score',ssbVal,'/ 900']]:[]),['TOTAL',total,'/ 1800']].map(([k,v,m],i,a)=>(
                      <div key={k as string} className={`flex justify-between py-2.5 text-[14px] border-b border-[var(--slate-100)] ${i===a.length-1?'border-0 font-bold text-[15px]':''}`}>
                        <span className="text-[var(--text-secondary)]">{k}</span>
                        <span className="mono font-semibold text-[var(--blue)]">{v} <span className="text-[var(--text-muted)] font-normal">{m}</span></span>
                      </div>
                    ))}
                  </GlassCard>
                  <GlassCard className="p-6" hover={false}>
                    <div className="label mb-4">Sectional Analysis</div>
                    {[{l:'Mathematics',s:mathScore,m:mathMin,ok:mathOk,mx:300},{l:'General Ability',s:gatScore,m:gatMin,ok:gatOk,mx:600}].map(({l,s,m,ok,mx})=>(
                      <div key={l} className="mb-5 last:mb-0">
                        <div className="flex justify-between text-[14px] mb-1.5">
                          <span className="font-medium text-[var(--slate-800)]">{l}</span>
                          <span className={`flex items-center gap-1 text-[12px] font-bold ${ok?'text-[#16A34A]':'text-[#DC2626]'}`}>
                            {ok?<CheckCircle size={14}/>:<XCircle size={14}/>}{ok?'CLEARED':'FAILED'}
                          </span>
                        </div>
                        <div className="progress-track"><div className={ok?'progress-fill progress-fill-green':'progress-fill progress-fill-red'} style={{width:`${Math.min(s/mx*100,100)}%`}}/></div>
                        <div className="text-[11px] text-[var(--text-muted)] mono mt-1">{s} marks · min: {m}</div>
                      </div>
                    ))}
                    <div className="label mt-6 mb-3">Branch Chances</div>
                    {[{b:'Indian Army',c:band.prob>50?'High':'Medium',col:'#16A34A'},{b:'Indian Navy',c:band.prob>60?'High':band.prob>30?'Medium':'Low',col:'#2563EB'},{b:'Indian Air Force',c:band.prob>70?'High':band.prob>40?'Medium':'Low',col:'#7C3AED'}].map(({b,c,col})=>(
                      <div key={b} className="flex justify-between py-2 border-b border-[var(--slate-100)] last:border-0 text-[14px]">
                        <span className="text-[var(--text-secondary)]">{b}</span>
                        <span className="font-bold" style={{color:col}}>{c}</span>
                      </div>
                    ))}
                  </GlassCard>
                </div>

                <div className="flex justify-center"><button onClick={()=>setStep(0)} className="btn-outline"><ArrowLeft size={14}/> Recalculate</button></div>
              </>
            )}
          </div>
        )}
      </div>

      <Divider label="HISTORICAL CUTOFF REFERENCE"/>
      <GlassCard className="p-5 mb-4 overflow-hidden" hover={false}>
        <div className="flex justify-between items-center mb-4">
          <div className="label">Verified UPSC NDA Data</div>
          <Badge variant="blue">10 EXAMS</Badge>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead><tr className="bg-[var(--slate-50)]">
              <th className="text-left py-3 px-4 text-[12px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">Exam</th>
              <th className="text-left py-3 px-4 text-[12px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">Written /900</th>
              <th className="text-left py-3 px-4 text-[12px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">Final /1800</th>
            </tr></thead>
            <tbody>{CUTOFFS.map(d=>(
              <tr key={d.exam} className="border-t border-[var(--slate-100)] hover:bg-[var(--slate-50)] transition-colors">
                <td className="py-3 px-4 text-[var(--text-secondary)]">{d.exam}</td>
                <td className="py-3 px-4 mono font-semibold text-[var(--blue)]">{d.written}</td>
                <td className="py-3 px-4 mono font-semibold text-[var(--slate-800)]">{d.final}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </GlassCard>
      <p className="text-[11px] text-[var(--text-muted)] text-center py-4">ESTIMATED PREDICTION · UPSC NDA DATA 2020–2025 · NOT AN OFFICIAL UPSC TOOL</p>
    </div>
  );
}
