import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getOwnUserInfo } from "api";
import PageContainer from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import HomeLoader from "./Loader";
import Avatar from "./Avatar";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SOCIAL_LIST, ARCHIVES_TITLE, Labels_TITLE } from "config";

const HomePage = PageContainer.extend`
  padding-top: 0;
  padding-bottom: 0;
  height: 100vh;
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
      <Link to="/labels">{!!Labels_TITLE ? Labels_TITLE : "Labels"}</Link>
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
        nickname = res.login;
        desc = res.bio;
      }
      this.props.storeInfo({ avatar_url, nickname, desc });
      this.setState({ avatar_url, nickname, desc, loaded: true });
    }
    render() {
      return (
        <HomePage>
          <PageTitle />
          {this.state.loaded ? (
            <Fragment>
              <Avatar src={this.state.avatar_url} />
              <Intro>
                <Intro.Nickname>{this.state.nickname}</Intro.Nickname>
                <Intro.Desc>{this.state.desc}</Intro.Desc>
              </Intro>
              <Navbar>{Navs}</Navbar>
              <Footer>© 2018 {this.state.nickname}</Footer>
            </Fragment>
          ) : (
            <HomeLoader />
          )}
        </HomePage>
      );
    }
  }
);
