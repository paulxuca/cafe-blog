import {combineReducers} from 'redux';
import locationReducer from './location';
import addCafeForm from './add-cafe-form';

export default () => combineReducers({
	location: locationReducer(),
	form: addCafeForm()
});
