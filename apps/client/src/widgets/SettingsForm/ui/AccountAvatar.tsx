import { UserAvatar } from '@/entities/user';
import { Button } from '@/shared/ui/button';
import { TypographyH4 } from '@/shared/ui/Typography';
import { AvatarEdit } from '@/widgets/AvatarEdit/ui/AvatarEdit';
import { useState } from 'react';

export function AccountAvatar() {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <TypographyH4>Avatar</TypographyH4>
      {step === 1 && (
        <div className="space-y-2 flex flex-col w-fit">
          <UserAvatar src={''} className="w-60 h-60" fallback={''} />
          <Button size="full" onClick={() => setStep(2)}>
            Edit avatar
          </Button>
        </div>
      )}
      {step === 2 && <AvatarEdit />}
    </>
  );
}
