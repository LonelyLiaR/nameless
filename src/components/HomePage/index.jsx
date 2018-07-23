import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { getOwnUserInfo } from "api";
import PageContainer from "../common/PageContainer";
import HomeLoader from "./loader";
import Avatar from "./avatar";
import Intro from "./intro";
import Navbar from "./navbar";
import Footer from "./footer";
import { SOCIAL_LIST } from "config";

const HomePage = PageContainer.extend`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: 25px 30px;
  }
`;

const Navs = (() => {
  const navs = [
    <Navbar.NavItem key="Blog">
      <Link to="/archives">Blog</Link>
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

export default class extends Component {
  state = {
    avatar_url: "",
    nickname: "",
    desc: "",
    loaded: false
  };
  async componentWillMount() {
    const res = await getOwnUserInfo();
    const { avatar_url, login, bio } = res;
    this.setState({ avatar_url, nickname: login, desc: bio });
  }
  render() {
    return (
      <HomePage>
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
