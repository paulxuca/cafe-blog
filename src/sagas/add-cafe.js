import {
	REQUEST_USER_LOCATION,
	RECEIVE_USER_LOCATION,
	RECEIVE_USER_LOCATION_ERROR
} from '../action-types';
import getUserLocation from '../lib/get-user-location';
import {takeLatest, call, put} from 'redux-saga/effects';

export default function * () {
	yield takeLatest(REQUEST_USER_LOCATION, handleRequestUserLocation);
}

function * handleRequestUserLocation() {
	const position = yield call(getUserLocation);

	if (position) {
		const {latitude: lat, longitude: lng} = position;
		yield put({type: RECEIVE_USER_LOCATION, position: {lat, lng}});
		return;
	}

	yield put({type: RECEIVE_USER_LOCATION_ERROR});
}
