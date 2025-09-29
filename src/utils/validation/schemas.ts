import { createFormSchema } from './createFormSchema';

export const loginSchema = createFormSchema(['email', 'password']);

export const recoverPasswordSchema = createFormSchema(['email', 'newPassword', 'confirmPassword']);

export const signupSchema = createFormSchema(['names', 'email', 'phone', 'newPassword', 'terms']);
