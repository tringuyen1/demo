import {
    DELETE_USER,
    GET_USER,
    UPDATE_USER, ADD_USER
} from "../actions/types";

const initialState = {
    userList: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;

    // eslint-disable-next-line default-case
    switch (type) {
        case GET_USER:
            return {
                userList: payload,
            }
        case ADD_USER:
            let temp1 = [...state.userList, payload];
            console.log(temp1);
            return {
                userList: [...state.userList, payload]
            }

        case DELETE_USER:
            return {
                userList: state.userList.filter(user => user.id !== payload),
            }
        case UPDATE_USER:
            let temp = state.userList.map((item) => {
                return (item.id === payload.id) ? payload : item
            })
            console.log(temp);
            return {
                userList: temp,
            }
        default:
            return state;
    }
}