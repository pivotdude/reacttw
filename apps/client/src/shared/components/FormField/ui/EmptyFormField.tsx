import { Control } from 'react-hook-form';
import { capitalizeFirstLetter } from '@/shared/lib/utils/capitalizeFirstLetter';
import {
  FormControl,
  FormField as ShadcnFormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/shared/ui/form';
import { ReactNode, useMemo } from 'react';

export interface EmptyFormFieldProps<T> {
  name: string;
  control: Control<any>;
  label?: string;
  withoutLabel?: boolean;
  description?: ReactNode;
  HOCElement: any;
  HOCProps?: T;
}

export function EmptyFormField<T>({
  name,
  control,
  label,
  withoutLabel = false,
  description,
  HOCElement,
  HOCProps,
}: EmptyFormFieldProps<T>) {
  const capitalizedName = useMemo(() => capitalizeFirstLetter(name), [name]);
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {!withoutLabel && <FormLabel>{label || capitalizedName}</FormLabel>}
          <FormControl>
            <HOCElement {...field} {...HOCProps} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
