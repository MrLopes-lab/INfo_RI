import styled from 'styled-components';
import { darken } from 'polished';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -60px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#62BC4B' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: #363F5F;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;
    }
  }
  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: bold;
      padding: 20px 32px;
      text-align: left;
      font-size: 18px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3; 
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  div {
    display: flex;
    align-items: center;
    
    span {
      margin: 1px;
      border: 1px solid #ddd;
      border-radius: 5px;
      color: #666;
      padding: 6px;
      width: auto;
      min-width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;