import { useEffect, useRef, useState } from 'react';
import 'viewerjs/dist/viewer.css';
import { DialogContent, DialogHeader } from '@/shared/ui/dialog';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { LoadingSpinner } from '@/shared/components/Loader';
import { UserCard } from '@/entities/user/ui/UserCard';
import { CommentsBlock } from './CommentsBlock';
import { useFetchComments } from '../api/useFetchComments';
import { usePhotoDetails } from '../store/usePhotoDetails';

interface PhotoDetailsProps {
  src: string;
  id: number;
  user: {
    login: string;
    avatar: {
      url: string;
    };
  };
  hideModal: () => void;
}

export function PhotoDetails({ src, hideModal, user, id }: PhotoDetailsProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loading = usePhotoDetails((store) => store.loading);
  const { fetchData } = useFetchComments();

  useEffect(() => {
    const isLoading = isLoadingImage && loading;
    setIsLoading(isLoading);
  }, [isLoadingImage, loading]);

  useEffect(() => {
    console.log(id);
    fetchData(id);
  }, [id]);

  useEffect(() => {
    if (imageRef.current) {
      new Viewer(imageRef.current, {
        inline: false,
        viewed() {
          hideModal();
        },
        hidden() {
          hideModal();
        },
      });

      // return () => {
      //   viewer.destroy();
      // };
    }
  }, [hideModal]);

  const image = (
    <img
      ref={imageRef}
      src={src}
      className={twMerge(
        clsx('max-w-full max-h-full object-contain', {
          hidden: isLoadingImage,
        }),
      )}
      alt=""
      onLoad={() => setIsLoadingImage(false)}
    />
  );

  return (
    <DialogContent className="p-0 overflow-hidden max-w-[92vw] max-h-[95vh]">
      <DialogHeader>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex h-full">
            <div className="w-2/3 h-[90vh] flex items-center justify-center bg-gray-100">
              {image}
            </div>
            <div className="w-1/3 h-[90vh] p-4 flex flex-col bg-white">
              <UserCard
                user={{ name: user.login, avatar: user?.avatar?.url || '' }}
              />
              <CommentsBlock imageId={id} />
            </div>
          </div>
        )}
      </DialogHeader>
    </DialogContent>
  );
}
