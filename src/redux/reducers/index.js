import { combineReducers } from 'redux';
import { logoutType } from '../actionTypes';

import loadingReducer from './loading';
import authReducer from './auth';
import profileReducer from './getMe';
import tourReducer from './tour';
import userReducer from './user';

const appReducer = combineReducers({
	loadingState: loadingReducer,
	authState: authReducer,
	profileState: profileReducer,
	tourState: tourReducer,
	userState: userReducer,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	if (action.type === logoutType.request) {
		state = undefined;
	}

	return appReducer(state, action);
};
