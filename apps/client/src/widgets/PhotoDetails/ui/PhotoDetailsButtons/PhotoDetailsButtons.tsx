import { DislikeImageButton } from './DislikeImageButton';
import { LikeImageButton } from './LikeImageButton';
import { SaveImageButton } from './SaveImageButton';

interface PhotoDetailsButtonProps {
  imageId: number;
  onUpdateSavePhoto?: () => void;
  likeCount?: number;
  dislikeCount?: number;
}

export function PhotoDetailsButtons({
  imageId,
  onUpdateSavePhoto,
  likeCount,
  dislikeCount,
}: PhotoDetailsButtonProps) {
  return (
    <div className="flex space-x-2 justify-end xl:justify-between">
      <SaveImageButton imageId={imageId} onUpdate={onUpdateSavePhoto} />
      <LikeImageButton imageId={imageId} likeCount={likeCount || 0} />
      <DislikeImageButton imageId={imageId} dislikeCount={dislikeCount || 0} />
    </div>
  );
}
