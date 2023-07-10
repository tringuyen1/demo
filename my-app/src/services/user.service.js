import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = "https://dummyjson.com/"


const getUser = (userId) => {
    return axios.get(API_URL + `users/${userId}`);
}

const getAllUsers = async () => {
    return await axios.get(API_URL + 'users')
}

const addUser = async (user) => {
    return await axios.post(API_URL + "users/add", { user })
}

const deleteUser = async (userId) => {
    return await axios.delete(API_URL + `users/${userId}`);
}

const updateUser = async (user) => {
    return await axios.put(API_URL + `users/${user.id}`, { user });
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}
