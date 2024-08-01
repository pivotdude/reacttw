import { TypographySmall } from '@/shared/ui/Typography';
import clsx from 'clsx';
import { Save } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SavePostButtonProps {
  postId: number;
}

export function SavePostButton({ postId }: SavePostButtonProps) {
  const [isActive, setIsActive] = useState(false);
  console.log(postId);

  return (
    <div>
      <Save
        onClick={() => setIsActive((prev) => !prev)}
        className={twMerge(
          clsx('cursor-pointer', {
            'text-green-600': isActive,
          }),
        )}
      />
      <TypographySmall>100</TypographySmall>
    </div>
  );
}
