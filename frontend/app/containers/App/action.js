import { LOAD_BILL, LOAD_BILL_SUCCESS, LOAD_BILL_ERROR } from "./constants";

export function loadBill() {
    return {
        type: LOAD_BILL,
    }
}

export function billLoaded(bills) {
    return {
        type: LOAD_BILL_SUCCESS,
        bills
    };
}

export function billError(error) {
    return {
        type: LOAD_BILL_ERROR,
        error,
    };
}