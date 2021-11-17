import { ADD_USER } from "../actions";
import { SHOW } from "../actions";
const initialState = {
  data:
  {
    name: "",
    username: "",
    email: ""
  },


}
const addusers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        data: action.payload
      }


    default:
      return state
  }

}
export default addusers;