'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Controller } from 'react-hook-form';
import { TextField, FormControl, FormHelperText, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormMUIProps, PurchaseFormData } from '@/interfaces';

export default function InputPass({ name, control, label, ...restProps }: FormMUIProps<PurchaseFormData>) {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShow = () => setShowPassword((prev) => !prev);

  return (
    <Controller name={name} control={control} render={({ field, fieldState: { error } }) => (
      <FormControl fullWidth error={!!error} sx={{ height: '60px' }}>
        <TextField
          {...field}
          type={showPassword ? 'text' : 'password'}
          label={label}
          fullWidth
          {...restProps}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleShow} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormHelperText sx={{ color: 'error.main' }}>
          {error ? t(`validations.${error.message}`) : ''}
        </FormHelperText>
      </FormControl>
    )}/>
  );
};
