import React from "react";
import Styled from "styled-components";
import PageContainer from "components/common/PageContainer";
import Loader from "./Loader";

const Post = Styled.article`
    max-width: 650px;
    margin: auto;
`;

const PostHeader = Styled.div`
    margin-bottom: 55px;
`;

class Header extends React.PureComponent {
  public static Title = Styled.h2`
        margin: 0;
        font-size: 30px;
    `;
  public static Date = Styled.p`
        margin-top: 15px;
        margin-bottom: 0;
        font-size: 14px;
        color: #999999;
    `;
  public render() {
    return <PostHeader {...this.props} />;
  }
}

type BodyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default class extends React.PureComponent {
  public static Container = Styled(PageContainer)`
        padding-bottom: 75px;

        @media (max-width: 500px) {
            padding-bottom: 40px;
        }
    `;
  public static Header = Header;
  public static Body = (props: BodyProps) => <div {...props} />;
  public static Loader = Loader;
  public render() {
    return <Post {...this.props} />;
  }
}
