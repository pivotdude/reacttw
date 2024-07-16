import { Button } from '@/shared/ui/button';
import { ILink, links } from '../data/links';
import { Input } from '@/shared/ui/input';
import { CircleUserRound, Search } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigationStore } from '../store/useNavigationStore';
import { IconLink } from './IconLink';
import { fetchAccount } from '../api/fetchAccount';

export function Navbar() {
  const account = useNavigationStore((store) => store.account);
  const setAccount = useNavigationStore((store) => store.setAccount);

  const linksElements = links.map((link: ILink) => <IconLink link={link} />);

  useEffect(() => {
    fetchAccount()
      .then((response) => {
        console.log('response', response.account);
        setAccount(response.account);
      })
      .catch((e) => {
        console.log('ee', e.response.errors[0].message);
        // setErrorMessage(e.response.errors[0].message);
      });
  }, []);

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
