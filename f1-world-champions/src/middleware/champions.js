import { apiRequest } from '../actions/api';
import {
    QUERY_CHAMPIONS
} from '../constants/api';
import {
    FETCH_CHAMPIONS, FETCH_CHAMPIONS_SUCCESS,
    FETCH_CHAMPIONS_ERROR, FETCH_CHAMPIONS_FROM_SESSION
} from '../constants/actionTypes';
import { KEY_CHAMPIONS_LIST } from '../constants/sessionKeys';
import { setSessionStorage, getSessionStorage } from '../util';

import { updateChampions } from '../actions/champions';

//This private function will flatten the champions object
//data => champions objet
const flattenChampionsObject = (data) => {
    return data.map(item => {
        let driverStandings = item.DriverStandings[0];
        return {
            season: item.season,
            driver: driverStandings.Driver,
            constructor: driverStandings.Constructors[0],
            wins: driverStandings.wins,
            points: driverStandings.points
        }
    });
}

//This middleware will proccess the champions's success action triggered from the api
export const fetchChampionsSuccess = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === FETCH_CHAMPIONS_SUCCESS) {
        let payload = [];
        if (action.payload.data.MRData.StandingsTable && action.payload.data.MRData.StandingsTable.StandingsLists) {
            payload = flattenChampionsObject(action.payload.data.MRData.StandingsTable.StandingsLists);
            setSessionStorage(KEY_CHAMPIONS_LIST, payload);
        }
        dispatch(updateChampions(payload));
        //hide spinner
    }
};

//This middleware will proccess the champions's fetch action triggered on page load
export const fetchChampionsFlow = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === FETCH_CHAMPIONS) {
        const payload = getSessionStorage(KEY_CHAMPIONS_LIST);
        if (payload && payload.length > 0) {
            dispatch({ type: FETCH_CHAMPIONS_FROM_SESSION });
            dispatch(updateChampions(payload));
        } else {
            dispatch(apiRequest('GET', QUERY_CHAMPIONS, null, FETCH_CHAMPIONS_SUCCESS, FETCH_CHAMPIONS_ERROR));
            //show spinner
        }
    }
};

export const champions = [fetchChampionsFlow, fetchChampionsSuccess];