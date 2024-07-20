import React, { useCallback, useEffect, useRef } from 'react';
import { ImageUp } from 'lucide-react';
import { TypographySmall } from '../../../ui/Typography';
import { uploadFileToServer } from '../api/uploadFileToServer';
import { IFile, IUploadedFile } from '../model';
import { fileToObject } from '../utils/fileToObject';
import { useUploadStore } from '../store/useUploadStore';
import { UploadFileList } from './UploadFileList';

export function UploadZone() {
  // const [files, setFiles] = useState<IUploadedFile[]>([]);
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

  useEffect(() => {
    console.log('Обновленные файлы:', files);
  }, [files]);

  const handleFiles = async (newFiles: IFile[]) => {
    console.log('new', newFiles);
    const updatedFiles = newFiles.map((file) => ({
      id: new Date().getTime(),
      ...fileToObject(file),
      status: 'loading',
    }));
    // @ts-ignore
    setFiles([...files, ...updatedFiles]);

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
    <div className="w-full">
      <div
        className="
          w-full flex flex-col justify-center items-center py-6
          border-2 rounded-md bg-gray-100 border-gray-200 hover:border-gray-300
          cursor-pointer
        "
        onDrop={onDrop}
        onDragOver={onDragOver}
        onClick={handleUploadZoneClick}
      >
        <ImageUp className="w-8 h-8 mb-4" />
        <p className="font-semibold mb-2">
          Press or drag files here for download
        </p>
        <TypographySmall>
          The download of one or more files is supported.
        </TypographySmall>
        <input
          ref={fileInputRef}
          type="file"
          onChange={onFileChange}
          className="hidden"
          multiple
        />
      </div>

      {files.length > 0 && <UploadFileList />}
    </div>
  );
}
