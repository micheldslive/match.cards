import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const GlobalStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-align: center;
  }

  a, a:hover {
      text-decoration: none;
  }
`;
