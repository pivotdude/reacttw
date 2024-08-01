import { TypographySmall } from '@/shared/ui/Typography';
import clsx from 'clsx';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface LikePostButtonProps {
  postId: number;
}

export function LikePostButton({ postId }: LikePostButtonProps) {
  const [isActive, setIsActive] = useState(false);
  console.log(postId);

  return (
    <div>
      <Heart
        onClick={() => setIsActive((prev) => !prev)}
        className={twMerge(
          clsx('cursor-pointer', {
            'text-red-600': isActive,
          }),
        )}
      />
      <TypographySmall>100</TypographySmall>
    </div>
  );
}
