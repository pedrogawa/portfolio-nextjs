import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { AnimatePresence } from 'framer-motion';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
