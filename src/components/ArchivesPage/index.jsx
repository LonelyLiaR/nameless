import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getArchives } from "api";
import ArchivesLoader from "./Loader";
import ArchivesPage from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import Archive from "components/common/Archive";
import { USERNAME, ARCHIVES_TITLE, DATE_FORMAT, EMPTY_MESSAGE } from "config";

const todayDate = moment().format(
  !!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY"
);

export default connect(
  ({ postsStore }) => ({
    postsStore
  }),
  dispatch => ({
    storePosts: posts => dispatch({ type: "store-posts", posts })
  })
)(
  class extends Component {
    state = {
      archives: {},
      loaded: false
    };
    async componentDidMount() {
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
      }
      this.setState({ archives, loaded: true });
    }
    render() {
      const Archives = Object.values(this.state.archives).map(
        ({ number, created_at, title }) => (
          <Archive key={number}>
            <Archive.Date>
              {moment(created_at).format(
                !!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY"
              )}
            </Archive.Date>
            <Archive.Title to={"/p/" + number}>{title.trim()}</Archive.Title>
          </Archive>
        )
      );
      return (
        <ArchivesPage>
          <PageTitle>
            {!!ARCHIVES_TITLE ? ARCHIVES_TITLE : "Archives"}
          </PageTitle>
          {this.state.loaded ? (
            !!Archives.length ? (
              Archives
            ) : !!EMPTY_MESSAGE ? (
              EMPTY_MESSAGE.replace("$_DATETIME_", todayDate)
            ) : (
              `Today is ${todayDate}, and this place is so empty.`
            )
          ) : (
            <ArchivesLoader />
          )}
        </ArchivesPage>
      );
    }
  }
);
