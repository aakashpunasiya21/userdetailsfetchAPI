export const Users = 'Users';
export const Posts = 'Posts';
export const Todos ='Todos';
export const Comments = 'Comments';
export const getName = 'getName';
export const getUser = 'getUser';
export const getEmail = 'getEmail';
export const ADD_USER ="ADD_USER"

export const users = (payload) => (
    {
        type : Users,payload
    }
);

export const todos = (payload) => (
    {
        type : Todos, payload
    }
);

export const comments = (payload) => (
    {
        type : Comments , payload
    }
)
export const posts = (payload) => (
    {
        type : Posts ,payload
    }
)

export const Add_USER = (payload) =>(
    {
        type : Add_USER,payload
    }
)
// export const get_name = (payload) => (
//     {
//         type : getName ,payload
//     }
// )
// export const get_user = (payload) => (
//     {
//         type : getUser ,payload
//     }
// )

// export const get_email = (payload) => (
//     {
//         type : getEmail ,payload
//     }
// )
