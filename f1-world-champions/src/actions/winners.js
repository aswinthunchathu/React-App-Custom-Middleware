import {
    FETCH_WINNERS, UPDATE_WINNERS
} from '../constants/actionTypes';

export const fetchWinners = () => (
    {
        type : FETCH_WINNERS
    }
)

export const updateWinners = (payload) => (
    {
        type : UPDATE_WINNERS,
        payload
    }
)