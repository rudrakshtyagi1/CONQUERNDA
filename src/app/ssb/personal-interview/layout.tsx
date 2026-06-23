import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSB Personal Interview: Tips, Questions & PIQ Form',
  description: 'How to ace the SSB Personal Interview. Common questions, PIQ form importance, and tips to impress the Interviewing Officer (IO).',
  openGraph: {
    title: 'SSB Personal Interview Guide | ConquerNDA',
    description: 'Learn how to handle the most crucial part of your SSB assessment.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
