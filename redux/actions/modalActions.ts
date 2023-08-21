import * as types from '../types/index';

export function UpdateDataModal(data: types.modalTypes.ModalState) {
    return {
        type: types.modalTypes.UPDATE_DATA_MODAL,
        data: data,
    };
}
