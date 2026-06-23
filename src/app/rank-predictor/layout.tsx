import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDA AIR Rank Predictor: Calculate Your Expected Merit List Position',
  description: 'Predict your All India Rank (AIR) for the NDA exam based on your expected written and SSB scores. Powered by historical UPSC cutoff data.',
  openGraph: {
    title: 'NDA Rank Predictor Tool | ConquerNDA',
    description: 'Calculate your expected All India Rank based on real UPSC data trends.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
