import {MOVE_MAP_MARKER} from '../action-types';

export default () => (state = {}, action) => {
	switch (action.type) {
		case MOVE_MAP_MARKER:
			return action.position;
		default:
			return state;
	}
};
