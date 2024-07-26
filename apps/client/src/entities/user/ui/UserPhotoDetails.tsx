import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/shared/ui/dialog';
import { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

interface UserPhotoDetailsProps {
  src: string;
  hideModal: () => void;
}

export function UserPhotoDetails(props: UserPhotoDetailsProps) {
  const imageRef = useRef(null);

  useEffect(() => {
    console.log('ref', imageRef.current);
    if (imageRef && imageRef.current) {
      new Viewer(imageRef.current, {
        fullscreen: true,
        focus: true,
        zIndex: 100,
        viewed() {
          props.hideModal();
        },
      });
    }
  }, [imageRef]);

  console.log('modal content render', props.src);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogDescription>
          <div>
            <img
              ref={imageRef}
              src={props.src}
              className="w-full h-full"
              alt=""
            />
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
