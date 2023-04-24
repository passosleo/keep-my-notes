import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary}, Sans-Serif;
    color: ${({ theme }) => theme.colors.black};
    overflow: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-weight: 600;
  }

  a {
      text-decoration: none;
  }

  button { 
    font-family: ${({ theme }) => theme.fonts.primary}, Sans-Serif;
  }
  
  textarea {
    font-family: ${({ theme }) => theme.fonts.primary}, Sans-Serif;
  }
`;

export default GlobalStyle;
