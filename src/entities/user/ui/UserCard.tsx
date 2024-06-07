import { UserAvatar } from "./UserAvatar";
import { ReactNode } from "react";

interface UserCardProps {
  name: string;
  description: string;
  src: string;
  button: ReactNode;
}

export function UserCard({ description, name, src, button }: UserCardProps) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <UserAvatar src={src} fallback={name} />
      </div>
      <div className="flex flex-col justify-between col-span-3">
        <p className="text-sm">{name}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      {button}
    </div>
  );
}
