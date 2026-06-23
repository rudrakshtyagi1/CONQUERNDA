import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSB Packing List: What to Carry for 5 Days',
  description: 'The ultimate SSB interview packing list. Find out exactly what documents, clothing, and items you need to bring for your 5-day stay.',
  openGraph: {
    title: 'SSB Packing & Document List | ConquerNDA',
    description: 'A comprehensive checklist of everything to carry for your SSB interview.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
