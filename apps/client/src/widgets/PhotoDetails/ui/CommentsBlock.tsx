import { CommentList } from './CommentList';
import { LoadingSpinner } from '@/shared/components/Loader';
import { CommentForm } from './CommentForm';
import { useCommentsStore } from '../store/useCommentsStore';
import { useEffect } from 'react';
import { useFetchComments } from '../hooks/useFetchComments';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';

export function CommentsBlock() {
  const { fetchData } = useFetchComments();
  const id = usePhotoDetailsStore((store) => store.imageId);

  useEffect(() => {
    fetchData(id, 1);
  }, [id]);

  const loading = useCommentsStore((store) => store.loading);
  if (loading) return <LoadingSpinner />;

  return (
    <>
      <CommentList />
      <CommentForm />
    </>
  );
}
