import Styled from "styled-components";

const PostHeader = Styled.div`
    padding-bottom: 15px;
    margin-bottom: 35px;
    border-bottom: 1px solid #E8E8E8;
`;

PostHeader.Title = Styled.h2`
    margin: 0;
    font-size: 26px;
`;

PostHeader.Date = Styled.p`
    margin-top: 15px;
    margin-bottom: 0;
    font-size: 14px;
    color: #999999;
`;

export default PostHeader;
