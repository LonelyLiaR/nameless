import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Loader = () => (
  <Fragment>
    <circle cx="4" cy="7" r="4" />
    <rect x="22" y="0" width="120" height="14" />
    {clientWidth <= 500 ? (
      <Fragment>
        <rect x="0" y="85" width="140" height="14" />
        <rect x="0" y="115" width={clientWidth * 0.65} height="14" />
        <rect x="0" y="155" width="140" height="14" />
        <rect x="0" y="185" width={clientWidth * 0.5} height="14" />
        <rect x="0" y="225" width="140" height="14" />
        <rect x="0" y="255" width={clientWidth * 0.8} height="14" />
        <rect x="0" y="295" width="140" height="14" />
        <rect x="0" y="325" width={clientWidth * 0.6} height="14" />
        <rect x="0" y="365" width="140" height="14" />
        <rect x="0" y="395" width={clientWidth * 0.75} height="14" />
      </Fragment>
    ) : (
      <Fragment>
        <rect x="35" y="85" width="125" height="14" />
        <rect x="200" y="85" width="300" height="14" />
        <rect x="35" y="130" width="125" height="14" />
        <rect x="200" y="130" width="500" height="14" />
        <rect x="35" y="175" width="125" height="14" />
        <rect x="200" y="175" width="275" height="14" />
        <rect x="35" y="220" width="125" height="14" />
        <rect x="200" y="220" width="450" height="14" />
        <rect x="35" y="265" width="125" height="14" />
        <rect x="200" y="265" width="400" height="14" />
      </Fragment>
    )}
  </Fragment>
);

const LabelsLoader = () => (
  <ContentLoader
    width={clientWidth}
    height={clientHeight - (clientWidth <= 500 ? 50 : 100)}
    speed={1}
    preserveAspectRatio="none"
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <Loader />
  </ContentLoader>
);

export default LabelsLoader;
