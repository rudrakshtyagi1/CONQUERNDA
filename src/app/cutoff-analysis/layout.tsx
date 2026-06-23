import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDA Cutoff Trends (2015-2025): Written Exam & Final Merit',
  description: 'Analyze UPSC NDA previous year cutoffs. See the minimum qualifying marks for the written exam and final merit list scores from 2015 to 2025.',
  openGraph: {
    title: 'NDA Cutoff Analysis & Trends | ConquerNDA',
    description: 'Historical data and analysis of UPSC NDA cutoffs for written and final merit.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
