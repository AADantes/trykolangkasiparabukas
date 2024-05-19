import{ActionTypes} from "../Constants/actionTypes";
import React from 'react'


const score1initialize ={
    rating: 0,
};


export const score1reducer=(state=score1initialize, action)=>{
    switch (action.type) {
        case ActionTypes.SET_SCORE1:
            return {...state, rating:action.payload};
    
        default:
            return state;
}
}

