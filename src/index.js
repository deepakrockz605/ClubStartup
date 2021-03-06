import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux'  
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Store/Reducers';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const sagaMiddleware = createSagaMiddleware();
let store = createStore( 
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

ReactDOM.render(
  <Router>
    <Provider store={store}>  
    <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();