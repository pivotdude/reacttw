import { Button } from '@/shared/ui/button';
import { TypographySmall } from '@/shared/ui/Typography';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface LikeCommentButtonProps {
  commentId: number;
  likeCount: number;
}

export function LikeCommentButton(props: LikeCommentButtonProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      className="space-x-1"
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <TypographySmall>{props.likeCount}</TypographySmall>
      <Heart width={16} />
    </Button>
  );
}
