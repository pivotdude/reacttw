import { useState } from 'react';
import { Dialog, DialogTrigger } from '@/shared/ui/dialog';
import { PhotoDetails } from '@/widgets/PhotoDetails/ui/PhotoDetails';

interface GalleryItemProps {
  photo: {
    id: number;
    media: {
      url: string;
      name: string;
    };
    user: {
      login: string;
      avatar: {
        url: string;
      };
    };
  };
}

export function GalleryItem({ photo }: GalleryItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger>
        <img
          key={photo.media.url}
          src={photo.media.url + '-/preview/'}
          alt={photo.media.name}
          className={`md:h-96 w-full object-cover`}
          loading="lazy"
        />
      </DialogTrigger>
      {isModalOpen && (
        <PhotoDetails
          id={photo.id}
          src={photo.media.url}
          user={photo.user}
          hideModal={() => setIsModalOpen(false)}
        />
      )}
    </Dialog>
  );
}
