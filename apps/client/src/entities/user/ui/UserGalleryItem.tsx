import { useState } from 'react';
import { UserPhotoDetails } from './UserPhotoDetails';
import { Dialog, DialogTrigger } from '@/shared/ui/dialog';

interface UserGalleryItemProps {
  photo: {
    src: string;
    alt: string;
  };
  user: any;
}

export function UserGalleryItem({ photo, user }: UserGalleryItemProps) {
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
          user={user}
          hideModal={() => setIsModalOpen(false)}
        />
      )}
    </Dialog>
  );
}
