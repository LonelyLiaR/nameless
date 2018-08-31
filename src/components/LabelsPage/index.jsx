import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getArchives } from "api";
import LabelsLoader from "./loader";
import PageContainer from "../common/PageContainer";
import PageTitle from "../common/PageTitle";
import Label from "./label";
import { USERNAME, LABELS_TITLE, EMPTY_MESSAGE, DATE_FORMAT } from "config";

const LabelsPage = PageContainer.extend`
  padding-left: 150px;
  padding-right: 150px;
`;

const todayDate = moment().format(
  !!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY"
);

const $NULL = Symbol("$NULL");

export default connect(
  ({ postArchives }) => ({
    postArchives
  }),
  dispatch => ({
    storeLabels: labels => dispatch({ type: "store-labels", labels }),
    storePosts: posts => dispatch({ type: "store-posts", posts })
  })
)(
  class extends Component {
    state = {
      labels: {},
      loaded: false
    };
    async componentDidMount() {
      let { labels } = this.props.postArchives;
      if (!Object.keys(labels).length) {
        let archives = this.props.postArchives.posts;
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
        labels[$NULL] = [];
        const posts = Object.values(archives);
        for (let i = 0; i < posts.length; i++) {
          const ls = posts[i].labels;
          if (!!ls.length) {
            for (let l = 0; l < ls.length; l++) {
              if (typeof labels[ls[l].name] === "undefined") {
                labels[ls[l].name] = [];
              }
              labels[ls[l].name].push(posts[i]);
            }
          } else {
            labels[$NULL].push(posts[i]);
          }
        }
        this.props.storeLabels(labels);
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
          {this.state.loaded
            ? !!Object.keys(this.props.postArchives.posts).length
              ? Labels
              : !!EMPTY_MESSAGE
                ? EMPTY_MESSAGE.replace("${DATETIME}", todayDate)
                : `Today is ${todayDate}, and this place is so empty.`
            : ""}
        </LabelsPage>
      );
    }
  }
);
