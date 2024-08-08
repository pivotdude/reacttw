import { IFollower } from '../types';
import { FollowerItem } from './FollowerItem';

interface FollowersListProps {
  followers: IFollower[];
}

export function FollowerList({ followers }: FollowersListProps) {
  const followersList = followers.map((follower) => (
    <FollowerItem key={follower.id} follower={follower} />
  ));

  return (
    <>{followers.length && <div className="space-y-8">{followersList}</div>}</>
  );
}
