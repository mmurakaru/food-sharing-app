import React from "react";
import { Global, css } from "@emotion/core";
import SFUIreg from "./assets/fonts/SFUIText-Regular.woff";
import SFUIbold from "./assets/fonts/SFUIText-Bold.woff";
import SFUIheavy from "./assets/fonts/SFUIText-Heavy.woff";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        #root {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          --bg-main-gradient: linear-gradient(
            45deg,
            rgba(140, 239, 192, 1) 0%,
            rgba(195, 255, 186, 1) 100%
          );
          --bg-dark: #424953;
          --font-semi-dark: #818181;
          --tag-standard: #fefcc9;
          --accent: #66dba3;
          --tag: #fefcc9;
        }
        /* SCROLLBAR */
        ::-webkit-scrollbar {
          width: 0em;
        }

        /* FONTS */
        @font-face {
          font-family: "SFUIbold";
          src: url(${SFUIbold}) format("woff");
        }
        @font-face {
          font-family: "SFUIheavy";
          src: url(${SFUIheavy}) format("woff");
        }
        @font-face {
          font-family: "SFUIreg";
          src: url(${SFUIreg}) format("woff");
        }
        h1,
        h2,
        h3 {
          letter-spacing: -0.05em;
          color: #000000;
        }
        h1 {
          font-family: "SFUIheavy";
          font-size: 2.2em;
        }
        h2 {
          font-family: "SFUIbold";
          font-size: 1.8em;
        }
        h3 {
          font-size: 1em;
        }
        h4 {
          font-family: "SFUIbold";
          letter-spacing: -0.05em;
          font-size: 1em;
          color: #000000;
        }
        a {
          color: var(--accent);
        }
        body {
          font-family: "SFUIreg";
          font-size: 1em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        small {
          font-family: "SFUIreg";
          font-size: 0.8em;
          color: #000000;
        }

        input {
          :invalid,
          :required {
            border: 1px solid #de3a3a;
          }
        }
        code {
        }
      `}
    />
  );
};

export default GlobalStyles;
