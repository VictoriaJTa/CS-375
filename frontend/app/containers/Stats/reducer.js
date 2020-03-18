/*
 *
 * Stats reducer
 *
 */
import produce from "immer";
import { LOAD_STATS, LOAD_STATS_SUCCESS, LOAD_STATS_ERROR } from "./constants";

export const initialState = {
  loading: false,
  error: false,
  bills: false
};

/* eslint-disable default-case, no-param-reassign */
const statsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STATS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_STATS_SUCCESS:
        draft.loading = false;
        draft.stats = action.stats.stats;
        break;

      case LOAD_STATS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default statsReducer;
