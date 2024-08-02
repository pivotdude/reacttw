import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AvatarEdit } from '@/widgets/AvatarEdit/ui/AvatarEdit';
import { useSettingsStore } from '@/pages/settings/store/useSettingsStore';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { InputFormField } from '@/shared/components/FormField/ui/InputFormField';

const formSchema = z.object({
  email: z.string().email({ message: 'Enter correct email' }),
  name: z.string(),
});

export function AccountForm() {
  const data = useSettingsStore((store) => store.data);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: data?.email,
      name: data?.name,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="space-y-8">
      <AvatarEdit />

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <InputFormField
                name="email"
                control={form.control}
                HOCProps={{
                  placeholder: 'Your email adress',
                }}
              />
              <InputFormField
                name="name"
                control={form.control}
                HOCProps={{
                  placeholder: 'Your name',
                }}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
