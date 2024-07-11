import { ReactElement } from 'react';
import { UserAvatar } from './UserAvatar';

interface UserProfileHeaderProps {
  user: {
    name: string;
    avatar: string;
    posts: number;
    followers: number;
    following: number;
    fullName: string;
  };
  actions: any;
}

export function UserProfileHeader({ user, actions }: UserProfileHeaderProps) {
  return (
    <div className="flex space-x-8 md:space-x-60 items-center">
      <div>
        <UserAvatar
          className="h-52 w-52"
          src={user.avatar}
          fallback={user.name}
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <div className="flex space-x-2">
          <p>{user.posts} posts</p>
          <p>{user.followers} followers</p>
          <p>{user.following} following</p>
        </div>
        <h3 className="text-xl font-semibold">{user.fullName}</h3>
        <div>{actions}</div>
      </div>
    </div>
  );
}
