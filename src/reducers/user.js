import {  Users } from "../actions";
const initialState = {
  usr: [],
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case Users:
      return {
        ...state,
        usr: action.payload,
      }
      default:
      return state;
  }
}
export default user_reducer;