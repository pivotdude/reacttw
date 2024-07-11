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
  const gallery =
    photos.length > 0 ? (
      photos.map((photo, index) => (
        <Dialog>
          <DialogTrigger>
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className={`h-44 sm:h-96 w-full object-cover ${index === 3 ? 'col-span-2' : ''} ${index === 6 ? 'col-span-2' : ''}`}
            />
          </DialogTrigger>
          <UserPhotoDetails src={photo.src} />
        </Dialog>
      ))
    ) : (
      <div className="w-full flex flex-col justify-center items-center bg-gray-300 col-span-3 rounded-md">
        <p className="font-medium text-lg">Photo dont exists!</p>
        <a>Click here to upload a new photo</a>
      </div>
    );

  return (
    <Tabs defaultValue="account" className="w-full mx-auto mt-10">
      <TabsList className="grid grid-cols-2 mx-40">
        <TabsTrigger value="account">Posts</TabsTrigger>
        <TabsTrigger value="password">Saved</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="py-4">
          <div className="grid grid-cols-3 gap-2">{gallery}</div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="py-4">
          <div className="grid grid-cols-3 gap-2">{gallery}</div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
