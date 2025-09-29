import { RegularExpressions } from '@/interfaces';

export const regularExpressions: Partial<RegularExpressions> = {
  namesValid: /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]*$/,
  phoneValid: /^\+?\d{7,15}$/,
  emailValid: /^[^@]{2,64}@[^\s@]+\.[a-zA-Z]{2,}$/,
  passwordValid: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
};
