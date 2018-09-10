import React from "react";
import LabelName from "components/common/LabelName";
import Archive from "components/common/Archive";

const Label = children => <React.Fragment {...children} />;

Label.Name = LabelName.extend`
  margin-bottom: 50px;
`;
Label.Archive = Archive;

export default Label;
