import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProfilePageLazy } from '@/pages/profile';
import { HomePageLazy } from '@/pages/home';
import { SignInPageLazy } from '@/pages/signin';
import { SuspenseLoader } from '@/widgets/Loader';
import { SignUpPageLazy } from '@/pages/signup';
import { ErrorBoundary } from '@/shared/components/errorBoundary/ui/ErrorBoundary';
import { SettingsPageLazy } from '@/pages/settings/ui/SettingsPageLazy';

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SuspenseLoader>
          <HomePageLazy />
        </SuspenseLoader>
      ),
      errorElement: <ErrorBoundary />,
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
    {
      path: '/settings',
      element: (
        <SuspenseLoader>
          <SettingsPageLazy />
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
