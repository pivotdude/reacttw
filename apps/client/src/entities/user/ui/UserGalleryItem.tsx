import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { UserPhotoDetails } from './UserPhotoDetails';

interface UserGalleryItemProps {
  photo: {
    src: string;
    alt: string;
  };
}

export function UserGalleryItem({ photo }: UserGalleryItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <UserPhotoDetails
          src={photo.src}
          hideModal={() => setIsModalOpen(false)}
        />
      )}
    </Dialog>
  );
}
