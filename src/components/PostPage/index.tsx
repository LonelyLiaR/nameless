import React from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { getPost, markdownParser } from "api";
import { parse, stringify } from 'utils/query-string';
import PageTitle from "components/common/PageTitle";
import Post from "./Post";
import { MARK_POST } from "store/actions";
import { PostsStore } from "types/reducers";
import { DATE_FORMAT } from "configs";

interface IMapStateToProps {
  postsStore: PostsStore.IState;
}

interface IMapDispatchToProps {
  markPost: (number: number, body: string) => void;
}

interface IPageState {
  title: string;
  created_at: string;
  body: string;
  loaded: boolean;
}

export default connect(
  (state: IMapStateToProps) => ({
    postsStore: state.postsStore
  }),
  dispatch => ({
    markPost: (number: number, body: string) =>
      dispatch({ type: MARK_POST, number, body })
  })
)(
  class extends React.PureComponent<
    IMapStateToProps &
    IMapDispatchToProps &
    RouteComponentProps<{ number: string }>,
    IPageState
    > {
    constructor(props: any) {
      super(props);
      (this as any).postBody = React.createRef();
      this.state = {
        title: "",
        created_at: "",
        body: "",
        loaded: false
      };
    }
    public async componentDidMount() {
      const { postsStore, markPost, history, location, match } = this.props;
      const number = +match.params.number;
      let title, created_at, body;

      if (typeof postsStore[number] === "undefined") {
        const res = await getPost(number);
        if (!res) {
          history.replace("/error");
          return false;
        } else {
          ({ title, created_at } = res);
          body = await markdownParser(res.body);
        }
      } else {
        const { $body } = postsStore[number];
        ({ title, created_at, body } = postsStore[number]);
        if (!$body) {
          body = await markdownParser(body);
          markPost(number, body);
        } else {
          body = $body;
        }
      }
      this.setState({ title, created_at, body, loaded: true });
      
      setTimeout(() => {
        const postBody = (this as any).postBody.current;

        function scrollToAnchor(anchor: string): void {
          if (!postBody.querySelector(`#${anchor}`)) {
            try {
              postBody.querySelector(`[name=user-content-${anchor}]`).scrollIntoView();
            } catch { }
          }
        }

        if (!!location.search) {
          const { anchor = '' } = parse(location.search) as any;
          !!anchor && scrollToAnchor(anchor);
        } else if (!!location.hash) {
          const anchor = location.hash.replace('#', '');
          !!anchor && scrollToAnchor(anchor);
        }

        postBody.querySelectorAll("a").forEach((a: HTMLAnchorElement) => {
          if (a.hostname === window.location.hostname && !!a.hash) {
            a.addEventListener('click', e => {
              const anchor = a.hash.replace('#', '');

              // if HashRouter.
              if (location.pathname === window.location.hash.replace('#', '').replace(/\?.*/, '')) {
                e.preventDefault();
                history.push(`?${stringify({ anchor })}`);
              }

              scrollToAnchor(anchor);
            });
          }
        })
      }, 1);
    }
    public render() {
      const { created_at, title, body, loaded } = this.state;
      return (
        <Post.Container>
          <Post>
            {loaded ? (
              <>
                <Post.Header>
                  <PageTitle>
                    <Post.Header.Title>{title.trim()}</Post.Header.Title>
                  </PageTitle>
                  <Post.Header.Date>
                    {dayjs(created_at).format(DATE_FORMAT)}
                  </Post.Header.Date>
                </Post.Header>
                <Post.Body
                  className="markdown-body"
                  ref={(this as any).postBody}
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </>
            ) : (
                <Post.Loader />
              )}
          </Post>
        </Post.Container>
      );
    }
  }
);
