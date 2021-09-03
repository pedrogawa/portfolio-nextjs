import React, { ReactNode } from 'react';

import Content from '../Content';
import Header from '../Header';

import { Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
