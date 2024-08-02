import { CommentList } from './CommentList';
import { usePhotoDetails } from '../store/usePhotoDetails';
import { LoadingSpinner } from '@/shared/components/Loader';
import { CommentForm } from './CommentForm';

export function CommentsBlock({ imageId }: { imageId: number }) {
  const { comments, loading } = usePhotoDetails((store) => ({
    comments: store.comments,
    setComments: store.setComments,
    loading: store.loading,
  }));

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <CommentList comments={comments} />
      <CommentForm imageId={imageId} />
    </>
  );
}
