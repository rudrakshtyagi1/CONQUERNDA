import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is NDA Exam? Complete Details, Eligibility & Benefits',
  description: 'Everything you need to know about the National Defence Academy (NDA) exam: what it is, who can apply, selection process, and benefits of joining the armed forces.',
  openGraph: {
    title: 'What is NDA? | ConquerNDA',
    description: 'Everything you need to know about the National Defence Academy (NDA) exam.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
