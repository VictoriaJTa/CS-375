import {call, put, takeLatest} from 'redux-saga/effects';
import {LOAD_BILL} from './constants';

import request from 'utils/request';
import {billLoaded, billError} from './action';

export function* getBill() {
    const requestURL = 'http://localhost:8000/bill';
    try {
        const bills = yield call(request, requestURL);
        yield put(billLoaded(bills));
    } catch(error) {
        yield put(billError(error));
    }
}

export default function* loadBill() {
    yield takeLatest(LOAD_BILL, getBill);
}