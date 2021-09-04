import React from 'react';

import { SiLinkedin, SiGithub } from 'react-icons/si';

import { useTheme } from 'styled-components';

import { motion } from 'framer-motion';
import Head from 'next/head';
import {
  Content,
  Container,
  LeftContent,
  RightContent,
  LeftContainer,
  RightContainer
} from './styles';

import { ReactComponent as JavaScript } from '../../assets/javascript.svg';
import { ReactComponent as TypeScript } from '../../assets/typescript.svg';
import { ReactComponent as Next } from '../../assets/next-js.svg';
import { ReactComponent as ReactJs } from '../../assets/react-2.svg';
import { ReactComponent as CSS } from '../../assets/css-3.svg';

export default function AboutMe() {
  const theme = useTheme();

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>About me</title>
      </Head>
      <Container>
        <Content>
          <LeftContainer>
            <LeftContent as={motion.div}>
              <img
                alt="Foto Pedro Ferreira"
                src="https://avatars.githubusercontent.com/u/60558706?v=4"
              />
              <strong>Pedro Ferreira</strong>
              <div className="social-media">
                <a
                  href="https://github.com/pedrogawa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">
                    <SiGithub
                      className="github"
                      size={32}
                      color={theme.primary.contrast}
                    />
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-henrique-ferreira-barreiros-0a921a1a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">
                    <SiLinkedin size={32} color={theme.primary.contrast} />
                  </button>
                </a>
              </div>
            </LeftContent>
          </LeftContainer>
          <RightContainer>
            <RightContent>
              <h2>Conheça um pouco sobre mim</h2>
              <div className="aboutme">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat suscipit nulla rerum illum iste est repellendus error
                  vero maxime, incidunt hic quae accusantium quidem cupiditate!
                </p>
                <span />
                <p>
                  Consequuntur iusto doloremque minima unde? Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Excepturi ipsum magnam
                  architecto deserunt iste ad cumque illum temporibus molestias
                  perferendis, cupiditate voluptas in laborum? Aut unde magni
                  rem nemo nam?
                </p>
                <div className="skills">
                  <h2>Habilidades: </h2>
                  <div className="skills-logo">
                    <JavaScript />
                    <TypeScript width={60} height={60} />
                    <Next width={60} height={60} />
                    <ReactJs width={60} height={60} />
                    <CSS width={60} height={60} />
                  </div>
                </div>
              </div>
            </RightContent>
          </RightContainer>
        </Content>
      </Container>
    </motion.div>
  );
}
