import { Button } from '@/shared/ui/button';
import { TypographySmall } from '@/shared/ui/Typography';
import { HeartOff } from 'lucide-react';
import { useState } from 'react';

interface LikeCommentButtonProps {
  commentId: number;
  dislikeCount: number;
}

export function DislikeCommentButton(props: LikeCommentButtonProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <Button
      className="space-x-1"
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <TypographySmall>{props.dislikeCount}</TypographySmall>
      <HeartOff width={16} />
    </Button>
  );
}
