import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArchivesPage from "./components/ArchivesPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/archives" component={ArchivesPage} />
      </Switch>
    );
  }
}

export default App;
