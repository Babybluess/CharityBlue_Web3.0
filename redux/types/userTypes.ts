export const UPDATE_DATA_USER = 'UPDATE_DATA_USER';
export const UPDATE_DATA_USER_SUCCESS = 'UPDATE_DATA_USER_SUCCESS';

export interface UserState {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UpdateDataUser {
    type: typeof UPDATE_DATA_USER;
    data: Record<string, unknown>;
}

export type UserActionTypes = UpdateDataUser;
