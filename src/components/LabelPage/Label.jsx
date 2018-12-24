import React from "react";
import Styled from "styled-components";
import PageContainer from "components/common/PageContainer";
import LabelName from "components/common/LabelName";
import Archive from "components/common/Archive";
import Loader from "./Loader";

const Label = children => <React.Fragment {...children} />;

Label.Container = PageContainer;

Label.Name = Styled(LabelName)`
  margin-bottom: 50px;
`;

Label.Archive = Archive;

Label.Loader = Loader;

export default Label;
