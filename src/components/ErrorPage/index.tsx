import React from "react";
import Styled from "styled-components";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import PageContainer from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import { DATE_FORMAT, ERROR_TITLE, ERROR_MESSAGE, ERROR_NAV } from "configs";

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

const todayDate = dayjs().format(DATE_FORMAT);

export default React.memo(() => (
  <ErrorPage>
    <PageTitle>{ERROR_TITLE}</PageTitle>
    <ErrorMessage>
      {ERROR_MESSAGE.replace("$_DATETIME_", todayDate)}
    </ErrorMessage>
    <Link to="/">{ERROR_NAV}</Link>
  </ErrorPage>
));
