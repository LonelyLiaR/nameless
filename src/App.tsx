import React from "react";
import { Provider } from "react-redux";
import {
  RouteComponentProps,
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import $tore from "store/index";

const HomePage = React.lazy(() => import("components/HomePage"));
const ArchivesPage = React.lazy(() => import("components/ArchivesPage"));
const LabelsPage = React.lazy(() => import("components/LabelsPage"));
const LabelPage = React.lazy(() => import("components/LabelPage"));
const PostPage = React.lazy(() => import("components/PostPage"));
const ErrorPage = React.lazy(() => import("components/ErrorPage"));

interface IRouteComponentProps<T> extends RouteComponentProps<T> {
  [propName: string]: any;
}

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
                component={(
                  props: IRouteComponentProps<{ labelName: string }>
                ) => <LabelPage {...props} />}
              />
              <Route
                path="/p/:number"
                component={(
                  props: IRouteComponentProps<{ number: string }>
                ) => <PostPage {...props} />}
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
