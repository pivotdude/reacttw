import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { GalleryItem } from './GalleryItem';
import { useEffect } from 'react';
import { useGalleryStore } from '../store/useGalleryStore';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { useParams } from 'react-router-dom';

export function UserGallery() {
  const params = useParams<{ name: string }>();
  const { fetchData } = useFetchPhotos();
  const photos = useGalleryStore((store) => store.profilePhotos);

  useEffect(() => {
    if (params.name) {
      fetchData(params.name);
    }
  }, [params]);

  if (!photos) {
    return <div>Loading...</div>;
  }

  const gallery = photos.map((photo) => (
    <GalleryItem key={photo.id} photo={photo} />
  ));

  return (
    <Tabs defaultValue="posts" className="w-full mx-auto mt-10">
      <TabsList className="grid grid-cols-2 mx-10">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="saved">Saved</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">{gallery}</div>
        </div>
      </TabsContent>
      <TabsContent value="saved">
        <div className="py-4">
          <div className="grid grid-cols-3 gap-2">{gallery}</div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
