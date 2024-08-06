import { Button } from '@/shared/ui/button';
import { TypographySmall } from '@/shared/ui/Typography';
import { useFetchPhotoDetails } from '@/widgets/PhotoDetails/hooks/useFetchPhotoDetails';
import { usePhotoDetailsStore } from '@/widgets/PhotoDetails/store/usePhotoDetailsStore';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { deleteLike } from './api/deleteLike';
import { putDislike } from './api/putDislike';

interface LikeImageButtonProps {
  imageId: number;
  dislikeCount: number;
}

export function DislikeImageButton(props: LikeImageButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const { fetchData } = useFetchPhotoDetails();
  const imageId = usePhotoDetailsStore((store) => store.imageId);
  const data = usePhotoDetailsStore((store) => store.data);

  useEffect(() => {
    if (data?.likes?.[0]?.isLike === false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [data, imageId]);

  const onClick = async () => {
    if (!isActive) {
      await putDislike(props.imageId);
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
      <TypographySmall className="text-lg">
        {props.dislikeCount}
      </TypographySmall>
      <Heart width={20} />
    </Button>
  );
}
