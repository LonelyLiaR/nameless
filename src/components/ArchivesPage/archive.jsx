import Styled from "styled-components";
import { Link } from "react-router-dom";

const Archive = Styled.div`
    font-size: 16px;
    margin-bottom: 15px;
`;

Archive.Date = Styled.span`
    width: 140px;
    margin-right: 30px;
    font-size: 14px;
    color: #999999;
    text-align: right;
    display: inline-block;
    
    @media (max-width: 500px) {
        width: inherit;
        margin-bottom: 5px;
        text-align: inherit;
        display: block;
    }
`;

Archive.Title = Link;

export default Archive;
