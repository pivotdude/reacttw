import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSignInFormStore } from '../store/useSignInFormStore';
import { sendLoginCode } from '../api/sendLoginCode';

const formSchema = z.object({
  email: z.string().email({ message: 'Enter correct email' }),
});

export function EmailForm() {
  const nextStep = useSignInFormStore((store) => store.nextStep);
  const setData = useSignInFormStore((store) => store.setData);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await sendLoginCode(values.email);
    setData({ email: values.email });

    if (result?.errors && result.errors.length > 0) {
      return form.setError(
        'email',
        { message: result.errors[0].message },
        { shouldFocus: true },
      );
    }

    nextStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email addres" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
