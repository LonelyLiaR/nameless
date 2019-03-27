import React from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { getArchives } from "api";
import PageTitle from "components/common/PageTitle";
import Label from "./Label";
import { LabelsStore, PostsStore } from "types/reducers";
import { STORE_POSTS } from "store/actions";
import { DATE_FORMAT } from "configs";

interface IMapStateToProps {
  labelsStore: LabelsStore.IState;
}

interface IMapDispatchToProps {
  storePosts: (posts: PostsStore.IState) => void;
}

interface IPageState {
  labelName: string;
  posts: PostsStore.IState;
  loaded: boolean;
}

interface Post extends IPost {
  author_association: string;
}

export default connect(
  (state: IMapStateToProps) => ({
    labelsStore: state.labelsStore
  }),
  dispatch => ({
    storePosts: (posts: PostsStore.IState) =>
      dispatch({ type: STORE_POSTS, posts })
  })
)(
  class extends React.PureComponent<
    IMapStateToProps &
      IMapDispatchToProps &
      RouteComponentProps<{ labelName: string }>,
    IPageState
  > {
    readonly state = {
      labelName: this.props.match.params.labelName,
      posts: {},
      loaded: false
    };
    public async componentDidMount() {
      const { labelsStore, storePosts, history } = this.props;
      const { labelName } = this.state;
      let posts =
        typeof labelsStore[labelName] !== "undefined"
          ? labelsStore[labelName]
          : [];
      if (posts.length === 0) {
        const res = await getArchives();
        let archives: PostsStore.IState = {};
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
        posts =
          typeof this.props.labelsStore[labelName] !== "undefined"
            ? this.props.labelsStore[labelName]
            : [];
      }
      if (posts.length > 0) {
        this.setState({ posts, loaded: true });
      } else {
        history.replace("/error");
        return false;
      }
    }
    public render() {
      const { labelName, loaded } = this.state;
      const posts = Object.values<IPost>(this.state.posts).reverse();
      return (
        <Label.Container>
          <PageTitle>{labelName}</PageTitle>
          {loaded ? (
            <Label>
              <Label.Name>{labelName}</Label.Name>
              {posts.map(({ id, number, created_at, title }) => (
                <Label.Archive key={id}>
                  <Label.Archive.Date>
                    {dayjs(created_at).format(DATE_FORMAT)}
                  </Label.Archive.Date>
                  <Label.Archive.Title to={"/p/" + number}>
                    {title.trim()}
                  </Label.Archive.Title>
                </Label.Archive>
              ))}
            </Label>
          ) : (
            <Label.Loader />
          )}
        </Label.Container>
      );
    }
  }
);
