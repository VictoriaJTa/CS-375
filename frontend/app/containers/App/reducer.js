import {LOAD_BILL, LOAD_BILL_SUCCESS, LOAD_BILL_ERROR, TOGGLE_FILTER, LOAD_MORE, LOAD_LESS, FILTER} from './constants';
import produce from 'immer';
export const initialState = {
    loading: false,
    error: false,
    bills:false,
    filter: false,
    page: 0,
    fil: [],
}

const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_BILL:
                draft.page = state.page;
                draft.loading = true;
                draft.error = false;
                break;

            case LOAD_BILL_SUCCESS:
                draft.bills = action.bills.bills;
                draft.loading = false;
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
                break;

            case LOAD_MORE:
                draft.page = state.page;
                draft.page += 1;
                break;
            
            case LOAD_LESS:
                if (state.page == 0) {
                    draft.page = 0;
                } else {
                    draft.page = state.page;
                    draft.page -= 1;
                }
                break;
            
            case FILTER:
                draft.fil = state.fil;
                let exist = false;
                for (var i in state.fil) {
                    if (state.fil[i] == action.fil) {
                        exist = true;
                        draft.fil = draft.fil.splice(i,1);
                    }
                }
                if (exist == false) {
                    state.fil.push(action.fil);
                }
                break;
        }
    });

export default appReducer;