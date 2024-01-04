import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
