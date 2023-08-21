import * as types from '../types/index';

export function UpdateDataUser(data: types.userTypes.UserState) {
    return {
        type: types.userTypes.UPDATE_DATA_USER,
        data: data,
    };
}
