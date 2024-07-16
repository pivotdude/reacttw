import { lazy } from 'react';

export const SettingsPageLazy = lazy(() =>
  import('./SettingsPage').then((module) => ({ default: module.SettingsPage })),
);
