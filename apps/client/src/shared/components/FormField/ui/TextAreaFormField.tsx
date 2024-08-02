import { EmptyFormField, EmptyFormFieldProps } from './EmptyFormField';
import { Textarea, TextareaProps } from '@/shared/ui/textarea';

interface TextAreaFormFieldProps
  extends Omit<EmptyFormFieldProps<TextareaProps>, 'HOCElement'> {}

export function TextAreaFormField(props: TextAreaFormFieldProps) {
  return (
    <EmptyFormField
      HOCElement={Textarea}
      HOCProps={{
        ...props.HOCProps,
      }}
      {...props}
    />
  );
}
