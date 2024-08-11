import { Button } from '@/shared/ui/button';
import { useToast } from '@/shared/ui/use-toast';
import { SaveIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useFetchPhotoDetails } from '../../hooks/useFetchPhotoDetails';
import { usePhotoDetailsStore } from '../../store/usePhotoDetailsStore';
import { getToastParams } from '@/shared/utils/getToastParams';
import { createSavedPhoto } from './api/createSavedPhoto';
import { deleteSavedPhoto } from './api/deleteSavedPhoto';

interface DislikeImageButtonProps {
  imageId: number;
  onUpdate?: () => void;
}

export function SaveImageButton({
  imageId,
  onUpdate,
}: DislikeImageButtonProps) {
  const data = usePhotoDetailsStore((store) => store.data);
  const [isActive, setIsActive] = useState(data?.userSaved || false);
  const { toast } = useToast();
  const { fetchData } = useFetchPhotoDetails();

  useEffect(() => {
    if (data?.userSaved) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [data, imageId]);

  const onClick = async () => {
    if (!isActive) {
      await createSavedPhoto(imageId).catch((e) => {
        toast(getToastParams(e.response.errors[0].message));
      });
    } else {
      await deleteSavedPhoto(imageId);
    }
    fetchData(imageId);
    onUpdate && onUpdate();
  };

  return (
    <Button
      className="space-x-1"
      variant={isActive ? 'default' : 'ghost'}
      onClick={onClick}
    >
      <SaveIcon width={20} />
    </Button>
  );
}
