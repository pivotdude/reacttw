import { ReactNode } from 'react';

interface TypgoraphyH4Props {
  children: ReactNode;
}

export function TypographyH4({ children }: TypgoraphyH4Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}
