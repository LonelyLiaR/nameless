import { combineReducers } from "redux";
import { STORE_INFO, STORE_POSTS, MARK_POST } from "./actions";

const $_NO_LABEL_ = Symbol("$_NO_LABEL_");

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

const postsStore = (state = {}, action) => {
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

const labelsStore = (state = {}, action) => {
  switch (action.type) {
    case STORE_POSTS:
      const labels = Object.assign({}, state);
      labels[$_NO_LABEL_] = [];
      const posts = Object.values(action.posts);
      for (let i = 0; i < posts.length; i++) {
        const ls = posts[i].labels;
        if (!!ls.length) {
          for (let l = 0; l < ls.length; l++) {
            if (typeof labels[ls[l].name] === "undefined") {
              labels[ls[l].name] = [];
            }
            labels[ls[l].name].push(posts[i]);
          }
        } else {
          labels[$_NO_LABEL_].push(posts[i]);
        }
      }
      return labels;
    default:
      return state;
  }
};

export default combineReducers({
  ownUserInfo,
  postsStore,
  labelsStore
});
