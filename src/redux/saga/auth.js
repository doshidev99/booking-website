import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { authApi } from '../../api/auth';
import { apiErrorHandler } from '../../utils';
import {
	loginType,
	registerType
} from '../actionTypes';



function* loginAction(action) {
	try {
		const { data: { code, accessToken } } = yield authApi.login(action.payload);

		if (code === 200) {
			localStorage.setItem('token', accessToken)
			yield put({ type: loginType.success, payload: accessToken });
			
			const flag = localStorage.getItem('token');
			if(flag) {
				action.history.push('/');
			}
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: loginType.failed });
	}
}

function* registerAction(action) {
	try {
			// eslint-disable-next-line no-console
		const { data } = yield authApi.register(action.payload);

			// eslint-disable-next-line no-console
		console.log(data, '<----');
		if (data.data) {

				// eslint-disable-next-line no-console
			console.log('aa', '<----');
			yield put({ type: registerType.success, payload: data.data });
			action.history.push('/login')

		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: registerType.failed });
	}
}


export default function* sagas() {
	yield takeLeading(loginType.request, loginAction);
	yield takeLeading(registerType.request, registerAction);

}
