import * as yup from 'yup';
import { fieldSchemas } from './fieldSchemas';

export function createFormSchema<K extends keyof typeof fieldSchemas>(fields: K[]) {
  const shape = fields.reduce(
    (acc, key) => {
      acc[key] = fieldSchemas[key];
      return acc;
    },
    {} as Record<K, (typeof fieldSchemas)[K]>,
  );

  return yup.object().shape(shape);
}
