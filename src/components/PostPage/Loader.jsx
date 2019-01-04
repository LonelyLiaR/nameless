import React from "react";
import Styled from "styled-components";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Loader = () => {
  return (
    <>
      <rect x="0" y="14" width="280" height="28" />
      <rect x="0" y="64" width="140" height="16" />
      <rect x="0" y="142" width={clientWidth} height="18" />
      <rect x="0" y="174" width={clientWidth} height="18" />
      <rect x="0" y="206" width={clientWidth} height="18" />
      <rect x="0" y="248" width={clientWidth} height="18" />
      <rect x="0" y="280" width={clientWidth * 0.6} height="18" />
      <rect x="0" y="322" width={clientWidth} height="18" />
      <rect x="0" y="354" width={clientWidth} height="18" />
      <rect x="0" y="386" width={clientWidth} height="18" />
      <rect x="0" y="418" width={clientWidth * 0.3} height="18" />
      <rect x="0" y="462" width={clientWidth} height="18" />
      <rect x="0" y="494" width={clientWidth} height="18" />
      <rect x="0" y="526" width={clientWidth * 0.8} height="18" />
    </>
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
