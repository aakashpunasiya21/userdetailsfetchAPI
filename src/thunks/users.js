import axios from "axios";
import { showposts, showtodos, users,showcomments } from "../actions";
const api = axios.create({
    baseURL : 'http://localhost:3000',
});
export const requestUsers =() => async(dispatch) =>{
    try{
        const response = await api.get('/users');
        dispatch(users(response.data));
    }
    catch(err){
        console.log(err);
    }
}
export const requestTodos =(id) => async(dispatch) => {
    try{
        const todoResponse = await api.get(`users/${id}/todos`);
        dispatch(showtodos(todoResponse.data));
    }
    catch(err){
        console.log(err);
    }
}

export const requestPost =(id) => async(dispatch) => {
    try{
        const postResponse = await api.get(`users/${id}/todos`);
        dispatch(showposts(postResponse.data));
    }
    catch(err){
        console.log(err);
    }
}

export const requestComment =(post_id) => async(dispatch) => {
    try{
        const commentResponse = await api.get(`http://localhost:3000/posts/${post_id}/comments`);
        dispatch(showcomments(commentResponse.data));
    }
    catch(err){
        console.log(err);
    }
}