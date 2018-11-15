import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AsyncComponent from "components/common/AsyncComponent";

const HomePage = AsyncComponent(() => import("./components/HomePage"));
const ArchivesPage = AsyncComponent(() => import("./components/ArchivesPage"));
const LabelsPage = AsyncComponent(() => import("./components/LabelsPage"));
const LabelPage = AsyncComponent(() => import("./components/LabelPage"));
const PostPage = AsyncComponent(() => import("./components/PostPage"));
const ErrorPage = AsyncComponent(() => import("./components/ErrorPage"));

export default class extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/archives" component={ArchivesPage} />
        <Route exact path="/labels" component={LabelsPage} />
        <Route exact path="/label/:labelName" component={LabelPage} />
        <Route exact path="/p/:number" component={PostPage} />
        <Route exact path="/error" component={ErrorPage} />
        <Redirect from="/*" to="/error" />
      </Switch>
    );
  }
}
