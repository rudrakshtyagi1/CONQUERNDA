import { ComingSoon } from '@/components/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Roadmap' };

export default function Page() {
  return <ComingSoon section="Roadmap" />;
}
