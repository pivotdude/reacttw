import { Button } from '@/shared/ui/button';
import { HeartIcon } from 'lucide-react';
import { useState } from 'react';

export function FollowButton() {
  const [followed, setFollowed] = useState(false);

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
