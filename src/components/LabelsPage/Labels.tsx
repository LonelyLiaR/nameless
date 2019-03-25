import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import PageContainer from "components/common/PageContainer";
import LabelName from "components/common/LabelName";
import Loader from "./Loader";

const Labels = Styled(PageContainer)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export default class extends React.PureComponent {
  public static Label = LabelName.withComponent(Link);
  public static Loader = Loader;
  public render() {
    return <Labels {...this.props} />;
  }
}
