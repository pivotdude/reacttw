import { UserAvatar } from './UserAvatar';
import { ReactNode } from 'react';

interface UserCardWithButtonProps {
  name: string;
  description: string;
  src: string;
  button: ReactNode;
}

export function UserCardWithButton({
  description,
  name,
  src,
  button,
}: UserCardWithButtonProps) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <UserAvatar src={src} fallback={name} />
      </div>
      <div className="flex flex-col justify-between col-span-3">
        <a className="text-sm" href={`/profile/${name}`}>
          {name}
        </a>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      {button}
    </div>
  );
}
