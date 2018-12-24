import Styled from 'styled-components';
import PageContainer from "components/common/PageContainer";
import LabelName from "components/common/LabelName";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Labels = Styled(PageContainer)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

Labels.Label = LabelName.withComponent(Link);

Labels.Loader = Loader;

export default Labels;
