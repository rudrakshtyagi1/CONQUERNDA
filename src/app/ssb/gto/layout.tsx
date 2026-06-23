import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSB GTO Tasks (Day 3 & 4): Group Testing Officer Guide',
  description: 'Master the 9 GTO tasks in SSB: Group Discussion, GPE, PGT, HGT, IOT, Command Task, and FGT. Learn teamwork and leadership strategies.',
  openGraph: {
    title: 'SSB GTO Tasks Complete Guide | ConquerNDA',
    description: 'Detailed breakdown of all Group Testing Officer (GTO) tasks.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
