import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: {
    default: "NDA Platform — India's Most Complete NDA Guide & Rank Predictor",
    template: '%s | NDA Platform',
  },
  description: 'Complete NDA preparation platform: Rank Predictor, Eligibility, Syllabus, SSB Guide, Cutoff Analysis, Salary Calculator, Previous Year Papers and more.',
  keywords: ['NDA exam', 'NDA rank predictor', 'NDA eligibility', 'NDA syllabus', 'NDA cutoff', 'NDA salary', 'SSB interview', 'NDA preparation', 'NDA 2026'],
  openGraph: { type: 'website', siteName: 'NDA Platform' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'WebSite',
          name: 'NDA Platform', url: 'https://nda-platform.vercel.app',
          description: "India's most complete NDA preparation platform",
        })}} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
