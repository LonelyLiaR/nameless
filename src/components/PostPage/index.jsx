import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { getPost, markdownParser } from "api";
import PageContainer from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import PostLoader from "./Loader";
import Post from "./Post";
import { DATE_FORMAT } from "config";

const PostPage = PageContainer.extend`
  padding-bottom: 75px;

  @media (max-width: 500px) {
    padding-bottom: 40px;
  }
`;

export default connect(
  ({ postsStore }) => ({
    postsStore
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
      if (typeof this.props.postsStore[number] === "undefined") {
        const res = await getPost(number);
        if (!res) {
          history.replace("/error");
          return false;
        } else {
          ({ title, created_at } = res);
          body = await markdownParser(res.body);
        }
      } else {
        const { $body } = this.props.postsStore[number];
        ({ title, created_at, body } = this.props.postsStore[number]);
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
                <Post.Header>
                  <PageTitle>
                    <Post.Header.Title>
                      {this.state.title.trim()}
                    </Post.Header.Title>
                  </PageTitle>
                  <Post.Header.Date>
                    {dayjs(this.state.created_at).format(
                      !!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY"
                    )}
                  </Post.Header.Date>
                </Post.Header>
                <Post.Body
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
