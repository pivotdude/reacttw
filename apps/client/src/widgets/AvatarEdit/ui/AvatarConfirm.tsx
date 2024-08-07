import { Button } from '@/shared/ui/button';
import { updateAvatar } from '../api/UpdateAvatar';
import { IFile, IUploadedFile } from '@/shared/components/UploadZone/model';
import { uploadFile } from '@/shared/components/UploadZone/utils/uploadFile';
import { useAvatarEditStore } from '../store/useAvatarEditStore';
import { useShallow } from 'zustand/react/shallow';
import { useToast } from '@/shared/ui/use-toast';
import { useFetchSettingsData } from '@/pages/settings/hooks/useFetchSettingsData';

export function AvatarConfirm({ editorRef }: { editorRef: any }) {
  const { toast } = useToast();
  const { fetchData } = useFetchSettingsData();
  const { setIsLoading, clear } = useAvatarEditStore(
    useShallow((store) => ({
      setIsLoading: store.setIsLoading,
      clear: store.clear,
    })),
  );

  const handleSave = async () => {
    if (editorRef.current) {
      setIsLoading(true);
      try {
        const canvas = editorRef.current.getImageScaledToCanvas();
        const croppedImageUrl = canvas.toDataURL();

        const response = await fetch(croppedImageUrl);
        const blob = await response.blob();

        const file: IFile = new File([blob], 'avatar.png', {
          type: 'image/png',
        });

        const result: IUploadedFile = await uploadFile(file);
        await updateAvatar(result.id);
        fetchData();

        toast({
          variant: 'success',
          title: 'Avatar updated',
          description: 'Your avatar has been updated',
        });
        clear();
      } catch (error) {
        console.error('Error saving avatar:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Button className="mt-2" size="full" onClick={handleSave}>
      Save
    </Button>
  );
}
