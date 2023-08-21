import { combineReducers } from 'redux';
import orderReducers from './orderReducers';
import userReducers from './userReducers';

const rootReducer = combineReducers({
	userReducers,
	orderReducers
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
