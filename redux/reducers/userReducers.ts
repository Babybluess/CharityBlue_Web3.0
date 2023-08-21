import * as types from '../types';

const initialState: types.userTypes.UserState = {
	binanceChain: {},
	address: '',
	isBinanceChain: false,
	chainId: ''
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
