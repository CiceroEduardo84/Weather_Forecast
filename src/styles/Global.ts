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

        
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.neutral.black};
    border: none;
    font-family: "Montserrat", "Roboto", sans-serif;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .srOnly {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    border-width: 0;
    overflow: hidden;
    color: transparent;    
    clip: rect(0, 0, 0, 0);
  }
`;
