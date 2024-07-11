import { Button } from '@/shared/ui/button';
import { ILink, links } from '../data/links';
import { Input } from '@/shared/ui/input';
import { CircleUserRound, Search } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigationStore } from '../store/useNavigationStore';
import { IconLink } from './IconLink';
import { fetchProfile } from '../api/fetchProfile';

export function Navbar() {
  const profile = useNavigationStore((store) => store.profile);
  const setProfile = useNavigationStore((store) => store.setProfile);

  const linksElements = links.map((link: ILink) => <IconLink link={link} />);

  useEffect(() => {
    // fetchProfile()
    //   .then((profile) => {
    //     setProfile(profile.profile);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
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
            href: `/profile/${profile?.login}`,
          }}
        />
      </div>
    </div>
  );
}
