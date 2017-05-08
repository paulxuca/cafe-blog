import {SET_FORM_VALUE} from '../action-types';

export default schema => (state = schema, action) => {
	switch (action.type) {
		case SET_FORM_VALUE:
			return {
				...state,
				...action.value
			};

		default:
			return state;
	}
};
