import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDA Officer Salary & Perks (2026): Cadet Stipend to General Pay',
  description: 'Complete breakdown of NDA officer salary in the Indian Army, Navy, and Air Force. See cadet stipend, 7th CPC pay scales, allowances, and perks.',
  openGraph: {
    title: 'NDA Officer Salary & Perks | ConquerNDA',
    description: 'Detailed breakdown of the 7th CPC pay scale for officers commissioned through NDA.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
