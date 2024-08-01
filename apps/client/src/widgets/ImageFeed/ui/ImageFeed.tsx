import { ImageList } from './ImageList';
import { useFetchImages } from '../api/useFetchImages';
import { useImageFeedStore } from '../store/useImageFeedStore';
import { LoadingSpinner } from '@/shared/components/Loader';
import { useEffect } from 'react';

export function ImageFeed() {
  const loading = useImageFeedStore((store) => store.loading);
  const { fetchData } = useFetchImages();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-4">
      <ImageList />
    </div>
  );
}
