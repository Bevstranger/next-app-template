import '@mantine/core/styles.css';

import React from 'react';
import { Box, ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { FooterLinks } from '@/components/Footer';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu';
import PageTransition from '@/components/PageTransition';
import { theme } from '../theme';
import stylesLayout from './home.module.css';

export const metadata = {
  title: 'ЧОП "В Е Т Е Р А Н - VETSEC.RU"',
  description: 'ЧАСТНОЕ ОХРАННОЕ ПРЕДПРИЯТИЕ "В Е Т Е Р А Н - VETSEC.RU"',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <div className={stylesLayout.wrapperHome}>
            <HeaderMegaMenu />
            <div style={{ flexGrow: 1 }}>
              <PageTransition>{children}</PageTransition>
            </div>
            <FooterLinks />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
