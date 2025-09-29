import React from 'react';
import type { Metadata } from "next";
import { CssBaseline } from '@mui/material';
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/DefaultTheme";
import { LocaleProvider } from '@/context/Localecontext';
import { FloatingLanguageSwitcher, Loading, GlobalSuccess, GlobalModal } from '@/components';

export const metadata: Metadata = {
  title: {
    template: "Next.js Demo",
    default: "Next.js Demo",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NextTopLoader color="#5750F1" showSpinner={false} />
            {children}
            <Loading />
            <GlobalModal />
            <GlobalSuccess />
            <FloatingLanguageSwitcher />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
