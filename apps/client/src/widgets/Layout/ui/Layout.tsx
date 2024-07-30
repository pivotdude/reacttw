import { ReactNode } from 'react';
import { Toaster } from '@/shared/ui/toaster';

interface ILayoutProps {
  children: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
