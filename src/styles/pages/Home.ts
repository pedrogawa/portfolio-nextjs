import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;

  margin-top: 64px;

  align-items: center;
  justify-content: center;
  width: 100%;

  padding-bottom: 32px;
`;

export const LeftContainer = styled.div``;

export const LeftContent = styled.div`
  max-width: 550px;

  display: flex;
  flex-direction: column;
  .content-header {
    margin-bottom: 32px;

    h3 {
      color: ${props => props.theme.primary.color};
      margin-bottom: 14px;
    }
  }

  .content-bottom {
    display: flex;
    flex-direction: column;

    span {
      font-size: 18px;
      line-height: 32px;
      margin-bottom: 14px;
    }

    .more-info {
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      height: 48px;
      max-width: 350px;

      border-radius: 8px;
      border: ${props => props.theme.primary.color} solid 3px;
      background: none;
      color: ${props => props.theme.primary.color};
      font-size: 18px;
      font-weight: bold;

      transition: all 0.8s;

      &:hover {
        background: ${props => props.theme.primary.color};
        color: ${props => props.theme.primary.contrast};
      }
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .programmer-image {
    height: auto;
    max-width: 80%;

    @media (max-width: 1300px) {
      display: none;
    }
  }
`;
