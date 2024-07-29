import { IFile } from '@/shared/components/UploadZone/model';
import { useAvatarEditStore } from '../store/useAvatarEditStore';
import { EmptyUploadZone } from '@/shared/components/UploadZone';
import { Button } from '@/shared/ui/button';
import { useProfileStore } from '@/pages/profile/store/useProfileStore';
import AvatarEditor from 'react-avatar-editor';

export function AvatarUploadZone() {
  const { setImage, setStep } = useAvatarEditStore((state) => ({
    setImage: state.setImage,
    setStep: state.setStep,
  }));
  const profile = useProfileStore((store) => store.profile);

  const handleFileUpload = (files: IFile[]) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      setStep(2);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <AvatarEditor
        width={250}
        height={250}
        image={profile?.avatar.url || ''}
        borderRadius={1000}
        scale={1}
      />
      <EmptyUploadZone handleFiles={handleFileUpload}>
        <Button size="full">Change avatar</Button>
      </EmptyUploadZone>
    </>
  );
}
