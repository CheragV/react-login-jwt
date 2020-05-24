import { SET_USER } from './constants';
const { fromJS } = require('immutable');

export const initialState = fromJS({
    user: {}
})

export const homeReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_USER:
            return state.set('user', fromJS(action.data));
        
        default:
            return state;
    }
}


export default homeReducer;

