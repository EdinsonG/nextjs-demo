'use client';

import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import { useLocale } from "@/context/Localecontext";
import { FormMUIProps, PurchaseFormData } from '@/interfaces';

const InputCheck = ({ name, control, label, ...restProps }: FormMUIProps<PurchaseFormData>) => {
  const { t } = useLocale();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                {...restProps}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label={label}
          />
          <FormHelperText sx={{ color: "error.main" }}>
            {error ? t(`validations.${error.message}`) : ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default InputCheck;