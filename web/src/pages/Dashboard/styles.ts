import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 200px;
`;

export const Content = styled.main`
  max-width: 90rem;
  width: 90%;
  min-height: 50rem;
  padding: 3.2rem;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  margin: 0 auto;
  border-radius: 0.8rem;
  margin: -3.2rem auto 5.2rem;
  overflow: hidden;
`;

export const AddRegistriesTable = styled.section`
  table {
    width: 100%;
    border-spacing: 0;
    border-bottom: 2px solid black;
  }

  th {
    padding: 20px;
    border: 0;
    background: #fff;
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;

    span {
      font-size: 40px;
      font-weight: bold;
    }

    button {
      margin-top: 0;
    }
  }
`;

export const ContainerRegisterToast = styled.div`
  display: flex;
  flex-flow: row wrap;

  > div {
    margin: 4px 8px;
  }
`;

export const RegisterToast = styled.div`
  width: 100px;

  background: #ebf8ff;
  color: #3172b7;

  padding: 8px;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin: 0 12px 0 0;
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.8;
    line-height: 20px;
  }

  button {
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    margin-left: 5px;
  }
`;
