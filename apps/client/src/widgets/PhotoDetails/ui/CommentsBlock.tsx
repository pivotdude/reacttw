import { CommentList } from './CommentList';
import { LoadingSpinner } from '@/shared/components/Loader';
import { CommentForm } from './CommentForm';
import { useCommentsStore } from '../store/useCommentsStore';

export function CommentsBlock() {
  const { comments, loading } = useCommentsStore((store) => ({
    comments: store.comments,
    setComments: store.setComments,
    loading: store.loading,
  }));

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <CommentList comments={comments} />
      <CommentForm />
    </>
  );
}
