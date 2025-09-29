'use client';

import en from "@/locales/en.json";
import es from "@/locales/es.json";
import { getCookie, setCookie } from "cookies-next";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type TranslationObject = { [key: string]: string | TranslationObject | TranslationObject[] };

const translations: Record<"en" | "es", TranslationObject> = { en, es };

type LocaleContextType = {
  locale: "en" | "es";
  setLocale: (newLocale: "en" | "es") => void;
  t: (key: string, params?: Record<string, string>) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<"en" | "es">("en");

  useEffect(() => {
    const cookieLocale = getCookie("NEXT_LOCALE") as "en" | "es" | undefined;
    if (cookieLocale) setLocaleState(cookieLocale);
  }, []);

  const setLocale = (newLocale: "en" | "es") => {
    setCookie("NEXT_LOCALE", newLocale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    setLocaleState(newLocale);
  };

  const getNestedValue = (obj: TranslationObject, path: string): string | undefined => {
    return path.split('.').reduce<string | TranslationObject | undefined>((acc, part) => {
      if (acc && typeof acc === 'object') {
        if (Array.isArray(acc)) {
          const index = parseInt(part, 10);
          return isNaN(index) ? undefined : acc[index];
        } else {
          return (acc as TranslationObject)[part];
        }
      }
      return undefined;
    }, obj) as string | undefined;
  };

  const t = (key: string, params?: Record<string, string>) => {
    let value = getNestedValue(translations[locale], key);
    if (typeof value !== "string") return key;

    if (params) {
      Object.keys(params).forEach(k => {
        value = value!.replace(`{${k}}`, params[k]);
      });
    }
    return value!;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within a LocaleProvider");
  return context;
};