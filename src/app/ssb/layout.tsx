import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSB Interview Guide: 5-Day Selection Process Explained',
  description: 'Master the 5-day SSB interview for NDA. Comprehensive guide on screening, psychology tests, GTO tasks, and the personal interview.',
  openGraph: {
    title: 'Complete SSB Interview Guide | ConquerNDA',
    description: 'Everything you need to know to clear the 5-day SSB interview.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
