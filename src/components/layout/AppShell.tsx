'use client';

import Navbar from '@/components/layout/Navbar';
import { Footer } from '@/components/ui/PageShell';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#F7F8FC', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ paddingTop: 72, flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
