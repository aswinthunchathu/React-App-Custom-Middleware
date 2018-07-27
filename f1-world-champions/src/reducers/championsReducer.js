import { combineReducers } from 'redux';
import {
    FETCH_CHAMPIONS, FETCH_CHAMPIONS_SUCCESS,
    UPDATE_CHAMPIONS, FETCH_CHAMPIONS_ERROR
} from '../constants/actionTypes';


//This reducer updates champions data to redux store
const list = (
    state = {
        fetching: false,
        fetched: false,
        data: [],
        error: null
    }, action
) => {
    switch (action.type) {
        case FETCH_CHAMPIONS:
            return {
                ...state,
                fetching: true
            }
        case FETCH_CHAMPIONS_SUCCESS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                error: null
            }
        case UPDATE_CHAMPIONS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                data: action.payload,
                error: null
            }
        case FETCH_CHAMPIONS_ERROR:
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

const championsReducer = combineReducers({
    list
});

export default championsReducer;