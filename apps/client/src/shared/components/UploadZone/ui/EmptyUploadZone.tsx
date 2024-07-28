import React, { ReactNode, useCallback, useRef } from 'react';
import { uploadFileToServer } from '../api/uploadFileToServer';
import { IFile, IUploadedFile } from '../model';
import { fileToObject } from '../utils/fileToObject';
import { useUploadStore } from '../store/useUploadStore';

interface EmptyUploadZoneProps {
  before?: ReactNode;
  after?: ReactNode;
  withClear?: Boolean;
}

export function EmptyUploadZone({
  before,
  after,
  withClear,
}: EmptyUploadZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { files, setFiles, updateFile } = useUploadStore();

  const uploadFile = async (file: IFile): Promise<IUploadedFile> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const result = await uploadFileToServer(formData);
      return result;
    } catch (error) {
      console.error('Ошибка при загрузке файла:', error);
      // @ts-ignore
      return { ...file, status: 'error', error: (error as Error).message };
    }
  };

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files) as IFile[];
    handleFiles(droppedFiles);
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []) as IFile[];
    handleFiles(selectedFiles);
  };

  const handleFiles = async (newFiles: IFile[]) => {
    const updatedFiles = newFiles.map((file) => ({
      id: new Date().getTime(),
      ...fileToObject(file),
      status: 'loading',
    }));

    if (withClear) {
      // @ts-ignore
      setFiles([...updatedFiles]);
    } else {
      // @ts-ignore
      setFiles([...files, ...updatedFiles]);
    }

    for (let i = 0; i < updatedFiles.length; i++) {
      const result = await uploadFile(newFiles[i]);
      updateFile(updatedFiles[i].id, {
        ...updatedFiles[i],
        // @ts-ignore
        result,
        status: 'success',
      });
    }
  };

  const handleUploadZoneClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className="w-full"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={handleUploadZoneClick}
    >
      <div>
        {before}
        <input
          ref={fileInputRef}
          type="file"
          onChange={onFileChange}
          className="hidden"
          multiple
        />
        {after}
      </div>
    </div>
  );
}
