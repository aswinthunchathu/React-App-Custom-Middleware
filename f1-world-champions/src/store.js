import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { api } from './middleware/api';
import { champions } from './middleware/champions';
import {seasons} from './middleware/seasons';
import {winners} from './middleware/winners'

//Activate Redux tool 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Add the middlewares here
const middleware = [api, ...champions, ...seasons, ...winners]

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

export default store;