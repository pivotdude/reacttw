import { IFile } from '@/shared/components/UploadZone/model';
import { useAvatarEditStore } from '../store/useAvatarEditStore';
import { EmptyUploadZone } from '@/shared/components/UploadZone';
import { Button } from '@/shared/ui/button';
import AvatarEditor from 'react-avatar-editor';
import { useSettingsStore } from '@/pages/settings/store/useSettingsStore';

export function AvatarUploadZone() {
  const { setImage, setStep } = useAvatarEditStore((state) => ({
    setImage: state.setImage,
    setStep: state.setStep,
  }));
  const settingsData = useSettingsStore((store) => store.data);

  const handleFileUpload = (files: IFile[]) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target || !e.target?.result) return;
      setImage(e.target.result as string);
      setStep(2);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <AvatarEditor
        width={250}
        height={250}
        image={settingsData?.avatar?.url || ''}
        borderRadius={1000}
        scale={1}
      />
      <EmptyUploadZone handleFiles={handleFileUpload}>
        <Button size="full">Change avatar</Button>
      </EmptyUploadZone>
    </>
  );
}
