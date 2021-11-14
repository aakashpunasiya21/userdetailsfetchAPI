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

export const AddUSER = (payload) =>(
    {
        type : ADD_USER,payload
    }
)
export const GetName = (payload) => (
    {
        type : getName ,payload
    }
)
export const GetUser = (payload) => (
    {
        type : getUser ,payload
    }
)

export const GetEmail = (payload) => (
    {
        type : getEmail ,payload
    }
)
