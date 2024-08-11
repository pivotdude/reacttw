import { useCommentsStore } from '../store/useCommentsStore';
import { useFetchMoreComments } from '../hooks/useFetchMoreComments';
import { Comment } from './Comment';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';
import { LoadingSpinner } from '@/shared/components/Loader';

const PORTION_OF_ITEMS = 20;

export function CommentList() {
  const comments = useCommentsStore((store) => store.comments);
  const { fetchData } = useFetchMoreComments();
  const { scrollEl } = useInfiniteScroll(fetchData, PORTION_OF_ITEMS);
  const loading = useCommentsStore((store) => store.loading);

  return (
    <>
      <div ref={scrollEl} className="flex-grow overflow-y-auto mb-2 mt-4">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-3">
            <Comment comment={comment} />
          </div>
        ))}
        {loading && <LoadingSpinner />}
      </div>
    </>
  );
}
