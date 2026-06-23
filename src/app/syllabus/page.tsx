'use client';
import { useState } from 'react';

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Wt = 'high' | 'medium' | 'low';
interface Chapter {
  id: number;
  title: string;
  wt: Wt;
  qRange: string;
  brief: string;
  topics: string[];
  mostAsked: string;
}
interface GKSubject {
  id: string;
  title: string;
  marks: number;
  wt: Wt;
  qRange: string;
  brief: string;
  topics: string[];
  mostAsked: string;
}
interface EnglishSection {
  id: string;
  title: string;
  wt: Wt;
  qRange: string;
  brief: string;
  topics: string[];
  mostAsked: string;
}

// ─── WEIGHTAGE HELPERS ────────────────────────────────────────────────────────
const WT_COLORS: Record<Wt, { bg: string; text: string; dot: string; label: string }> = {
  high:   { bg: '#FEE2E2', text: '#991B1B', dot: '#EF4444', label: '🔴 High' },
  medium: { bg: '#FEF3C7', text: '#92400E', dot: '#F59E0B', label: '🟡 Medium' },
  low:    { bg: '#D1FAE5', text: '#065F46', dot: '#10B981', label: '🟢 Lower' },
};
function WtPill({ wt, small }: { wt: Wt; small?: boolean }) {
  const c = WT_COLORS[wt];
  return (
    <span style={{
      background: c.bg, color: c.text,
      padding: small ? '2px 8px' : '4px 10px',
      borderRadius: 20, fontSize: small ? 10 : 11, fontWeight: 700,
      whiteSpace: 'nowrap', flexShrink: 0,
    }}>{c.label}</span>
  );
}

// ─── MATHS DATA ───────────────────────────────────────────────────────────────
const MATHS_CHAPTERS: Chapter[] = [
  {
    id: 1, title: 'Algebra', wt: 'high', qRange: '15–20',
    brief: 'The backbone of NDA Maths — covers everything from sets to complex numbers and quadratic equations.',
    topics: [
      'Sets and Venn diagrams — union, intersection, complement, De Morgan\'s laws',
      'Relations and functions — domain, range, types of functions, composition',
      'Complex numbers — modulus, argument, conjugate, polar form, cube roots of unity',
      'Quadratic equations and inequalities — nature of roots, sum/product of roots, sign analysis',
      'Permutations and combinations — nPr, nCr, circular permutation, applications',
      'Binomial theorem — general term, middle term, coefficient problems (positive integral index only)',
      'Logarithms — laws of logarithms, change of base, equations',
      'Arithmetic, Geometric and Harmonic progressions — nth term, sum, AM-GM-HM inequalities',
      'Linear inequalities — graphical solution, system of inequalities',
    ],
    mostAsked: 'Complex numbers (cube roots of unity), AP/GP sum problems, Binomial general term, Quadratic nature of roots.',
  },
  {
    id: 2, title: 'Matrices & Determinants', wt: 'high', qRange: '12–18',
    brief: 'High-scoring chapter if practised well — determinants, inverses, and system of equations are frequent.',
    topics: [
      'Types of matrices — row, column, square, diagonal, scalar, identity, zero, symmetric, skew-symmetric',
      'Matrix operations — addition, subtraction, scalar multiplication, matrix multiplication',
      'Transpose of a matrix — properties',
      'Determinants — order 2 and 3, expansion by minors and cofactors',
      'Properties of determinants — row/column operations, special determinants',
      'Adjoint and inverse of a matrix — existence condition (non-singular)',
      'Solving system of linear equations — Cramer\'s rule, matrix method (2×2 and 3×3)',
      'Rank of a matrix — basic concept',
    ],
    mostAsked: 'Determinant evaluation, inverse of 2×2 matrix, Cramer\'s rule, properties of determinants.',
  },
  {
    id: 3, title: 'Trigonometry', wt: 'high', qRange: '15–20',
    brief: 'Largest chapter in NDA Maths — covers identities, equations, inverse trig, and properties of triangles.',
    topics: [
      'Angles and measurement — degree, radian, conversion',
      'Trigonometric ratios — all six ratios, values at standard angles',
      'Trigonometric identities — Pythagorean, reciprocal, ratio identities',
      'Compound angles — sin(A±B), cos(A±B), tan(A±B)',
      'Multiple and sub-multiple angles — sin2A, cos2A, tan2A, sin3A, cos3A',
      'Sum-to-product and product-to-sum formulas',
      'Trigonometric equations — general solutions of sinθ=k, cosθ=k, tanθ=k',
      'Inverse trigonometric functions — domain, range, principal value, basic properties',
      'Properties of triangles — sine rule, cosine rule, area formulas, half-angle formulas',
      'Heights and distances — angle of elevation and depression, 2D applications',
    ],
    mostAsked: 'Compound angles, multiple angle identities, inverse trig principal values, sine/cosine rule.',
  },
  {
    id: 4, title: 'Analytical Geometry (2D)', wt: 'high', qRange: '12–16',
    brief: 'Straight lines and circles dominate — conic sections appear occasionally but are lower priority.',
    topics: [
      'Cartesian coordinate system — distance formula, section formula, area of triangle',
      'Straight lines — slope, intercept forms, angle between lines, parallel and perpendicular conditions',
      'Distance of a point from a line, distance between parallel lines',
      'Circles — standard form, general form, centre and radius, equation given conditions',
      'Tangent and normal to a circle',
      'Pair of straight lines — combined equation, angle between them, condition for parallel/perpendicular',
      'Conic sections (overview) — parabola, ellipse, hyperbola — standard forms and basic properties only',
    ],
    mostAsked: 'Straight line equations, distance from a line, circle equation and tangent.',
  },
  {
    id: 5, title: 'Analytical Geometry (3D)', wt: 'medium', qRange: '8–12',
    brief: 'Direction cosines, planes, and lines in 3D — straightforward once the formulas are memorised.',
    topics: [
      'Direction cosines and direction ratios — relation l²+m²+n²=1',
      'Angle between two lines using DCs',
      'Equation of a plane — general, intercept, and normal forms',
      'Angle between two planes, distance of a point from a plane',
      'Equation of a line in 3D — symmetric form, vector form',
      'Angle between a line and a plane',
      'Coplanarity of lines',
      'Sphere — standard equation, centre and radius',
    ],
    mostAsked: 'Direction cosines, angle between planes, distance of point from plane.',
  },
  {
    id: 6, title: 'Differential Calculus', wt: 'high', qRange: '15–20',
    brief: 'Most marks available in calculus — limits, derivatives, and their applications are extremely heavily tested.',
    topics: [
      'Concept of a real function — domain, range, graph',
      'Limits — standard limits, algebraic and trigonometric limits, L\'Hôpital\'s rule',
      'Continuity — definition, types of discontinuity',
      'Differentiability — relation to continuity, concept only',
      'Differentiation from first principles',
      'Rules of differentiation — sum, product, quotient, chain rule',
      'Derivatives of standard functions — algebraic, trigonometric, exponential, logarithmic',
      'Differentiation of implicit and parametric functions',
      'Higher order derivatives — second derivative',
      'Applications — increasing/decreasing functions, maxima and minima, tangents and normals, rate of change',
    ],
    mostAsked: 'Limits (algebraic and trig), chain rule, maxima-minima, tangent-normal.',
  },
  {
    id: 7, title: 'Integral Calculus & Differential Equations', wt: 'high', qRange: '12–18',
    brief: 'Integration methods and definite integrals are heavily tested — differential equations are at a basic level.',
    topics: [
      'Integration as the reverse of differentiation',
      'Standard integrals — algebraic, trigonometric, exponential',
      'Methods — substitution, integration by parts, partial fractions',
      'Integration of rational functions',
      'Definite integrals — properties (very important), evaluation',
      'Area under a curve — between curve and x-axis, between two curves',
      'Differential equations — order and degree, formation, variable separable method, homogeneous equations, linear first-order equations',
    ],
    mostAsked: 'Integration by substitution, definite integral properties, area under curves, variable separable DEs.',
  },
  {
    id: 8, title: 'Vector Algebra', wt: 'medium', qRange: '8–12',
    brief: 'Dot product and cross product are the most asked — vector equations of lines appear occasionally.',
    topics: [
      'Vectors — types, magnitude, unit vector, position vector',
      'Addition and subtraction of vectors — triangle and parallelogram law',
      'Scalar multiplication',
      'Dot (scalar) product — definition, geometric meaning, projection, angle between vectors',
      'Cross (vector) product — definition, geometric meaning, area of parallelogram and triangle',
      'Scalar triple product — volume of parallelepiped, coplanarity condition',
      'Vector triple product — concept only',
      'Vector equations of lines and planes',
    ],
    mostAsked: 'Dot product angle problems, cross product area problems, scalar triple product coplanarity.',
  },
  {
    id: 9, title: 'Statistics & Probability', wt: 'medium', qRange: '10–14',
    brief: 'Statistics is formulaic and easy marks — probability including conditional probability is consistently tested.',
    topics: [
      'Measures of central tendency — mean (simple, weighted, combined), median, mode',
      'Measures of dispersion — range, mean deviation, variance, standard deviation',
      'Coefficient of variation, Pearson\'s correlation coefficient',
      'Basic probability — sample space, events, mutually exclusive, exhaustive events',
      'Addition theorem — P(A∪B)',
      'Conditional probability — P(A|B)',
      'Multiplication theorem — independent events',
      'Bayes\' theorem — basic application',
      'Random variable — discrete probability distribution',
      'Binomial distribution — mean and variance',
    ],
    mostAsked: 'Standard deviation, binomial distribution, conditional probability, Bayes\' theorem.',
  },
  {
    id: 10, title: 'Number Theory & Elementary Arithmetic', wt: 'low', qRange: '3–6',
    brief: 'Basic but don\'t ignore — LCM, HCF, and number system questions appear as fillers.',
    topics: [
      'Natural numbers, integers, rational and irrational numbers — properties',
      'Divisibility rules',
      'HCF and LCM — methods and properties',
      'Surds and indices — simplification',
      'Basic number theory — prime numbers, composite, prime factorisation',
    ],
    mostAsked: 'HCF/LCM problems, surd simplification, divisibility rules.',
  },
];

// ─── ENGLISH DATA ─────────────────────────────────────────────────────────────
const ENGLISH_SECTIONS: EnglishSection[] = [
  {
    id: 'e1', title: 'Grammar & Usage', wt: 'high', qRange: '20–25',
    brief: 'Grammar is the single largest English component — rules and error spotting dominate.',
    topics: [
      'Parts of speech — usage focus: noun, pronoun, verb, adjective, adverb, preposition, conjunction',
      'Tenses — all 12 tenses, sequence of tenses, common errors',
      'Active and passive voice — all tenses, interrogative, imperative forms',
      'Direct and indirect speech — statements, questions, commands',
      'Subject-verb agreement — singular/plural, collective nouns, indefinite pronouns',
      'Articles — a, an, the — rules and exceptions',
      'Prepositions — at, in, on, by, for, since, during, between, among, with',
      'Conjunctions — coordinating, subordinating, correlative',
      'Error spotting — identify grammatical errors in sentences',
      'Sentence improvement — choose the better construction',
    ],
    mostAsked: 'Tenses (error spotting), active/passive voice, direct/indirect speech.',
  },
  {
    id: 'e2', title: 'Vocabulary', wt: 'medium', qRange: '10–15',
    brief: 'Synonyms, antonyms, and one-word substitution — a strong vocabulary gives easy marks.',
    topics: [
      'Synonyms — meaning-based word choice (context matters)',
      'Antonyms — opposites in context',
      'One-word substitution — single word for a definition or phrase',
      'Idioms and phrases — meaning and usage of common idioms',
      'Word analogies — pair relationships (A:B :: C:D)',
      'Spelling correction — identify correctly/incorrectly spelled word',
      'Words often confused — affect/effect, accept/except, principal/principle',
    ],
    mostAsked: 'Synonyms in context, one-word substitution, idioms and phrases.',
  },
  {
    id: 'e3', title: 'Reading Comprehension', wt: 'medium', qRange: '8–12',
    brief: 'Read carefully — questions test inference and vocabulary in context, not just surface meaning.',
    topics: [
      'Unseen passage reading — factual and inferential questions',
      'Title/main idea identification',
      'Vocabulary in context — meaning of underlined word/phrase in passage',
      'Author\'s tone and purpose',
      'True/false based on passage',
    ],
    mostAsked: 'Inference-based questions, vocabulary in context, main idea.',
  },
  {
    id: 'e4', title: 'Ordering & Completion', wt: 'low', qRange: '5–8',
    brief: 'Sentence ordering and fill-in-the-blank — tests logical flow and language feel.',
    topics: [
      'Sentence ordering — rearrange jumbled sentences into a coherent paragraph',
      'Cloze test / fill in the blanks — choose the correct word from options',
      'Para completion — choose the sentence that best fits the end or start of a paragraph',
    ],
    mostAsked: 'Sentence reordering, fill-in-the-blank cloze tests.',
  },
];

// ─── GK DATA ──────────────────────────────────────────────────────────────────
const GK_SUBJECTS: GKSubject[] = [
  {
    id: 'gk1', title: 'Physics', marks: 400, wt: 'high', qRange: '20–25',
    brief: 'Largest GK subject — NCERT Class 9–12 Physics is the source. Concepts matter more than formulas.',
    topics: [
      'Units and dimensions — SI system, dimensional analysis, conversion',
      'Motion — kinematics (equations of motion), relative velocity, projectile motion',
      'Newton\'s Laws of Motion — inertia, F=ma, action-reaction, friction',
      'Work, Energy and Power — kinetic and potential energy, conservation, power',
      'Gravitation — Kepler\'s laws, gravitational force, g variation, satellites, escape velocity',
      'Properties of matter — elasticity (Hooke\'s law, Young\'s modulus), surface tension, viscosity, pressure in fluids',
      'Heat and thermodynamics — temperature scales, specific heat, latent heat, thermodynamic laws',
      'Waves — types, speed, frequency, wavelength, sound, Doppler effect',
      'Optics — reflection, refraction, lenses, mirrors, optical instruments, dispersion',
      'Electricity and magnetism — Ohm\'s law, Kirchhoff\'s laws, circuits, magnetic effect, electromagnetic induction',
      'Modern physics — radioactivity, nuclear fission and fusion, photoelectric effect, X-rays, atomic models',
    ],
    mostAsked: 'Laws of motion, optics (mirrors and lenses), electricity circuits, gravitation, thermodynamics.',
  },
  {
    id: 'gk2', title: 'Chemistry', marks: 400, wt: 'medium', qRange: '12–16',
    brief: 'NCERT Class 8–10 Chemistry covers 80% of what\'s asked — focus on reactions, periodic table, and everyday chemistry.',
    topics: [
      'Physical and chemical changes — properties of matter, mixtures and compounds',
      'Elements, compounds and mixtures — symbols, valency',
      'Periodic table — periods, groups, properties trends, s/p/d blocks',
      'Chemical bonding — ionic, covalent, hydrogen bonding',
      'Acids, bases and salts — pH scale, indicators, neutralization',
      'Metals and non-metals — properties, reactivity series, extraction of metals',
      'Carbon and its compounds — organic chemistry basics, hydrocarbons, functional groups, IUPAC basics',
      'Chemical reactions — types (combination, decomposition, displacement, redox), balancing',
      'Electrochemistry — electrolysis, galvanic cells, Faraday\'s laws',
      'Common chemicals and their uses — bleaching powder, baking soda, plaster of Paris, soap, fertilizers',
    ],
    mostAsked: 'Periodic table trends, acids/bases/salts, carbon compounds, reactivity series.',
  },
  {
    id: 'gk3', title: 'General Science (Biology)', marks: 400, wt: 'medium', qRange: '10–14',
    brief: 'Focus on human body systems, diseases, and basic biology — Class 9–10 NCERT covers most of it.',
    topics: [
      'Cell — structure, types, cell division (mitosis/meiosis), organelles and functions',
      'Living and non-living — characteristics of life, classification (5 kingdoms)',
      'Plant biology — photosynthesis, respiration, transpiration, plant reproduction, tropism',
      'Human body — digestive, circulatory, respiratory, nervous, excretory, reproductive systems',
      'Endocrine system — hormones and glands (insulin, adrenaline, thyroxine)',
      'Genetics — Mendel\'s laws, dominant/recessive, DNA basics, heredity',
      'Diseases — bacterial, viral, protozoan, fungal; vaccination; immunity basics',
      'Nutrition — vitamins, minerals, deficiency diseases, balanced diet',
      'Ecology — food chain, food web, ecosystem, biomes, environmental issues',
    ],
    mostAsked: 'Blood groups, human digestive system, diseases and vaccines, photosynthesis, vitamins and deficiency.',
  },
  {
    id: 'gk4', title: 'History & Freedom Movement', marks: 400, wt: 'medium', qRange: '12–16',
    brief: 'Ancient and medieval India are lighter — focus heavily on modern India (1857 onwards) and freedom movement.',
    topics: [
      'Ancient India — Indus Valley, Vedic period, Buddhism & Jainism, Maurya, Gupta, South Indian kingdoms',
      'Medieval India — Delhi Sultanate, Mughal Empire, Bhakti and Sufi movements, Maratha Empire',
      'European arrival — Portuguese, Dutch, British, French; Battle of Plassey and Buxar',
      'British expansion — Subsidiary Alliance, Doctrine of Lapse',
      'Revolt of 1857 — causes, key leaders, centres, outcome, significance',
      'Reform movements — Ram Mohan Roy, Brahmo Samaj, Arya Samaj, Vivekananda',
      'Early nationalism — INC founding (1885), Moderates vs Extremists',
      'Partition of Bengal (1905), Swadeshi Movement',
      'Gandhi and mass movements — Non-Cooperation (1920), Civil Disobedience (1930), Quit India (1942)',
      'Revolutionary nationalism — Bhagat Singh, Chandrashekhar Azad, INA and Subhas Chandra Bose',
      'Constitutional developments — Morley-Minto, Montagu-Chelmsford, Government of India Act 1935',
      'Partition and Independence — Cabinet Mission, Mountbatten Plan, 1947, integration of princely states',
    ],
    mostAsked: 'Revolt of 1857, Gandhi\'s movements, key dates and leaders, Mughal administration, Ashoka.',
  },
  {
    id: 'gk5', title: 'Geography', marks: 400, wt: 'medium', qRange: '12–16',
    brief: 'Mix of physical and Indian geography — maps, climate, rivers, and resources are the most tested areas.',
    topics: [
      'Earth — shape, size, rotation, revolution, seasons, solstice and equinox',
      'Latitudes and longitudes — standard meridian, time zones',
      'Lithosphere — rocks and minerals, plate tectonics, earthquakes, volcanoes',
      'Atmosphere — layers, composition, weather vs climate, pressure belts, winds, monsoons',
      'Hydrosphere — ocean currents (warm and cold), tides, coral reefs',
      'Indian physical divisions — Himalayan region, Northern Plains, Peninsular Plateau, Coastal Plains, Islands',
      'Rivers — Himalayan rivers (Ganga, Yamuna, Brahmaputra) and Peninsular rivers — tributaries, dams',
      'Climate — Indian monsoon mechanism, seasons, rainfall distribution, cyclones',
      'Soils — types (alluvial, black, red, laterite, desert, mountain) and distribution',
      'Agriculture — major crops and producing states, green revolution',
      'Minerals and industries — coal, iron ore, petroleum, major industrial regions',
      'Population — census basics, density, migration, urbanisation, transport network',
    ],
    mostAsked: 'Indian rivers, monsoon, physical divisions, soils, minerals and industries.',
  },
  {
    id: 'gk6', title: 'Current Events (Defence & General)', marks: 400, wt: 'medium', qRange: '10–14',
    brief: 'Mostly from the 12 months before the exam — defence acquisitions, exercises, appointments, and national events.',
    topics: [
      'Defence acquisitions — major weapon systems inducted (fighter jets, submarines, missiles, ships)',
      'Military exercises — bilateral and multilateral exercises India participates in',
      'Senior appointments — Chief of Defence Staff, Army/Navy/Air Force chiefs',
      'Awards and honours — Param Vir Chakra, Ashok Chakra, recent Gallantry award recipients',
      'National events — major government schemes, budget highlights relevant to defence and youth',
      'Science and technology — ISRO missions, DRDO developments, major launches',
      'Sports — recent Olympic, Asian Games, Commonwealth Games — Indian medals',
      'International relations — India\'s key diplomatic events, UN, SCO, QUAD, G20',
    ],
    mostAsked: 'Military exercises with countries, defence acquisitions, ISRO missions, Gallantry awards.',
  },
];

// ─── WEIGHTAGE TABLE DATA ──────────────────────────────────────────────────────
const TABLE_DATA = [
  { subject: 'Differential Calculus', paper: 'Maths', marks: 300, q: '15–20', wt: 'high' as Wt },
  { subject: 'Trigonometry', paper: 'Maths', marks: 300, q: '15–20', wt: 'high' as Wt },
  { subject: 'Algebra', paper: 'Maths', marks: 300, q: '15–18', wt: 'high' as Wt },
  { subject: 'Integral Calculus + DEs', paper: 'Maths', marks: 300, q: '12–18', wt: 'high' as Wt },
  { subject: 'Matrices & Determinants', paper: 'Maths', marks: 300, q: '12–16', wt: 'high' as Wt },
  { subject: 'Analytical Geometry 2D', paper: 'Maths', marks: 300, q: '12–16', wt: 'high' as Wt },
  { subject: 'Statistics & Probability', paper: 'Maths', marks: 300, q: '10–14', wt: 'medium' as Wt },
  { subject: 'Vector Algebra', paper: 'Maths', marks: 300, q: '8–12', wt: 'medium' as Wt },
  { subject: 'Analytical Geometry 3D', paper: 'Maths', marks: 300, q: '8–12', wt: 'medium' as Wt },
  { subject: 'Number Theory', paper: 'Maths', marks: 300, q: '3–6', wt: 'low' as Wt },
  { subject: 'Physics', paper: 'GAT', marks: 400, q: '20–25', wt: 'high' as Wt },
  { subject: 'English Grammar', paper: 'GAT', marks: 200, q: '20–25', wt: 'high' as Wt },
  { subject: 'History (Modern)', paper: 'GAT', marks: 400, q: '12–16', wt: 'medium' as Wt },
  { subject: 'Geography', paper: 'GAT', marks: 400, q: '12–16', wt: 'medium' as Wt },
  { subject: 'Chemistry', paper: 'GAT', marks: 400, q: '12–16', wt: 'medium' as Wt },
  { subject: 'General Science (Biology)', paper: 'GAT', marks: 400, q: '10–14', wt: 'medium' as Wt },
  { subject: 'Current Events', paper: 'GAT', marks: 400, q: '10–14', wt: 'medium' as Wt },
  { subject: 'English Vocabulary', paper: 'GAT', marks: 200, q: '10–15', wt: 'medium' as Wt },
  { subject: 'English Comprehension', paper: 'GAT', marks: 200, q: '8–12', wt: 'medium' as Wt },
  { subject: 'English Ordering', paper: 'GAT', marks: 200, q: '5–8', wt: 'low' as Wt },
];

// ─── ACCORDION CARD ───────────────────────────────────────────────────────────
function AccordionCard({ title, wt, qRange, brief, topics, mostAsked, isOpen, onToggle }: {
  title: string; wt: Wt; qRange: string; brief: string;
  topics: string[]; mostAsked: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div style={{
      border: '1px solid #E5E7EB', borderRadius: 12, overflow: 'hidden',
      background: '#fff', marginBottom: 8,
      boxShadow: isOpen ? '0 4px 16px rgba(29,63,171,0.07)' : '0 1px 3px rgba(0,0,0,0.04)',
      transition: 'box-shadow 0.2s',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 12,
          padding: '16px 20px', background: isOpen ? '#F8FAFF' : '#fff',
          border: 'none', cursor: 'pointer', textAlign: 'left',
          borderBottom: isOpen ? '1px solid #E5E7EB' : 'none',
          transition: 'background 0.15s',
        }}
      >
        <span style={{ flex: 1, fontSize: 15, fontWeight: 600, color: '#1A1A2E' }}>{title}</span>
        <WtPill wt={wt} small />
        <span style={{ fontSize: 12, color: '#6B7280', minWidth: 60, textAlign: 'right', flexShrink: 0 }}>
          ~{qRange} Qs
        </span>
        <span style={{
          width: 20, height: 20, borderRadius: '50%', background: '#EEF2FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, fontSize: 12, color: '#1D3FAB',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
        }}>▾</span>
      </button>

      {isOpen && (
        <div style={{ padding: '20px 20px 16px' }}>
          <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 16, fontStyle: 'italic', lineHeight: 1.6 }}>
            {brief}
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {topics.map((t, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D3FAB', flexShrink: 0, marginTop: 7 }} />
                {t}
              </li>
            ))}
          </ul>
          <div style={{
            marginTop: 16, background: '#FFFBEB', border: '1px solid #FCD34D',
            borderLeft: '3px solid #D4900A', borderRadius: '0 8px 8px 0',
            padding: '10px 14px',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#92400E', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              ⭐ Most asked subtopics
            </div>
            <div style={{ fontSize: 13, color: '#78350F', lineHeight: 1.6 }}>{mostAsked}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SUBJECT DIVIDER ──────────────────────────────────────────────────────────
function SubjectDivider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '32px 0 20px' }}>
      <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
      <span style={{
        fontSize: 11, fontWeight: 700, color: '#1D3FAB', background: '#EEF2FF',
        padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap',
      }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function SyllabusPage() {
  const [paper, setPaper] = useState<'maths' | 'gat'>('maths');
  const [openMaths, setOpenMaths] = useState<number | null>(null);
  const [openEng, setOpenEng] = useState<string | null>(null);
  const [openGK, setOpenGK] = useState<string | null>(null);

  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: '#F7F8FC', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div style={{ background: 'linear-gradient(135deg,#1A1A2E 0%,#1D3FAB 100%)', padding: '64px 24px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
            Home → <a href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>NDA Exam</a> → Syllabus
          </div>
          {/* Eyebrow */}
          <span style={{ fontSize: 11, fontWeight: 600, color: '#93C5FD', background: 'rgba(147,197,253,0.15)', padding: '4px 12px', borderRadius: 20, display: 'inline-block', marginBottom: 16 }}>
            Official UPSC syllabus
          </span>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', lineHeight: 1.15 }}>
            NDA complete syllabus
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', maxWidth: 640, lineHeight: 1.7, margin: '0 0 28px' }}>
            Paper I — Mathematics (300 marks) and Paper II — General Ability Test (600 marks). Topic-wise breakdown with weightage analysis from 2019–2026 PYQs.
          </p>
          {/* Stat Pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['2', 'Papers'], ['270', 'Questions'], ['900', 'Total marks']].map(([n, l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 10, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{n}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY TAB STRIP ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid #E5E7EB', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 8, alignItems: 'center', height: 60 }}>
          <button
            onClick={() => setPaper('maths')}
            style={{
              padding: '8px 20px', borderRadius: 24, fontWeight: 600, fontSize: 13, cursor: 'pointer',
              background: paper === 'maths' ? '#1D3FAB' : 'transparent',
              color: paper === 'maths' ? '#fff' : '#4B5563',
              border: paper === 'maths' ? '1.5px solid #1D3FAB' : '1.5px solid #E5E7EB',
              fontFamily: 'inherit', transition: 'all .15s', display: 'flex', alignItems: 'center', gap: 8,
            }}
          >
            Paper I — Mathematics
            <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 12, background: paper === 'maths' ? 'rgba(255,255,255,0.2)' : '#EEF2FF', color: paper === 'maths' ? '#fff' : '#1D3FAB' }}>300 marks</span>
          </button>
          <button
            onClick={() => setPaper('gat')}
            style={{
              padding: '8px 20px', borderRadius: 24, fontWeight: 600, fontSize: 13, cursor: 'pointer',
              background: paper === 'gat' ? '#1D3FAB' : 'transparent',
              color: paper === 'gat' ? '#fff' : '#4B5563',
              border: paper === 'gat' ? '1.5px solid #1D3FAB' : '1.5px solid #E5E7EB',
              fontFamily: 'inherit', transition: 'all .15s', display: 'flex', alignItems: 'center', gap: 8,
            }}
          >
            Paper II — GAT
            <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 12, background: paper === 'gat' ? 'rgba(255,255,255,0.2)' : '#EEF2FF', color: paper === 'gat' ? '#fff' : '#1D3FAB' }}>600 marks</span>
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px 80px' }}>

        {/* Weightage Legend */}
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 8 }}>
            {Object.entries(WT_COLORS).map(([k, v]) => (
              <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: v.text, background: v.bg, padding: '4px 12px', borderRadius: 20 }}>
                {v.label} weightage — {k === 'high' ? '15–25' : k === 'medium' ? '8–14' : '1–7'} questions historically
              </span>
            ))}
          </div>
          <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>Weightage based on analysis of NDA PYQs 2019–2026 (20 papers)</p>
        </div>

        {/* ══ MATHS TAB ══ */}
        {paper === 'maths' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#1D3FAB', background: '#EEF2FF', padding: '3px 10px', borderRadius: 20 }}>Paper I</span>
                <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1A1A2E', margin: '8px 0 4px' }}>Mathematics — 300 marks</h2>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>120 Questions · 10 chapters · −0.83 per wrong answer</p>
              </div>
            </div>
            {MATHS_CHAPTERS.map((ch) => (
              <AccordionCard
                key={ch.id}
                title={`Ch ${ch.id}. ${ch.title}`}
                wt={ch.wt} qRange={ch.qRange} brief={ch.brief}
                topics={ch.topics} mostAsked={ch.mostAsked}
                isOpen={openMaths === ch.id}
                onToggle={() => setOpenMaths(openMaths === ch.id ? null : ch.id)}
              />
            ))}
          </div>
        )}

        {/* ══ GAT TAB ══ */}
        {paper === 'gat' && (
          <div>
            {/* English */}
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#1D3FAB', background: '#EEF2FF', padding: '3px 10px', borderRadius: 20 }}>Paper II — Part A</span>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1A1A2E', margin: '8px 0 4px' }}>English — 200 marks</h2>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 20px' }}>50 Questions · Tests grammar, vocabulary, reading comprehension, and language use.</p>
              {ENGLISH_SECTIONS.map((s) => (
                <AccordionCard
                  key={s.id}
                  title={s.title}
                  wt={s.wt} qRange={s.qRange} brief={s.brief}
                  topics={s.topics} mostAsked={s.mostAsked}
                  isOpen={openEng === s.id}
                  onToggle={() => setOpenEng(openEng === s.id ? null : s.id)}
                />
              ))}
            </div>

            {/* GK Subjects */}
            <SubjectDivider label="Paper II — Part B: General Knowledge (400 marks)" />
            <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 20 }}>100 Questions · Covers Physics, Chemistry, General Science, History, Geography, and Current Events.</p>

            {GK_SUBJECTS.map((s, i) => (
              <div key={s.id}>
                {i > 0 && <SubjectDivider label={s.title} />}
                <AccordionCard
                  title={s.title}
                  wt={s.wt} qRange={s.qRange} brief={s.brief}
                  topics={s.topics} mostAsked={s.mostAsked}
                  isOpen={openGK === s.id}
                  onToggle={() => setOpenGK(openGK === s.id ? null : s.id)}
                />
              </div>
            ))}
          </div>
        )}

        {/* ── WEIGHTAGE SUMMARY TABLE ── */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A2E', marginBottom: 4 }}>Weightage summary</h2>
          <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 20 }}>All chapters sorted by approximate question count across both papers.</p>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1A1A2E', color: '#fff' }}>
                  {['Subject / Chapter', 'Paper', 'Marks', 'Approx. Questions', 'Weightage'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 12, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_DATA.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#F9FAFB', borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500, color: '#1A1A2E' }}>{row.subject}</td>
                    <td style={{ padding: '12px 16px', color: '#6B7280' }}>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 12, background: row.paper === 'Maths' ? '#EEF2FF' : '#F0FDF4', color: row.paper === 'Maths' ? '#1D3FAB' : '#166534' }}>
                        {row.paper}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#6B7280' }}>{row.marks}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#1A1A2E' }}>~{row.q}</td>
                    <td style={{ padding: '12px 16px' }}><WtPill wt={row.wt} small /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── TOPPER STRATEGY CALLOUT ── */}
        <div style={{
          marginTop: 48, background: '#FFFBEB',
          border: '1px solid #FCD34D', borderRadius: 16, padding: 32,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Expert Strategy</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A2E', marginBottom: 24 }}>Where to focus first — topper strategy</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              {
                icon: '📐', title: 'Maths: 150+ marks target',
                points: [
                  'Master Calculus (Diff + Integral) — 30–35 Qs combined',
                  'Trigonometry is non-negotiable — 15–20 questions',
                  'Algebra and Matrices together — 25–35 questions',
                  'These 3 areas alone = 70–80% of Maths marks',
                ],
              },
              {
                icon: '📚', title: 'GAT: 280+ marks target',
                points: [
                  'Physics: study NCERT Class 9–12 completely — 20–25 Qs',
                  'English Grammar: daily 30-minute grammar practice',
                  'History: focus 80% time on Modern India (1857–1947)',
                  'Geography: memorize rivers, soils, and climate',
                ],
              },
              {
                icon: '⚠️', title: 'Avoid these mistakes',
                points: [
                  'Don\'t ignore Maths — many students focus only on GK and fail Paper I cutoff',
                  'Both papers have individual cutoffs — you must clear both separately',
                  'Negative marking: −0.83 per wrong in Maths and −1.33 in GAT',
                  'Start current affairs prep at least 6 months before the exam',
                ],
              },
            ].map(col => (
              <div key={col.title} style={{ background: '#fff', border: '1px solid #FDE68A', borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{col.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', marginBottom: 12 }}>{col.title}</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.points.map((p, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#D4900A', flexShrink: 0, marginTop: 8 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── DOWNLOAD CTA ── */}
        <div style={{
          marginTop: 40, background: '#fff', border: '2px solid #1D3FAB',
          borderRadius: 16, padding: '32px 24px', textAlign: 'center',
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', marginBottom: 8 }}>
            Download complete NDA syllabus PDF
          </div>
          <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 20 }}>
            Official UPSC format + our weightage annotations
          </p>
          <a href="/previous-year-papers" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#1D3FAB', color: '#fff', padding: '12px 28px',
            borderRadius: 28, fontSize: 14, fontWeight: 700, textDecoration: 'none',
            cursor: 'pointer', transition: 'background 0.15s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#1535A0')}
          onMouseOut={e => (e.currentTarget.style.background = '#1D3FAB')}>
            <i className="ti ti-download" /> Download PDF
          </a>
          <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 16, margin: '16px 0 0' }}>
            Also available:{' '}
            <a href="/previous-year-papers" style={{ color: '#1D3FAB', textDecoration: 'none', fontWeight: 500 }}>Chapter-wise question bank</a>
            {' · '}
            <a href="/rank-predictor" style={{ color: '#1D3FAB', textDecoration: 'none', fontWeight: 500 }}>Topic tracker spreadsheet</a>
          </p>
        </div>

        {/* ── RELATED PAGES ── */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A1A2E', marginBottom: 16 }}>Related pages</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/exam-pattern', label: 'Exam pattern', desc: 'Marking scheme & paper structure' },
              { href: '/previous-year-papers', label: 'Previous year papers', desc: 'PYQs from 2015–2025' },
              { href: '/rank-predictor', label: 'Rank predictor', desc: 'Calculate your expected AIR' },
              { href: '/eligibility', label: 'Eligibility criteria', desc: 'Age, height & medical standards' },
            ].map(link => (
              <a key={link.href} href={link.href} style={{
                display: 'block', background: '#fff', border: '1px solid #E5E7EB',
                borderRadius: 12, padding: '16px 18px', textDecoration: 'none',
                transition: 'border-color .15s, box-shadow .15s',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#1D3FAB'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(29,63,171,0.1)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1D3FAB', marginBottom: 4 }}>{link.label}</div>
                <div style={{ fontSize: 12, color: '#6B7280' }}>{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
