import {
    FETCH_WINNERS, UPDATE_WINNERS
} from '../constants/actionTypes';

export const fetchWinners = (payload) => (
    {
        type : FETCH_WINNERS,
        payload
    }
)

export const updateWinners = (payload) => (
    {
        type : UPDATE_WINNERS,
        payload
    }
)