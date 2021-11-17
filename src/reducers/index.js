import { combineReducers } from "redux";
import user_reducer from "./user";
import showTodos from "./showtodos";
import showPosts from "./showposts";
import showComments from "./showcomments";
import editusers from "./editusers"
import addusers from "./Add_reducer";
// import Add_reducer from "./Add_reducer";

export default combineReducers({

  showTodos,
  showPosts,
  showComments,
  editusers,
  addusers,
  user_reducer,

});