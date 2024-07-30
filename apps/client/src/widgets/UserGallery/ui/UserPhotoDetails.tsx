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

interface UserPhotoDetailsProps {
  src: string;
  user: any;
  hideModal: () => void;
}

export function UserPhotoDetails({
  src,
  hideModal,
  user,
}: UserPhotoDetailsProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  console.log('user', user);

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
            <div className="flex-grow overflow-y-auto mb-4">
              {comments.map((comment) => (
                <div key={comment.id} className="mb-2">
                  <p className="font-semibold">{comment.user}</p>
                  <p>{comment.text}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(comment.date).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
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
