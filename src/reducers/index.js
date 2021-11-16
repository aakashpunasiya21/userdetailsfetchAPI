import { combineReducers } from "redux";
import user_reducer from "./user";
import showTodos from "./showtodos";
import showPosts from "./showposts";
import showComments from "./showcomments";
import editusers from "./editusers"
// import Add_reducer from "./Add_reducer";

export default combineReducers({
    user_reducer,
    showTodos,
    showPosts,
    showComments,
    editusers

});