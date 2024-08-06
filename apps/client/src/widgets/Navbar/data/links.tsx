import { Compass, Home } from 'lucide-react';
import { ILink } from '../types';

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
