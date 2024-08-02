import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { ProfileT } from '@/pages/profile/store/useProfileStore';
import { GalleryItem } from './GalleryItem';

interface UserGalleryProps {
  photos: {
    id: number;
    src: string;
    alt: string;
  }[];
  profile: ProfileT;
}

export function UserGallery({ photos, profile }: UserGalleryProps) {
  const gallery = photos.map((photo) => (
    <GalleryItem key={photo.src} photo={photo} user={profile} />
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
