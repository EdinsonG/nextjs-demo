'use client';

import { useTranslations } from 'next-intl';
import { Controller } from 'react-hook-form';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@mui/material';
import { FormMUIProps, PurchaseFormData } from '@/interfaces';

export default function InputSelect({ name, control, label, options, ...restProps }: FormMUIProps<PurchaseFormData>) {
  const t = useTranslations();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error} sx={{ height: '60px' }}>
          <InputLabel>{label}</InputLabel>
          <Select {...field}  {...restProps} fullWidth label={label} >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "error.main", mt: 0 }}>
            {error ? t(`validations.${error.message}`) : ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
