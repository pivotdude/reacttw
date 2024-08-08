import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProfilePageLazy } from '@/pages/profile';
import { HomePageLazy } from '@/pages/home';
import { SignInPageLazy } from '@/pages/signin';
import { SignUpPageLazy } from '@/pages/signup';
import { ErrorBoundary } from '@/shared/components/errorBoundary/ui/ErrorBoundary';
import { SettingsPageLazy } from '@/pages/settings/ui/SettingsPageLazy';
import { SuspenseLoadingScreen } from '@/shared/components/Loader';
import { FollowingPageLazy } from '@/pages/following';
import { FollowersPageLazy } from '@/pages/followers';

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SuspenseLoadingScreen>
          <HomePageLazy />
        </SuspenseLoadingScreen>
      ),
      errorElement: <ErrorBoundary />,
    },
    {
      path: '/profile/:name',
      element: (
        <SuspenseLoadingScreen>
          <ProfilePageLazy />
        </SuspenseLoadingScreen>
      ),
    },
    {
      path: '/profile/:name/followers',
      element: (
        <SuspenseLoadingScreen>
          <FollowersPageLazy />
        </SuspenseLoadingScreen>
      ),
    },
    {
      path: '/profile/:name/following',
      element: (
        <SuspenseLoadingScreen>
          <FollowingPageLazy />
        </SuspenseLoadingScreen>
      ),
    },
    {
      path: '/signup',
      element: (
        <SuspenseLoadingScreen>
          <SignUpPageLazy />
        </SuspenseLoadingScreen>
      ),
    },
    {
      path: '/signin',
      element: (
        <SuspenseLoadingScreen>
          <SignInPageLazy />
        </SuspenseLoadingScreen>
      ),
    },
    {
      path: '/settings',
      element: (
        <SuspenseLoadingScreen>
          <SettingsPageLazy />
        </SuspenseLoadingScreen>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
