import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = "https://dummyjson.com/"


const getUser = (userId) => {
    return axios.get(API_URL + `users/${userId}`);
}

const getAllUsers = () => {
    return axios.get(API_URL + 'users')
}

const addUser = (user) => {
    return axios.post(API_URL + "users/add", { user })
}

const deleteUser = (userId) => {
    return axios.delete(API_URL + `users/${userId}`);
}

const updateUser = (user) => {
    return axios.put(API_URL + `users/${user.id}`, { user });
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}
