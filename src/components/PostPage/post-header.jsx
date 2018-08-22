import Styled from "styled-components";

const PostHeader = Styled.div`
    margin-bottom: 55px;
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
