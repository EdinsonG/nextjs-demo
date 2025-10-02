import React from 'react';
import type { Metadata } from "next";
import { CssBaseline } from '@mui/material';
import NextTopLoader from "nextjs-toploader"
// Internal
import Providers from '@/app/providers';
import { FloatingThemeSwitcher, FloatingLanguageSwitcher, Loading, GlobalSuccess, GlobalModal } from '@/components';

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
          <CssBaseline />
          <NextTopLoader color="#5750F1" showSpinner={false} />
          {children}
          <Loading />
          <GlobalModal />
          <GlobalSuccess />
          <FloatingThemeSwitcher />
          <FloatingLanguageSwitcher />
        </Providers>
      </body>
    </html>
  );
}
