'use client';
import Link from 'next/link';

export default function Syllabus() {
  return (
    <div className="min-h-screen bg-surface font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">
            ← Back to ConquerNDA
          </Link>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">NDA Syllabus</h1>
          <p className="text-xl md:text-2xl text-[#E8F2FF] max-w-2xl font-light">
            Comprehensive guide to Paper I (Maths) and Paper II (GAT)
          </p>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 text-[#0D1B2A]">
        
        {/* Math Syllabus */}
        <div className="mb-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Paper I</div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide">Mathematics</h2>
            <span className="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 font-bold text-sm rounded-full border border-[#C5D8F5]">300 Marks</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm">
              <h3 className="font-bold text-[#1565C0] mb-3">Algebra</h3>
              <p className="text-sm text-[#455A7A] leading-relaxed">Sets, Venn diagrams, Complex numbers, Quadratic equations, Permutations and combinations, Binomial theorem, Logarithms.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm">
              <h3 className="font-bold text-[#1565C0] mb-3">Matrices & Determinants</h3>
              <p className="text-sm text-[#455A7A] leading-relaxed">Types of matrices, operations, determinant of a matrix, basic properties, adjoint and inverse, Cramer's rule.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm">
              <h3 className="font-bold text-[#1565C0] mb-3">Trigonometry</h3>
              <p className="text-sm text-[#455A7A] leading-relaxed">Angles, trigonometric ratios, multiple/sub-multiple angles, inverse trigonometric functions, properties of triangles.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm">
              <h3 className="font-bold text-[#1565C0] mb-3">Analytical Geometry</h3>
              <p className="text-sm text-[#455A7A] leading-relaxed">2D: distance formula, straight lines, circles, parabola, ellipse, hyperbola. 3D: direction cosines, plane, sphere.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm">
              <h3 className="font-bold text-[#1565C0] mb-3">Calculus & Equations</h3>
              <p className="text-sm text-[#455A7A] leading-relaxed">Limits, continuity, differentiation, applications of derivatives, integration, definite integrals, differential equations.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#C5D8F5] shadow-sm">
              <h3 className="font-bold text-[#1565C0] mb-3">Vectors & Statistics</h3>
              <p className="text-sm text-[#455A7A] leading-relaxed">Vector algebra, dot/cross products. Statistics (mean, variance). Probability, Bayes' theorem, Binomial distribution.</p>
            </div>
          </div>
        </div>

        {/* GAT Syllabus */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">Paper II</div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide">General Ability Test</h2>
            <span className="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 font-bold text-sm rounded-full border border-[#C5D8F5]">600 Marks</span>
          </div>

          {/* Part A English */}
          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm mb-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide">Part A: English</h3>
              <span className="font-bold text-[#0D1B2A] bg-gray-100 px-3 py-1 rounded">200 Marks</span>
            </div>
            <p className="text-[#455A7A] mb-4">The question paper in English will be designed to test the candidate's understanding of English and workmanlike use of words.</p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-[#455A7A]">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1565C0]"></span> Grammar and usage</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1565C0]"></span> Vocabulary</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1565C0]"></span> Comprehension and cohesion</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1565C0]"></span> Spotting errors & para jumbles</li>
            </ul>
          </div>

          {/* Part B GK */}
          <div className="bg-white p-8 rounded-2xl border border-[#C5D8F5] shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#1565C0] tracking-wide">Part B: General Knowledge</h3>
              <span className="font-bold text-[#0D1B2A] bg-gray-100 px-3 py-1 rounded">400 Marks</span>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#1565C0] pl-4">
                <h4 className="font-bold text-[#0D1B2A] mb-1">Physics</h4>
                <p className="text-sm text-[#455A7A]">Properties of matter, kinematics, Newton's laws, Work/Energy/Power, waves, electricity, magnetism, optics, heat.</p>
              </div>
              <div className="border-l-4 border-[#2E7D32] pl-4">
                <h4 className="font-bold text-[#0D1B2A] mb-1">Chemistry</h4>
                <p className="text-sm text-[#455A7A]">States of matter, chemical bonds, periodic table, chemical equations, acids/bases, common substances (soap, glass, cement).</p>
              </div>
              <div className="border-l-4 border-[#FFB300] pl-4">
                <h4 className="font-bold text-[#0D1B2A] mb-1">General Science</h4>
                <p className="text-sm text-[#455A7A]">Living world, reproduction, ecology, nutrition, common human diseases, basics of solar system.</p>
              </div>
              <div className="border-l-4 border-[#D32F2F] pl-4">
                <h4 className="font-bold text-[#0D1B2A] mb-1">History, Freedom Movement & Geography</h4>
                <p className="text-sm text-[#455A7A]">Indian freedom movement, French/Russian Revolutions, Earth structure, climate, ocean currents, agriculture, rivers.</p>
              </div>
              <div className="border-l-4 border-[#7B1FA2] pl-4">
                <h4 className="font-bold text-[#0D1B2A] mb-1">Current Events</h4>
                <p className="text-sm text-[#455A7A]">Recent important events in India, international news, prominent personalities, sports, awards, defence forces updates.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
