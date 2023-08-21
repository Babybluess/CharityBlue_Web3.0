import * as types from '../types/index';

export function UpdateDataOrder(data: types.orderTypes.OrderState) {
    return {
        type: types.orderTypes.UPDATE_DATA_ORDER,
        data: data,
    };
}
