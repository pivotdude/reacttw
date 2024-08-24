import { useFetchMoreComments } from '../hooks/useFetchMoreComments';
import { Comment } from './Comment';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';
import { LoadingDot } from '@/shared/components/LoadingDot';
import { useEffect } from 'react';
import { useCommentsStore } from '../store/useCommentsStore';

const PORTION_OF_ITEMS = 20;

export function CommentList({imageId}: {imageId: number}) {
  const comments = useCommentsStore((store) => store.comments);
  const { fetchData } = useFetchMoreComments(imageId);
  const { scrollEl, scrollToBottom } = useInfiniteScroll(
    fetchData,
    PORTION_OF_ITEMS,
  );
  const loading = useCommentsStore((store) => store.loading);

  useEffect(() => {
    if (loading) {
      scrollToBottom();
    }
  }, [loading]);

  return (
    <>
      <div
        ref={scrollEl}
        className="flex-grow overflow-y-auto mb-2 mt-4 space-y-2"
      >
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {loading && <LoadingDot />}
      </div>
    </>
  );
}
