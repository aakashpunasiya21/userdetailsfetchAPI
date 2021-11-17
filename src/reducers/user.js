import { Users, ADD_FUNCTION, SHOW } from "../actions";
const initialState = {
  usr: [],
  addshow: false,
  show: false,
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case Users:
      return {
        ...state,
        usr: action.payload,
      }
    case ADD_FUNCTION:
      return {
        ...state,
        addshow: action.payload
      }
    case SHOW:
      return {
        ...state,
        show: action.payload

      }
    default:
      return state;
  }
}
export default user_reducer;