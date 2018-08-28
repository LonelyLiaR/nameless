import React, { Component } from "react";
import { getArchives } from "api";
import LabelsLoader from "./loader";
import LabelsPage from "../common/PageContainer";
import PageTitle from "../common/PageTitle";
import Label from "./label";
import { USERNAME, LABELS_TITLE } from "config";

export default class extends Component {
  state = {
    loaded: false
  };
  async componentDidMount() {
    this.setState({ loaded: true });
  }
  render() {
    return (
      <LabelsPage>
        <PageTitle>{!!LABELS_TITLE ? LABELS_TITLE : "Labels"}</PageTitle>
      </LabelsPage>
    );
  }
}
