export interface LocaleController {
  locale: 'en' | 'es';
  setLocale: (locale: 'en' | 'es') => void;
};