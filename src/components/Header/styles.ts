import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  grid-area: H;

  display: grid;
  grid-column-start: 2;
  flex-direction: row;
  align-items: center;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .sidebar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 769px) {
      display: none;
    }
  }

  .buttons-container {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  margin-left: 48px;

  flex-direction: row;

  cursor: pointer;

  border: none;
  background: none;

  color: ${props => props.theme.primary.contrast};

  font-size: 18px;

  div {
    width: 0;
    height: 3px;
    margin-top: 8px;
    background: ${props => props.theme.primary.color};
  }

  transition: color 0.6s;

  &:hover {
    div {
      width: 100%;

      animation: smooth-width 0.6s;

      @keyframes smooth-width {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    }
  }

  ${({ active }) =>
    active &&
    css`
      color: ${props => props.theme.primary.color};

      div {
        width: 100%;
      }
    `}
`;
