import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  overflow-x: hidden;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

export const Projecto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  align-items: flex-start;

  flex-direction: column;

  max-width: 1200px;

  .title {
    margin-bottom: 32px;
  }

  .content {
    h2 {
      margin-bottom: 16px;

      transition: all 0.4s;

      &:hover {
        color: #eba417;
      }
    }
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    line-height: 32px;
  }
`;

export const Border = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;

  border: 0.5px solid #556a77;
  width: 100%;

  :last-child {
    border: none;
  }
`;
