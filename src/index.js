import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { injectGlobal } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
  }

  html,
  body {
    height: 100%;
    position: relative;
  }

  body {
    font-family: PingFang SC, Microsoft Jhenghei, Microsoft YaHei, sans-serif;
    color: #333333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
registerServiceWorker();
