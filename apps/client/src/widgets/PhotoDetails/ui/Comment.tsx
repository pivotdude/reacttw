import { UserAvatar } from '@/entities/user';
import { IComment } from '../models';
import { TypographySmall } from '@/shared/ui/Typography';
import { DislikeCommentButton } from '@/features/commentDislike/ui/DislikeCommentButton';
import { LikeCommentButton } from '@/features/commentLike/ui/LikeCommentButton';

interface CommentProps {
  comment: IComment;
}

export function Comment({ comment }: CommentProps) {
  return (
    <div className="flex w-full flex-col xl:flex-row justify-between p-2">
      <div className="flex">
        <UserAvatar
          src={comment.user.avatar.url}
          fallback={comment.user.login}
        />
        <div className="ml-2">
          <a href={`/profile/${comment.user.login}`}>{comment.user.login}</a>
          <p className="text-sm">{comment.text}</p>
          <div className="flex xl:flex-row flex-col xl:space-x-3 justify-between">
            <TypographySmall className="w-full">
              {new Date(comment.createdAt).toLocaleString()}
            </TypographySmall>
            <TypographySmall className="cursor-pointer">
              replies
            </TypographySmall>
            <TypographySmall className="cursor-pointer">reply</TypographySmall>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <LikeCommentButton commentId={comment.id} likeCount={0} />
        <DislikeCommentButton commentId={comment.id} dislikeCount={0} />
      </div>
    </div>
  );
}
