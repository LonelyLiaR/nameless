import { combineReducers } from "redux";
import { STORE_INFO, STORE_POSTS, MARK_POST, STORE_LABELS } from "./actions";

const ownUserInfo = (
  state = { avatar_url: "", nickname: "", desc: "" },
  action
) => {
  switch (action.type) {
    case STORE_INFO:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

const postArchives = (state = { posts: {}, labels: {} }, action) => {
  switch (action.type) {
    case STORE_POSTS:
      state.posts = action.posts;
      return state;
    case MARK_POST:
      state.posts[action.number].$body = action.body;
      return state;
    case STORE_LABELS:
      state.labels = action.labels;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  ownUserInfo,
  postArchives
});
