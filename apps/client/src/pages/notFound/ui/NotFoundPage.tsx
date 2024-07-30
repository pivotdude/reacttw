import { Button } from '@/shared/ui/button';
import { Layout } from '@/widgets/Layout/ui/Layout';
import { ArrowLeft, Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center space-y-8 p-4">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Oops! Page not found</p>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
          <Button
            variant="default"
            onClick={() => (window.location.href = '/')}
          >
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
        </div>
      </div>
    </Layout>
  );
}
