// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
  }
  section {
    scroll-margin-top: 72px; /* height of header */
  }
`;
