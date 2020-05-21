import { FETCH_DATA_LOADING, FETCH_DATA_LOADING_SUCCESS, SET_BILL } from '../Constants';
const { fromJS } = require('immutable');

export const initialState = fromJS({
    user: {},
    loading: false
})

export const userReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_DATA_LOADING_SUCCESS:
            return state.set('bills', fromJS(action.data));
        
        case FETCH_DATA_LOADING:
            return state.set('loading', action.status);
        
        case SET_BILL:
            return state.set('bills', fromJS(action.data));
        
        default:
            return state;
    }
}


export default userReducer;

