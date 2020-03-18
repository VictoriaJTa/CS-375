import { LOAD_BILL, LOAD_BILL_SUCCESS, LOAD_BILL_ERROR, TOGGLE_FILTER, LOAD_MORE, LOAD_LESS } from "./constants";

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

export function toggleFilter() {
    return {
        type: TOGGLE_FILTER,
    }
}

export function loadMore() {
    return {
        type: LOAD_MORE,
    }
}

export function loadLess() {
    return {
        type: LOAD_LESS,
    }
}