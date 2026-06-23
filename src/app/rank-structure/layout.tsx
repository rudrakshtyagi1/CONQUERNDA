import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indian Armed Forces Rank Structure: Army, Navy & Air Force',
  description: 'Understand the officer rank progression in the Indian Army, Navy, and Air Force after commissioning through the National Defence Academy.',
  openGraph: {
    title: 'Officer Rank Structure | ConquerNDA',
    description: 'Rank progression across all three services of the Indian Armed Forces.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
