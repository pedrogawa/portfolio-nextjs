import React from 'react';
import { motion, useCycle } from 'framer-motion';

import { Content, Container } from './styles';
import Hamburger from '../Hamburger';

import NavigateButton from '../NavigateButton';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 100}px at 300px -40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 242px 77px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const buttons = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const list = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function Sidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Container
      as={motion.nav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <Content as={motion.div} variants={sidebar} />
      <motion.ul variants={buttons}>
        <motion.li
          variants={list}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavigateButton path="/" name="Inicio" changePage={toggleOpen} />
          <NavigateButton
            path="/aboutme"
            name="Sobre"
            changePage={toggleOpen}
          />
          <NavigateButton
            path="/projects"
            name="Projetos"
            changePage={toggleOpen}
          />
          <NavigateButton
            path="/contact"
            name="Contato"
            changePage={toggleOpen}
          />
        </motion.li>
      </motion.ul>
      <Hamburger isOpen={isOpen} toggle={() => toggleOpen()} />
    </Container>
  );
}
