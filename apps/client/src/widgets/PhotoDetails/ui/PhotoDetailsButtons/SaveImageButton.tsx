import { Button } from '@/shared/ui/button';
import { SaveIcon } from 'lucide-react';
import { useState } from 'react';

interface DislikeImageButtonProps {
  imageId: number;
}

export function SaveImageButton(props: DislikeImageButtonProps) {
  const [isActive, setIsActive] = useState(false);
  console.log(props.imageId);
  return (
    <Button
      className="space-x-1"
      variant={isActive ? 'default' : 'ghost'}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <SaveIcon width={20} />
    </Button>
  );
}
