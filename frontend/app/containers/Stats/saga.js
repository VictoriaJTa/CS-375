import {call, put, takeLatest} from 'redux-saga/effects';
import {LOAD_STATS} from './constants';

import request from 'utils/request';
import {statsLoaded, statsError} from './actions';

// Individual exports for testing
export function* statsSaga() {
  // See example in containers/HomePage/saga.js
  const requestURL = 'http://localhost:8080/stats';
  try {
    const stats = yield call(request, requestURL);
    console.log(stats);
    yield put(statsLoaded(stats));
  } catch(error) {
    yield put(statsError(error));
  }
}

export default function* loadStatsData() {
    yield takeLatest(LOAD_STATS, statsSaga);
}
