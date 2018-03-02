import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './services/httpService';


import rootReducer from './reducers';
import Task from './views/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunk, reduxPromise),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
            <Task />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

