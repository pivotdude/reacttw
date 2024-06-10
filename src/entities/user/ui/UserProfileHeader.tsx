import { UserAvatar } from "./UserAvatar";

interface UserProfileHeaderProps {
  user: {
    name: string;
    avatar: string;
    posts: number;
    followers: number;
    following: number;
    fullName: string;
  };
}

export function UserProfileHeader({ user }: UserProfileHeaderProps) {
  return (
    <>
      <div className="col-span-2">
        <UserAvatar
          className="h-52 w-52"
          src={user.avatar}
          fallback={user.name}
        />
      </div>
      <div className="col-span-2 space-y-4">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <div className="flex space-x-2">
          <p>{user.posts} posts</p>
          <p>{user.followers} followers</p>
          <p>{user.following} following</p>
        </div>
        <h3 className="text-xl font-semibold">{user.fullName}</h3>
      </div>
    </>
  );
}
