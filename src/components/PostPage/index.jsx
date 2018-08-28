import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getPost, markdownParser } from "api";
import PageContainer from "../common/PageContainer";
import PageTitle from "../common/PageTitle";
import PostLoader from "./loader";
import Post from "./post";
import PostHeader from "./post-header";
import PostBody from "./post-body";
import { DATE_FORMAT } from "config";

const PostPage = PageContainer.extend`
  padding-bottom: 75px;

  @media (max-width: 500px) {
    padding-bottom: 40px;
  }
`;

export default connect(
  ({ postArchives }) => ({
    postArchives
  }),
  dispatch => ({
    markPost: (number, body) => dispatch({ type: "mark-post", number, body })
  })
)(
  class extends Component {
    state = {
      title: "",
      created_at: "",
      body: "",
      html_url: "",
      loaded: false
    };
    async componentDidMount() {
      const { history, match } = this.props;
      const { number } = match.params;
      let title, created_at, body;
      if (typeof this.props.postArchives[number] === "undefined") {
        const res = await getPost(number);
        if (!res) {
          history.replace("/error");
          return false;
        } else {
          ({ title, created_at } = res);
          body = await markdownParser(res.body);
        }
      } else {
        const { $body } = this.props.postArchives[number];
        ({ title, created_at, body } = this.props.postArchives[number]);
        if (!$body) {
          body = await markdownParser(body);
          this.props.markPost(number, body);
        } else {
          body = $body;
        }
      }
      this.setState({ title, created_at, body, loaded: true });
    }
    render() {
      return (
        <PostPage>
          <Post>
            {this.state.loaded ? (
              <Fragment>
                <PostHeader>
                  <PageTitle>
                    <PostHeader.Title>
                      {this.state.title.trim()}
                    </PostHeader.Title>
                  </PageTitle>
                  <PostHeader.Date>
                    {moment(this.state.created_at).format(
                      !!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY"
                    )}
                  </PostHeader.Date>
                </PostHeader>
                <PostBody
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: this.state.body }}
                />
              </Fragment>
            ) : (
              <PostLoader />
            )}
          </Post>
        </PostPage>
      );
    }
  }
);
