import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const fetchStart = () => {
    return({ type: FETCH_START});
}

export const fetchSuccess = (data) => {
    return({ type: FETCH_SUCCESS, payload: data })
}

export const fetchFail = (errorMessage) => {
    return( {type: FETCH_FAIL, payload: errorMessage})
}

export const getNationalize = (nameInput) => {
    return(dispatch) => {
        dispatch(fetchStart())
        axios.get(`https://api.nationalize.io?name=matthew`)
            .then(res => {
                console.log('axiosres', res)
                dispatch(fetchSuccess())
            })
            .catch(err => {
                dispatch(fetchFail(err))
            })
    }
}