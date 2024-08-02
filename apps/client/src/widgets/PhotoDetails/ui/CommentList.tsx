import { UserAvatar } from '@/entities/user';
import { TypographySmall } from '@/shared/ui/Typography';
import { useCommentsStore } from '../store/useCommentsStore';
import { InfiniteScroll } from '@/shared/components/InfinityScroll';
import { useFetchMoreComments } from '../api/useFetchMoreComments';

export function CommentList() {
  const comments = useCommentsStore((store) => store.comments);
  const { fetchMoreData } = useFetchMoreComments();

  return (
    <div className="flex-grow overflow-y-auto mb-2 mt-4">
      <InfiniteScroll loadMore={fetchMoreData} hasMore={true}>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-3">
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
      </InfiniteScroll>
    </div>
  );
}
