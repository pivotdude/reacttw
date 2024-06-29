import { lazy } from 'react';

export const ProfilePageLazy = lazy(() =>
  import('./ProfilePage').then((module) => ({ default: module.ProfilePage })),
);
