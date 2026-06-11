'use client';
import Link from 'next/link';

const plans = [
  {
    id: 'class-10',
    title: 'Class 10 Aspirant',
    badge: '3–4 Years Out',
    color: '#2E7D32',
    bg: '#E8F5E9',
    border: '#A5D6A7',
    steps: [
      { phase: 'Now', task: 'Focus 100% on Class 10 board exams. Score 85%+ to build academic confidence.' },
      { phase: 'After Boards', task: 'Choose PCM (Physics, Chemistry, Maths) in Class 11 — mandatory for Navy/AF wings.' },
      { phase: 'Summer Vacation', task: 'Start basic physical training: 5km run daily, 20 push-ups, 10 pull-ups.' },
      { phase: 'Class 11', task: 'Master NCERT Maths and Physics thoroughly. These form 60% of NDA paper.' },
      { phase: 'Class 11 End', task: 'Start GK reading: Newspapers, Geography maps, Indian history.' },
      { phase: 'Class 12', task: 'Simultaneously prepare for NDA. Register for NDA 1 (appears in April).' },
    ],
  },
  {
    id: 'class-11',
    title: 'Class 11 Aspirant',
    badge: '2–3 Years Out',
    color: '#1565C0',
    bg: '#E8F2FF',
    border: '#90CAF9',
    steps: [
      { phase: 'Immediately', task: 'Ensure you have PCM. If not in PCM, consider switching — crucial for Navy/AF.' },
      { phase: 'Now', task: 'Start NCERT Maths: Complete Class 10 and 11 thoroughly. Daily 2 hours.' },
      { phase: 'Month 1–3', task: 'Build physical base: 5km run, push-ups, pull-ups, swimming if possible.' },
      { phase: 'Month 3–6', task: 'Begin GAT prep: English grammar (Wren & Martin), GK (Lucent), Physics.' },
      { phase: 'Month 6–12', task: 'Solve PYQs (Previous Year Questions) for Maths. Identify weak topics.' },
      { phase: 'Class 12', task: 'Appear in NDA 1 (April). Even if not fully prepared, the experience is invaluable.' },
    ],
  },
  {
    id: 'class-12',
    title: 'Class 12 Aspirant',
    badge: '1 Year Out',
    color: '#E65100',
    bg: '#FFF3E0',
    border: '#FFCC80',
    steps: [
      { phase: 'Now', task: 'Register for upcoming NDA exam — check UPSC website for notification dates.' },
      { phase: 'Maths (Month 1–2)', task: 'Algebra, Trigonometry, Coordinate Geometry, Calculus — use R.D. Sharma + PYQs.' },
      { phase: 'GAT (Month 2–3)', task: 'English (Objective), Physics NCERT, Chemistry basics, Lucent GK daily.' },
      { phase: 'Month 3–4', task: 'Mock tests every Sunday. Analyze mistakes. Focus on accuracy over speed.' },
      { phase: 'Month 4–5', task: 'Current Affairs — read newspaper daily. Focus on defence, awards, sports.' },
      { phase: 'Final Month', task: 'Only revision. No new topics. Sleep 8hrs. Run daily. Stay confident.' },
    ],
  },
  {
    id: 'dropper',
    title: 'Dropper / Repeat Aspirant',
    badge: 'Second Attempt',
    color: '#7B1FA2',
    bg: '#F3E5F5',
    border: '#CE93D8',
    steps: [
      { phase: 'First Week', task: 'Honest self-analysis: Why did you miss last time? Maths? GAT? Time management?' },
      { phase: 'Month 1', task: 'Create a structured 6-month plan. Join a coaching institute if needed for accountability.' },
      { phase: 'Month 2–3', task: 'Deep-dive on weak topics. Do NOT re-read strong topics — focus on gaps only.' },
      { phase: 'Month 3–4', task: 'Take full mock tests under exam conditions. Aim for 60–65% accuracy in Maths.' },
      { phase: 'Month 4–5', task: 'SSB preparation simultaneously — GD practice, current affairs, self-awareness.' },
      { phase: 'Final Month', task: 'Full revision. Track your score improvement. Age eligibility: ensure you\'re still under 19.5 years.' },
    ],
  },
];

const resources = [
  { subject: 'Mathematics', books: ['R.D. Sharma (Class 11 & 12)', 'Pathfinder NDA/NA by Arihant', 'NDA Maths by RPH Editorial'] },
  { subject: 'English (GAT)', books: ['Wren & Martin — High School Grammar', 'Word Power Made Easy by Norman Lewis', 'Objective English by R.S. Aggarwal'] },
  { subject: 'General Knowledge', books: ['Lucent\'s General Knowledge', 'Manorama Year Book', 'Geography NCERT (Class 9–12)'] },
  { subject: 'Physics & Chemistry', books: ['NCERT Physics Class 11 & 12', 'NCERT Chemistry Class 11 & 12', 'Arihant Science for NDA'] },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">← Back to ConquerNDA</Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9] mb-3">Preparation Strategy</div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Study Roadmap</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">Customized preparation plans based on where you are in your academic journey.</p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-2xl border shadow-sm overflow-hidden" style={{ borderColor: plan.border }}>
            <div className="p-6 border-b flex items-center gap-4" style={{ background: plan.bg, borderColor: plan.border }}>
              <div>
                <h2 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide" style={{ color: plan.color }}>{plan.title}</h2>
                <span className="text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: plan.color, color: 'white' }}>{plan.badge}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {plan.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0" style={{ background: plan.color }}>{i + 1}</div>
                      {i < plan.steps.length - 1 && <div className="w-0.5 flex-1 my-1" style={{ background: plan.border }}></div>}
                    </div>
                    <div className="pb-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: plan.color }}>{step.phase}</div>
                      <p className="text-[14px] text-[#455A7A] leading-relaxed">{step.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Resources */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Best Books</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8">Recommended Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <div key={r.subject} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 shadow-sm">
                <h3 className="font-bold text-[#1565C0] mb-3">{r.subject}</h3>
                <ul className="space-y-2">
                  {r.books.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px] text-[#455A7A]">
                      <span className="text-[#1565C0] shrink-0 font-bold">›</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
