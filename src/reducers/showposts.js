import { SHOW_POSTS } from "../actions";
const initialState = {
  posts: [],
};

const showPosts = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    default:
      return state;
  }
}
export default showPosts;