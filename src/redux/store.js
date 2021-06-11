import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';

import reducers from './reducers';
import sagas from './saga';

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory({forceRefresh: true});

let composeEnhancers = compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);

export default store;
