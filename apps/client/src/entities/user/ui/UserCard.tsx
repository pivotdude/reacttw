import { UserAvatar } from "./UserAvatar";

interface UserCardProps {
  user: {
    name: string;
    avatar: string;
  };
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex items-center space-x-2">
      <UserAvatar src={user.avatar} fallback={user.name} />
      <a href={`/profile/${user.name}`}>{user.name}</a>
    </div>
  );
}
