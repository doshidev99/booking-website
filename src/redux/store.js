import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import sagas from './saga';

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory({forceRefresh:true});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);

export default store;
