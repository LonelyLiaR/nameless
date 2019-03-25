import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const Archive = Styled.div`
    font-size: 16px;
    margin-bottom: 15px;
`;

export default class extends React.PureComponent {
  public static Date = Styled.span`
        width: 150px;
        margin-right: 30px;
        font-size: 14px;
        color: #999999;
        text-align: right;
        display: inline-block;
        
        @media (max-width: 500px) {
            width: inherit;
            margin-bottom: 5px;
            text-align: inherit;
            display: block;
        }
    `;
  public static Title = Link;
  public render() {
    return <Archive {...this.props} />;
  }
}
