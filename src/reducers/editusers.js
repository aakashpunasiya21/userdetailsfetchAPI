import { EDIT_USER } from "../actions";
const initialState = {
  data: {
    name: "",
    username: "",
    email: ""
  }
};

const editusers = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return state;
  }
}
export default editusers