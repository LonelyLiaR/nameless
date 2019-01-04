import React from "react";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Loader = () => (
  <>
    <circle cx="4" cy="7" r="4" />
    <rect x="22" y="0" width="120" height="14" />
    <circle cx="4" cy="47" r="4" />
    <rect x="22" y="40" width="135" height="14" />
    <circle cx="4" cy="87" r="4" />
    <rect x="22" y="80" width="100" height="14" />
    <circle cx="4" cy="127" r="4" />
    <rect x="22" y="120" width="150" height="14" />
  </>
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
