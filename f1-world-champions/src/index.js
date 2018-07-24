import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './Assets/fontawesome/css/all.css';
import Route from './route';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
