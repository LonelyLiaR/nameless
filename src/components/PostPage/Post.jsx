import React from "react";
import Styled from "styled-components";
import PageContainer from "components/common/PageContainer";
import Loader from "./Loader";

const Post = Styled.article`
    max-width: 650px;
    margin: auto;
`;

Post.Container = Styled(PageContainer)`
    padding-bottom: 75px;

    @media (max-width: 500px) {
        padding-bottom: 40px;
    }
`;

Post.Header = Styled.div`
    margin-bottom: 55px;
`;

Post.Header.Title = Styled.h2`
    margin: 0;
    font-size: 30px;
`;

Post.Header.Date = Styled.p`
    margin-top: 15px;
    margin-bottom: 0;
    font-size: 14px;
    color: #999999;
`;

Post.Body = props => <div {...props} />;

Post.Loader = Loader;

export default Post;
