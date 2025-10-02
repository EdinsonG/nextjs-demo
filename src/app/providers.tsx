'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider, CssBaseline } from '@mui/material';
// Internal
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import { DarkTheme } from '@/theme/DarkTheme';
import { LightTheme } from '@/theme/LightTheme';
import { Locale, ThemeMode, LocaleController, ThemeController } from '@/interfaces';

const LocaleControllerContext = createContext<LocaleController>({
  locale: 'en',
  setLocale: () => {},
});

const ThemeControllerContext = createContext<ThemeController>({
  mode: 'light',
  toggleTheme: () => {},
});

export function useLocaleController() {
  return useContext(LocaleControllerContext);
}

export function useThemeController() {
  return useContext(ThemeControllerContext);
}

export default function Providers({ children }: { children: ReactNode }) {
  const messagesMap = { en, es };

  // --- LOCALE ---
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem('NEXT_LOCALE') as Locale | null;
    if (stored) setLocale(stored);
  }, []);

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('NEXT_LOCALE', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
  }, []);

  // --- THEME ---
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const stored = localStorage.getItem('NEXT_THEME') as ThemeMode | null;
    if (stored) setMode(stored);
  }, []);

  const toggleTheme = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('NEXT_THEME', newMode);
  }, [mode]);

  return (
    <NextIntlClientProvider locale={locale} messages={messagesMap[locale]}>
      <LocaleControllerContext.Provider value={{ locale, setLocale: handleSetLocale }}>
        <ThemeControllerContext.Provider value={{ mode, toggleTheme }}>
          <ThemeProvider theme={mode === 'light' ? LightTheme : DarkTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ThemeControllerContext.Provider>
      </LocaleControllerContext.Provider>
    </NextIntlClientProvider>
  );
}
