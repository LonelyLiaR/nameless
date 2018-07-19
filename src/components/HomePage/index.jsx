import React, { Component } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { getOwnUserInfo } from "api";
import Avatar from "./avatar";
import Intro from "./intro";
import Navbar from "./navbar";
import { SOCIAL_LIST } from "config";

const HomePage = Styled.div`
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
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
    desc: ""
  };
  async componentDidMount() {
    const res = await getOwnUserInfo();
    const { avatar_url, login, bio } = res;
    this.setState({ avatar_url, nickname: login, desc: bio });
  }
  render() {
    return (
      <HomePage>
        <Avatar src={this.state.avatar_url} />
        <Intro>
          <Intro.Nickname>{this.state.nickname}</Intro.Nickname>
          <Intro.Desc>{this.state.desc}</Intro.Desc>
        </Intro>
        <Navbar>{Navs}</Navbar>
      </HomePage>
    );
  }
}
