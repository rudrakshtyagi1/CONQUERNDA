import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSB Psychology Tests (Day 2): TAT, WAT, SRT & SDT',
  description: 'Complete guide to SSB Psychology Tests: Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self Description Test.',
  openGraph: {
    title: 'SSB Psychology Tests Guide | ConquerNDA',
    description: 'How to approach TAT, WAT, SRT and SDT in the SSB interview.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
