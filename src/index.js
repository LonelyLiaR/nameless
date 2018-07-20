import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { injectGlobal } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import { BLOG_TITLE } from "./config";
import "primer-markdown/build/build.css";

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
  }

  body {
    font-family: PingFang SC, Microsoft Jhenghei, Microsoft YaHei, sans-serif;
    line-height: 1.5;
    color: #333333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    color: #2DB4D8;
    text-decoration: none;
    transition: color .3s;
  }

  a:hover {
    color: #22BAD9;
  }
`;

document.title = BLOG_TITLE;

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
registerServiceWorker();
