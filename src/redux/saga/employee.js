import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { empApi } from '../../api/employee';

import { apiErrorHandler } from '../../utils';
import {
	getAllEmployeeType,
	addEmployeeType,
	updateEmployeeType,
	delEmployeeType,
	getEmployeeByIdType
} from '../actionTypes';

function* getAllAction() {
	try {
			// eslint-disable-next-line no-console
		console.log('getAllAction', '<--getAllAction--');
		const { data } = yield empApi.getAll();

		if (data) {
			yield put({ type: getAllEmployeeType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getAllEmployeeType.failed });
	}
}


function* addEmployeeAction(action) {
	try {
		const { data: { data } } = yield empApi.addEmployee(action.payload);

		if (data) {
			yield put({ type: addEmployeeType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: addEmployeeType.failed });
	}
}


function* updateUserAction(action) {
	try {
		const { data } = yield empApi.updateUser(action.payload);

		if (data) {
			yield put({ type: updateEmployeeType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: updateEmployeeType.failed });
	}
}


function* delUserAction(action) {
	try {
		const { data } = yield empApi.delUser(action.payload);
		if (data) {
			yield put({ type: delEmployeeType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: delEmployeeType.failed });
	}
}
function* getUserByIdAction(action) {
	try {
		const { data } = yield empApi.getById(action.payload);
		if (data) {
			yield put({ type: getEmployeeByIdType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getEmployeeByIdType.failed });
	}
}

export default function* sagas() {
	yield takeLeading(getAllEmployeeType.request, getAllAction);
	yield takeLeading(addEmployeeType.request, addEmployeeAction);
	yield takeLeading(updateEmployeeType.request, updateUserAction);
	yield takeLeading(delEmployeeType.request, delUserAction);
	yield takeLeading(getEmployeeByIdType.request, getUserByIdAction);

}
