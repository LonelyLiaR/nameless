import React from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { getArchives } from "api";
import ArchivesLoader from "./Loader";
import ArchivesPage from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import Archive from "components/common/Archive";
import Empty from "components/common/Empty";
import { USERNAME, ARCHIVES_TITLE, DATE_FORMAT } from "config";

export default connect(
  ({ postsStore }) => ({
    postsStore
  }),
  dispatch => ({
    storePosts: posts => dispatch({ type: "store-posts", posts })
  })
)(
  class extends React.PureComponent {
    state = {
      archives: {},
      loaded: false
    };
    async componentDidMount() {
      let archives = this.props.postsStore;
      if (!Object.keys(archives).length) {
        const res = await getArchives();
        if (res.length > 0) {
          const filterPosts = res.filter(({ user }) => user.login === USERNAME);
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
    render() {
      const { archives, loaded } = this.state;
      return (
        <ArchivesPage>
          <PageTitle>
            {!!ARCHIVES_TITLE ? ARCHIVES_TITLE : "Archives"}
          </PageTitle>
          {loaded ? (
            Object.values(archives).length > 0 ? (
              Object.values(archives).map(({ number, created_at, title }) => (
                <Archive key={number}>
                  <Archive.Date>
                    {dayjs(created_at).format(
                      !!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY"
                    )}
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
