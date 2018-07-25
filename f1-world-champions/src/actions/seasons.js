import {
    FETCH_SEASONS, UPDATE_SEASONS
} from '../constants/actionTypes';

export const fetchSeasons = () => (
    {
        type: FETCH_SEASONS
    }
)

export const updateSeasons = (payload) => (
    {
        type: UPDATE_SEASONS,
        payload
    }
)

export const updateSeasonRange = (type, payload) => (
    {
        type,
        payload
    }
)

