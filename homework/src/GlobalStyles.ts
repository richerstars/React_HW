import {createGlobalStyle} from 'styled-components';
import colors from './components/constants';

type TTheme = {
    dark: boolean,
}

export const GlobalStyle = createGlobalStyle<TTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    height: 100vh;
    width: 100%;
    background: ${({dark}) => !dark ? `${colors.mainColor}` : `${colors.borderDoneColor}`};
  }
  h1{
    text-align: center;
    cursor: default;
  }
`;

