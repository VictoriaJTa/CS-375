import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the stats state domain
 */

const selectStatsDomain = statState => statState.stat || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Stats
 */

const makeSelectStats = () =>
  createSelector(
    selectStatsDomain,
    substate => substate.stats
  );

const makeSelectLoading = () =>
    createSelector(
      selectStatsDomain,
      substate => substate.loading
    );

    const makeSelectError = () =>
    createSelector(
      selectStatsDomain,
      substate => substate.error
    );

export { makeSelectStats, makeSelectLoading, makeSelectError };
