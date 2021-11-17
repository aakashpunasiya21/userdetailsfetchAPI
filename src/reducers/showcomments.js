import { SHOW_COMMENTS } from "../actions";
const initialState = {
  comments: [],
};

const showComments = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }
    default:
      return state;
  }
}
export default showComments;