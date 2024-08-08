import { lazy } from 'react';

export const FollowersPageLazy = lazy(() =>
  import('./FollowersPage').then((module) => ({
    default: module.FollowersPage,
  })),
);
