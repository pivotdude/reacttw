import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { сonfirmRegisterCode } from '../api/confirmRegisterCode';
import { useSignUpFormStore } from '../store/useSignUpFormStore';
import { useNavigate } from 'react-router-dom';
import { InputFormField } from '@/shared/components/FormField/ui/InputFormField';

const formSchema = z.object({
  code: z
    .string()
    .min(4, { message: 'The field must have at least 4 characters' }),
  login: z
    .string()
    .min(4, { message: 'The field must have at least 4 characters' }),
  name: z.string(),
});

export function CodeForm() {
  const navigate = useNavigate();
  const data = useSignUpFormStore((store) => store.data);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      login: '',
      code: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!data) {
      return form.setError(
        'code',
        { message: 'Data not found!' },
        { shouldFocus: true },
      );
    }

    const result = await сonfirmRegisterCode({ ...values, email: data.email });

    if (result?.errors && result.errors.length > 0) {
      return form.setError(
        'code',
        { message: result.errors[0].message },
        { shouldFocus: true },
      );
    }

    navigate('/');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputFormField
          control={form.control}
          name="name"
          label="Name (optional)"
          HOCProps={{
            placeholder: 'Enter your name ',
          }}
        />
        <InputFormField
          control={form.control}
          name="login"
          HOCProps={{
            placeholder: 'Enter your login',
          }}
        />
        <InputFormField
          control={form.control}
          name="code"
          HOCProps={{
            placeholder: 'Enter your code, from email',
          }}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
