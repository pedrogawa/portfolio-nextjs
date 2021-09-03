import React from 'react';

import { motion, SVGMotionProps } from 'framer-motion';

import { useTheme } from 'styled-components';
import { Container } from './styles';

const Path: any = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

const transition = { duration: 0.5 };

interface HamburgerProps {
  toggle: () => void;
  isOpen: boolean;
}

export default function Hamburger({ toggle, isOpen }: HamburgerProps) {
  const theme = useTheme();

  return (
    <Container onClick={() => toggle()}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: {
              d: 'M 2 2.5 L 20 2.5',
              stroke: '#ffffff'
            },
            open: {
              d: 'M 3 16.5 L 17 2.5',
              stroke: `${theme.primary.color}`
            }
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="#ffffff"
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: {
              d: 'M 2 16.346 L 20 16.346',
              stroke: '#ffffff'
            },
            open: {
              d: 'M 3 2.5 L 17 16.346',
              stroke: `${theme.primary.color}`
            }
          }}
          transition={transition}
        />
      </svg>
    </Container>
  );
}
