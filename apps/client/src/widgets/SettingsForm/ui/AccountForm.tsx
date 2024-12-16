import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { AvatarEdit } from '@/widgets/AvatarEdit/ui/AvatarEdit';
import { useSettingsStore } from '@/pages/settings/store/useSettingsStore';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { InputFormField } from '@/shared/components/FormField/ui/InputFormField';

const subscriptionSchema = z.object({
  avatar: z.string().optional(), // URL or ID for the avatar
  name: z.string().min(1, { message: 'Enter subscription name' }),
  price: z.number().positive({ message: 'Enter valid price' }),
});

const formSchema = z.object({
  email: z.string().email({ message: 'Enter correct email' }),
  name: z.string(),
  subscriptions: z.array(subscriptionSchema).optional(),
});

export function AccountForm() {
  const data = useSettingsStore((store) => store.data);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: data?.email,
      name: data?.name,
      subscriptions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'subscriptions',
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
                  placeholder: 'Your email address',
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

      <Card>
        <CardHeader>
          <CardTitle>Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-2">
                  <AvatarEdit
                    name={`subscriptions.${index}.avatar`}
                    control={form.control}
                  />
                  <InputFormField
                    name={`subscriptions.${index}.name`}
                    control={form.control}
                    HOCProps={{
                      placeholder: 'Subscription name',
                    }}
                  />
                  <InputFormField
                    name={`subscriptions.${index}.price`}
                    control={form.control}
                    HOCProps={{
                      placeholder: 'Subscription price',
                      type: 'number',
                    }}
                  />
                  <Button type="button" onClick={() => remove(index)}>
                    Remove
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                onClick={() => append({ avatar: '', name: '', price: 0 })}
              >
                Add Subscription
              </Button>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
