import {createGlobalStyle} from 'styled-components';
import colors from '../src/components/constants';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    height: 100vh;
    width: 100%;
    background: ${colors.mainColor};
  }
  h1{
    text-align: center;
    cursor: default;
  }
`

