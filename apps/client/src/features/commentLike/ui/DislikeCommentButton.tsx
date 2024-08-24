import { Button } from '@/shared/ui/button';
import { TypographySmall } from '@/shared/ui/Typography';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getToastParams } from '@/shared/utils/getToastParams';
import { useToast } from '@/shared/ui/use-toast';
import { deleteLike } from '../api/deleteLike';
import { useCommentsStore } from '@/features/comments/store/useCommentsStore';
import { IComment } from '@/features/comments/models';
import { putDislike } from '../api/putDislike';

interface LikeCommentButtonProps {
  commentId: number;
  dislikeCount: number;
  isDisliked: boolean;
}

export function DislikeCommentButton({ isDisliked, commentId, dislikeCount }: LikeCommentButtonProps) {
  const [isActive, setIsActive] = useState(isDisliked);
  const {toast} = useToast();
  const updateComment = useCommentsStore((state) => state.updateComment);

  useEffect(() => {
    setIsActive(isDisliked)
  }, [isDisliked])

  const onClick = async () => {
    if (!isActive) {
      await putDislike(commentId).catch((e) => {
        toast(getToastParams(e.response.errors[0].message));
      });
      // setIsActive(true);
      updateComment(commentId, (comment: IComment) => {
        if (comment.userLiked) {
          return {
            dislikeCount: comment.dislikeCount + 1,
            likeCount: comment.likeCount - 1,
            userDisliked: true,
            userLiked: false,
          } 
        } else {
          return {
            dislikeCount: comment.dislikeCount + 1,
            userDisliked: true,
          }
        }

      });
    } else {
      await deleteLike(commentId);
      // setIsActive(false);
      updateComment(commentId, (comment: IComment) => ({
        dislikeCount: comment.dislikeCount - 1,
        userDisliked: false,
      }));
    }
  };

  return (
    <Button
      className="space-x-1"
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={onClick}
    >
      <TypographySmall>{dislikeCount}</TypographySmall>
      <Heart width={16} />
    </Button>
  );
}
