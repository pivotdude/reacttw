import { useEffect, useRef, useState } from 'react';
import 'viewerjs/dist/viewer.css';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { LoadingSpinner } from '@/shared/components/Loader';
import { UserCard } from '@/entities/user/ui/UserCard';
import { CommentsBlock } from './CommentsBlock';
import { usePhotoDetailsStore } from '../store/usePhotoDetailsStore';
import { LikeImageButton } from '@/widgets/PhotoDetails/ui/PhotoDetailsButtons/LikeImageButton';
import { DislikeImageButton } from '@/widgets/PhotoDetails/ui/PhotoDetailsButtons/DislikeImageButton';
import Viewer from 'viewerjs';
import { SaveImageButton } from '@/widgets/PhotoDetails/ui/PhotoDetailsButtons/SaveImageButton';
import { useFetchPhotoDetails } from '../hooks/useFetchPhotoDetails';
import Modal from '@/shared/components/Modal/ui/Modal';

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
      <div className="flex flex-col md:flex-row h-full pt-2">
        <div className="w-full md:w-2/3 h-[86vh] flex items-center justify-center bg-gray-100">
          {image}
          {isLoadingImage && <LoadingSpinner />}
        </div>
        <div className="w-full md:w-1/3 h-[86vh] pl-2 flex flex-col bg-white">
          <div className="flex justify-between pr-10">
            <UserCard
              user={{ name: user.login, avatar: user?.avatar?.url || '' }}
            />
            <div className="flex space-x-2">
              <SaveImageButton imageId={id} onUpdate={onUpdateSavePhoto} />
              <LikeImageButton imageId={id} likeCount={data?.likeCount || 0} />
              <DislikeImageButton
                imageId={id}
                dislikeCount={data?.dislikeCount || 0}
              />
            </div>
          </div>

          <CommentsBlock />
        </div>
      </div>
    </Modal>
  );
}
