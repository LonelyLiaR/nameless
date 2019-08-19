import React from "react";
import Styled from "styled-components";

interface IProps {
  src: string | undefined;
}

const AvatarBase = Styled.span`
    width: 128px;
    height: 128px;
    background-color: #F8F8F8;
    border: 1px solid #F8F8F8;
    border-radius: 100%;
    display: block;
`;

const Avatar = (props: IProps) => <img {...props} alt="avatar" />;

export default class extends React.PureComponent<IProps> {
  public render() {
    return !!this.props.src ? (
      <AvatarBase as={Avatar} {...this.props} />
    ) : (
      <AvatarBase />
    );
  }
}
