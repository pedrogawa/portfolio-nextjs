import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    flex-direction: column;

    button {
      margin-top: 25px;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;

  background: #2e3131;
`;
