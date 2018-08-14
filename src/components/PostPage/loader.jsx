import React, { Fragment } from "react";
import Styled from "styled-components";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Rects = () => {
  // if (clientWidth <= 500) {
  //   return (
  //     <Fragment>
  //       <rect x="0" y="14" width="256" height="28" />
  //       <rect x="0" y="64" width="100" height="16" />
  //       <rect x="0" y="98" width={clientWidth} height="2" />
  //       <rect x="0" y="144" width={clientWidth} height="18" />
  //       <rect x="0" y="176" width={clientWidth} height="18" />
  //       <rect x="0" y="208" width={clientWidth} height="18" />
  //       <rect x="0" y="240" width={clientWidth} height="18" />
  //       <rect x="0" y="272" width={clientWidth * 0.6} height="18" />
  //       <rect x="0" y="316" width={clientWidth} height="18" />
  //       <rect x="0" y="348" width={clientWidth} height="18" />
  //       <rect x="0" y="380" width={clientWidth} height="18" />
  //       <rect x="0" y="412" width={clientWidth * 0.3} height="18" />
  //       <rect x="0" y="456" width={clientWidth} height="18" />
  //       <rect x="0" y="488" width={clientWidth} height="18" />
  //       <rect x="0" y="520" width={clientWidth} height="18" />
  //       <rect x="0" y="552" width={clientWidth} height="18" />
  //       <rect x="0" y="584" width={clientWidth * 0.8} height="18" />
  //     </Fragment>
  //   );
  // } else {
  //   return (
  //     <Fragment>
  //       <rect x="50" y="0" width="100" height="14" />
  //       <rect x="185" y="0" width="500" height="14" />
  //       <rect x="50" y="45" width="100" height="14" />
  //       <rect x="185" y="45" width="500" height="14" />
  //       <rect x="50" y="90" width="100" height="14" />
  //       <rect x="185" y="90" width="500" height="14" />
  //       <rect x="50" y="135" width="100" height="14" />
  //       <rect x="185" y="135" width="500" height="14" />
  //       <rect x="50" y="180" width="100" height="14" />
  //       <rect x="185" y="180" width="500" height="14" />
  //     </Fragment>
  //   );
  // }
  return (
    <Fragment>
      <rect x="0" y="14" width="256" height="28" />
      <rect x="0" y="64" width="120" height="16" />
      <rect x="0" y="98" width={clientWidth} height="2" />
      <rect x="0" y="144" width={clientWidth} height="18" />
      <rect x="0" y="176" width={clientWidth} height="18" />
      <rect x="0" y="208" width={clientWidth} height="18" />
      <rect x="0" y="240" width={clientWidth} height="18" />
      <rect x="0" y="272" width={clientWidth * 0.6} height="18" />
      <rect x="0" y="316" width={clientWidth} height="18" />
      <rect x="0" y="348" width={clientWidth} height="18" />
      <rect x="0" y="380" width={clientWidth} height="18" />
      <rect x="0" y="412" width={clientWidth * 0.3} height="18" />
      <rect x="0" y="456" width={clientWidth} height="18" />
      <rect x="0" y="488" width={clientWidth} height="18" />
      <rect x="0" y="520" width={clientWidth * 0.8} height="18" />
    </Fragment>
  );
};

const Loader = Styled(ContentLoader)`
  min-height: calc(100vh - 160px);
`;

const ArchivesLoader = () => (
  <Loader
    width={clientWidth}
    height={clientHeight - (clientWidth <= 500 ? 50 : 100)}
    speed={1}
    preserveAspectRatio="none"
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <Rects />
  </Loader>
);

// <rect x="0" y="2" width="45px" height="4px" />

export default ArchivesLoader;
