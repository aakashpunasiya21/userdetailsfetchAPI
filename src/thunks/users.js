import axios from "axios";
import { showposts, showtodos, users, showcomments, editdata, adduser } from "../actions";
const api = axios.create({
    baseURL: 'http://localhost:3000',
});
export const requestUsers = () => async (dispatch) => {
    try {
        const response = await api.get('/users');
        dispatch(users(response.data));
    }
    catch (err) {
        console.log(err);
    }
}
export const requestTodos = (id) => async (dispatch) => {
    try {
        const todoResponse = await api.get(`users/${id}/todos`);
        dispatch(showtodos(todoResponse.data));
    }
    catch (err) {
        console.log(err);
    }
}

export const requestPost = (id) => async (dispatch) => {
    try {
        const postResponse = await api.get(`users/${id}/todos`);
        dispatch(showposts(postResponse.data));
    }
    catch (err) {
        console.log(err);
    }
}

export const requestComment = (post_id) => async (dispatch) => {
    try {
        const commentResponse = await api.get(`/posts/${post_id}/comments`);
        dispatch(showcomments(commentResponse.data));
    }
    catch (err) {
        console.log(err);
    }
}


export const requestEditUser = (getId) => async (dispatch) => {
    try {
        const editResponse = await api.get(`/users/${getId}`);
        dispatch(editdata(editResponse.data));
    }
    catch (err) {
        console.log(err);
    }
}

export const updateUser = (selector) => async (dispatch) => {
    try {
        const responseUpdate = await api.put(`/users/${selector.id}`, selector);
        dispatch(editdata(responseUpdate.data));
    }
    catch (err) {
        console.log(err);
    }
}
export const requestAddUser = (selector) => async (dispatch) => {
    try {
        const response = await api.post('/users', selector);
        dispatch(adduser(response.data));
    }
    catch (err) {
        console.log(err);
    }
}