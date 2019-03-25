import React from "react";
import Styled from "styled-components";
import PageContainer from "components/common/PageContainer";
import LabelName from "components/common/LabelName";
import Archive from "components/common/Archive";
import Loader from "./Loader";

export default class extends React.PureComponent {
  public static Container = PageContainer;
  public static Name = Styled(LabelName)`
    margin-bottom: 50px;
  `;
  public static Archive = Archive;
  public static Loader = Loader;
  public render() {
    return <React.Fragment {...this.props} />;
  }
}
