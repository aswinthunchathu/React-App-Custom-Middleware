import {
    FETCH_CHAMPIONS, UPDATE_CHAMPIONS
} from '../constants/actionTypes';

export const fetchChampions = () => (
    {
        type : FETCH_CHAMPIONS
    }
)

export const updateChampions = (payload) => (
    {
        type : UPDATE_CHAMPIONS,
        payload
    }
)

