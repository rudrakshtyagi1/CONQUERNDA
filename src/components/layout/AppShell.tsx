'use client';

import Navbar from '@/components/layout/Navbar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <Navbar />
      <main className="relative pt-[68px] pb-24 lg:pb-0">
        {children}
      </main>
    </div>
  );
}
