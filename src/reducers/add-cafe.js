import {combineReducers} from 'redux';
import formSchema from '../constants/add-cafe-form';
import locationReducer from './location';
import formReducer from './form';

export default () => combineReducers({
	location: locationReducer(),
	form: formReducer(formSchema)
});
