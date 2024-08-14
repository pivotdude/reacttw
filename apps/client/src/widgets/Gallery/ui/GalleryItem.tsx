import { useState } from 'react';
import { Dialog, DialogTrigger } from '@/shared/ui/dialog';
import { PhotoDetails } from '@/widgets/PhotoDetails/ui/PhotoDetails';

interface GalleryItemProps {
  onUpdateSavePhoto?: () => void;
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

export function GalleryItem({ photo, onUpdateSavePhoto }: GalleryItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img
        key={photo.media.url}
        src={photo.media.url + '-/preview/'}
        alt={photo.media.name}
        className={`md:h-96 w-full object-cover`}
        loading="lazy"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <PhotoDetails
          id={photo.id}
          src={photo.media.url}
          user={photo.user}
          hideModal={() => setIsModalOpen(false)}
          onUpdateSavePhoto={onUpdateSavePhoto}
        />
      )}
    </>
  );
}
