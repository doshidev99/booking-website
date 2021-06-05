import {
	put,
	takeLeading,
} from 'redux-saga/effects';

import { authApi } from '../../api/auth';
import { apiErrorHandler } from '../../utils';


import {
	loginType
} from '../actionTypes';

function* loginAction(action) {
	try {
		const { data } = yield authApi.login(action.payload);

		// eslint-disable-next-line no-console
		console.log(data, '<--data--');
		// if (token) {
		// 	localStorage.setItem('token', token)
		// 	yield put({ type: loginType.success, payload: token });
		// }
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: loginType.failed });
	}
}


export default function* sagas() {
	yield takeLeading(loginType.request, loginAction);

}
