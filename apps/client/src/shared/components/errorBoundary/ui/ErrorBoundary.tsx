import { NotFoundPageLazy } from '@/pages/notFound';
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/alert';
import { useRouteError } from 'react-router-dom';

// ErrorBoundary component
export const ErrorBoundary = () => {
  const error: any = useRouteError();

  if (error.status === 404) {
    return <NotFoundPageLazy />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Alert variant="destructive" className="m-20 w-full">
        <AlertTitle className="text-xl font-semibold mb-2">
          Oops! Something went wrong
        </AlertTitle>
        <AlertDescription>
          <h1 className="text-3xl text-red-600 mb-4">
            {error.statusText || error.message}
          </h1>
          <p className="mb-4">{error.error.message}</p>
        </AlertDescription>
      </Alert>
    </div>
  );
};
