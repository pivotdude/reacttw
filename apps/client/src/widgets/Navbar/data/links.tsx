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
    href: '/photo/add',
    child: <Plus />,
  },
  {
    href: '/compass',
    child: <Compass />,
  },
  {
    href: '/likes',
    child: <Heart />,
  },
] as ILink[];
