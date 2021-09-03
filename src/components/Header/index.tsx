import React from 'react';
import { useRouter } from 'next/router';
// import Sidebar from '../Sidebar';
import Sidebar from '../Sidebar';
import { Button, Content, Container } from './styles';

export default function Header() {
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <Container>
      <Content>
        <div className="name">
          <h2>Pedro Ferreira</h2>
        </div>
        <div className="buttons-container">
          <Button active={asPath === '/'} onClick={() => router.push('/')}>
            <span>Inicio</span>
            <div />
          </Button>
          <Button
            active={asPath === '/aboutme'}
            onClick={() => router.push('/aboutme')}
          >
            <span>Sobre</span>
            <div />
          </Button>
          <Button
            active={asPath === '/projects'}
            onClick={() => router.push('/projects')}
          >
            <span>Projetos</span>
            <div />
          </Button>
          <Button
            active={asPath === '/contact'}
            onClick={() => router.push('/contact')}
          >
            <span>Contato</span>
            <div />
          </Button>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </Content>
    </Container>
  );
}
