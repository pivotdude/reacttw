import { useProfileStore } from '@/pages/profile/store/useProfileStore';
import { Button } from '@/shared/ui/button';
import { HeartIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FollowButton() {
  const profile = useProfileStore((store) => store.profile);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if (profile) {
      setFollowed(profile.isUserFollow);
    }
  }, [profile]);

  return (
    <Button
      variant={followed ? 'default' : 'ghost'}
      // className="bg-pink-600 hover:bg-pink-400"
      onClick={() => setFollowed((prev) => !prev)}
    >
      <HeartIcon />
    </Button>
  );
}
