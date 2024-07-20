import { Button } from '@/shared/ui/button';
import { UploadSucessMessage } from './Messages/UploadSucessMessage';
import { UploadErrorMessage } from './Messages/UploadErrorMessage';
import { UploadLoadingMessage } from './Messages/UploadLoadingMessage';
import { X } from 'lucide-react';
import { IUploadedFile } from '../model';
import { useUploadStore } from '../store/useUploadStore';

function getStatusMessage(
  status: IUploadedFile['status'],
  name: string,
  url?: string,
) {
  switch (status) {
    case 'success':
      return <UploadSucessMessage name={name} url={url as string} />;
    case 'error':
      return <UploadErrorMessage name={name} />;
    case 'loading':
      return <UploadLoadingMessage name={name} />;
  }
}

export function UploadFileList() {
  const files = useUploadStore((store) => store.files);
  const setFiles = useUploadStore((store) => store.setFiles);

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="my-4">
      <h3 className="font-semibold mb-2">Loaded files:</h3>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded"
          >
            <span className="flex items-center">
              {getStatusMessage(file.status, file.name, file?.result?.url)}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeFile(index)}
            >
              <X className="w-4 h-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
