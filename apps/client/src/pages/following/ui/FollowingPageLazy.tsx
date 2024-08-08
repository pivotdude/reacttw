import { lazy } from 'react';

export const FollowingPageLazy = lazy(() =>
  import('./FollowingPage').then((module) => ({
    default: module.FollowingPage,
  })),
);
