import { PhotoDetails } from '@/widgets/Gallery/ui/PhotoDetails';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { IPhoto } from '../model';

interface PostImageProps {
  photo: IPhoto;
}

export function PostImage({ photo }: PostImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(photo);

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
          src={photo.media.url}
          user={{
            login: photo.user.login,
            avatar: { url: photo.user.avatar.url },
          }}
          hideModal={() => setIsModalOpen(false)}
        />
      )}
    </Dialog>
  );
}
