import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';
import { useEffect } from 'react';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';
import { useFetchMoreComments } from '../hooks/useFetchMoreComments';

export function CommentsBlock() {
  const imageId = usePhotoDetailsStore((store) => store.imageId);
  const { fetchNewData } = useFetchMoreComments();

  useEffect(() => {
    fetchNewData(0);
  }, [imageId]);

  return (
    <>
      <CommentList />
      <CommentForm />
    </>
  );
}
