import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProfilePageLazy } from '@/pages/profile';
import { HomePageLazy } from '@/pages/home';
import { SignInPageLazy } from '@/pages/signin';
import { SuspenseLoader } from '@/widgets/Loader';
import { SignUpPageLazy } from '@/pages/signup';

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SuspenseLoader>
          <HomePageLazy />
        </SuspenseLoader>
      ),
    },
    {
      path: '/profile/:name',
      element: (
        <SuspenseLoader>
          <ProfilePageLazy />
        </SuspenseLoader>
      ),
    },
    {
      path: '/signup',
      element: (
        <SuspenseLoader>
          <SignUpPageLazy />
        </SuspenseLoader>
      ),
    },
    {
      path: '/signin',
      element: (
        <SuspenseLoader>
          <SignInPageLazy />
        </SuspenseLoader>
      ),
    },
    // {
    //   path: 'upload',
    //   element: <UploadFile />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
