'use client';
import Link from 'next/link';
import { useState } from 'react';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const fitnessStandards = [
  { test: '1.6 km Run', target: 'Under 7:30 min', current: '12:00', note: 'Start with walk-jog, build weekly' },
  { test: 'Push-ups', target: '40 in 2 min', current: '15', note: 'Perfect form first, then quantity' },
  { test: 'Sit-ups', target: '50 in 2 min', current: '20', note: 'Core strength is vital for SSB tasks' },
  { test: 'Pull-ups', target: '10 reps', current: '2', note: 'One of the hardest — start with negatives' },
  { test: 'Swimming', target: '200m unaided', current: 'Can\'t swim', note: 'Learn now — NDA requires water confidence' },
];

const weekPlan = [
  { day: 'Monday', focus: 'Upper Body + Run', exercises: ['5km Run (easy pace)', '3×15 Push-ups', '3×10 Dips', '3×8 Pull-ups'] },
  { day: 'Tuesday', focus: 'Core + Flexibility', exercises: ['4km tempo run', '3×20 Sit-ups', '3×30s Plank', '15 min stretching'] },
  { day: 'Wednesday', focus: 'Active Recovery', exercises: ['30 min brisk walk', 'Yoga / Stretching', 'Swimming (if possible)', 'Light mobility work'] },
  { day: 'Thursday', focus: 'Lower Body + Run', exercises: ['5km run (push pace)', '3×20 Squats', '3×15 Lunges', '3×20 Calf raises'] },
  { day: 'Friday', focus: 'Full Body Circuit', exercises: ['10 rounds: 10 push-ups + 10 squats + 10 sit-ups', '5km easy run', 'Pull-up practice'] },
  { day: 'Saturday', focus: 'Long Run + Obstacles', exercises: ['8–10km long run', 'Practice obstacle-style movements', 'Rope climbing if available'] },
  { day: 'Sunday', focus: 'Rest / Light Activity', exercises: ['Complete rest OR 30-min leisure swim', 'Foam rolling / massage', 'Plan next week\'s targets'] },
];

export default function FitnessPage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">← Back to ConquerNDA</Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9] mb-3">Physical Preparation</div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Fitness Tracker</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">Physical fitness is non-negotiable for NDA. Build the body the forces demand.</p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12">
        {/* Fitness Standards */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">NDA Medical & SSB Standards</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8">Fitness Benchmarks to Hit</h2>
          <div className="space-y-4">
            {fitnessStandards.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 shadow-sm grid md:grid-cols-4 gap-4 items-center">
                <div>
                  <div className="text-[11px] text-[#455A7A] uppercase font-bold mb-1">Test</div>
                  <div className="font-bold text-[#0D1B2A]">{s.test}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#455A7A] uppercase font-bold mb-1">Target</div>
                  <div className="font-bold text-[#2E7D32]">{s.target}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#455A7A] uppercase font-bold mb-1">Beginner Starts At</div>
                  <div className="font-medium text-[#E65100]">{s.current}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#455A7A] uppercase font-bold mb-1">Tip</div>
                  <div className="text-[13px] text-[#455A7A]">{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Plan */}
        <div className="bg-white rounded-2xl border border-[#C5D8F5] p-8 shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Training Schedule</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">7-Day Weekly Plan</h2>
          <div className="flex gap-2 flex-wrap mb-6">
            {weekPlan.map((d, i) => (
              <button key={d.day} onClick={() => setActiveDay(i)}
                className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all ${activeDay === i ? 'bg-[#1565C0] text-white' : 'bg-[#E8F2FF] text-[#1565C0] hover:bg-[#C5D8F5]'}`}>
                {d.day.slice(0, 3)}
              </button>
            ))}
          </div>
          <div className="bg-[#F4F8FF] rounded-xl p-6 border border-[#C5D8F5]">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-bold text-[#0D1B2A] text-[18px]">{weekPlan[activeDay].day}</h3>
              <span className="text-[12px] font-bold bg-[#1565C0] text-white px-3 py-0.5 rounded-full">{weekPlan[activeDay].focus}</span>
            </div>
            <ul className="space-y-3">
              {weekPlan[activeDay].exercises.map((ex, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-[#455A7A]">
                  <span className="w-6 h-6 rounded-full bg-[#1565C0] text-white text-[11px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 12-Week Progression */}
        <div className="bg-white rounded-2xl border border-[#C5D8F5] p-8 shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">12-Week Program</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">Progressive Overload Plan</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { phase: 'Weeks 1–4', title: 'Foundation', color: '#4CAF50', items: ['3km run daily', '10 push-ups × 3', '5 pull-ups × 3', 'Core basics'] },
              { phase: 'Weeks 5–8', title: 'Build', color: '#2196F3', items: ['5km run daily', '20 push-ups × 4', '8 pull-ups × 3', 'Circuit training 3×/week'] },
              { phase: 'Weeks 9–12', title: 'Peak', color: '#E91E63', items: ['8km run 3×/week', '35 push-ups × 4', '10 pull-ups × 4', 'Full NDA fitness test simulation'] },
            ].map((p) => (
              <div key={p.phase} className="border rounded-xl overflow-hidden border-gray-100">
                <div className="p-3 text-white" style={{ background: p.color }}>
                  <div className="text-[11px] font-bold uppercase tracking-wider opacity-80">{p.phase}</div>
                  <div className="font-['Bebas_Neue',sans-serif] text-2xl tracking-wide">{p.title} Phase</div>
                </div>
                <div className="p-4 bg-gray-50">
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="text-[13px] text-[#455A7A] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-2xl p-6">
          <h3 className="font-bold text-[#2E7D32] mb-2">Golden Rule of Physical Prep</h3>
          <p className="text-[#455A7A]">The NDA physical standards are achievable for any healthy individual with consistent effort. <strong>Consistency beats intensity.</strong> 45 minutes daily for 6 months is infinitely better than 3 hours a day for 2 weeks. Start slow, build progressively, and never skip rest days.</p>
        </div>
      </div>
    </div>
  );
}
