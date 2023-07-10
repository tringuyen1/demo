
import {
    DELETE_USER,
    UPDATE_USER,
    GET_USER,
    ADD_USER
} from "../actions/types";

import userService from "../../services/user.service";

export const getAllUser = () => (dispatch) => {
    userService.getAllUsers().then((response) => {
        const data = response.data;
        console.log(data.users);
        dispatch({
            type: GET_USER,
            payload: data.users
        })
        return Promise.resolve(data.users)
    }).catch((error) => {
        return Promise.reject(error);
    });
}

export const addUser = (user) => (dispatch) => {
    userService.addUser(user).then((response) => {
        user.id = Math.floor(Math.random() * 1000)
        dispatch({
            type: ADD_USER,
            payload: user
        })
        return Promise.resolve()
    }).catch((error) => {
        return Promise.reject(error)
    });
}

export const deleteUser = (userId) => (dispatch) => {
    userService.deleteUser(userId).then((response) => {
        console.log(response.data.isDeleted);
        dispatch({
            type: DELETE_USER,
            payload: userId
        })
        return Promise.resolve()
    }).catch((error) => {
        return Promise.reject(error)
    });
}

export const updateUser = (user) => (dispatch) => {
    userService.updateUser(user).then((response) => {
        console.log(response);
        dispatch({
            type: UPDATE_USER,
            payload: user
        })
        return Promise.resolve()
    }).catch((error) => {
        return Promise.reject(error)
    });
}
