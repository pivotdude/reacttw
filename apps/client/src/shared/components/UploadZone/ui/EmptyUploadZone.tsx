import React, { ReactNode, useCallback, useRef } from 'react';
import { IFile } from '../model';
import { twMerge } from 'tailwind-merge';

interface EmptyUploadZoneProps {
  children?: ReactNode;
  after?: ReactNode;
  handleFiles: (newFiles: IFile[]) => void;
  className?: string;
}

export function EmptyUploadZone({
  children,
  after,
  handleFiles,
  className,
}: EmptyUploadZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleUploadZoneClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div
        className={twMerge('w-full', className)}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onClick={handleUploadZoneClick}
      >
        {children}
        <input
          ref={fileInputRef}
          type="file"
          onChange={onFileChange}
          className="hidden"
          multiple
        />
      </div>
      {after}
    </>
  );
}
