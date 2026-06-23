import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDA Exam Pattern 2026: Marking Scheme & Paper Structure',
  description: 'Understand the NDA written exam pattern and SSB interview structure. Details on marking scheme, negative marking, number of questions, and time duration.',
  openGraph: {
    title: 'NDA Exam Pattern & Marking Scheme | ConquerNDA',
    description: 'Detailed explanation of how the NDA written exam and SSB interview are scored.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
