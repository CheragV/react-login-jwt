import {  } from '../Constants';
import { combineReducers } from 'redux';
import userReducer from '../../modules/SignIn/userReducer';
import homeReducer from '../../modules/Home/homeReducer';
const { fromJS } = require('immutable');

export const initialState = fromJS({
    bills: [],
    loading: true
})

export const reducer = (state = initialState,action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    reducer,
    userReducer,
    homeReducer
});

export default rootReducer;

