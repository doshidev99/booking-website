import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

export const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
export default store;
