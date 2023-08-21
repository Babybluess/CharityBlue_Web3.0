import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);

	return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
