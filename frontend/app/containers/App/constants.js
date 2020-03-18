/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_BILL = 'billbar/App/LOAD_BILL';
export const LOAD_BILL_SUCCESS = 'billbar/App/LOAD_BILL_SUCCESS';
export const LOAD_BILL_ERROR = 'billbar/App/LOAD_BILL_ERROR';
export const TOGGLE_FILTER = 'billbar/App/TOGGLE_FILTER';
export const LOAD_MORE = 'billbar/App/LOAD_MORE';
export const LOAD_LESS = 'billbar/App/LOAD_LESS';
export const FILTER = 'billbar/App/FILTER';