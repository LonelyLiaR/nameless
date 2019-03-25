import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import PageContainer from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import { ERROR_MESSAGE } from "configs";

const ErrorPage = Styled(PageContainer)`
  padding-top: 0;
  padding-bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;

const ErrorMessage = Styled.p`
  margin-bottom: 1.5rem;
  font-size: 20px;
  text-align: center;
`;

export default React.memo(() => (
  <ErrorPage>
    <PageTitle>Error</PageTitle>
    <ErrorMessage>{ERROR_MESSAGE}</ErrorMessage>
    <Link to="/">Back</Link>
  </ErrorPage>
));
