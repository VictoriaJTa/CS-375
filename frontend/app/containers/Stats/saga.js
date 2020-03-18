// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export default function* statsSaga() {
  // See example in containers/HomePage/saga.js
}


// import {call, put, takeLatest} from 'redux-saga/effects';
// import {LOAD_STATS} from './constants';

// import request from 'utils/request';
// import {statsLoaded, statsError} from './action';

// // Individual exports for testing
// export default function* getStats() {
//   const requestURL = 'http://localhost:8080/bill';
//   try {
//       const stats = yield call(request, requestURL);
//       yield put(statsLoaded(stats));
//   } catch(error) {
//       yield put(statsError(error));
//   }
// }

// export default function* loadStats() {
//   yield takeLatest(LOAD_STATS, getStats);
// }
