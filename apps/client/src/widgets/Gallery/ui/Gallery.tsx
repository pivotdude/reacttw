import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { GalleryImages } from './GalleryImages';
import { GallerySaved } from './GallerySaved';

export function UserGallery() {
  return (
    <Tabs defaultValue="gallery" className="w-full mx-auto mt-10">
      <TabsList className="grid grid-cols-2 mx-10">
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="saved">Saved</TabsTrigger>
      </TabsList>
      <TabsContent value="gallery">
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <GalleryImages />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="saved">
        <div className="py-4">
          <div className="grid grid-cols-3 gap-2">
            <GallerySaved />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
