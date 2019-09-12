import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from "react-redux";
import reducer from './reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import saga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
