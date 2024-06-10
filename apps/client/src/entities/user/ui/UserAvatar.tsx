import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

interface UserAvatarProps {
  src: string;
  fallback: string;
  className?: string;
}

export function UserAvatar({ src, fallback, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
