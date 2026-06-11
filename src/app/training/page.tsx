'use client';
import Link from 'next/link';

const phases = [
  {
    title: 'Phase I — Basic Training (6 Months)',
    color: '#1565C0',
    items: [
      'Introduction to NDA life, discipline, and military ethos',
      'Basic drill, weapon handling, map reading, and field craft',
      'Physical conditioning: swimming, obstacle courses, cross-country running',
      'Academic foundation: Maths, Physics, English, General Studies',
      'Equitation (horse riding) — a unique NDA tradition',
    ],
  },
  {
    title: 'Phase II — Academic Year 1 (1 Year)',
    color: '#2E7D32',
    items: [
      'Formal academic curriculum begins — BSc/BA degree program (JNU-affiliated)',
      'Service-specific subjects introduced (Navigation for Navy, Aero for AF)',
      'Summer camp and adventure training (trekking, rafting, mountaineering)',
      'Sports: mandatory participation in team and individual sports',
      'Leadership tasks begin — Junior Duty Cadet roles',
    ],
  },
  {
    title: 'Phase III — Academic Year 2 (1 Year)',
    color: '#7B1FA2',
    items: [
      'Advanced academics — electives and specialization',
      'Cadet Exchange Programs with foreign military academies',
      'NDA Cross-Country Run — 25km endurance test',
      'Drill competitions, cultural activities, and social events',
      'Wing-specific flying/sailing/adventure exposure',
    ],
  },
  {
    title: 'Phase IV — Graduating Term (6 Months)',
    color: '#E65100',
    items: [
      'Senior leadership responsibilities — appointment as course senior',
      'Final qualifying exams for BSc/BA degree from JNU',
      'Overseas Naval cruise for Navy cadets',
      'The iconic Passing-Out Parade (POP) at NDA Khadakwasla',
      'Commission received and posted to respective service academies',
    ],
  },
];

const traditions = [
  { name: 'Sword of Honour', desc: 'Awarded to the overall best cadet of the passing-out batch. The highest individual honour.' },
  { name: 'Swimming Test', desc: 'Every cadet must clear a 200-metre swim test. Water courage is a core military skill.' },
  { name: 'Messing Traditions', desc: 'Formal dinner nights with specific dress codes — silver cutlery, toasts, and protocol.' },
  { name: 'Equitation', desc: 'All cadets learn horse riding. NDA is one of the few academies globally to maintain this tradition.' },
  { name: "Chief's Banner", desc: "Awarded to the best squadron in drill, sports, and academics during the POP." },
  { name: 'The POP March', desc: 'The Passing-Out Parade marches to the tune of Auld Lang Syne — an emotional farewell to cadet life.' },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">← Back to ConquerNDA</Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9] mb-3">Life at the Academy</div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">NDA Training Life</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">3 years that transform a civilian into a military leader. Inside the NDA experience.</p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12">
        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[['3 Years', 'Total Training'], ['6 Squadrons', '18 Cadets Each'], ['3 Battalions', 'Army / Navy / AF'], ['JNU Degree', 'BSc or BA']].map(([n, l]) => (
            <div key={l} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 text-center shadow-sm">
              <div className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0]">{n}</div>
              <div className="text-[13px] text-[#455A7A] mt-1">{l}</div>
            </div>
          ))}
        </div>

        {/* 4 Phases */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Training Timeline</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8">The 4 Training Phases</h2>
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#C5D8F5] shadow-sm overflow-hidden">
                <div className="p-1.5" style={{ background: phase.color }}>
                  <div className="bg-white rounded-xl">
                    <div className="flex items-center gap-4 p-5 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-['Bebas_Neue',sans-serif] text-xl" style={{ background: phase.color }}>{i + 1}</div>
                      <h3 className="font-bold text-[#0D1B2A] text-[16px]">{phase.title}</h3>
                    </div>
                    <ul className="p-5 space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[14px] text-[#455A7A]">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: phase.color }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Routine */}
        <div className="bg-white rounded-2xl border border-[#C5D8F5] p-8 shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">A Typical Day</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-6">Daily Schedule at NDA</h2>
          <div className="space-y-1">
            {[
              ['05:30', 'Reveille — Bugle call, cadet wakes up'],
              ['05:45', 'PT (Physical Training) — Drill square or cross-country'],
              ['07:00', 'Morning ablutions and breakfast'],
              ['08:00–13:00', 'Academic periods (6 periods of 50 mins each)'],
              ['13:00', 'Lunch and rest period'],
              ['14:30–16:30', 'Sports (compulsory participation in one sport)'],
              ['16:30–18:30', 'Study period / Wing activities'],
              ['19:00', 'Dinner in the mess'],
              ['20:00–21:30', 'Self-study period'],
              ['22:00', 'Lights Out'],
            ].map(([time, activity]) => (
              <div key={time} className="flex items-center gap-4 py-2.5 border-b border-gray-50 last:border-0">
                <div className="text-[13px] font-bold text-[#1565C0] w-24 shrink-0">{time}</div>
                <div className="text-[14px] text-[#455A7A]">{activity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditions */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Heritage</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-8">Iconic NDA Traditions</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {traditions.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 shadow-sm">
                <h3 className="font-bold text-[#1565C0] mb-2">{t.name}</h3>
                <p className="text-[14px] text-[#455A7A] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
