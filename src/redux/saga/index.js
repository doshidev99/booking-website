import { all, fork } from 'redux-saga/effects';

import auth from './auth';
import getMe from './getMe';
import tour from './tour';
import user from './user';

export default function* rootSagas() {
	yield all([
		fork(auth),
		fork(getMe),
		fork(tour),
		fork(user),
	]);
}
