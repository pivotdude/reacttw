import { lazy } from 'react';

export const SignInPageLazy = lazy(() =>
  import('./SignInPage').then((module) => ({ default: module.SignInPage })),
);
