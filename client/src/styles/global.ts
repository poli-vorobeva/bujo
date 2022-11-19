import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
    font-family: 'Gloria Hallelujah', cursive;
  }
  button{
    font-family: 'Kalam', cursive;
  }
`;
