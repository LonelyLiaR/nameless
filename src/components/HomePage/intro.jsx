import Styled from "styled-components";

const Intro = Styled.div`
    margin-top: 16px;
    text-align: center;
`;

Intro.Nickname = Styled.h1`
    margin: 0;
    padding: 4px 0;
    font-size: 20px;
`;

Intro.Desc = Styled.p`
    margin: 0;
    padding: 4px 0;
    color: #999999;
    font-size: 16px;
`;

export default Intro;