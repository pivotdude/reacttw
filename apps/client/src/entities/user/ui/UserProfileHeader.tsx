import { UserAvatar } from './UserAvatar';

interface UserProfileHeaderProps {
  user: {
    name: string;
    avatar: string;
    followers: number;
    following: number;
    fullName: string;
  };
  actions: any;
}

export function UserProfileHeader({ user, actions }: UserProfileHeaderProps) {
  return (
    <div className="grid grid-cols-4 space-x-2 md:space-x-60 items-center gap-y-8">
      <div className="col-span-4 md:col-span-1 flex justify-center">
        <UserAvatar
          className="h-40 w-40 md:h-52 md:w-52"
          src={user.avatar}
          fallback={user.name}
        />
      </div>
      <div className="space-y-4 col-span-4 md:col-span-2">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <div className="flex space-x-2">
          <a href={`/profile/${user.name}/followers`}>
            {user.followers} followers
          </a>
          <a href={`/profile/${user.name}/following`}>
            {user.following} following
          </a>
        </div>
        <h3 className="text-xl font-semibold">{user.fullName}</h3>
        <div>{actions}</div>
      </div>
    </div>
  );
}
