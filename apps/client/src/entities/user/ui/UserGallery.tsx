import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { UserGalleryItem } from './UserGalleryItem';
import { useProfileStore } from '@/pages/profile/store/useProfileStore';

interface UserGalleryProps {
  photos: {
    src: string;
    alt: string;
  }[];
}

export function UserGallery({ photos }: UserGalleryProps) {
  const profile = useProfileStore((store) => store.profile);
  const gallery = photos.map((photo) => (
    <UserGalleryItem photo={photo} user={profile} />
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
