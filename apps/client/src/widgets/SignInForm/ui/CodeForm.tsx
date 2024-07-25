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
import { useNavigate } from 'react-router-dom';
import { useSignInFormStore } from '../store/useSignInFormStore';
import { сonfirmLoginCode } from '../api/confirmLoginCode';

const formSchema = z.object({
  code: z
    .string()
    .min(4, { message: 'The field must have at least 4 characters' }),
});

export function CodeForm() {
  const navigate = useNavigate();
  const data = useSignInFormStore((store) => store.data);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

    сonfirmLoginCode(data?.email, values.code)
      .then((result) => {
        if (!result.confirmLogin) {
          throw new Error('Empty');
        }
        localStorage.setItem('accessToken', result.confirmLogin.accessToken);
        navigate('/');
      })
      .catch((e) => {
        return form.setError(
          'code',
          { message: e.response.errors[0].message },
          { shouldFocus: true },
        );
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email code" {...field} />
              </FormControl>
              <FormDescription>
                The confirmation code has been sent to your email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
