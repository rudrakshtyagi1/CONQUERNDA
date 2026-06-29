import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/layout/AppShell';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: {
    default: "ConquerNDA — India's Most Complete NDA Guide & Rank Predictor",
    template: '%s | ConquerNDA',
  },
  description: 'Complete NDA preparation platform: Rank Predictor, Eligibility, Syllabus, SSB Guide, Cutoff Analysis, Salary Calculator, Previous Year Papers and more.',
  keywords: ['NDA exam', 'NDA rank predictor', 'NDA eligibility', 'NDA syllabus', 'NDA cutoff', 'NDA salary', 'SSB interview', 'NDA preparation', 'NDA 2026', 'ConquerNDA'],
  authors: [{ name: 'ConquerNDA' }],
  creator: 'ConquerNDA',
  publisher: 'ConquerNDA',
  openGraph: {
    type: 'website',
    siteName: 'ConquerNDA',
    title: "ConquerNDA — India's Most Complete NDA Guide & Rank Predictor",
    description: 'Complete NDA preparation platform: Rank Predictor, Eligibility, Syllabus, SSB Guide, Cutoff Analysis, Salary Calculator, Previous Year Papers and more.',
    url: 'https://conquernda.in', // Placeholder domain
  },
  twitter: {
    card: 'summary_large_image',
    title: "ConquerNDA — India's Most Complete NDA Guide",
    description: 'Complete NDA preparation platform: Rank Predictor, Eligibility, Syllabus, SSB Guide, Cutoff Analysis, Salary Calculator.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: {
    google: 'T0061T1IWVUPP65xsPB1Ah2o4IJZmycTxvQDVA1ArE8',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://conquernda.in/#website',
        url: 'https://conquernda.in',
        name: 'ConquerNDA',
        description: "India's most complete NDA preparation platform",
        publisher: { '@id': 'https://conquernda.in/#organization' },
        potentialAction: [{ '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://conquernda.in/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' }],
      },
      {
        '@type': 'Organization',
        '@id': 'https://conquernda.in/#organization',
        name: 'ConquerNDA',
        url: 'https://conquernda.in',
        logo: { '@type': 'ImageObject', url: 'https://conquernda.in/logo.png' }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
