'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Controller } from 'react-hook-form';
import { FormControl, FormControlLabel, Radio, RadioGroup, FormHelperText } from '@mui/material';
import { FormMUIProps, PurchaseFormData } from '@/interfaces';

export default function InputRadio({ name, control, label, options, ...restProps }: FormMUIProps<PurchaseFormData> & { options: { value: string; label: string; }[]; }) {
  const t = useTranslations();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} component="fieldset">
          <RadioGroup {...field} {...restProps}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={<Radio />}
                label={option.label}
                value={option.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            ))}
          </RadioGroup>
          <FormHelperText sx={{ color: "error.main" }}>
            {error ? t(`validations.${error.message}`) : ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
