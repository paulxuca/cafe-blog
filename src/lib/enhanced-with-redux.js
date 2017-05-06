import withRedux from 'next-redux-wrapper';
import createMakeStore from './create-make-store';

export default (Component, page) => {
	const makeStore = createMakeStore(page);

	return withRedux(makeStore)(Component);
};
