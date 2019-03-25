import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { getOwnUserInfo } from "api";
import PageContainer from "components/common/PageContainer";
import PageTitle from "components/common/PageTitle";
import Avatar from "./Avatar";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeLoader from "./Loader";
import { STORE_INFO } from "store/actions";
import {
  USERNAME,
  AVATAR,
  NICKNAME,
  SOCIALS_LIST,
  ARCHIVES_TITLE,
  LABELS_TITLE
} from "configs";

interface IMapStateToProps {
  ownUserInfo: object;
}

interface IMapDispatchToProps {
  storeInfo: (info: IUserInfo) => void;
}

interface IUserInfo {
  avatar_url?: string;
  nickname?: string;
  desc?: string;
  [other: string]: any;
}

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

const Navs = React.memo(() => {
  const navs = [
    <Navbar.NavItem key="Archives">
      <Link to="/archives">{ARCHIVES_TITLE}</Link>
    </Navbar.NavItem>,
    <Navbar.NavItem key="Labels">
      <Link to="/labels">{LABELS_TITLE}</Link>
    </Navbar.NavItem>
  ];
  for (let navTitle in SOCIALS_LIST) {
    navs.push(
      <Navbar.NavItem key={navTitle}>
        <a href={SOCIALS_LIST[navTitle]}>{navTitle}</a>
      </Navbar.NavItem>
    );
  }
  return <Navbar>{navs}</Navbar>;
});

export default connect(
  (state: IMapStateToProps) => ({
    ownUserInfo: state.ownUserInfo
  }),
  dispatch => ({
    storeInfo: (info: IUserInfo) => dispatch({ type: STORE_INFO, info })
  })
)(
  class extends React.PureComponent<
    IMapStateToProps & IMapDispatchToProps,
    IUserInfo
  > {
    readonly state = {
      avatar_url: "",
      nickname: "",
      desc: "",
      loaded: false
    };
    public async componentDidMount() {
      let res: IUserInfo = this.props.ownUserInfo;
      let { avatar_url, nickname, desc } = res;
      if (!avatar_url || !nickname || !desc) {
        res = await getOwnUserInfo();
        avatar_url = !!AVATAR ? AVATAR : res.avatar_url;
        nickname = NICKNAME;
        desc = res.bio;
      }
      this.props.storeInfo({ avatar_url, nickname, desc });
      this.setState({ avatar_url, nickname, desc, loaded: true });
    }
    public render() {
      const { avatar_url, nickname, desc, loaded } = this.state;
      return (
        <HomePage>
          <PageTitle />
          {loaded ? (
            <>
              <Avatar src={avatar_url} />
              <Intro>
                <Intro.Nickname>{nickname}</Intro.Nickname>
                <Intro.Desc>{desc}</Intro.Desc>
              </Intro>
              <Navs />
              <Footer>
                © 2018 - {new Date().getFullYear()} {USERNAME}
              </Footer>
            </>
          ) : (
            <HomeLoader />
          )}
        </HomePage>
      );
    }
  }
);
