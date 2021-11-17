export const Users = 'Users';
export const SHOW_TODOS = "SHOW_TODOS";
export const SHOW_POSTS = "SHOW_POSTS";
export const SHOW_COMMENTS = "SHOW_COMMENTS"
export const EDIT_USER = "EDIT_USER"
export const ADD_USER = "ADD_USER"
export const Comments = "Comments"
export const SHOW = "SHOW"
export const ADD_FUNCTION ="ADD_FUNCTION"
export const users = (payload) => ({ type: Users, payload });

export const showtodos = (payload) => ({ type: SHOW_TODOS, payload });

export const showposts = (payload) => ({ type: SHOW_POSTS, payload });

export const showcomments = (payload) => ({ type: SHOW_COMMENTS, payload });

export const editdata = (payload) => ({ type: EDIT_USER, payload });

export const adduser = (payload) => ({ type: ADD_USER, payload });

export const setShow  =(payload) => ({ type: SHOW , payload});

export const addShow = (payload) => ({type: ADD_FUNCTION,payload})

