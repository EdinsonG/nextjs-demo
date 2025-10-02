'use client';

import { createContext, useContext } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState, useCallback } from 'react';
// Internal
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import { LocaleController } from '@/interfaces/provider';


export default function Providers({ children }: { children: ReactNode }) {
  const messagesMap = { en, es };
  const [locale, setLocale] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const stored = localStorage.getItem('NEXT_LOCALE') as 'en' | 'es' | null;
    if (stored) {
      setLocale(stored);
    }
  }, []);

  const handleSetLocale = useCallback((newLocale: 'en' | 'es') => {
    setLocale(newLocale);
    localStorage.setItem('NEXT_LOCALE', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
  }, []);

  return (
    <NextIntlClientProvider locale={locale} messages={messagesMap[locale]}>
      <LocaleControllerContext.Provider value={{ locale, setLocale: handleSetLocale }}>
        {children}
      </LocaleControllerContext.Provider>
    </NextIntlClientProvider>
  );
}

const LocaleControllerContext = createContext<LocaleController>({
  locale: 'en',
  setLocale: () => {},
});

export function useLocaleController() {
  return useContext(LocaleControllerContext);
}
