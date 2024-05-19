import { ActionTypes } from "../Constants/actionTypes";

export const setRank = (rank) => {
    return{
        
        type: ActionTypes.SET_RANK,
        payload: rank,
};


  };