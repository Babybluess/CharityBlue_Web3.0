import * as types from '../types';

interface InitialState {
	binanceChain: object;
	address: string;
}

const initialState: InitialState = {
	binanceChain: {},
	address: ''
};

export default function userReducer(
	state = initialState,
	action: types.userTypes.UserActionTypes
): types.userTypes.UserState {
	switch (action.type) {
		case types.userTypes.UPDATE_DATA_USER:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
}
