import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;

  margin-left: 15%;

  article {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    h1 {
      font-size: 48px;
      font-weight: 900;
    }

    img {
      margin-top: 32px;
      height: auto;
      max-width: 80%;
    }

    div {
      p {
        margin: 32px 0;
      }
    }
  }
`;
