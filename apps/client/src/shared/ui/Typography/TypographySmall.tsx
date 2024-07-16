import { ReactNode } from 'react';

interface TypographySmallProps {
  children: ReactNode;
}

export function TypographySmall({ children }: TypographySmallProps) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}
