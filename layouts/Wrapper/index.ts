import styled, { StyledComponent } from "styled-components";
import Header from "./Header";

type TWrapper = StyledComponent<"div", any> & {
  Header: typeof Header;
};

const Wrapper = styled.div`
  max-width: 42rem;
  margin: auto;
  padding: 2.625rem 1.3125rem;
` as TWrapper;
Wrapper.Header = Header;

export default Wrapper;
