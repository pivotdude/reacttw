import { useParams } from 'react-router-dom';
import { useFetchSavedPhotos } from '../hooks/useFetchSavedPhotos';
import { useGalleryStore } from '../store/useGalleryStore';
import { useEffect } from 'react';
import { LoadingSpinner } from '@/shared/components/Loader';
import { GalleryItem } from './GalleryItem';

export function GallerySaved() {
  const params = useParams<{ name: string }>();
  const { fetchData } = useFetchSavedPhotos();
  const savedPhotos = useGalleryStore((store) => store.savedPhotos);
  const isLoading = useGalleryStore((store) => store.isLoading);
  const photos = savedPhotos?.map((photo) => photo.photo);

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

  const onUpdateSavePhoto = () => {
    if (params.name) {
      fetchData(params.name);
    }
  };

  if (!photos.length) {
    return <p className="text-md text-center col-span-3">No photos</p>;
  }

  return photos.map((photo) => (
    <GalleryItem
      key={photo.id}
      photo={photo}
      onUpdateSavePhoto={onUpdateSavePhoto}
    />
  ));
}
