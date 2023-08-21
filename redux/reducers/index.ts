import { combineReducers } from 'redux';
import userReducers from './userReducers';

const rootReducer = combineReducers({
    userReducers,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
