import { combineReducers } from 'C:/Users/aswin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import championsReducer from './championsReducer';
import seasonsReducer from './seasonsReducer';

const rootReducer = combineReducers({
    champions : championsReducer,
    seasons : seasonsReducer
});

export default rootReducer