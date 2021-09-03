import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;

  padding: 0 clamp(32px, 5%, 128px);

  grid-template-columns: auto repeat(2, 1fr);
  grid-template-rows: 150px auto;

  grid-template-areas:
    'H H H'
    'CT CT CT';

  overflow-x: hidden;
`;
