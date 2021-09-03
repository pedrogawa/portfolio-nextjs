import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 64px;

  max-width: 1400px;

  padding-bottom: 32px;

  @media (max-width: 1375px) {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  margin-left: 200px;
  margin-right: 32px;

  @media (max-width: 1375px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  img {
    border-radius: 50%;

    width: 200px;
    height: 200px;
  }

  strong {
    margin-top: 18px;
  }

  .social-media {
    margin-top: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      button {
        margin-right: 24px;

        cursor: pointer;
        background: none;
        border: none;
        padding: 8px;

        &:hover {
          border-radius: 50%;
          background-color: ${props => props.theme.primary.color};
        }

        .github {
          cursor: pointer;
        }
      }
    }
  }
`;

export const RightContainer = styled.div`
  margin-right: 5%;

  background-color: rebeccapurple;

  padding: 16px;
  border-radius: 12px;

  @media (max-width: 1375px) {
    margin-top: 24px;
    margin-right: 0;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 600px;

  flex-direction: column;

  .aboutme {
    margin-top: 32px;

    font-size: 18px;
  }

  .skills {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    margin-top: 32px;

    .skills-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;

      flex-wrap: wrap;

      svg {
        margin-top: 12px;
      }

      > svg + svg {
        margin-left: 12px;
      }
    }
  }
`;
