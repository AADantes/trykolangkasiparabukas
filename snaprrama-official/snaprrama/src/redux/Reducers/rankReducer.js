
import{ActionTypes} from "../Constants/actionTypes";
import React from 'react'
import RateSnappr from "../../components/ratingpage/RateSnappr";

const initialState ={
    rank: [
        {
            Snappr:'Wawie',
            Rating:'5'
            
        },

    ],

 
}


export const rankReducer = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_RANK:
        return {...state,rank:payload};


    default:
        return state;
  }
}