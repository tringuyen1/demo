import axios from 'axios';

// const API_URL = 'https://dummyjson.com/users'; // api all user

const API_URL = "https://dummyjson.com/auth/"


const login = (username, password) => {
    return axios.post(API_URL + "login", {
        username, password,
    }).then((response) => {
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);
        return response.data;
    });
}

const logout = () => {
    localStorage.removeItem("user");
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login, logout
};