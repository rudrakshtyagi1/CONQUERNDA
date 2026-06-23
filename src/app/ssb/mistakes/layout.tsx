import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Common SSB Mistakes to Avoid (And How to Fix Them)',
  description: 'Learn the most common reasons candidates get rejected at SSB. Avoid these fatal mistakes in screening, psychology, GTO, and personal interview.',
  openGraph: {
    title: 'Top SSB Mistakes to Avoid | ConquerNDA',
    description: 'Don\'t let these common errors ruin your chances of recommendation.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
