import React from "react";
import Styled from "styled-components";

const Navbar = Styled.ul`
    padding: 0;
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default class extends React.PureComponent {
  public static NavItem = Styled.li`
        padding: 0 6px;
  
        > a {
            font-size: 15px;
        }
    `;
  public render() {
    return <Navbar {...this.props} />;
  }
}
