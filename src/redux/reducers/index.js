import { combineReducers } from 'redux';
import { logoutType } from '../actionTypes';

import loadingReducer from './loading';

const appReducer = combineReducers({
	loadingState: loadingReducer,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	if (action.type === logoutType.request) {
		state = undefined;
	}

	return appReducer(state, action);
};
