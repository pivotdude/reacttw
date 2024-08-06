import { putLike } from '@/widgets/PhotoDetails/ui/PhotoDetailsButtons/api/putLike';
import { Button } from '@/shared/ui/button';
import { TypographySmall } from '@/shared/ui/Typography';
import { useFetchPhotoDetails } from '@/widgets/PhotoDetails/hooks/useFetchPhotoDetails';
import { usePhotoDetailsStore } from '@/widgets/PhotoDetails/store/usePhotoDetailsStore';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { deleteLike } from './api/deleteLike';

interface LikeImageButtonProps {
  imageId: number;
  likeCount: number;
}

export function LikeImageButton(props: LikeImageButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const { fetchData } = useFetchPhotoDetails();
  const imageId = usePhotoDetailsStore((store) => store.imageId);
  const data = usePhotoDetailsStore((store) => store.data);

  useEffect(() => {
    // TODO: refactor, transfer to server
    // @ts-ignore
    if (data?.likes?.[0]?.isLike === true) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [data, imageId]);

  const onClick = async () => {
    console.log('submit', props.imageId);

    if (!isActive) {
      await putLike(props.imageId);
    } else {
      await deleteLike(props.imageId);
    }
    fetchData(imageId);
  };
  return (
    <Button
      variant={isActive ? 'default' : 'ghost'}
      className="space-x-1"
      onClick={onClick}
    >
      <TypographySmall className="text-lg">{props.likeCount}</TypographySmall>
      <Heart width={20} />
    </Button>
  );
}
