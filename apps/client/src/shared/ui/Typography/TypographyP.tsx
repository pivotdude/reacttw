import { ReactNode } from 'react';

interface TypographyPProps {
  children: ReactNode;
}

export function TypographyP({ children }: TypographyPProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
