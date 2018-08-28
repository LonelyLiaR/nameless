import { combineReducers } from "redux";
import { STORE_POSTS, MARK_POST } from "./actions";

const postArchives = (state = {}, action) => {
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

export default combineReducers({
  postArchives
});
