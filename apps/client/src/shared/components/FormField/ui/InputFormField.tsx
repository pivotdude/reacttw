import { Input, InputProps } from '@/shared/ui/input';
import { EmptyFormField, EmptyFormFieldProps } from './EmptyFormField';

interface InputFormFieldProps
  extends Omit<EmptyFormFieldProps<InputProps>, 'HOCElement'> {}

export function InputFormField(props: InputFormFieldProps) {
  return <EmptyFormField HOCElement={Input} {...props} />;
}
