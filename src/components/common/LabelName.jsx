import Styled from "styled-components";

const LabelName = Styled.div`
    font-size: 16px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    &:before {
        content: "";
        width: 6px;
        height: 6px;
        margin-right: 12px;
        background-color: #999999;
        border-radius: 100%;
        display: inline-block;
    }
`;

export default LabelName;
