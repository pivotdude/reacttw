import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { ProfilePage } from '@/pages/profile/ui/ProfilePage';
import UploadFile from '@/widgets/UploadFile';

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/profile/:name',
      element: <ProfilePage />,
    },
    {
      path: 'upload',
      element: <UploadFile />,
    },
  ]);

  return <RouterProvider router={router} />;
}
