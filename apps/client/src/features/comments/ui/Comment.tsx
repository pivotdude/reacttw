import { UserAvatar } from '@/entities/user';
import { IComment } from '../models';
import { TypographySmall } from '@/shared/ui/Typography';
import { LikeCommentButton } from '@/features/commentLike/ui/LikeCommentButton';
import { formatDateTime } from '@/shared/utils/dateFormatter';
import { DislikeCommentButton } from '@/features/commentLike/ui/DislikeCommentButton';

interface CommentProps {
  comment: IComment;
}

export function Comment({ comment }: CommentProps) {
  // const getPodcomments = (comment: IComment) => {
  //   if (Array.isArray(comment.comments) && comment.comments.length > 0) {
  //     return comment.comments;
  //   }
  //   return [];
  // };

  return (
    <div>
      <div className="flex w-full justify-between p-2">
        <div className="flex">
          <UserAvatar
            src={comment.user.avatar?.url || ''}
            fallback={comment.user.login}
          />
          <div className="ml-2">
            <a href={`/profile/${comment.user.login}`}>{comment.user.login}</a>
            <p className="text-sm">{comment.text}</p>
            <div className="flex space-x-3 justify-between">
              <TypographySmall className="w-full">
                {formatDateTime(comment.createdAt)}
              </TypographySmall>
              <TypographySmall className="cursor-pointer">
                replies
              </TypographySmall>
              <TypographySmall className="cursor-pointer">
                reply
              </TypographySmall>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <LikeCommentButton comment={comment} />
          <DislikeCommentButton
            commentId={comment.id}
            dislikeCount={comment.dislikeCount}
            isDisliked={comment.userDisliked}
          />
        </div>
      </div>
      {/* {getPodcomments(comment).map((comment) => (
        <div className="ml-6">
          <Comment key={comment.id} comment={comment} />
        </div>
      ))} */}
    </div>
  );
}
