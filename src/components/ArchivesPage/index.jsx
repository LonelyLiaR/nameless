import React, { Component } from "react";
import { getArchives } from "api";
import dateFormatter from "assets/utils/dateFormatter";
import PageTitle from "../common/PageTitle";
import ArchivesLoader from "./loader";
import ArchivesPage from "../common/PageContainer";
import Archive from "./archive";
import { USERNAME, BLOG_TITLE } from "config";
 
export default class extends Component {
  state = {
    archives: [],
    loaded: false
  };
  async componentDidMount() {
    const res = await getArchives();
    const archives = !!res.length
      ? res
          .filter(({ user }) => {
            return user.login === USERNAME;
          })
          .map(({ number, created_at, title }) => {
            return { number, created_at, title };
          })
      : [];
    this.setState({ archives, loaded: true });
  }
  render() {
    const Archives = this.state.archives.map(
      ({ number, created_at, title }) => (
        <Archive key={number}>
          <Archive.Date>{dateFormatter(created_at)}</Archive.Date>
          <Archive.Title to={"/p/" + number}>{title.trim()}</Archive.Title>
        </Archive>
      )
    );
    return (
      <ArchivesPage>
        <PageTitle>Archives</PageTitle>
        {this.state.loaded ? (
          !!Archives.length ? (
            Archives
          ) : (
            `今天是 ${dateFormatter(new Date())}, 你一篇文章也没有.`
          )
        ) : (
          <ArchivesLoader />
        )}
      </ArchivesPage>
    );
  }
}
