import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  /* background: #F0EDF5; */
  background: #E8FFF0;
  color: #3D3D4C;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Archivo', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
