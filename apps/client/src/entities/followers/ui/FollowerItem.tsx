import { UserAvatar } from '@/entities/user';
import { TypographySmall } from '@/shared/ui/Typography';
import { formatDate } from '@/shared/utils/dateFormatter';

interface FollowerItemProps {
  createdAt: string;
  user: {
    login: string;
    name: string;
    avatar: {
      url: string;
    };
  };
}

export function FollowerItem({ createdAt, user }: FollowerItemProps) {
  return (
    <div className="flex">
      <UserAvatar
        className="h-24 w-24"
        fallback={user.login}
        src={user.avatar?.url || ''}
      />
      <div className="ml-10">
        <a href={`/profile/${user.login}`} className="text-xl">
          {user.login}
        </a>
        <p className="mt-2">{user.name || ''}</p>
        <TypographySmall className="mt-3">
          Subcription date: {formatDate(createdAt)}
        </TypographySmall>
      </div>
    </div>
  );
}
