import React from "react";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

export default React.memo(() => (
  <ContentLoader
    width={clientWidth}
    height={clientHeight - (clientWidth <= 500 ? 50 : 100)}
    speed={1}
    preserveAspectRatio="none"
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <>
      <rect
        x={clientWidth / 2 - 72}
        y={clientHeight / 2 - 196}
        rx="144"
        ry="144"
        width="144"
        height="144"
      />
      <rect
        x={clientWidth / 2 - 64}
        y={clientHeight / 2 - 26}
        width="128"
        height="22"
      />
      <rect
        x={clientWidth / 2 - 150}
        y={clientHeight / 2 + 16}
        width="300"
        height="18"
      />
    </>
  </ContentLoader>
));
