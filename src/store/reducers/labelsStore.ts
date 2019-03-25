import { STORE_POSTS, $_NO_LABEL_ } from "store/actions";
import { LabelsStore } from "types/reducers";

const asd = (
  state: LabelsStore.IState = {} as LabelsStore.IState,
  action: LabelsStore.IAction
) => {
  switch (action.type) {
    case STORE_POSTS:
      const labels = Object.assign({}, state);
      labels[$_NO_LABEL_] = [];
      const posts = Object.values(action.posts);
      for (let i = 0; i < posts.length; i++) {
        const ls = posts[i].labels;
        if (!!ls.length) {
          for (let l = 0; l < ls.length; l++) {
            const { name } = ls[l];
            if (typeof labels[name] === "undefined") {
              labels[name] = [];
            }
            labels[name].push(posts[i]);
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

export default asd;
