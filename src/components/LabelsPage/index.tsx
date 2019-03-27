import React from "react";
import { connect } from "react-redux";
import { getArchives } from "api";
import PageTitle from "components/common/PageTitle";
import Empty from "components/common/Empty";
import Labels from "./Labels";
import { PostsStore, LabelsStore } from "types/reducers";
import { STORE_POSTS } from "store/actions";
import { LABELS_TITLE } from "configs";

interface IMapStateToProps {
  postsStore: PostsStore.IState;
  labelsStore: LabelsStore.IState;
}

interface IMapDispatchToProps {
  storePosts: (posts: PostsStore.IState) => void;
}

interface Post extends IPost {
  author_association: string;
}

interface IPageState {
  labels: { [labelName: string]: IPost[] };
  loaded: boolean;
}

export default connect(
  (state: IMapStateToProps) => ({
    postsStore: state.postsStore,
    labelsStore: state.labelsStore
  }),
  dispatch => ({
    storePosts: (posts: PostsStore.IState) =>
      dispatch({ type: STORE_POSTS, posts })
  })
)(
  class extends React.PureComponent<
    IMapStateToProps & IMapDispatchToProps,
    IPageState
  > {
    readonly state = {
      labels: {},
      loaded: false
    };
    public async componentDidMount() {
      const { postsStore, labelsStore, storePosts } = this.props;
      let labels = labelsStore;
      if (Object.keys(labels).length === 0) {
        let archives = postsStore;
        if (Object.keys(archives).length === 0) {
          const res = await getArchives();
          if (res.length > 0) {
            const filterPosts = res.filter(
              (post: Post) => post.author_association === "OWNER"
            );
            for (let i = 0; i < filterPosts.length; i++) {
              archives[filterPosts[i].number] = Object.assign(filterPosts[i], {
                $body: null
              });
            }
          }
          storePosts(archives);
          labels = this.props.labelsStore;
        }
      }
      this.setState({ labels, loaded: true });
    }
    public render() {
      const { loaded } = this.state;
      const labels = Object.keys(this.state.labels);
      return (
        <Labels>
          <PageTitle>{LABELS_TITLE}</PageTitle>
          {loaded ? (
            labels.length > 0 ? (
              labels.map(labelName => (
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
