import {combineReducers} from 'redux';
import formSchema from '../constants/add-cafe-form';
import locationReducer from './location';
import formReducer from './form';
import mapPinReducer from './map-pin';

export default () => combineReducers({
	location: locationReducer(),
	form: formReducer(formSchema),
	mapPin: locationReducer(mapPinReducer())
});
