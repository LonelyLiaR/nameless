import { STORE_POSTS, MARK_POST } from "store/actions";
import { PostsStore } from "types/reducers";

const postsStore = (state: PostsStore.IState = {} as PostsStore.IState, action: PostsStore.IAction) => {
  switch (action.type) {
    case STORE_POSTS:
      return Object.assign({}, state, action.posts);
    case MARK_POST:
      state[action.number].$body = action.body;
      return state;
    default:
      return state;
  }
};

export default postsStore;
