import {call, put, takeLatest, select} from 'redux-saga/effects';
import {LOAD_BILL, LOAD_MORE, LOAD_LESS, FILTER} from './constants';
import {makeSelectPage, makeSelectFil} from './selectors'
import request from 'utils/request';
import {billLoaded, billError} from './action';

export function* getBill() {
    const page = yield select(makeSelectPage());
    const filters = yield select(makeSelectFil());

    let filter = filters.join("&");
    
    const requestURL = `http://localhost:8080/bill?page=${page}&${filter}`;
    try {
        const bills = yield call(request, requestURL);
        yield put(billLoaded(bills));
    } catch(error) {
        yield put(billError(error));
    }
}

export function* getBill2() {
    yield put({type: LOAD_BILL});
}

export default function* loadBill() {
    yield takeLatest(LOAD_BILL, getBill);
    yield takeLatest(LOAD_MORE, getBill);
    yield takeLatest(LOAD_LESS, getBill);
    yield takeLatest(FILTER, getBill2);
}