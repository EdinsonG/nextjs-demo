import { Path } from 'react-hook-form';
import { SxProps } from '@mui/material';

export interface FormMUIProps<T = PurchaseFormData> {
  name: Path<T>;
  control: any;
  label: string;
  type?: string;
  sx?: SxProps;
  inputProps?: any;
  icon?: any;
}

export interface PurchaseFormData {
  names: string;
  password: string;
  email: string;
  phone: number;
  newPassword: string;
  confirmPassword: string;
}
