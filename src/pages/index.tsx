import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import { ReactComponent as Programmer } from '../assets/programmer.svg';

import {
  Content,
  Container,
  LeftContent,
  LeftContainer,
  RightContainer
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Head>
          <title>Homepage</title>
        </Head>

        <Content>
          <LeftContainer>
            <LeftContent>
              <div className="content-header">
                <h3>DESENVOLVEDOR FRONT-END</h3>
                <h2>PEDRO FERREIRA</h2>
              </div>
              <div className="content-bottom">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  elit a mi sollicitudin efficitur vel eget metus.
                </span>
                <button
                  className="more-info"
                  type="button"
                  onClick={() => router.push('/projects')}
                >
                  CONHEÇA MEUS PROJETOS
                </button>
              </div>
            </LeftContent>
          </LeftContainer>
          <RightContainer>
            <Programmer className="programmer-image" />
          </RightContainer>
        </Content>
      </Container>
    </motion.div>
  );
};

export default Home;
