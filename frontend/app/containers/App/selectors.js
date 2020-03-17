import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { select } from 'redux-saga/effects';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectBills = () => 
createSelector(
  selectGlobal,
  global => global.bills,
);

const makeSelectBillLoading = () =>
  createSelector(
    selectGlobal,
    global => global.loading,
  );

const makeSelectBillErorr = () => 
createSelector(
  selectGlobal,
  global => global.error,
)

export { makeSelectLocation, makeSelectBills, makeSelectBillLoading, makeSelectBillErorr };
