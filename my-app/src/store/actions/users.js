
import {
    DELETE_USER,
    UPDATE_USER,
    GET_USER
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
    }).catch((error) => console.error(error));
}

export const deleteUser = (userId) => (dispatch) => {
    userService.deleteUser(userId).then((response) => {
        console.log(response.data.isDeleted);
        dispatch({
            type: DELETE_USER,
            payload: userId
        })
    }).catch((error) => console.error(error));
}

export const updateUser = (user) => (dispatch) => {
    userService.updateUser(user).then((response) => {
        console.log(response);
        dispatch({
            type: UPDATE_USER,
            payload: user
        })
    })
        .catch((error) => console.error(error));
}
