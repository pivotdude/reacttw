import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

interface UserAvatarProps {
  src: string;
  fallback: string;
}

export function UserAvatar({ src, fallback }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
