import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArchivesPage from "./components/ArchivesPage";
import PostPage from "./components/PostPage";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/archives" component={ArchivesPage} />
        <Route exact path="/p/:number" component={PostPage} />
        <Route exact path="/error" component={ErrorPage} />
        <Redirect from="/*" to="/error" />
      </Switch>
    );
  }
}

export default App;
