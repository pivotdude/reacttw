import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { EmailForm } from './EmailForm';
import { CodeForm } from './CodeForm';
import { useSignInFormStore } from '../store/useSignInFormStore';

export function SignInForm() {
  const step = useSignInFormStore((state) => state.step);

  const getForm = () => {
    switch (step) {
      case 1:
        return <EmailForm />;
      case 2:
        return <CodeForm />;
      default:
        return null;
    }
  };

  const form = getForm();

  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Sign in in your account.</CardDescription>
      </CardHeader>
      <CardContent>{form}</CardContent>
    </Card>
  );
}
