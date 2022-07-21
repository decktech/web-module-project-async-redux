import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS, REMOVE_NATIONALIZE } from "../actions";

const initialState = {
    name: '',
    country: [
        {
            country_id: '',
            probability: null
        },
        {
            country_id: '',
            probability: null
        },
        {
            country_id: '',
            probability: null
        }
    ],
    isFetching: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START: 
            return {
                ...state,
                name:'',
                country: [],
                isFetching: true,
                error:''
            }
        case FETCH_FAIL: 
            return {
                ...state,
                name:'',
                country: [],
                isFetching: false,
                error: action.payload
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                name: action.payload.name,
                country: action.payload.country,
                isFetching: false,
                error: ''
            }
        case REMOVE_NATIONALIZE:
            return {
                ...state,
                name:'',
                country: [],
                isFetching: false,
                error:''
            }
        default:
            return state;
    }
}
