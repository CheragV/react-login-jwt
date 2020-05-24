import { SET_USER } from './constants';
import { UserService } from 'utils';

export const getUser = () => {
    return async function (dispatch) { 
        let user = await UserService.getUserData();
        dispatch(setUser(user))
    }
}

export const setUser = (user) => ({
        type: SET_USER,
        data: user
})