import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSB Screening Test (Day 1): OIR & PPDT Tips',
  description: 'How to clear the SSB Screening Test on Day 1. Tips and strategies for Officer Intelligence Rating (OIR) and Picture Perception & Description Test (PPDT).',
  openGraph: {
    title: 'SSB Screening Test Guide (OIR & PPDT) | ConquerNDA',
    description: 'Master Day 1 of the SSB interview with our comprehensive screening guide.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
