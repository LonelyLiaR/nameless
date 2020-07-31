import styled, { StyledComponent } from "styled-components";

type TWrapperHeader = StyledComponent<"header", any> & {
  Avatar: StyledComponent<"img", any>;
};

const Header = styled.header`` as TWrapperHeader;
Header.Avatar = styled.img``;

export default Header;