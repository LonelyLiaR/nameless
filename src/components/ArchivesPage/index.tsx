import React from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { getArchives } from "api";
import ArchivesLoader from "./Loader";
import ArchivesPage from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import Archive from "components/common/Archive";
import Empty from "components/common/Empty";
import { STORE_POSTS } from "store/actions";
import { PostsStore } from "types/reducers";
import { ARCHIVES_TITLE, DATE_FORMAT } from "configs";

interface IMapStateToProps {
  postsStore: PostsStore.IState;
}

interface IMapDispatchToProps {
  storePosts: (posts: PostsStore.IState) => void;
}

interface Post extends IPost {
  author_association: string;
}

export default connect(
  (state: IMapStateToProps) => ({
    postsStore: state.postsStore
  }),
  dispatch => ({
    storePosts: (posts: PostsStore.IState) =>
      dispatch({ type: STORE_POSTS, posts })
  })
)(
  class extends React.PureComponent<
    IMapStateToProps & IMapDispatchToProps,
    { archives: PostsStore.IState; loaded: boolean }
    > {
    readonly state = {
      archives: {},
      loaded: false
    };
    public async componentDidMount() {
      let archives = this.props.postsStore;
      const { length } = Object.keys(archives);
      if (!length || length !== +Object.keys(archives)[length - 1]) {
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
        this.props.storePosts(archives);
      }
      this.setState({ archives, loaded: true });
    }
    public render() {
      const { archives, loaded } = this.state;
      const posts = Object.values<IPost>(archives).reverse();
      return (
        <ArchivesPage>
          <PageTitle>{ARCHIVES_TITLE}</PageTitle>
          {loaded ? (
            posts.length > 0 ? (
              posts.map(({ id, number, created_at, title }) => (
                <Archive key={id}>
                  <Archive.Date>
                    {dayjs(created_at).format(DATE_FORMAT)}
                  </Archive.Date>
                  <Archive.Title to={"/p/" + number}>
                    {title.trim()}
                  </Archive.Title>
                </Archive>
              ))
            ) : (
                <Empty />
              )
          ) : (
              <ArchivesLoader />
            )}
        </ArchivesPage>
      );
    }
  }
);
