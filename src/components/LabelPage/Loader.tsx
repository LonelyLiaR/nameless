import React from "react";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Loader = React.memo(() => (
  <>
    <circle cx="4" cy="7" r="4" />
    <rect x="22" y="0" width="120" height="14" />
    {clientWidth <= 500 ? (
      <>
        <rect x="0" y="85" width="150" height="14" />
        <rect x="0" y="115" width={clientWidth * 0.65} height="14" />
        <rect x="0" y="155" width="150" height="14" />
        <rect x="0" y="185" width={clientWidth * 0.5} height="14" />
        <rect x="0" y="225" width="150" height="14" />
        <rect x="0" y="255" width={clientWidth * 0.8} height="14" />
        <rect x="0" y="295" width="150" height="14" />
        <rect x="0" y="325" width={clientWidth * 0.6} height="14" />
        <rect x="0" y="365" width="150" height="14" />
        <rect x="0" y="395" width={clientWidth * 0.75} height="14" />
      </>
    ) : (
      <>
        <rect x="35" y="85" width="130" height="14" />
        <rect x="200" y="85" width="300" height="14" />
        <rect x="35" y="130" width="130" height="14" />
        <rect x="200" y="130" width="500" height="14" />
        <rect x="35" y="175" width="130" height="14" />
        <rect x="200" y="175" width="275" height="14" />
        <rect x="35" y="220" width="130" height="14" />
        <rect x="200" y="220" width="450" height="14" />
        <rect x="35" y="265" width="130" height="14" />
        <rect x="200" y="265" width="400" height="14" />
      </>
    )}
  </>
));

export default React.memo(() => (
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
));
