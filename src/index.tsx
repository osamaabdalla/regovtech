import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk-recursion-detect";
import currentReducer from "./reducers/current";
import * as serviceWorker from "./serviceWorker";
import { ICurrent } from "./types";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

let composeEnhancers;

if ( process.env.NODE_ENV !== "production" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const store = createStore<ICurrent, any, any, any>(
  currentReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
