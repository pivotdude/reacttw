import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { IPhoto } from '../model';
import { PhotoDetails } from '@/widgets/PhotoDetails/ui/PhotoDetails';

interface PostImageProps {
  photo: IPhoto;
}

export function PostImage({ photo }: PostImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger>
        <img
          key={photo.media.name}
          src={photo.media.url}
          alt={photo.media.name}
          className="w-full cursor-zoom-in"
        />
      </DialogTrigger>
      {isModalOpen && (
        <PhotoDetails
          id={photo.id}
          src={photo.media.url}
          user={{
            login: photo.user.login,
            avatar: { url: photo.user.avatar?.url || '' },
          }}
          hideModal={() => setIsModalOpen(false)}
        />
      )}
    </Dialog>
  );
}
