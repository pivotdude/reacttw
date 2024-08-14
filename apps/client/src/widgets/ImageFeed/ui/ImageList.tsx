import { useImageFeedStore } from '../store/useImageFeedStore';
import { PostImage } from './ImagePost';
import { Fragment } from 'react/jsx-runtime';
import { UserDropdown } from '@/features/user/userDropdown/ui/UserDropdown';
import { UserCard } from '@/entities/user/ui/UserCard';

export function ImageList() {
  const photos = useImageFeedStore((store) => store.photos);

  return (
    <>
      {photos.map((photo) => (
        <Fragment key={photo.id}>
          <div className="w-full flex items-center justify-between mb-2">
            <UserCard
              user={{
                name: photo.user.login,
                avatar: photo.user.avatar?.url || '',
              }}
            />
            <UserDropdown />
          </div>
          <PostImage photo={photo} />
        </Fragment>
      ))}
    </>
  );
}
