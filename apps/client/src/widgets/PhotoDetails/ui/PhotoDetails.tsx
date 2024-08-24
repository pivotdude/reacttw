import { useEffect, useRef, useState } from 'react';
import 'viewerjs/dist/viewer.css';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { LoadingSpinner } from '@/shared/components/Loader';
import { UserCard } from '@/entities/user/ui/UserCard';
import { CommentsBlock } from '../../../features/comments/ui/CommentsBlock';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';
import Viewer from 'viewerjs';
import { useFetchPhotoDetails } from '../hooks/useFetchPhotoDetails';
import Modal from '@/shared/components/Modal/ui/Modal';
import { PhotoDetailsButtons } from './PhotoDetailsButtons';

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
  onUpdateSavePhoto?: () => void;
}

export function PhotoDetails({
  src,
  hideModal,
  user,
  id,
  onUpdateSavePhoto,
}: PhotoDetailsProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const { fetchData } = useFetchPhotoDetails();
  const data = usePhotoDetailsStore((store) => store.data);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const { setImageId } = usePhotoDetailsStore((store) => ({
    setImageId: store.setImageId,
  }));

  useEffect(() => {
    setImageId(id);
  }, [id]);

  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    if (imageRef.current) {
      const viewer = new Viewer(imageRef.current, {
        inline: false,
        // viewed() {
        // hideModal();
        // },
        // hidden() {
        // hideModal();
        // },
      });

      return () => {
        viewer.destroy();
      };
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
    <Modal isOpen={true} onClose={hideModal} fullscreen={false}>
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/3 h-[86vh] flex items-center justify-center bg-gray-100">
          {image}
          {isLoadingImage && <LoadingSpinner />}
        </div>
        <div className="w-full md:w-1/3 h-[86vh] pl-2 pt-2 flex flex-col bg-white">
          <div className="flex xl:flex-row flex-col justify-end xl:justify-between">
            <UserCard
              user={{ name: user.login, avatar: user?.avatar?.url || '' }}
            />
            <PhotoDetailsButtons
              imageId={id}
              onUpdateSavePhoto={onUpdateSavePhoto}
              dislikeCount={data?.dislikeCount}
              likeCount={data?.likeCount}
            />
          </div>

          <CommentsBlock imageId={id} />
        </div>
      </div>
    </Modal>
  );
}
