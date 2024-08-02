import { Button } from '@/shared/ui/button';
import { useAvatarEditStore } from '../store/useAvatarEditStore';
import AvatarEditor from 'react-avatar-editor';
import { useRef } from 'react';
import { AvatarConfirm } from './AvatarConfirm';

export function AvatarPreview() {
  const editorRef = useRef(null);
  const { scale, decrimentScale, incrementScale, image } = useAvatarEditStore(
    (state) => ({
      scale: state.scale,
      image: state.image,
      incrementScale: state.incrementScale,
      decrimentScale: state.decrimentScale,
      isLoading: state.isLoading,
      setIsLoading: state.setIsLoading,
    }),
  );

  return (
    <div className="flex flex-col">
      <AvatarEditor
        ref={editorRef}
        width={250}
        height={250}
        // @ts-ignore
        image={image}
        borderRadius={1000}
        scale={scale}
      />
      <div className="flex w-full space-x-2 mt-2">
        <Button size="full" onClick={incrementScale}>
          +
        </Button>
        <Button size="full" onClick={decrimentScale}>
          -
        </Button>
      </div>
      <AvatarConfirm editorRef={editorRef} />
    </div>
  );
}
