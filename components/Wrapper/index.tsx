import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

import Head from "next/head";
import Wrapper from "@/layouts/Wrapper";

const { Header } = Wrapper;

const AsaWrapper = observer(({ children }) => {
  const { globalTitle } = useStore();

  return (
    <Wrapper>
      <Head>
        <title>{globalTitle}</title>
      </Head>
      <Header></Header>
      {children}
    </Wrapper>
  );
});

export default AsaWrapper;
