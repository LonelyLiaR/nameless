import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import $tore from "./store";
// import AsyncComponent from "components/common/AsyncComponent";

const HomePage = React.lazy(() => import("./components/HomePage"));
const ArchivesPage = React.lazy(() => import("./components/ArchivesPage"));
const LabelsPage = React.lazy(() => import("./components/LabelsPage"));
const LabelPage = React.lazy(() => import("./components/LabelPage"));
const PostPage = React.lazy(() => import("./components/PostPage"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));

export default class extends React.PureComponent {
  render() {
    return (
      <HashRouter>
        <Provider store={$tore}>
          <React.Suspense fallback={""}>
            <Switch>
              <Route exact path="/" component={() => <HomePage />} />
              <Route path="/archives" component={() => <ArchivesPage />} />
              <Route path="/labels" component={() => <LabelsPage />} />
              <Route
                path="/label/:labelName"
                component={props => <LabelPage {...props} />}
              />
              <Route
                path="/p/:number"
                component={props => <PostPage {...props} />}
              />
              <Route path="/error" component={() => <ErrorPage />} />
              <Redirect from="/*" to="/error" />
            </Switch>
          </React.Suspense>
        </Provider>
      </HashRouter>
    );
  }
}
