import { ActionTypes } from "../Constants/actionTypes";

export const addUsers = (users) => {
    return{
        
        type: ActionTypes.ADD_USERS,
        payload: users,

};

}

export const setUser = (user) => {
    return{
        
        type: ActionTypes.SET_USER,
        payload: user,
    }
}