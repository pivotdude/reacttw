import { Button } from '@/shared/ui/button';
import { updateAvatar } from '../api/UpdateAvatar';
import { IFile, IUploadedFile } from '@/shared/components/UploadZone/model';
import { uploadFile } from '@/shared/components/UploadZone/utils/uploadFile';
import { useAvatarEditStore } from '../store/useAvatarEditStore';
import { useShallow } from 'zustand/react/shallow';

export function AvatarConfirm({ editorRef }: { editorRef: any }) {
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
        console.log('result2', result);
        await updateAvatar(result.id);

        if (result.status === 'error') {
          throw new Error(result.error || 'Unknown error occurred');
        }

        console.log('Upload result:', result);
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
