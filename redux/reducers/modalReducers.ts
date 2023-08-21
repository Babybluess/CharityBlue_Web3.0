import * as types from '../types';

interface InitialState {
    isPopupDetect: boolean
}

const initialState: InitialState = {
    isPopupDetect: false
};

export default function modalReducer(
    state = initialState,
    action: types.modalTypes.ModalActionTypes,
): types.modalTypes.ModalState {
    switch (action.type) {
        case types.modalTypes.UPDATE_DATA_MODAL:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
}
