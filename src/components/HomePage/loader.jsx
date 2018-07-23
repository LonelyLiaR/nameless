import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Rects = () => (
  <Fragment>
    <rect
      x={clientWidth / 2 - 72}
      y="130"
      rx="144"
      ry="144"
      width="144"
      height="144"
    />
    <rect x={clientWidth / 2 - 64} y="304" width="128" height="22" />
    <rect x={clientWidth / 2 - 150} y="344" width="300" height="18" />
  </Fragment>
);

const HomeLoader = () => (
  <ContentLoader
    width={clientWidth}
    height={clientHeight - (clientWidth <= 500 ? 50 : 100)}
    speed={1}
    preserveAspectRatio="none"
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <Rects />
  </ContentLoader>
);

export default HomeLoader;
