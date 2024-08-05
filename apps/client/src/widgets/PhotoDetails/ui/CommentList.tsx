import { useCommentsStore } from '../store/useCommentsStore';
import { LoadingSpinner } from '@/shared/components/Loader';
import { useFetchMoreComments } from '../hooks/useFetchMoreComments';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Comment } from './Comment';

export function CommentList() {
  const comments = useCommentsStore((store) => store.comments);
  const { fetchMoreData } = useFetchMoreComments();

  return (
    <div className="flex-grow overflow-y-auto mb-2 mt-4">
      <InfiniteScroll
        dataLength={comments.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<LoadingSpinner />}
      >
        {comments.map((comment) => (
          <div key={comment.id} className="mb-3">
            <Comment comment={comment} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
