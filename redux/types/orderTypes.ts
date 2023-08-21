export const UPDATE_DATA_ORDER = 'UPDATE_DATA_ORDER';

export interface OrderState {
    isLoading: boolean;
}

export interface UpdateDataOrder {
    type: typeof UPDATE_DATA_ORDER;
    data: Record<string, unknown>;
}

export type OrderActionTypes = UpdateDataOrder;