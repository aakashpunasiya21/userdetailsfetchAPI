export const Users = 'Users';
export const SHOW_TODOS = "SHOW_TODOS";
export const SHOW_POSTS = "SHOW_POSTS";
export const SHOW_COMMENTS ="SHOW_COMMENTS"
export const EDIT_USER = "EDIT_USER"
export const Comments ="Comments"
export const users = (payload) => ({ type : Users,payload});

export const showtodos = (payload) => ({ type : SHOW_TODOS ,payload});

export const showposts = (payload) => ({ type : SHOW_POSTS ,payload});

export const showcomments = (payload) => ({type : SHOW_COMMENTS ,payload});

export const editdata = (payload) => ({type: EDIT_USER,payload});

// export const todos = (payload) => (
//     {
//         type : Todos, payload
//     }
// );

// export const gettodo = (payload) => (
//     {
//         type : Gettodos, payload
//     }
// )


// export const posts = (payload) => (
//     {
//         type : Posts ,payload
//     }
// )

// export const AddUSER = (payload) =>(
//     {
//         type : ADD_USER,payload
//     }
// )
// export const GetName = (payload) => (
//     {
//         type : getName ,payload
//     }
// )
// export const GetUser = (payload) => (
//     {
//         type : getUser ,payload
//     }
// )

// export const GetEmail = (payload) => (
//     {
//         type : getEmail ,payload
//     }
// )
