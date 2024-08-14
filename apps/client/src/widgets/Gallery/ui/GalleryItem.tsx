import { useState } from 'react';
import { PhotoDetails } from '@/widgets/PhotoDetails/ui/PhotoDetails';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LoadingSpinner } from '@/shared/components/Loader';

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
  // const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <>
      {/* {isLoadingImage && (
        <div className="h-96">
          <LoadingSpinner />
        </div>
      )} */}
      <img
        key={photo.media.url}
        src={photo.media.url + '-/preview/'}
        alt={photo.media.name}
        // loading="lazy"
        onClick={() => setIsModalOpen(true)}
        className={twMerge(
          clsx('md:h-96 w-full object-cover cursor-pointer', {
            // hidden: isLoadingImage,
          }),
        )}
        // onLoad={() => setIsLoadingImage(false)}
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
