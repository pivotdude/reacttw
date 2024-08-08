import { UserAvatar } from '@/entities/user';
import { TypographySmall } from '@/shared/ui/Typography';
import { formatDate } from '@/shared/lib/utils/dateFormatter';
import { IFollower } from '../types';

interface FollowerItemProps {
  follower: IFollower;
}

export function FollowerItem({ follower }: FollowerItemProps) {
  return (
    <div className="flex">
      <UserAvatar
        className="h-24 w-24"
        fallback={follower.user.login}
        src={follower.user.avatar?.url || ''}
      />
      <div className="ml-10">
        <a href={`/profile/${follower.user.login}`} className="text-xl">
          {follower.user.login}
        </a>
        <p className="mt-2">{follower.user.name || ''}</p>
        <TypographySmall className="mt-3">
          Subcription date: {formatDate(follower.createdAt)}
        </TypographySmall>
      </div>
    </div>
  );
}
