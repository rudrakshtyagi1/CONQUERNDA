'use client';

import Navbar from '@/components/layout/Navbar';
import { Footer } from '@/components/ui/PageShell';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Homepage is fully self-contained (has its own nav + footer in the HTML string)
  const isHomepage = pathname === '/';

  if (isHomepage) {
    return <>{children}</>;
  }

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
