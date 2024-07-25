import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { UserPhotoDetails } from './UserPhotoDetails';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';

interface UserGalleryProps {
  photos: {
    src: string;
    alt: string;
  }[];
}

export function UserGallery({ photos }: UserGalleryProps) {
  const gallery = photos.map((photo, index) => (
    <Dialog>
      <DialogTrigger>
        <img
          key={photo.src}
          src={photo.src + '-/preview/'}
          alt={photo.alt}
          className={`md:h-96 w-full object-cover ${index === 3 ? 'col-span-2' : ''} ${index === 6 ? 'col-span-2' : ''}`}
        />
      </DialogTrigger>
      <UserPhotoDetails src={photo.src} />
    </Dialog>
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
