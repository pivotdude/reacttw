import { LoadingScreen } from '@/shared/components/Loader';
import { ReactNode, Suspense } from 'react';

export function SuspenseLoadingScreen({ children }: { children: ReactNode }) {
  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
}
