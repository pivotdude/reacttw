import { CheckCircle } from 'lucide-react';

interface UploadSucessMessageProps {
  url: string;
  name: string;
}

export function UploadSucessMessage({ name, url }: UploadSucessMessageProps) {
  return (
    <>
      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
      <a href={url} target="_blank" className="text-blue-600 truncate">
        {name}
      </a>
    </>
  );
}
