import { ReactNode } from 'react';

interface ModalTitleProps {
  children: ReactNode;
}

export function ModalTitle({ children }: ModalTitleProps) {
  return <h2 className="text-lg font-semibold mb-4">{children}</h2>;
}
