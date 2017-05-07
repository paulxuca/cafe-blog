import {RECEIVE_USER_LOCATION, MOVE_MAP_MARKER} from '../action-types';

export default () => (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_USER_LOCATION:
		case MOVE_MAP_MARKER:
			return action.position;

		default:
			return state;
	}
};
