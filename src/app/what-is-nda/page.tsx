'use client';
import Link from 'next/link';

export default function WhatIsNDA() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to ConquerNDA
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">What is NDA?</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            The National Defence Academy — The cradle of military leadership and the world's first tri-service academy.
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12 text-[#0D1B2A]">
        {/* Overview & Key Facts */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Overview</div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide">The Ultimate Training Ground</h2>
            <p className="text-[#455A7A] leading-relaxed">
              Established in 1954 and located in Khadakwasla, Pune, the National Defence Academy (NDA) is the Joint Services academy of the Indian Armed Forces. Here, cadets of the three services—the Army, the Navy, and the Air Force—train together before they go on to pre-commissioning training in their respective service academies.
            </p>
            <p className="text-[#455A7A] leading-relaxed">
              The NDA offers a rigorous 3-year training program encompassing academics, physical fitness, and military leadership. Out of lakhs of applicants, only around 400 are selected per cycle, making it one of the most competitive academies globally.
            </p>
          </div>

          <div className="bg-[#E8F2FF] p-8 rounded-2xl border border-[#C5D8F5] shadow-sm flex flex-col justify-center space-y-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-1">Duration</div>
              <div className="text-2xl font-bold text-[#0D1B2A]">3 Years</div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-1">Intake</div>
              <div className="text-2xl font-bold text-[#0D1B2A]">~400 Seats / Cycle</div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-1">Established</div>
              <div className="text-2xl font-bold text-[#0D1B2A]">1954</div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-1">Location</div>
              <div className="text-2xl font-bold text-[#0D1B2A]">Khadakwasla, Pune</div>
            </div>
          </div>
        </div>

        {/* History & Legacy */}
        <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">History & Legacy</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide mb-4">A Tradition of Valour</h2>
          <p className="text-[#455A7A] leading-relaxed mb-4">
            Born out of the lessons of World War II, the concept of a joint training institution led to the foundation of the NDA. The academy's first batch commenced training in 1955. Over the decades, the NDA has produced top military commanders, including several Chiefs of Staff of the Army, Navy, and Air Force, as well as heroes who have received the highest gallantry awards.
          </p>
          <p className="text-[#455A7A] leading-relaxed">
            In a historic milestone, the NDA opened its doors to women cadets in 2022, transforming into a co-educational institution and paving the way for gender-neutral leadership in the armed forces.
          </p>
        </div>

        {/* The Three Wings */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-4 text-center">The Three Wings</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-center text-[#0D1B2A] tracking-wide mb-10">Choose Your Path</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Army */}
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#2E7D32] tracking-wide mb-3">Army Wing</h3>
              <p className="text-[#455A7A] text-sm mb-4 leading-relaxed">
                Trains cadets for branches like Infantry, Armoured Corps, and Artillery. Focuses heavily on ground combat tactics, weapon handling, and endurance.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 font-medium">Post-NDA Training:</div>
                <div className="text-[#0D1B2A] font-semibold text-sm">Indian Military Academy (IMA), Dehradun</div>
              </div>
            </div>

            {/* Navy */}
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#1565C0] tracking-wide mb-3">Navy Wing</h3>
              <p className="text-[#455A7A] text-sm mb-4 leading-relaxed">
                Prepares cadets for roles as Surface, Submarine, or Aviation officers. Training involves navigation, seamanship, and watermanship.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 font-medium">Post-NDA Training:</div>
                <div className="text-[#0D1B2A] font-semibold text-sm">Indian Naval Academy (INA), Ezhimala</div>
              </div>
            </div>

            {/* Air Force */}
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#0D47A1] tracking-wide mb-3">Air Force Wing</h3>
              <p className="text-[#455A7A] text-sm mb-4 leading-relaxed">
                Develops future Fighter, Transport, and Helicopter pilots. Cadets learn aerodynamics, meteorology, and basic flying concepts.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 font-medium">Post-NDA Training:</div>
                <div className="text-[#0D1B2A] font-semibold text-sm">Air Force Academy (AFA), Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
