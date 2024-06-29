import { ReactNode, Suspense } from 'react';

export function SuspenseLoader({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
