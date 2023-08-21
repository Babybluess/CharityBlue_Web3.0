import * as types from '../types';

const initialState: types.orderTypes.OrderState = {
	isLoading: false
};

export default function modalReducer(
	state = initialState,
	action: types.orderTypes.OrderActionTypes
): types.orderTypes.OrderState {
	switch (action.type) {
		case types.orderTypes.UPDATE_DATA_ORDER:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
}
