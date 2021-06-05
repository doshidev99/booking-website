import { all, fork } from 'redux-saga/effects';

import auth from './auth';

export default function* rootSagas() {
	yield all([
		fork(auth),
	]);
}
