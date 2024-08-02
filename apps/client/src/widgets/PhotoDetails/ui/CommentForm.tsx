import { Button } from '@/shared/ui/button';
import { usePhotoDetails } from '../store/usePhotoDetails';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/shared/ui/form';
import { sendComment } from '../api/sendComment';
import { TextAreaFormField } from '@/shared/components/FormField/ui/TextAreaFormField';

const formSchema = z.object({
  text: z.string(),
});

export function CommentForm({ imageId }: { imageId: number }) {
  const { comments, setComments } = usePhotoDetails((store) => ({
    comments: store.comments,
    setComments: store.setComments,
    loading: store.loading,
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await sendComment(imageId, values.text);
    const comment = result.createComment;
    setComments([...comments, comment]);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        <TextAreaFormField
          name="text"
          control={form.control}
          HOCProps={{
            placeholder: 'Enter message...',
          }}
          withoutLabel={true}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
