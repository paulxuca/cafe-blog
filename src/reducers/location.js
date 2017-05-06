import {RECEIVE_USER_LOCATION} from '../action-types';

export default () => (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_USER_LOCATION:
			return action.position;

		default:
			return state;
	}
};
