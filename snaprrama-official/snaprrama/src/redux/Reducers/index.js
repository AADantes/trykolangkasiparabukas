import {combineReducers} from 'redux';
import {rankReducer} from './rankReducer';
import { UserReducer, selectedUserReducer } from './userReducer';

const reducers = combineReducers({

        allRank:rankReducer,

        loginUser:UserReducer,
        registerUser:selectedUserReducer,

})

export default reducers;