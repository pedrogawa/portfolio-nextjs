import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

  margin-top: 32px;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding-bottom: 32px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div``;

export const LeftContent = styled.div`
  margin-right: 24px;

  .content-header {
    span {
      color: ${props => props.theme.text};
    }
  }

  .contact-info {
    margin-top: 128px;

    .mail,
    .linkedin {
      margin-top: 12px;
    }

    a {
      text-decoration: none !important;

      .phone,
      .mail,
      .linkedin {
        display: flex;
        align-items: center;
        width: 350px;
        padding: 24px;
        cursor: pointer;
        color: ${props => props.theme.text};
        background: none;
        border: none;

        span {
          margin-left: 32px;
          font-size: 18px;
        }

        &:hover {
          border-radius: 12px;
          padding: 24px;
          background: RGBA(130, 87, 230, 0.34);

          border: 3px solid ${props => props.theme.primary.color};
        }
      }
    }

    @media (max-width: 1150px) {
      display: flex;
      align-items: center;
      justify-content: center;

      flex-direction: column;

      margin-top: 16px;

      margin-bottom: 16px;
    }
  }
`;

export const RightContainer = styled.div``;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;

  padding: 32px;

  width: 550px;

  @media (max-width: 600px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 300px;
    margin-left: -10%;
  }

  border-radius: 12px;

  .content-inputs {
    .mail,
    .message {
      margin-top: 24px;
    }

    .name,
    .mail,
    .message {
      display: flex;
      align-items: start;
      justify-content: center;

      flex-direction: column;

      label {
        color: ${props => props.theme.primary.color};
        font-weight: bold;

        margin-bottom: 8px;
      }

      input,
      textarea {
        border-radius: 6px;
        padding: 16px;
        border: #c9c8cf 2px solid;
        font-size: 18px;
        width: 400px;

        @media (max-width: 550px) {
          width: 300px;
        }

        @media (max-width: 450px) {
          width: 200px;
        }
      }

      textarea {
        resize: none;
        height: 200px;
        width: 400px;

        @media (max-width: 550px) {
          width: 300px;
        }

        @media (max-width: 450px) {
          width: 200px;
        }
      }

      input:focus,
      textarea:focus {
        outline-color: ${props => props.theme.primary.color};
        border-radius: 6px;
      }
    }

    .send-button {
      margin-top: 24px;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;

      background: ${props => props.theme.primary.color};
      color: ${props => props.theme.primary.contrast};

      font-size: 16px;
      font-weight: bold;

      border-radius: 8px;

      padding: 16px;
    }
  }
`;
