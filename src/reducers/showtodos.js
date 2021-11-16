import { SHOW_TODOS, Todos } from "../actions";
const initialState = {

  todos: [],

};

const showTodos = (state = initialState, action) => {
  switch (action.type) {

    case SHOW_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state;
  }
}

export default showTodos;