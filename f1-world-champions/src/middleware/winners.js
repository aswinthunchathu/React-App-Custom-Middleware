import { apiRequest } from '../actions/api';
import {
    QUERY_WINNERS
} from '../constants/api';
import {
    FETCH_WINNERS, FETCH_WINNERS_SUCCESS,
    FETCH_WINNERS_ERROR
} from '../constants/actionTypes';

import { updateWinners } from '../actions/winners';

//This private function will flatten the winner object
//data => winner objet
const flattenWinnersObject = (data) => {
    return data.map(item => {
        let results = item.Results[0];
        return {
            raceName: item.raceName,
            driver: results.Driver,
            constructor: results.Constructor,
            time: item.Results[0].Time.time
        }
    });
}

//This middleware will proccess the winners's success action triggered from the api
export const fetchChampionsSuccess = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === FETCH_WINNERS_SUCCESS) {
        let payload = [];
        if (action.payload.data.MRData.RaceTable && action.payload.data.MRData.RaceTable.Races) {
            payload = flattenWinnersObject(action.payload.data.MRData.RaceTable.Races);
        }
        dispatch(updateWinners(payload));
        //hide spinner
    }
};

//This middleware will proccess the winners's fetch action triggered on page load
export const fetchChampionsFlow = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type === FETCH_WINNERS) {
        dispatch(apiRequest('GET', `${action.payload}${QUERY_WINNERS}`, null, FETCH_WINNERS_SUCCESS, FETCH_WINNERS_ERROR));
    }
};

export const winners = [fetchChampionsFlow, fetchChampionsSuccess];