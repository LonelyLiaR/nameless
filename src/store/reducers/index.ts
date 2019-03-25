import { combineReducers } from "redux";
import ownUserInfo from './ownUserInfo';
import postsStore from './postsStore';
import labelsStore from './labelsStore';

export default combineReducers({
  ownUserInfo,
  postsStore,
  labelsStore
});
