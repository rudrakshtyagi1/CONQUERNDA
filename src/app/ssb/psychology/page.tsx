'use client';
import Link from 'next/link';

export default function SSBPsychology() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/ssb" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to SSB Overview
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">SSB Day 2 — Psychology Tests</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            Revealing your subconscious thoughts and reactions
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-8 text-[#0D1B2A]">
        <p className="text-lg text-[#455A7A] mb-8">
          The psychological tests are based on the premise of projective techniques. Since time is strictly limited, you are forced to react naturally, revealing your true personality to the psychologist.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-2">TAT</h2>
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#455A7A] mb-4">Thematic Apperception Test</div>
            <p className="text-[#455A7A] text-sm mb-4">
              You are shown 11 ambiguous pictures and 1 blank slide. Each picture is shown for 30 seconds, and you get 4 minutes to write a story.
            </p>
            <ul className="list-disc list-inside text-[#455A7A] text-sm space-y-1">
              <li>Create a hero who takes initiative.</li>
              <li>Ensure the story has a logical beginning, middle, and a positive end.</li>
              <li>For the blank slide, prepare a story in advance about an achievement in your life.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-2">WAT</h2>
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#455A7A] mb-4">Word Association Test</div>
            <p className="text-[#455A7A] text-sm mb-4">
              60 words are flashed consecutively for 15 seconds each. You must write the first positive or meaningful thought that comes to mind.
            </p>
            <ul className="list-disc list-inside text-[#455A7A] text-sm space-y-1">
              <li>Avoid purely instructional or factual sentences.</li>
              <li>Show your values. (e.g., Word: "Failure" → "Failure is a stepping stone to success").</li>
              <li>Keep it short and write fast.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-2">SRT</h2>
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#455A7A] mb-4">Situation Reaction Test</div>
            <p className="text-[#455A7A] text-sm mb-4">
              A booklet with 60 everyday situations is given. You have 30 minutes to write your reactions to all of them.
            </p>
            <ul className="list-disc list-inside text-[#455A7A] text-sm space-y-1">
              <li>Write complete but short actions, not thoughts.</li>
              <li>Do not leave situations blank. Try to attempt at least 45+.</li>
              <li>Solve the problem using available resources without overthinking.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-2">SDT</h2>
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#455A7A] mb-4">Self Description Test</div>
            <p className="text-[#455A7A] text-sm mb-4">
              You must write 5 paragraphs in 15 minutes describing what different people think of you.
            </p>
            <ul className="list-disc list-inside text-[#455A7A] text-sm space-y-1">
              <li>Opinion of your Parents.</li>
              <li>Opinion of your Teachers/Employers.</li>
              <li>Opinion of your Friends.</li>
              <li>Your own opinion about yourself.</li>
              <li>Qualities you would like to improve.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
