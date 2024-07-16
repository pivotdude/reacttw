import { Loader } from '@/shared/components/Loader';
import { ReactNode, Suspense } from 'react';

export function SuspenseLoader({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
