import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { select } from 'redux-saga/effects';

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;


const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectBills = () => 
createSelector(
  selectGlobal,
  globalState => globalState.bills,
);

const makeSelectBillLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectBillError = () => 
createSelector(
  selectGlobal,
  globalState => globalState.error,
)

const makeSelectFilter = () => 
  createSelector(
    selectGlobal,
    globalState => globalState.filter,
  )

export { makeSelectLocation, makeSelectBills, makeSelectBillLoading, makeSelectBillError, makeSelectFilter };
