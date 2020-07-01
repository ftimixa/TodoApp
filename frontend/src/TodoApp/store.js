import {createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
process.env.NODE_ENV !== 'production' &&
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE({}) : compose;
/* eslint-enable */

const configureStore = () => (
  createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    ),
  )
);

const store = configureStore({});

export default store;
