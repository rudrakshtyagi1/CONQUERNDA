import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPSS Test for Indian Air Force: Complete Guide',
  description: 'Computerized Pilot Selection System (CPSS) test details for NDA Air Force aspirants. Understand the machine tests and psychomotor evaluations.',
  openGraph: {
    title: 'CPSS Test Guide (Air Force) | ConquerNDA',
    description: 'Everything you need to know about the once-in-a-lifetime CPSS test.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
