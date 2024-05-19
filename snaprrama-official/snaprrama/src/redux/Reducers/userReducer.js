import { ActionTypes } from "../Constants/actionTypes";

const initialState = {
    users: [

        
    ]
};

const singleuserInitialize = {
    username:'',
    password:'',
    email:'',
};

export const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_USER:
            return { ...state, users: payload };

        default:
            return state;
    }
};

export const selectedUserReducer = (state = singleuserInitialize, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return { ...state, ...payload };

        default:
            return state;
    }
};