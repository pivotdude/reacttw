interface UploadLoadingMessageProps {
  name: string;
}

export function UploadLoadingMessage({ name }: UploadLoadingMessageProps) {
  return (
    <>
      <span className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></span>
      <p>{name}</p>
    </>
  );
}
