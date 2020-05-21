import { FETCH_DATA_LOADING_SUCCESS, FETCH_DATA_LOADING } from '../Constants';


export const fetchDataLoading = (status) => {
    return {
        type: FETCH_DATA_LOADING,
        status
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_LOADING_SUCCESS,
        data
    }
}





