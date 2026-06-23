import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDA Eligibility Criteria 2026: Age Limit, Educational & Physical Standards',
  description: 'Check complete NDA eligibility criteria 2026 for male and female candidates. Details on age limit, educational qualifications, height, and medical standards.',
  openGraph: {
    title: 'NDA Eligibility 2026 | Age, Height & Medical Standards',
    description: 'Check if you meet the NDA eligibility criteria for the upcoming 2026 exams.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
