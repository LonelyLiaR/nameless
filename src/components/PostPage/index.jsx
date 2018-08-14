import React, { Component, Fragment } from "react";
import { getPost, markdownParser } from "api";
import dateFormatter from "assets/utils/dateFormatter";
import PageContainer from "../common/PageContainer";
import PageTitle from "../common/PageTitle";
import PostLoader from "./loader";
import Post from "./post";
import PostHeader from "./post-header";
import PostBody from "./post-body";

const PostPage = PageContainer.extend`
  padding-bottom: 75px;

  @media (max-width: 500px) {
    padding-bottom: 40px;
  }
`;

export default class extends Component {
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
    const res = await getPost(number);
    if (!res) {
      history.replace("/error");
      return false;
    } else {
      const { title, created_at, html_url } = res;
      const body =
        (await markdownParser(res.body)) +
        `<p style="padding-top:15px; margin-top: 85px; border-top: 1px solid #E8E8E8;">原文地址: <a href="${html_url}">${html_url}</a></p>`;
      this.setState({ title, created_at, body, loaded: true });
    }
  }
  render() {
    return (
      <PostPage>
        <Post>
          {this.state.loaded ? (
            <Fragment>
              <PostHeader>
                <PageTitle>
                  <PostHeader.Title>{this.state.title.trim()}</PostHeader.Title>
                </PageTitle>
                <PostHeader.Date>
                  {dateFormatter(this.state.created_at)}
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
