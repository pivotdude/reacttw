import { ReactNode } from 'react';

interface TypographyInlineCodeProps {
  children: ReactNode;
}

export function TypographyInlineCode({ children }: TypographyInlineCodeProps) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}
