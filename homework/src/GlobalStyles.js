import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
    text-align: center;
  }
  button{
   display: block;
    margin-left: 47%;
    width: 200px;
    height: 100px;
    border: 1px solid black;
    cursor: pointer;
  }
`;
