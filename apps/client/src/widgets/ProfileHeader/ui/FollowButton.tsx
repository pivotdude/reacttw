import { Button } from '@/shared/ui/button';
import { HeartIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useProfileStore } from '../store/useProfileStore';
import { unFollow } from '../api/unFollow';
import { follow } from '../api/follow';
import { useFetchProfile } from '../hooks/useFetchProfile';

export function FollowButton() {
  const profile = useProfileStore((store) => store.profile);
  const { fetchData } = useFetchProfile();
  const [followed, setFollowed] = useState(profile?.isUserFollow);

  useEffect(() => {
    if (profile) {
      setFollowed(profile?.isUserFollow || false);
    }
  }, [profile]);

  const onClick = async () => {
    if (!profile) return;
    if (followed) {
      await unFollow(profile?.id);
    } else {
      await follow(profile?.id);
    }
    await fetchData(profile?.login);
  };

  return (
    <Button variant={followed ? 'default' : 'ghost'} onClick={onClick}>
      <HeartIcon />
    </Button>
  );
}
