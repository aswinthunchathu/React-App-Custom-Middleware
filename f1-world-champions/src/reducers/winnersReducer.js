import { combineReducers } from 'redux';
import { FETCH_WINNERS, FETCH_WINNERS_SUCCESS,
    UPDATE_WINNERS, FETCH_WINNERS_ERROR 
} from '../constants/actionTypes';

const list = (
    state = {
        fetching: false,
        fetched: false,
        data: [],
        error: null
    }, action
) => {
    switch (action.type) {
        case FETCH_WINNERS:
            return {
                ...state,
                fetching: true
            }
        case FETCH_WINNERS_SUCCESS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                error: null
            }
        case UPDATE_WINNERS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                data: action.payload,
                error: null
            }
        case FETCH_WINNERS_ERROR:
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
};


const winnersReducer = combineReducers({
    list
});

export default winnersReducer;