import {LOAD_BILL, LOAD_BILL_SUCCESS, LOAD_BILL_ERROR, TOGGLE_FILTER} from './constants';
import produce from 'immer';
export const initialState = {
    loading: false,
    error: false,
    bills:false,
    filter: false,
}

const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_BILL:
                draft.loading = true;
                draft.error = false;
                break;

            case LOAD_BILL_SUCCESS:
                draft.loading = false;
                draft.bills = action.bills.bills;
                break;
            
            case LOAD_BILL_ERROR:
                draft.loading = false;
                draft.error = action.error;
                break;
            
            case TOGGLE_FILTER:
                if (state.filter) {
                    draft.filter = false;
                } else {
                    draft.filter = true;
                }
        }
    });

export default appReducer;