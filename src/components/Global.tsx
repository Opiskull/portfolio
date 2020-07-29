import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }
    body {
      color: hsla(0, 0%, 0%, 0.8);
      background-color: #fff;
      transition: .3s all;
      font-family: 'Montserrat', sans-serif;
    }
    a {
      text-decoration: none;
    }
    input, select, textarea, button {
      &:focus {
        outline: none;
      }
    }
`;
