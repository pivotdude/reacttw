import { TypographySmall } from '@/shared/ui/Typography';
import clsx from 'clsx';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SharePostButtonProps {
  postId: number;
}

// @ts-ignore
export function SharePostButton({ postId }: SharePostButtonProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Send
        onClick={() => setIsActive((prev) => !prev)}
        className={twMerge(
          clsx('cursor-pointer', {
            'text-sky-600': isActive,
          }),
        )}
      />
      <TypographySmall>100</TypographySmall>
    </div>
  );
}
