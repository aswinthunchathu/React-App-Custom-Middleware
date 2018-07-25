import axios from 'axios';
import { BASE_URL, API_ERROR } from "../constants/api";

import { API_REQUEST } from "../constants/actionTypes";

// const WEB_API = "http://ergast.com/api/f1";

const API = axios.create({
    baseURL: BASE_URL
});

// this middleware care only for API calls
export const api = ({ dispatch }) => next => action => {
    if (action.type === API_REQUEST) {
        const { method, url, onSuccess, onError } = action.meta;
        API(url, method).then(
            res =>  dispatch({ type: onSuccess, payload: res}),
            err => dispatch({ type: onError, payload: err.message || API_ERROR })
        );
    }
    return next(action)
};