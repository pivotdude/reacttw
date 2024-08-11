import { useParams } from 'react-router-dom';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { GalleryItem } from './GalleryItem';
import { useGalleryStore } from '../store/useGalleryStore';
import { useEffect } from 'react';
import { LoadingSpinner } from '@/shared/components/Loader';

export function GalleryImages() {
  const params = useParams<{ name: string }>();
  const { fetchData } = useFetchPhotos();
  const photos = useGalleryStore((store) => store.profilePhotos);
  const isLoading = useGalleryStore((store) => store.isLoading);

  useEffect(() => {
    if (params.name) {
      fetchData(params.name);
    }
  }, [params]);

  if (!photos.length && isLoading) {
    return (
      <div className="col-span-3">
        <LoadingSpinner />;
      </div>
    );
  }

  if (!photos.length) {
    return <p className="text-md text-center col-span-3">No photos</p>;
  }

  return photos.map((photo) => <GalleryItem key={photo.id} photo={photo} />);
}
