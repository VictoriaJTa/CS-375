/*
 *
 * Stats actions
 *
 */

import { LOAD_STATS, LOAD_STATS_SUCCESS, LOAD_STATS_ERROR } from "./constants";

export function loadStats() {
  return {
    type: LOAD_STATS
  };
}

export function loadStats(stats) {
  return {
    type: LOAD_STATS_SUCCESS,
    stats
  };
}

export function loadStats(error) {
  return {
    type: LOAD_STATS_ERROR,
    error
  };
}
