import styled from 'styled-components';

export const Container = styled.button`
  background: #060b26;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  color: #f5f5f5;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  margin-top: 16px;

  box-shadow: 0 2px 2px 0 rgba(6, 11, 38, 0.14),
    0 3px 1px -2px rgba(6, 11, 38, 0.2), 0 1px 5px 0 rgba(6, 11, 38, 0.12);

  &:hover {
    box-shadow: 0 14px 26px -12px rgba(6, 11, 38, 0.14),
      0 4px 23px 0px rgba(6, 11, 38, 0.2), 0 8px 10px -5px rgba(6, 11, 38, 0.12);
  }
`;
