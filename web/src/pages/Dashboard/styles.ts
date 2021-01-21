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
  }

  td {
    padding: 20px 32px;
    border: 0;
    background: #fff;
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;
    border-bottom: 2px solid black;

    button {
      margin-top: 0;
    }
  }
`;
