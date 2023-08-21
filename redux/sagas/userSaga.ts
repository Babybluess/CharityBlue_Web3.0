import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';
import * as services from '../services/index';

export function* getRandomUserName() {
    try {
        const response = yield services.userServices.getDataUser();

        if (response.status === 200) {
            yield put({
                type: types.userTypes.UPDATE_DATA_USER_SUCCESS,
                data: {
                    firstName: response.data.data.first_name,
                    lastName: response.data.data.last_name,
                    email: response.data.data.email,
                },
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export function* watchUser() {
    yield takeEvery(types.userTypes.UPDATE_DATA_USER, getRandomUserName);
}
