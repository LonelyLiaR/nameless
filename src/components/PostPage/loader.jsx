import React, { Fragment } from "react";
import Styled from "styled-components";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Loader = () => {
  return (
    <Fragment>
      <rect x="0" y="14" width="256" height="28" />
      <rect x="0" y="64" width="120" height="16" />
      <rect x="0" y="142" width={clientWidth} height="18" />
      <rect x="0" y="174" width={clientWidth} height="18" />
      <rect x="0" y="206" width={clientWidth} height="18" />
      <rect x="0" y="248" width={clientWidth} height="18" />
      <rect x="0" y="270" width={clientWidth * 0.6} height="18" />
      <rect x="0" y="314" width={clientWidth} height="18" />
      <rect x="0" y="346" width={clientWidth} height="18" />
      <rect x="0" y="378" width={clientWidth} height="18" />
      <rect x="0" y="410" width={clientWidth * 0.3} height="18" />
      <rect x="0" y="454" width={clientWidth} height="18" />
      <rect x="0" y="486" width={clientWidth} height="18" />
      <rect x="0" y="518" width={clientWidth * 0.8} height="18" />
    </Fragment>
  );
};

const Content = Styled(ContentLoader)`
  min-height: calc(100vh - 160px);
`;

const ArchivesLoader = () => (
  <Content
    width={clientWidth}
    height={clientHeight - (clientWidth <= 500 ? 50 : 100)}
    speed={1}
    preserveAspectRatio="none"
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <Loader />
  </Content>
);

export default ArchivesLoader;
