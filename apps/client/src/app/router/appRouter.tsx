import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProfilePageLazy } from '@/pages/profile';
import { HomePageLazy } from '@/pages/home';
import { SignInPageLazy } from '@/pages/signin';

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePageLazy />,
    },
    {
      path: '/profile/:name',
      element: <ProfilePageLazy />,
    },
    {
      path: '/signup',
      element: <SignInPageLazy />,
    },
    {
      path: '/signin',
      element: <SignInPageLazy />,
    },
    // {
    //   path: 'upload',
    //   element: <UploadFile />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
