import { lazy } from 'react';

export const SignUpPageLazy = lazy(() =>
  import('./SignUpPage').then((module) => ({ default: module.SignupPage })),
);
