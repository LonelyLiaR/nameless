import React, { Component } from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { getArchives } from "api";
import PageTitle from "components/common/PageTitle";
import Label from "./Label";
import { USERNAME, DATE_FORMAT } from "config";

export default connect(
  ({ labelsStore }) => ({
    labelsStore
  }),
  dispatch => ({
    storePosts: posts => dispatch({ type: "store-posts", posts })
  })
)(
  class extends Component {
    state = {
      labelName: this.props.match.params.labelName,
      posts: {},
      loaded: false
    };
    async componentDidMount() {
      let posts =
        typeof this.props.labelsStore[this.state.labelName] !== "undefined"
          ? this.props.labelsStore[this.state.labelName]
          : [];
      if (posts.length === 0) {
        const res = await getArchives();
        let archives = {};
        if (res.length > 0) {
          const filterPosts = res.filter(({ user }) => user.login === USERNAME);
          for (let i = 0; i < filterPosts.length; i++) {
            archives[filterPosts[i].number] = Object.assign(filterPosts[i], {
              $body: null
            });
          }
        }
        this.props.storePosts(archives);
        posts =
          typeof this.props.labelsStore[this.state.labelName] !== "undefined"
            ? this.props.labelsStore[this.state.labelName]
            : [];
      }
      if (posts.length > 0) {
        this.setState({ posts, loaded: true });
      } else {
        this.props.history.replace("/error");
        return false;
      }
    }
    render() {
      const { labelName, posts, loaded } = this.state;
      return (
        <Label.Container>
          <PageTitle>{labelName}</PageTitle>
          {loaded ? (
            <Label>
              <Label.Name>{labelName}</Label.Name>
              {Object.values(posts).map(({ number, created_at, title }) => (
                <Label.Archive key={number}>
                  <Label.Archive.Date>
                    {dayjs(created_at).format(
                      !!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY"
                    )}
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
