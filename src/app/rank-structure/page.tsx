'use client';
import { PageHero, PageLayout, Callout, Card, RelatedStrip, T, SectionLabel } from '@/components/ui/PageShell';

const army = ['Second Lieutenant','Lieutenant','Captain','Major','Lieutenant Colonel','Colonel','Brigadier','Major General','Lieutenant General','General (COAS)'];
const navy = ['Sub Lieutenant','Lieutenant','Lieutenant Commander','Commander','Captain','Commodore','Rear Admiral','Vice Admiral','Admiral','Admiral of the Fleet'];
const af = ['Flying Officer','Flight Lieutenant','Squadron Leader','Wing Commander','Group Captain','Air Commodore','Air Vice Marshal','Air Marshal','Air Chief Marshal','Marshal of IAF'];

const services = [
  { name: 'Indian Army', subtitle: 'After NDA → IMA Dehradun', color: '#2D6A4F', ranks: army },
  { name: 'Indian Navy', subtitle: 'After NDA → INA Ezhimala', color: T.navyM, ranks: navy },
  { name: 'Indian Air Force', subtitle: 'After NDA → AFA Hyderabad', color: '#6B3FA0', ranks: af },
];

const timeline = [
  { years: '0', label: 'Commission', rank: 'Army: 2nd Lt / Navy: Sub Lt / AF: Flying Officer' },
  { years: '6', label: 'Captain / Lt Cdr / Sqn Ldr', rank: 'Time-based seniority' },
  { years: '16', label: 'Colonel / Captain / Gp Capt', rank: 'Merit + ACR-based beyond this' },
  { years: '26', label: 'Brigadier / Commodore / Air Cdre', rank: 'Selection board' },
  { years: '34+', label: 'General / Admiral / ACM', rank: 'Top-level appointment' },
];

export default function RankStructurePage() {
  return (
    <div style={{ fontFamily: "'Inter','DM Sans',sans-serif", background: T.page, minHeight: '100vh' }}>
      <PageHero
        bg={T.navy}
        badge="Career path"
        badgeBg="rgba(255,255,255,0.15)"
        badgeColor="rgba(255,255,255,0.9)"
        h1="Rank structure"
        lead="All three services — from NDA entry rank to the very top of the hierarchy."
        breadcrumbs={[{ label: 'Career', href: '/salary' }, { label: 'Rank Structure' }]}
      />

      <PageLayout sidebarGroup="career">

        <Callout type="info" style={{ marginBottom: 32 }}>
          NDA cadets are commissioned as officers at the <strong>lowest commissioned rank</strong> after completing their respective service academy training post-NDA.
        </Callout>

        {/* Three service columns */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Service rank hierarchy</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {services.map(svc => (
              <div key={svc.name} style={{ background: T.white, border: `1px solid ${T.border}`, borderTop: `6px solid ${svc.color}`, borderRadius: 12, overflow: 'hidden', boxShadow: T.shadow }}>
                <div style={{ padding: '20px 24px', borderBottom: `1px solid ${T.border}` }}>
                  <h2 style={{ fontWeight: 700, fontSize: 20, color: svc.color, marginBottom: 4 }}>{svc.name}</h2>
                  <p style={{ fontSize: 13, color: T.textMuted }}>{svc.subtitle}</p>
                </div>
                <div style={{ padding: '16px 24px' }}>
                  {svc.ranks.map((rank, i) => (
                    <div key={rank} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 0',
                      borderBottom: i < svc.ranks.length - 1 ? `1px solid ${T.border}` : 'none',
                      background: i === 0 ? 'transparent' : 'none',
                      borderLeft: i === 0 ? `3px solid ${T.amber}` : 'none',
                      paddingLeft: i === 0 ? 10 : 0,
                      marginLeft: i === 0 ? -10 : 0,
                    }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: i === 0 ? svc.color : T.page,
                        color: i === 0 ? '#fff' : T.textMuted,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, flexShrink: 0,
                      }}>{svc.ranks.length - i}</div>
                      <span style={{ fontSize: 14, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? T.text : T.slate600, flex: 1 }}>{rank}</span>
                      {i === 0 && (
                        <span style={{ fontSize: 11, fontWeight: 700, color: T.amber, background: T.amberBg, padding: '2px 8px', borderRadius: 20 }}>NDA entry</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career timeline */}
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Time to each rank (approximate)</SectionLabel>
          <Card>
            <div style={{ position: 'relative', paddingLeft: 24 }}>
              <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 2, background: T.border }} />
              {timeline.map((t, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? 28 : 0 }}>
                  <div style={{ position: 'absolute', left: -30, top: 4, width: 14, height: 14, borderRadius: '50%', background: i === 0 ? T.amber : T.navyM, border: `3px solid ${T.page}` }} />
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: T.navyM, background: '#EEF2FF', padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap', flexShrink: 0 }}>Year {t.years}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: T.text }}>{t.label}</div>
                      <div style={{ fontSize: 13, color: T.textMuted, marginTop: 2 }}>{t.rank}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Callout type="info">
          <strong>Promotions up to Colonel/Captain/Group Captain</strong> are largely time-based (seniority). Above these ranks, promotions depend on merit, Annual Confidential Reports, and vacancies. The rank of Marshal of IAF / Admiral of the Fleet / Field Marshal is honorary and rarely conferred.
        </Callout>

      </PageLayout>

      <RelatedStrip items={[
        { label: 'Salary & Perks', href: '/salary', desc: 'Pay scale breakdown', icon: '💰' },
        { label: 'NDA Training Life', href: '/training', desc: '3 years at the academy', icon: '🏛️' },
        { label: 'What is NDA', href: '/what-is-nda', desc: 'Overview and wings', icon: '🛡️' },
      ]} />
    </div>
  );
}
