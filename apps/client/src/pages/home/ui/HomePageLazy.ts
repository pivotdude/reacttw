import { lazy } from 'react';

export const HomePageLazy = lazy(() =>
  import('./HomePage').then((module) => ({ default: module.HomePage })),
);
