import { AlertCircle } from 'lucide-react';

interface UploadErrorMessageProps {
  name: string;
}

export function UploadErrorMessage({ name }: UploadErrorMessageProps) {
  return (
    <>
      <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
      <p className="text-red-600">{name}</p>
    </>
  );
}
