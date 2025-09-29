import { createFormSchema } from './createFormSchema';

export const purchaseFormSchema = createFormSchema([
  'names',
  'email',
  'phone',
]);

export const loginSchema = createFormSchema(['email', 'password']);

export const recoverPasswordSchema = createFormSchema(['email', 'newPassword', 'confirmPassword']);

export const signupSchema = createFormSchema(['names', 'email', 'phone', 'newPassword']);
