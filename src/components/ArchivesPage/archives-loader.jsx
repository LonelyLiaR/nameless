import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Rects = () => {
  if (clientWidth <= 500) {
    return (
      <Fragment>
        <rect x="0" y="0" width="150" height="14" />
        <rect x="0" y="30" width={clientWidth - 40} height="14" />
        <rect x="0" y="70" width="150" height="14" />
        <rect x="0" y="100" width={clientWidth - 40} height="14" />
        <rect x="0" y="130" width="150" height="14" />
        <rect x="0" y="170" width={clientWidth - 40} height="14" />
        <rect x="0" y="200" width="150" height="14" />
        <rect x="0" y="230" width={clientWidth - 40} height="14" />
        <rect x="0" y="270" width="150" height="14" />
        <rect x="0" y="300" width={clientWidth - 40} height="14" />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <rect x="50" y="0" width="100" height="14" />
        <rect x="185" y="0" width="500" height="14" />
        <rect x="50" y="45" width="100" height="14" />
        <rect x="185" y="45" width="500" height="14" />
        <rect x="50" y="90" width="100" height="14" />
        <rect x="185" y="90" width="500" height="14" />
        <rect x="50" y="135" width="100" height="14" />
        <rect x="185" y="135" width="500" height="14" />
        <rect x="50" y="180" width="100" height="14" />
        <rect x="185" y="180" width="500" height="14" />
      </Fragment>
    );
  }
};

const ArchivesLoader = () => (
  <ContentLoader
    width={clientWidth}
    height={clientHeight}
    speed={1}
    preserveAspectRatio="none"
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <Rects />
  </ContentLoader>
);

// <rect x="0" y="2" width="45px" height="4px" />

export default ArchivesLoader;
