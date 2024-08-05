import { Button } from '@/shared/ui/button';
import { TypographySmall } from '@/shared/ui/Typography';
import { HeartOff } from 'lucide-react';
import { useState } from 'react';

interface DislikeImageButtonProps {
  imageId: number;
  dislikeCount: number;
}

export function DislikeImageButton(props: DislikeImageButtonProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <Button
      variant={isActive ? 'default' : 'ghost'}
      className="space-x-1"
      onClick={() => setIsActive((prev) => !prev)}
    >
      <TypographySmall className="text-lg">
        {props.dislikeCount}
      </TypographySmall>
      <HeartOff width={20} />
    </Button>
  );
}
