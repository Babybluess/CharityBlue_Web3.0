export const UPDATE_DATA_MODAL = 'UPDATE_DATA_MODAL';

export interface ModalState {
    isPopupDetect: boolean;
}

export interface UpdateDataModal {
    type: typeof UPDATE_DATA_MODAL;
    data: Record<string, unknown>;
}

export type ModalActionTypes = UpdateDataModal;
