import { all, fork } from 'redux-saga/effects';
import { watchUser } from './userSaga';

export default function* rootSaga() {
    yield all([fork(watchUser)]);
}
