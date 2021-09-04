/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Head from 'next/head';

import { ImPhone } from 'react-icons/im';
import { IoMail } from 'react-icons/io5';
import { SiLinkedin } from 'react-icons/si';

import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

import {
  Content,
  Container,
  LeftContent,
  RightContent,
  LeftContainer,
  RightContainer
} from '../../styles/pages/Contact';

export default function Contact() {
  const theme = useTheme();

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Head>
          <title>Contato</title>
        </Head>

        <Content>
          <LeftContainer>
            <LeftContent>
              <div className="content-header">
                <h1>Ficou com dúvida?</h1>
                <span>
                  Entre em contato com alguma das formas abaixo ou deixa a sua
                  mensagem ao lado! :)
                </span>
              </div>

              <div className="contact-info">
                <a
                  href="https://api.whatsapp.com/send?phone=5519998728971"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="phone" type="button">
                    <ImPhone color={theme.primary.color} size={28} />
                    <span>+55 19 9 9872-8971</span>
                  </button>
                </a>
                <a href="mailto:phfbarreiros95@gmail.com">
                  <button className="mail" type="button">
                    <IoMail color={theme.primary.color} size={28} />
                    <span>phfbarreiros95@gmail.com</span>
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-henrique-ferreira-barreiros-0a921a1a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="linkedin" type="button">
                    <SiLinkedin color={theme.primary.color} size={28} />
                    <span>Pedro Ferreira</span>
                  </button>
                </a>
              </div>
            </LeftContent>
          </LeftContainer>
          <RightContainer>
            <RightContent>
              <div className="content-inputs">
                <div className="name">
                  <label>Seu nome</label>
                  <input />
                </div>
                <div className="mail">
                  <label>E-mail</label>
                  <input />
                </div>
                <div className="message">
                  <label>Seu nome</label>
                  <textarea />
                </div>
                <button className="send-button" type="submit">
                  Enviar mensagem
                </button>
              </div>
            </RightContent>
          </RightContainer>
        </Content>
      </Container>
    </motion.div>
  );
}
