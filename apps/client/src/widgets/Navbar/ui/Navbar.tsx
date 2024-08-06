import { Button } from '@/shared/ui/button';
import { links } from '../data/links';
import { Input } from '@/shared/ui/input';
import { CircleUserRound, Search } from 'lucide-react';
import { useNavigationStore } from '../store/useNavigationStore';
import { IconLink } from './IconLink';
import { ILink } from '../types';
import { useFetchAccount } from '../hooks/useFetchAccount';
import { useEffect } from 'react';

export function Navbar() {
  const account = useNavigationStore((store) => store.account);
  const { fetchData } = useFetchAccount();

  useEffect(() => {
    fetchData();
  }, []);

  const linksElements = links.map((link: ILink) => (
    <IconLink key={link.href} link={link} />
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
      <div className="flex">
        {linksElements}
        <IconLink
          link={{
            child: <CircleUserRound />,
            href: account ? `/profile/${account.login}` : '/signin',
          }}
        />
      </div>
    </div>
  );
}
