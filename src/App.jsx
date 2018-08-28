import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AsyncComponent from "./components/common/AsyncComponent";

const HomePage = AsyncComponent(() => import("./components/HomePage"));
const ArchivesPage = AsyncComponent(() => import("./components/ArchivesPage"));
const LabelsPage = AsyncComponent(() => import("./components/LabelsPage"));
const PostPage = AsyncComponent(() => import("./components/PostPage"));
const ErrorPage = AsyncComponent(() => import("./components/ErrorPage"));

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/archives" component={ArchivesPage} />
        <Route exact path="/labels" component={LabelsPage} />
        <Route exact path="/p/:number" component={PostPage} />
        <Route exact path="/error" component={ErrorPage} />
        <Redirect from="/*" to="/error" />
      </Switch>
    );
  }
}

export default App;
