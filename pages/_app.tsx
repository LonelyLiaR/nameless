import { createGlobalStyle } from "styled-components";
import { StoreProvider } from "@/store";
import Wrapper from "@/components/Wrapper";

/**
 * Import the following to silence the warning.
 * Check out: https://github.com/mobxjs/mobx-react-lite/#observer-batching
 */
import "mobx-react-lite/batchingOptOut";

const GlobalStyle = createGlobalStyle<any>`
  * {
    transition: color .3s ease, background .3s ease, background-color .3s ease;
  }
  body {
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    margin: 0;
  }
`;

const AsaApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <GlobalStyle />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </StoreProvider>
  );
};

export default AsaApp;
