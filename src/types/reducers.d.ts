import { $_NO_LABEL_ } from "store/actions";

declare namespace OwnUserInfo {
  interface IState {
    avatar_url: string;
    nickname: string;
    desc: string;
  }

  interface IAction {
    type: string;
    info?: IState;
  }
}

declare namespace PostsStore {
  interface IState {
    [postNumber: number]: IPost;
  }

  interface IAction {
    type: string;
    number: number;
    body: string;
    posts: IPost[];
  }
}

declare namespace LabelsStore {
  interface IState {
    [labelName: string]: IPost[];
    [$_NO_LABEL_]: IPost[];
  }

  interface IAction extends IPost {
    type: string;
    posts: IPost[];
  }
}
