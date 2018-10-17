import React, { Component } from "react";
import { connect } from "react-redux";
import { getArchives } from "api";
import LabelsLoader from "./Loader";
import LabelsPage from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import Empty from "components/common/Empty";
import Label from "./Label";
import { USERNAME, LABELS_TITLE } from "config";

export default connect(
  ({ postsStore, labelsStore }) => ({
    postsStore,
    labelsStore
  }),
  dispatch => ({
    storePosts: posts => dispatch({ type: "store-posts", posts })
  })
)(
  class extends Component {
    state = {
      labels: {},
      loaded: false
    };
    async componentDidMount() {
      let labels = this.props.labelsStore;
      if (!Object.keys(labels).length) {
        let archives = this.props.postsStore;
        if (!Object.keys(archives).length) {
          const res = await getArchives();
          if (!!res.length) {
            const filterPosts = res.filter(({ user }) => {
              return user.login === USERNAME;
            });
            for (let i = 0; i < filterPosts.length; i++) {
              archives[filterPosts[i].number] = Object.assign(filterPosts[i], {
                $body: null
              });
            }
          }
          this.props.storePosts(archives);
          labels = this.props.labelsStore;
        }
      }
      this.setState({ labels, loaded: true });
    }
    render() {
      const Labels = Object.keys(this.state.labels).map(labelName => (
        <Label to={`/label/${labelName}`} key={labelName}>
          {labelName}
        </Label>
      ));
      return (
        <LabelsPage>
          <PageTitle>{!!LABELS_TITLE ? LABELS_TITLE : "Labels"}</PageTitle>
          {this.state.loaded ? (
            !!Labels.length ? (
              Labels
            ) : (
              <Empty />
            )
          ) : (
            <LabelsLoader />
          )}
        </LabelsPage>
      );
    }
  }
);
