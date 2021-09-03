import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const Container = styled.button<ButtonProps>`
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

  ${({ active }) =>
    active &&
    css`
      color: ${props => props.theme.primary.color};

      div {
        width: 100%;
      }
    `}
`;
