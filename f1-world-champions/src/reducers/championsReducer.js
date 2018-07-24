import { combineReducers } from 'C:/Users/aswin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { CHAMPIONS_TAG } from '../constants/actionTypes';
import { reducerCreator } from '../util';

const list = reducerCreator([], CHAMPIONS_TAG);

const championsReducer = combineReducers({
    list
});

export default championsReducer;