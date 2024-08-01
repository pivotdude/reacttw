import { useEffect, useRef, useState } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import { DialogContent, DialogHeader } from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { UserCard } from '../../../entities/user/ui/UserCard';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { LoadingSpinner } from '@/shared/components/Loader';
import { usePhotoDetails } from '../store/usePhotoDetails';
import { CommentList } from './CommentList';

interface PhotoDetailsProps {
  src: string;
  user: {
    login: string;
    avatar: {
      url: string;
    };
  };
  hideModal: () => void;
}

export function PhotoDetails({ src, hideModal, user }: PhotoDetailsProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const { comments, setComments } = usePhotoDetails((store) => ({
    comments: store.comments,
    setComments: store.setComments,
  }));

  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageRef.current) {
      const viewer = new Viewer(imageRef.current, {
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

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        user: 'Current User',
        text: newComment,
        date: new Date().toISOString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const image = (
    <img
      ref={imageRef}
      src={src}
      className={twMerge(
        clsx('max-w-full max-h-full object-contain', {
          hidden: isLoading,
        }),
      )}
      alt=""
      onLoad={() => setIsLoading(false)}
    />
  );

  return (
    <DialogContent className="p-0 overflow-hidden max-w-[92vw] max-h-[95vh]">
      <DialogHeader>
        <div className="flex h-full">
          <div className="w-2/3 h-[90vh] flex items-center justify-center bg-gray-100">
            {isLoading && <LoadingSpinner />}
            {image}
          </div>
          <div className="w-1/3 h-[90vh] p-4 flex flex-col bg-white">
            <UserCard
              user={{ name: user.login, avatar: user?.avatar?.url || '' }}
            />
            <CommentList comments={comments} />
            <div className="flex">
              <Input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e: any) => setNewComment(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button onClick={handleAddComment}>Post</Button>
            </div>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
