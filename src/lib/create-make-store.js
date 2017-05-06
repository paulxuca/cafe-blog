import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

export default (page, initialState = {}) => {
	const nextReducer = reducers[page];
	const nextSaga = sagas[page];

	if (!nextReducer) {
		throw new Error(`Reducer for ${page} was not found!`);
	}

	return () => {
		const sagas = createSagaMiddleware();

		let composeEnhancers = compose;
		if (process.env.NODE_ENV === 'development' && typeof window === 'object') {
			composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		}

		const reducer = nextReducer();

		const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagas)));

		if (nextSaga) {
			sagas.run(nextSaga);
		}

		return store;
	};
};
