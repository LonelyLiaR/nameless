import React from "react";
import { connect } from "react-redux";
import { getArchives } from "api";
import PageTitle from "components/common/PageTitle";
import Empty from "components/common/Empty";
import Labels from "./Labels";
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
  class extends React.PureComponent {
    state = {
      labels: {},
      loaded: false
    };
    async componentDidMount() {
      let labels = this.props.labelsStore;
      if (Object.keys(labels).length === 0) {
        let archives = this.props.postsStore;
        if (Object.keys(archives).length === 0) {
          const res = await getArchives();
          if (res.length > 0) {
            const filterPosts = res.filter(
              ({ user }) => user.login === USERNAME
            );
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
      const { labels, loaded } = this.state;
      return (
        <Labels>
          <PageTitle>{!!LABELS_TITLE ? LABELS_TITLE : "Labels"}</PageTitle>
          {loaded ? (
            Object.keys(labels).length > 0 ? (
              Object.keys(labels).map(labelName => (
                <Labels.Label to={`/label/${labelName}`} key={labelName}>
                  {labelName}
                </Labels.Label>
              ))
            ) : (
              <Empty />
            )
          ) : (
            <Labels.Loader />
          )}
        </Labels>
      );
    }
  }
);
