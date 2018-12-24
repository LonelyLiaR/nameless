import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { getOwnUserInfo } from "api";
import PageContainer from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import HomeLoader from "./Loader";
import Avatar from "./Avatar";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  USERNAME,
  NICKNAME,
  SOCIAL_LIST,
  ARCHIVES_TITLE,
  LABELS_TITLE
} from "config";

const HomePage = Styled(PageContainer)`
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;

const Navs = (() => {
  const navs = [
    <Navbar.NavItem key="Archives">
      <Link to="/archives">
        {!!ARCHIVES_TITLE ? ARCHIVES_TITLE : "Archives"}
      </Link>
    </Navbar.NavItem>,
    <Navbar.NavItem key="Labels">
      <Link to="/labels">{!!LABELS_TITLE ? LABELS_TITLE : "Labels"}</Link>
    </Navbar.NavItem>
  ];
  for (let navTitle in SOCIAL_LIST) {
    navs.push(
      <Navbar.NavItem key={navTitle}>
        <a href={SOCIAL_LIST[navTitle]}>{navTitle}</a>
      </Navbar.NavItem>
    );
  }
  return navs;
})();

export default connect(
  ({ ownUserInfo }) => ({
    ownUserInfo
  }),
  dispatch => ({
    storeInfo: info => dispatch({ type: "store-info", info })
  })
)(
  class extends Component {
    state = {
      avatar_url: "",
      nickname: "",
      desc: "",
      loaded: false
    };
    async componentWillMount() {
      let res = this.props.ownUserInfo;
      let { avatar_url, nickname, desc } = res;
      if (!avatar_url || !nickname || !desc) {
        res = await getOwnUserInfo();
        avatar_url = res.avatar_url;
        nickname = !!NICKNAME ? NICKNAME : !!res.name ? res.name : USERNAME;
        desc = res.bio;
      }
      this.props.storeInfo({ avatar_url, nickname, desc });
      this.setState({ avatar_url, nickname, desc, loaded: true });
    }
    render() {
      const { avatar_url, nickname, desc, loaded } = this.state;
      return (
        <HomePage>
          <PageTitle />
          {loaded ? (
            <Fragment>
              <Avatar src={avatar_url} />
              <Intro>
                <Intro.Nickname>{nickname}</Intro.Nickname>
                <Intro.Desc>{desc}</Intro.Desc>
              </Intro>
              <Navbar>{Navs}</Navbar>
              <Footer>
                © {new Date().getFullYear()} {USERNAME}
              </Footer>
            </Fragment>
          ) : (
            <HomeLoader />
          )}
        </HomePage>
      );
    }
  }
);
