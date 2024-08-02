import { useState } from 'react';
import { Dialog, DialogTrigger } from '@/shared/ui/dialog';
import { PhotoDetails } from '@/widgets/PhotoDetails/ui/PhotoDetails';

interface GalleryItemProps {
  photo: {
    id: number;
    src: string;
    alt: string;
  };
  user: any;
}

export function GalleryItem({ photo, user }: GalleryItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(photo);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger>
        <img
          key={photo.src}
          src={photo.src + '-/preview/'}
          alt={photo.alt}
          className={`md:h-96 w-full object-cover`}
        />
      </DialogTrigger>
      {isModalOpen && (
        <PhotoDetails
          id={photo.id}
          src={photo.src}
          user={user}
          hideModal={() => setIsModalOpen(false)}
        />
      )}
    </Dialog>
  );
}
