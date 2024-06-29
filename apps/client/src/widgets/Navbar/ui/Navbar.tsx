import { ILink, links } from '../data/links';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const linksElements = links.map((link: ILink) => (
    <Link
      to={link.href}
      key={link.href}
      className="w-12 h-12 cursor-pointer hover:text-gray-500 flex items-center justify-center"
    >
      {link.child}
    </Link>
  ));

  return (
    <div className="flex f-full justify-between items-center">
      <div></div>
      <div className="flex w-80 items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" size="sm">
          <Search />
        </Button>
      </div>
      <div className="flex">{linksElements}</div>
    </div>
  );
}
