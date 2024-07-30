import { LoaderCircle } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col space-y-4 justify-center items-center">
      <LoaderCircle className="min-h-max animate-spin" size={100} />
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Loading your experience
      </h2>
      <p className="text-center text-gray-600">
        Please wait while we prepare everything for you...
      </p>
    </div>
  );
}
