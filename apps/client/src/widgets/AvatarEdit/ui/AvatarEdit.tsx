import { useState, useRef, useEffect } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { EmptyUploadZone } from '@/shared/components/UploadZone';
import { Button } from '@/shared/ui/button';
import { uploadFile } from '@/shared/components/UploadZone/utils/uploadFile';
import { IFile, IUploadedFile } from '@/shared/components/UploadZone/model';
import { updateAvatar } from '../api/UpdateAvatar';

interface AvatarEditProps {}

export function AvatarEdit(props: AvatarEditProps) {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleScaleChange = (newScale: number) => {
    setScale(newScale);
  };

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
        //onAvatarUpdate(result.url); // Предполагаем, что в результате есть поле url
      } catch (error) {
        console.error('Error saving avatar:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFileUpload = (files: IFile[]) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="w-[300px]">
      <EmptyUploadZone handleFiles={handleFileUpload}>
        <Button>Pick photo</Button>
      </EmptyUploadZone>
      <div className="flex flex-col">
        <AvatarEditor
          ref={editorRef}
          width={250}
          height={250}
          image={image}
          borderRadius={1000}
          scale={scale}
        />
        <div className="flex w-full space-x-2 mt-2">
          <Button size="full" onClick={() => handleScaleChange(scale + 0.1)}>
            +
          </Button>
          <Button size="full" onClick={() => handleScaleChange(scale - 0.1)}>
            -
          </Button>
        </div>
      </div>
      <Button className="mt-2" size="full" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
