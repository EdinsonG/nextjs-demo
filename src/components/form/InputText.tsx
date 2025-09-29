'use client';

import { Controller } from 'react-hook-form';
import { TextField, FormControl, FormHelperText, InputAdornment, IconButton } from '@mui/material';
import { useLocale } from "@/context/Localecontext";
import { FormMUIProps, PurchaseFormData } from '@/interfaces';

const InputText = ({ name, control, label, icon, type = 'text', inputProps, ...restProps }: FormMUIProps<PurchaseFormData>) => {
  const { t } = useLocale();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error} sx={{ height: '60px' }}>
          <TextField 
            {...field} 
            label={label} 
            type={type} 
            {...restProps} 
            {...inputProps} 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    {icon}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormHelperText sx={{ color: "error.main", mt: 0 }}>
            {error ? t(`validations.${error.message}`) : ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default InputText;