import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDA Syllabus 2026: Mathematics & General Ability Test (GAT)',
  description: 'Download the latest NDA syllabus for 2026. Comprehensive topic-wise breakdown for Mathematics and General Ability Test (English & General Knowledge).',
  openGraph: {
    title: 'NDA Syllabus 2026 (Maths & GAT) | ConquerNDA',
    description: 'Detailed topic-wise syllabus breakdown for the NDA written exam.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
