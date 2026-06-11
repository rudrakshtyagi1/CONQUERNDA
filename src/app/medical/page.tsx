'use client';
import Link from 'next/link';
import { useState } from 'react';

const medicalTests = [
  {
    id: 'general',
    day: 'Day 1 — Morning',
    title: 'General Physical Examination',
    color: '#1565C0',
    bg: '#E8F2FF',
    icon: '🩺',
    procedures: [
      {
        name: 'Height & Weight Measurement',
        detail: 'Standing height measured without footwear using a stadiometer. Weight measured in light clothing. BMI is calculated. Minimum heights: Army/Navy — 157 cm (male), 152 cm (female); Air Force — 162.5 cm. Weight must be proportionate per standard tables.',
      },
      {
        name: 'Chest Measurement',
        detail: 'Measured both on full inspiration and full expiration. Minimum chest expansion required is 5 cm. A flat or barrel chest is disqualifying. The difference between expanded and unexpanded must meet the standard.',
      },
      {
        name: 'Skin Examination',
        detail: 'Full body skin inspection for tattoos (not permitted on face, neck, or hands — inner forearm only for tribal customs), skin diseases like psoriasis, eczema, fungal infections, keloids, and severe acne that may indicate underlying conditions.',
      },
      {
        name: 'Lymph Node Examination',
        detail: 'All major lymph node groups examined (cervical, axillary, inguinal). Enlarged or matted nodes may indicate tuberculosis, lymphoma, or other conditions requiring investigation.',
      },
      {
        name: 'Teeth & Oral Cavity',
        detail: 'Minimum 14 dental points required (each present healthy tooth = 2 points, healthy molar = 2 points). Decayed, broken, or missing teeth must be filled or replaced before the exam. Poor oral hygiene alone is not disqualifying if teeth are present.',
      },
    ],
  },
  {
    id: 'vision',
    day: 'Day 1 — Afternoon',
    title: 'Vision & Eye Examination',
    color: '#2E7D32',
    bg: '#E8F5E9',
    icon: '👁️',
    procedures: [
      {
        name: 'Distant Vision (Snellen Chart)',
        detail: 'Tested at 6 metres using Snellen chart. Army standard: Better eye 6/6, Worse eye 6/9. Air Force flying: 6/6 in both eyes uncorrected. Navy: 6/6 or 6/9 depending on branch. Colour-coded chart may be used for illiteracy-adjusted testing.',
      },
      {
        name: 'Near Vision Test',
        detail: 'Tested using Jaeger chart. Must read N5 with better eye and N10 with worse eye. Tests ability to read maps, instruments, and fine print in operational conditions.',
      },
      {
        name: 'Refraction Test',
        detail: 'Full ophthalmological refraction to determine exact prescription. Myopia (short-sightedness): Maximum -2.5D for Army/Navy, -0.5D or NIL for Air Force flying. Hypermetropia: Maximum +3.5D Army, +2.0D Air Force. Astigmatism: Maximum 0.75D Air Force.',
      },
      {
        name: 'Colour Vision Test',
        detail: 'Ishihara plates test used first, followed by Lantern test if borderline. Graded CP-I to CP-IV. CP-I (perfect colour vision) required for Air Force. CP-III acceptable for Army. Deuteranopia or protanopia (red-green colour blindness) is disqualifying for Air Force.',
      },
      {
        name: 'Night Vision & Field of Vision',
        detail: 'Dark adaptation test using scotopic luminance or standard apparatus. Field of vision tested by perimetry — must be minimum 120 degrees combined. Tunnel vision or significant peripheral loss is disqualifying.',
      },
      {
        name: 'Binocular Vision & Squint',
        detail: 'Convergence and accommodation tested. Manifest squint (strabismus) is disqualifying. Latent squint (phoria) is evaluated — mild phoria may be accepted depending on degree. Depth perception tested with Synoptophore or Stereoscope.',
      },
      {
        name: 'Slit-Lamp Examination',
        detail: 'Specialist examination of anterior segment: cornea, lens (cataract), anterior chamber. Posterior segment via fundus examination. Any active pathology, optic disc abnormality, or significant retinal lesion is disqualifying.',
      },
      {
        name: 'LASIK / PRK Surgery Note',
        detail: 'LASIK surgery is NOT permitted for Air Force flying branch. For Army/Navy, post-LASIK candidates may be considered if surgery was performed at least 1 year prior, no complications, residual refraction within limits, and the cornea is stable. PRK is evaluated similarly.',
      },
    ],
  },
  {
    id: 'hearing',
    day: 'Day 1 — Afternoon',
    title: 'Hearing & ENT Examination',
    color: '#7B1FA2',
    bg: '#F3E5F5',
    icon: '👂',
    procedures: [
      {
        name: 'Whisper Test (Screening)',
        detail: 'Initial screening — candidate must hear a forced whisper at 610 cm (20 feet) from each ear separately while the other ear is masked. Failure triggers audiometry.',
      },
      {
        name: 'Pure Tone Audiometry',
        detail: 'Formal hearing assessment at frequencies 250 Hz, 500 Hz, 1000 Hz, 2000 Hz, 4000 Hz, 6000 Hz, 8000 Hz. Average hearing loss in better ear must not exceed 30 dB in speech frequencies. Loss at 4000 Hz (noise-induced) is a key marker.',
      },
      {
        name: 'Tympanometry',
        detail: 'Tests middle ear pressure and eardrum mobility. Identifies conditions like otitis media with effusion, ossicular chain disruption, or Eustachian tube dysfunction.',
      },
      {
        name: 'ENT Cavity Examination',
        detail: 'Nose: Deviated Nasal Septum (DNS) assessed — significant DNS causing obstruction is disqualifying. Nasal polyps, chronic sinusitis reviewed. Throat: Tonsillar hypertrophy graded (Grade III/IV may be disqualifying). Voice/speech assessed. Laryngoscopy if indicated.',
      },
      {
        name: 'Vestibular Function Test',
        detail: 'For Air Force flying candidates, a Barany Chair (caloric) test assesses vestibular labyrinthine function. Vertigo history is carefully investigated. Ménière\'s disease is permanently disqualifying.',
      },
    ],
  },
  {
    id: 'systemic',
    day: 'Day 2 — Morning',
    title: 'Systemic Examination',
    color: '#E65100',
    bg: '#FFF3E0',
    icon: '❤️',
    procedures: [
      {
        name: 'Cardiovascular System',
        detail: 'Full cardiac auscultation for murmurs, gallops, rubs. Peripheral pulses assessed. Blood pressure measured (must be 100–140 systolic, 60–90 diastolic). ECG (12-lead) performed on all candidates. Echocardiogram if any murmur detected. Any valvular abnormality, arrhythmia, or structural defect is disqualifying.',
      },
      {
        name: 'Respiratory System',
        detail: 'Auscultation of lung fields. Spirometry (PFT) may be performed for Air Force. History of asthma is carefully evaluated — exercise-induced bronchospasm or steroid-dependent asthma is disqualifying. Chest X-ray (PA view) mandatory. Tuberculosis history requires complete treatment documentation.',
      },
      {
        name: 'Abdominal Examination',
        detail: 'Inspection for hernias (inguinal, umbilical, femoral — all disqualifying if symptomatic or unrepaired). Liver, spleen, kidney palpated. Varicocele assessed — Grade II/III bilateral varicocele may be disqualifying. Undescended testis is disqualifying.',
      },
      {
        name: 'Nervous System',
        detail: 'Full neurological examination: cranial nerves, motor system, reflexes, sensory examination, cerebellar function. History of epilepsy/seizures is PERMANENTLY disqualifying. History of significant head injury with loss of consciousness investigated. Tremors, gait abnormalities assessed.',
      },
      {
        name: 'Musculoskeletal Assessment',
        detail: 'All joints assessed for range of movement. Flat foot (Pes Planus) graded — Grade III is disqualifying. Scoliosis measured by Cobb angle (>20 degrees is typically disqualifying). Knock knees (Genu Valgum) measured — >5 cm gap disqualifying. Bow legs, leg length discrepancy evaluated.',
      },
      {
        name: 'Spine Examination',
        detail: 'Cervical, thoracic, and lumbar spine range of movement tested. Spondylolysis, spondylolisthesis, significant disc prolapse are disqualifying. X-ray of spine if clinical examination is abnormal. Scheuermann\'s disease (adolescent kyphosis) evaluated.',
      },
    ],
  },
  {
    id: 'laboratory',
    day: 'Day 2 — Afternoon',
    title: 'Laboratory & Radiology',
    color: '#1565C0',
    bg: '#E8F2FF',
    icon: '🔬',
    procedures: [
      {
        name: 'Complete Blood Count (CBC)',
        detail: 'Haemoglobin (minimum 12 g/dL), RBC count, WBC count and differential, platelets. Haemoglobin S (sickle cell trait) testing may be performed in certain cases. Significant anaemia, polycythaemia, or blood cell abnormalities are disqualifying.',
      },
      {
        name: 'Urine Analysis',
        detail: 'Routine and microscopic examination. Glucose (diabetes screening), protein (kidney disease), blood, pus cells. Persistent proteinuria or haematuria requires further investigation (ultrasound kidneys). Glucosuria triggers blood glucose testing.',
      },
      {
        name: 'Blood Glucose (Fasting & PP)',
        detail: 'Fasting blood glucose and 2-hour postprandial testing. Any value suggesting impaired glucose tolerance or diabetes mellitus is disqualifying — even borderline values may require an OGTT (Oral Glucose Tolerance Test).',
      },
      {
        name: 'Chest X-Ray (PA View)',
        detail: 'Standard posterior-anterior chest X-ray. Checked for: active TB, old TB (Ghon\'s focus evaluated), cardiomegaly (cardiothoracic ratio must be <50%), pleural effusion, mediastinal masses, rib abnormalities, scoliosis, and lung pathology.',
      },
      {
        name: 'Electrocardiogram (ECG)',
        detail: '12-lead resting ECG. Evaluated for: sinus bradycardia (<50 bpm), right/left bundle branch blocks, pre-excitation syndromes (WPW), prolonged QT interval, heart blocks, ST/T wave changes, and arrhythmias. Treadmill stress test (TMT) if indicated.',
      },
      {
        name: 'Liver Function Tests (LFT)',
        detail: 'SGOT, SGPT, bilirubin, alkaline phosphatase, total protein, albumin. Elevated transaminases may suggest hepatitis or fatty liver. Hepatitis B surface antigen (HBsAg) and anti-HCV tested. Active Hepatitis B/C infection is disqualifying.',
      },
      {
        name: 'HIV Test',
        detail: 'ELISA-based HIV 1 & 2 screening. A reactive result is confirmed by Western Blot. HIV positive status is permanently and absolutely disqualifying for all three services.',
      },
      {
        name: 'Lipid Profile & Kidney Function',
        detail: 'Cholesterol, LDL, HDL, triglycerides. Serum creatinine, urea, electrolytes for kidney function. Abnormal creatinine triggers ultrasound of kidneys. Kidney stones (urolithiasis) history evaluated — bilateral or recurrent stones may be disqualifying.',
      },
    ],
  },
  {
    id: 'specialist',
    day: 'Day 3 (if required)',
    title: 'Specialist Review & Board Decision',
    color: '#37474F',
    bg: '#ECEFF1',
    icon: '📋',
    procedures: [
      {
        name: 'Review Medical Board (RMB)',
        detail: 'If the initial board is inconclusive or finds a borderline condition, a Review Medical Board (RMB) is convened. The candidate is referred to a specialist military hospital (e.g., AFMSD, Command Hospital) for further evaluation.',
      },
      {
        name: 'Appeal Process',
        detail: 'If declared UNFIT, the candidate has the right to appeal to an Appellate Medical Board (AMB) within 42 days. The AMB is the final authority. The AMB\'s decision is binding and no further appeal is entertained.',
      },
      {
        name: 'Temporary Unfit (TU) Status',
        detail: 'For conditions that are treatable (e.g., dental issues, minor hernia, correctable weight), a "Temporarily Unfit" status may be assigned with a specific review date — typically 3–6 months. The candidate must get the condition treated and re-appear.',
      },
      {
        name: 'PULHHEEMS System',
        detail: 'Indian Military Medicine uses the PULHHEEMS system for fitness grading: P=Physical capacity, U=Upper limbs, L=Lower limbs, H=Hearing (left), H=Hearing (right), E=Eyesight (right), E=Eyesight (left), M=Mental capacity, S=Stability (emotional). Shape 1 is perfect fitness.',
      },
    ],
  },
];

const commonRejections = [
  { condition: 'Colour Blindness (CP-IV)', serviceImpact: 'All services flying; Army/Navy ground also affected' },
  { condition: 'Epilepsy / Seizure history', serviceImpact: 'Permanently disqualifying for ALL services' },
  { condition: 'HIV Positive', serviceImpact: 'Permanently disqualifying for ALL services' },
  { condition: 'Diabetes Mellitus', serviceImpact: 'Disqualifying for ALL services (even Type 2 diet-controlled)' },
  { condition: 'Active Hepatitis B/C', serviceImpact: 'Disqualifying; inactive carrier status reviewed case-by-case' },
  { condition: 'Flat Foot Grade III', serviceImpact: 'Disqualifying for Army; reviewed for Navy/AF' },
  { condition: 'LASIK Surgery', serviceImpact: 'Disqualifying for Air Force flying; Army/Navy case-by-case' },
  { condition: 'Manifest Squint', serviceImpact: 'Disqualifying for all services' },
  { condition: 'Significant DNS with obstruction', serviceImpact: 'Surgery before re-examination required' },
  { condition: 'Undescended testis', serviceImpact: 'Disqualifying (requires orchidopexy and review)' },
  { condition: 'Unrepaired Hernia', serviceImpact: 'Temporary unfit; surgery + 6-month review' },
  { condition: 'Scoliosis >20° Cobb angle', serviceImpact: 'Disqualifying for all services' },
];

export default function MedicalPage() {
  const [activeTest, setActiveTest] = useState(0);

  return (
    <div className="min-h-screen bg-[#F4F8FF] font-['DM_Sans',sans-serif]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white py-20 px-6 relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#FFB300]">
        <div className="max-w-[1080px] mx-auto">
          <Link href="/" className="text-[#E8F2FF] hover:text-white mb-6 inline-block text-sm font-medium transition-colors">← Back to ConquerNDA</Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#90CAF9] mb-3">Post-SSB Process</div>
          <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-7xl mb-4 tracking-wide">Medical Examination</h1>
          <p className="text-xl text-[#E8F2FF] max-w-2xl font-light">
            The complete, procedure-by-procedure breakdown of what happens in the NDA Medical Examination — no surprises.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            {[['3–5 Days', 'Duration'], ['6 Systems', 'Examined'], ['Military Hospital', 'Venue']].map(([v, l]) => (
              <div key={l} className="bg-white/10 rounded-xl p-3 text-center">
                <div className="font-bold text-lg">{v}</div>
                <div className="text-[12px] text-[#90CAF9]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 space-y-12">
        {/* Info Banner */}
        <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-2xl p-6 flex gap-4">
          <span className="text-2xl shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-[#B78103] mb-1">Who Appears for This Medical?</h3>
            <p className="text-[14px] text-[#455A7A] leading-relaxed">
              Only candidates <strong>recommended by the SSB board</strong> (typically 4–6% of SSB attendees) are called for the medical examination. The exam is conducted at designated Command Hospitals or Military Hospitals. Results of the medical are independent of the SSB scores — you can have a perfect SSB score and still be declared medically unfit.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-4">Complete Procedure</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-6">Every Test — Explained</h2>

          {/* Tab Buttons */}
          <div className="flex gap-2 flex-wrap mb-6">
            {medicalTests.map((test, i) => (
              <button key={test.id} onClick={() => setActiveTest(i)}
                className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all border ${activeTest === i ? 'text-white border-transparent' : 'bg-white text-[#455A7A] border-[#C5D8F5] hover:border-[#1565C0] hover:text-[#1565C0]'}`}
                style={activeTest === i ? { background: medicalTests[i].color } : {}}>
                {test.icon} {test.title.split('—')[1]?.trim() || test.title}
              </button>
            ))}
          </div>

          {/* Active Test Panel */}
          <div className="bg-white rounded-2xl border border-[#C5D8F5] shadow-sm overflow-hidden">
            <div className="p-6 border-b" style={{ background: medicalTests[activeTest].bg, borderColor: '#C5D8F5' }}>
              <div className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: medicalTests[activeTest].color }}>
                {medicalTests[activeTest].day}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{medicalTests[activeTest].icon}</span>
                <h3 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide" style={{ color: medicalTests[activeTest].color }}>
                  {medicalTests[activeTest].title}
                </h3>
              </div>
            </div>
            <div className="divide-y divide-gray-50">
              {medicalTests[activeTest].procedures.map((proc, j) => (
                <details key={j} className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#F4F8FF] transition-colors list-none gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                        style={{ background: medicalTests[activeTest].color }}>{j + 1}</span>
                      <span className="font-semibold text-[#0D1B2A] text-[15px]">{proc.name}</span>
                    </div>
                    <span className="shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[11px] transition-transform group-open:rotate-180"
                      style={{ borderColor: medicalTests[activeTest].color, color: medicalTests[activeTest].color }}>▼</span>
                  </summary>
                  <div className="px-5 pb-5 ml-10">
                    <p className="text-[14px] text-[#455A7A] leading-relaxed">{proc.detail}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Common Rejection Reasons */}
        <div className="bg-white rounded-2xl border border-[#C5D8F5] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">❌</span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#DC2626] mb-1">Know Before You Go</div>
              <h2 className="font-['Bebas_Neue',sans-serif] text-3xl text-[#0D1B2A] tracking-wide">Common Disqualifying Conditions</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px] min-w-[500px]">
              <thead>
                <tr className="bg-[#FEF2F2] text-[#DC2626] text-[11px] uppercase tracking-wider">
                  <th className="p-3 border-b border-[#FECACA]">Medical Condition</th>
                  <th className="p-3 border-b border-[#FECACA]">Impact on Service</th>
                </tr>
              </thead>
              <tbody>
                {commonRejections.map((r, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FEF2F2]/30'} hover:bg-[#FEF2F2]/60 transition-colors`}>
                    <td className="p-3 border-b border-gray-50 font-medium text-[#0D1B2A]">{r.condition}</td>
                    <td className="p-3 border-b border-gray-50 text-[#DC2626]">{r.serviceImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Preparation Tips */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#1565C0] mb-2">How to Prepare</div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-4xl text-[#0D1B2A] tracking-wide mb-6">Medical Preparation Checklist</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Before SSB — Get Checked Early',
                items: [
                  'Visit an ophthalmologist — test your refraction accurately',
                  'Get dental work done — fill all cavities, replace missing teeth',
                  'Treat any hernia, varicocele, or skin conditions proactively',
                  'Get a basic blood panel (CBC, blood glucose, LFT) at a private lab',
                  'Treat DNS, sinusitis, or tonsil issues before appearing',
                ],
                color: '#2E7D32',
              },
              {
                title: 'Before Medical Exam',
                items: [
                  'Carry all previous medical records and surgery documentation',
                  'Get required vaccinations — typhoid, hepatitis B if not done',
                  'Avoid heavy exercise 24–48 hours before (can affect ECG, BP)',
                  'Ensure you are well-rested and well-hydrated',
                  'Fasting blood tests — go empty stomach for 10–12 hours',
                ],
                color: '#1565C0',
              },
              {
                title: 'Documents to Carry',
                items: [
                  'UPSC admit card + SSB recommendation letter',
                  'All old prescriptions, spectacle prescriptions',
                  'Allergy or chronic medication history (be honest)',
                  'Previous surgery records (especially ortho, ENT, eye)',
                  'Vaccination certificates',
                ],
                color: '#7B1FA2',
              },
              {
                title: 'Be Honest — Always',
                items: [
                  'Never hide a medical condition — it can lead to permanent disqualification',
                  'Medical history is cross-checked during service tenure',
                  'Fraudulent enrolment is a criminal offence under Army Act',
                  'Borderline conditions are often accepted if properly disclosed',
                  'If Temp Unfit: get treated, get certified, come back stronger',
                ],
                color: '#E65100',
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl border border-[#C5D8F5] p-6 shadow-sm">
                <h3 className="font-bold text-[15px] mb-4" style={{ color: tip.color }}>{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] text-[#455A7A]">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: tip.color }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white rounded-2xl p-8">
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide mb-3">The Medical is Not Your Enemy</h2>
          <p className="text-[#E8F2FF] leading-relaxed max-w-2xl">
            Most candidates who are declared unfit are given a <strong>"Temporarily Unfit"</strong> status for correctable issues like dental problems, weight issues, or hernia. Start your health checks 6–12 months before your SSB so you have time to fix any issues. A healthy body is part of the military mindset — start now.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/fitness" className="bg-white text-[#1565C0] font-bold px-5 py-2.5 rounded-xl text-[14px] hover:bg-[#E8F2FF] transition-colors">
              Start Fitness Plan →
            </Link>
            <Link href="/eligibility" className="bg-white/10 text-white font-bold px-5 py-2.5 rounded-xl text-[14px] hover:bg-white/20 transition-colors border border-white/20">
              Check Eligibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
