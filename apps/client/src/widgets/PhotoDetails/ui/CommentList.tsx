import { IComment } from '../models';
import { UserAvatar } from '@/entities/user';
import { TypographySmall } from '@/shared/ui/Typography';

export function CommentList({ comments }: { comments: IComment[] }) {
  return (
    <div className="flex-grow overflow-y-auto mb-2 mt-4">
      {comments.map((comment) => (
        <div key={comment.createdAt} className="mb-3">
          <div className="flex pr-3">
            <UserAvatar
              src={comment.user.avatar.url}
              fallback={comment.user.login}
            />
            <div className="ml-2">
              <p>{comment.user.login}</p>
              <p className="text-sm">{comment.text}</p>
              <TypographySmall>
                {new Date(comment.createdAt).toLocaleString()}
              </TypographySmall>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
