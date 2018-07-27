import { apiRequest } from '../actions/api';
import {
    QUERY_SEASONS
} from '../constants/api';
import {
    FETCH_SEASONS, FETCH_SEASONS_SUCCESS,
    FETCH_SEASONS_ERROR, FETCH_SEASONS_FROM_SESSION,
    UPDATE_SEASON_RANGE_FROM, UPDATE_SEASON_RANGE_TO
} from '../constants/actionTypes';
import { KEY_SEASONS_LIST } from '../constants/sessionKeys';
import { setSessionStorage, getSessionStorage } from '../util';
import { updateSeasons, updateSeasonRange } from '../actions/seasons';

//This middleware will proccess the season's success action triggered from the api
export const fetchSeasonsSuccess = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === FETCH_SEASONS_SUCCESS) {
        let payload = [];
        if (action.payload.data.MRData.SeasonTable && action.payload.data.MRData.SeasonTable.Seasons) {
            payload = action.payload.data.MRData.SeasonTable.Seasons;
            setSessionStorage(KEY_SEASONS_LIST, payload);
        }
        dispatch(updateSeasons(payload));
    }
};

//This middleware will proccess the season's fetch action triggered on page load
export const fetchSeasonsFlow = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === FETCH_SEASONS) {
        const payload = getSessionStorage(KEY_SEASONS_LIST);
        if (payload && payload.length > 0) {
            dispatch({ type: FETCH_SEASONS_FROM_SESSION });
            dispatch(updateSeasons(payload));
        } else {
            dispatch(apiRequest('GET', QUERY_SEASONS, null, FETCH_SEASONS_SUCCESS, FETCH_SEASONS_ERROR));
        }
    }
};

//This middleware will proccess the season range change action
export const updateSelectedSeason = ({ dispatch, getState }) => next => action => {
    next(action);
    //Change selected "To year" to 1 year more than "From year"
    //if "To year" is less than "From year"
    if (action.type === UPDATE_SEASON_RANGE_FROM) {
        if (getState().seasons.toYear <= action.payload) {
            let payload = `${parseInt(action.payload, 10) + 1}`;
            dispatch(updateSeasonRange(UPDATE_SEASON_RANGE_TO, payload));
        }
    }
}

export const seasons = [fetchSeasonsFlow, fetchSeasonsSuccess, updateSelectedSeason];