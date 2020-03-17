import {LOAD_BILL, LOAD_BILL_SUCCESS, LOAD_BILL_ERROR} from './constants';
import produce from 'immer';
export const initialState = {
    loading: false,
    error: false,
    bills:false,
}

const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_BILL:
                draft.loading = true;
                draft.error = false;
                draft.bills = false;
                break;

            case LOAD_BILL_SUCCESS:
                draft.loading = false;
                draft.bills = action.bills;
                break;
            
            case LOAD_BILL_ERROR:
                draft.loading = false;
                draft.error = action.error;
                break;
        }
    });

export default appReducer;