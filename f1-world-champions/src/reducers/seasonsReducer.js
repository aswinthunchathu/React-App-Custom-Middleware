import { combineReducers } from 'redux';
import {
    FETCH_SEASONS, FETCH_SEASONS_SUCCESS, UPDATE_SEASONS, FETCH_SEASONS_ERROR,
    UPDATE_SEASON_RANGE_FROM, UPDATE_SEASON_RANGE_TO
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
        case FETCH_SEASONS:
            return {
                ...state,
                fetching: true
            }
        case FETCH_SEASONS_SUCCESS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                error: null
            }
        case UPDATE_SEASONS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                data: action.payload,
                error: null
            }
        case FETCH_SEASONS_ERROR:
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

const fromYear = (
    state = "2005", action) => {
    switch (action.type) {
        case UPDATE_SEASON_RANGE_FROM:
            return action.payload
        default:
            return state;
    }
}

const toYear = (
    state = "2015", action) => {
    switch (action.type) {
        case UPDATE_SEASON_RANGE_TO:
            return action.payload
        default:
            return state;
    }
}

const seasonsReducer = combineReducers({
    list,
    fromYear,
    toYear
});

export default seasonsReducer;