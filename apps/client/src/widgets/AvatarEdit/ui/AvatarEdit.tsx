import { AvatarPreview } from './AvatarPreview';
import { AvatarUploadZone } from './AvatarUploadZone';
import { useAvatarEditStore } from '../store/useAvatarEditStore';

export function AvatarEdit() {
  const step = useAvatarEditStore((store) => store.step);

  return (
    <div className="w-fit space-y-2">
      {step === 1 && <AvatarUploadZone />}
      {step === 2 && <AvatarPreview />}
    </div>
  );
}
