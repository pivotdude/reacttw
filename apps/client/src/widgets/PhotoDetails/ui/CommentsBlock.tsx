import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';
import { useEffect } from 'react';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';
import { useFetchMoreComments } from '../hooks/useFetchMoreComments';
import { useCommentsStore } from '../store/useCommentsStore';
import { LoadingDot } from '@/shared/components/LoadingDot';

export function CommentsBlock() {
  const imageId = usePhotoDetailsStore((store) => store.imageId);
  const { fetchNewData } = useFetchMoreComments();
  const isNewCommentsLoading = useCommentsStore(
    (store) => store.isNewCommentsLoading,
  );

  useEffect(() => {
    fetchNewData(0);
  }, [imageId]);

  if (isNewCommentsLoading) {
    return <LoadingDot />;
  }

  return (
    <>
      <CommentList />
      <CommentForm />
    </>
  );
}
