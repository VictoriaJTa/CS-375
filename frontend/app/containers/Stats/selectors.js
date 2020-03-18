import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the stats state domain
 */

const selectStatsDomain = state => state.stats || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Stats
 */

const makeSelectStats = () =>
  createSelector(
    selectStatsDomain,
    substate => substate
  );

export default makeSelectStats;
export { selectStatsDomain };
