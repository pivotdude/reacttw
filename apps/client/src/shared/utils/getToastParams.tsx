import { Toast } from '../ui/use-toast';
import { ToastAction } from '@/shared/ui/toast';

export function getToastParams(errorType: string | undefined): Toast {
  switch (errorType) {
    case 'NOT_AUTH':
      return {
        title: 'Not authorized',
        description: 'Please, sign in',
        variant: 'destructive',
        action: (
          <ToastAction altText="Goto schedule to undo">
            <a href="/signin">Sign in</a>
          </ToastAction>
        ),
      };
    default:
      return {
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      };
  }
}
