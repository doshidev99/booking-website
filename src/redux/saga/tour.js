import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { tourApi } from '../../api/tour';
import { apiErrorHandler } from '../../utils';
import {
	getAllTourType,
	getTourByIdType,
	bookingType,
	searchType
} from '../actionTypes';

function* getAllAction(action) {
	try {
		const { data } = yield tourApi.getAll(action.payload);

		if (data) {
			yield put({ type: getAllTourType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getAllTourType.failed });
	}
}

function* getTourByIdAction(action) {
	try {
		const { data } = yield tourApi.getDetail(action.payload);

		if (data) {
			yield put({ type: getTourByIdType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getTourByIdType.failed });
	}
}
function* bookingAction(action) {
	try {
		const { data: { tourInCart } } = yield tourApi.booking(action.payload);

		if (tourInCart) {
			yield put({ type: bookingType.success });
		}

	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: bookingType.failed });
	}
}

function* searchAction(action) {
	try {
		const { data } = yield tourApi.search(action.payload);

		if (data) {
			yield put({ type: searchType.success, payload: data });
		}

	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: searchType.failed });
	}
}


export default function* sagas() {
	yield takeLeading(getAllTourType.request, getAllAction);
	yield takeLeading(getTourByIdType.request, getTourByIdAction);
	yield takeLeading(bookingType.request, bookingAction);
	yield takeLeading(searchType.request, searchAction);

}
