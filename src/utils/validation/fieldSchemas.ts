import * as yup from 'yup';
import { regularExpressions } from './regex';

export const fieldSchemas = {
  names: yup
    .string()
    .required('input_required')
    .max(30, 'names_max')
    .test('namesValid', 'names_valid', (value) =>
      regularExpressions.namesValid?.test(value ?? ''),
    ),

  email: yup
    .string()
    .required('input_required')
    .email('email_invalid')
    .min(7, 'email_invalid')
    .test('emailValid', 'email_invalid', (value) =>
      regularExpressions.emailValid?.test(value ?? ''),
    ),

  phone: yup
    .string()
    .required('input_required')
    .min(10, 'phone_invalid')
    .max(11, 'phone_invalid')
    .test(
      'phoneValid',
      'phone_invalid',
      (value) => !value || regularExpressions.phoneValid?.test(value),
    ),

  password: yup.string().required('input_required'),

  newPassword: yup
    .string()
    .required('input_required')
    .min(6, 'password_invalid')
    .test('passwordValid', 'password_invalid', (value) =>
      regularExpressions.passwordValid?.test(value ?? ''),
    ),
    
  confirmPassword: yup.string().required('input_required').min(6, 'password_invalid').oneOf([yup.ref('newPassword')], 'confirm_password'),
};
