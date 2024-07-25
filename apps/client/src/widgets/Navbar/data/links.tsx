import { Compass, Heart, Home, Plus } from 'lucide-react';
import { ReactNode } from 'react';

export interface ILink {
  href: string;
  child: ReactNode;
}

export const links = [
  {
    href: '/',
    child: <Home />,
  },
  {
    href: '/compass',
    child: <Compass />,
  },
] as ILink[];
