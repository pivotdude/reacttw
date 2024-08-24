import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';
import { useEffect } from 'react';
import { useFetchMoreComments } from '../hooks/useFetchMoreComments';
import { LoadingDot } from '@/shared/components/LoadingDot';
import { useCommentsStore } from '../store/useCommentsStore';

interface ICommentsBlockProps {
  imageId: number;
}

export function CommentsBlock({ imageId }: ICommentsBlockProps) {
  const { fetchNewData } = useFetchMoreComments(imageId);
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
      <CommentList imageId={imageId} />
      <CommentForm imageId={imageId} />
    </>
  );
}
