import { Link } from 'react-router-dom';
import { ILink } from '../data/links';

interface IconLinkProps {
  link: ILink;
}

export function IconLink({ link }: IconLinkProps) {
  return (
    <Link
      to={link.href}
      key={link.href}
      className="w-12 h-12 cursor-pointer hover:text-gray-500 flex items-center justify-center"
    >
      {link.child}
    </Link>
  );
}
