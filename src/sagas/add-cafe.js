import {
	REQUEST_USER_LOCATION,
	RECEIVE_USER_LOCATION,
	RECEIVE_USER_LOCATION_ERROR,
	RECEIVE_RESULT_GOOGLE_MAPS_FORM,
	MOVE_MAP_MARKER
} from '../action-types';
import {setValue} from '../actions/form';
import getUserLocation from '../lib/get-user-location';
import parseGoogleMapsResult from '../lib/parse-google-maps-result';
import {takeLatest, call, put} from 'redux-saga/effects';

export default function * () {
	yield [
		takeLatest(REQUEST_USER_LOCATION, handleRequestUserLocation),
		takeLatest(RECEIVE_RESULT_GOOGLE_MAPS_FORM, handleReceiveGoogleMapsResult)
	];
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

function * handleReceiveGoogleMapsResult(action) {
	const {data} = action;
	const {geometry: {location: {lat, lng}}} = data;
	const newPosition = {
		lat: lat(),
		lng: lng()
	};

	yield put(setValue(parseGoogleMapsResult(data)));
	yield put({type: MOVE_MAP_MARKER, position: newPosition});
}
