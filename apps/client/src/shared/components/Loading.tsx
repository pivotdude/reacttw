import { LoaderCircle } from 'lucide-react';

export function Loading() {
  return (
    <div className="min-h-screen flex flex-col space-y-4 justify-center items-center">
      <LoaderCircle className="min-h- animate-spin" size={100} />
    </div>
  );
}
