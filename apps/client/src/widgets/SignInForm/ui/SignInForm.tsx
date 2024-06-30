import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { useState } from 'react';
import { EmailForm } from './EmailForm';
import { CodeForm } from './CodeForm';

export function SignInForm() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);

  const getForm = () => {
    switch (step) {
      case 1:
        return <EmailForm nextStep={nextStep} />;
      case 2:
        return <CodeForm />;
      default:
        return null;
    }
  };

  const form = getForm();

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Sign in in your account. Use your email
        </CardDescription>
      </CardHeader>
      <CardContent>{form}</CardContent>
    </Card>
  );
}
