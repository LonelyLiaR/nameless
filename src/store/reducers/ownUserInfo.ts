import { STORE_INFO } from "store/actions";
import { OwnUserInfo } from "types/reducers";

const ownUserInfo = (
  state: OwnUserInfo.IState = { avatar_url: "", nickname: "", desc: "" },
  action: OwnUserInfo.IAction
) => {
  switch (action.type) {
    case STORE_INFO:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
};

export default ownUserInfo;
