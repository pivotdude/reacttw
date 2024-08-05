import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TypographySmallProps {
  children: ReactNode;
  className?: string;
}

export function TypographySmall({ children, className }: TypographySmallProps) {
  return (
    <small
      className={twMerge('text-sm font-medium leading-5 opacity-45', className)}
    >
      {children}
    </small>
  );
}
