import React from "react";
import Styled from "styled-components";

const Post = Styled.article`
    max-width: 650px;
    margin: auto;
`;

Post.Header = Styled.div`
    margin-bottom: 55px;
`;

Post.Header.Title = Styled.h2`
    margin: 0;
    font-size: 26px;
`;

Post.Header.Date = Styled.p`
    margin-top: 15px;
    margin-bottom: 0;
    font-size: 14px;
    color: #999999;
`;

Post.Body = props => <div {...props} />;

export default Post;
