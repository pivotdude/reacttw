import { capitalizeFirstLetter } from '@/shared/lib/utils/capitalizeFirstLetter';
import {
  FormControl,
  FormField as ShadcnFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { useMemo } from 'react';
import { Control } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
}

export function FormField({
  name,
  control,
  label,
  placeholder,
}: FormFieldProps) {
  const capitalizedName = useMemo(
    () => capitalizeFirstLetter(name),
    [name, label],
  );
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label || capitalizedName}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
