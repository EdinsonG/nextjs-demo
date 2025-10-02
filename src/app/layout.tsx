import React from 'react';
import type { Metadata } from "next";
import { CssBaseline } from '@mui/material';
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@mui/material/styles";
// Internal
import Providers from '@/app/providers';
import { theme } from "@/theme/DefaultTheme";
import { FloatingLanguageSwitcher, Loading, GlobalSuccess, GlobalModal } from '@/components';

export const metadata: Metadata = {
  title: {
    template: "Next.js Demo",
    default: "Next.js Demo",
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NextTopLoader color="#5750F1" showSpinner={false} />
            {children}
            <Loading />
            <GlobalModal />
            <GlobalSuccess />
            <FloatingLanguageSwitcher />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
