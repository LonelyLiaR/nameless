import React, { Component } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import PageContainer from "../common/PageContainer";
import { ERROR_MESSAGE } from "config";

const ErrorPage = PageContainer.extend`
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

export default class extends Component {
  componentDidMount() {
    document.title = "Error";
  }
  render() {
    return (
      <ErrorPage>
        <ErrorMessage>{ERROR_MESSAGE}</ErrorMessage>
        <Link to="/">Back</Link>
      </ErrorPage>
    );
  }
}
