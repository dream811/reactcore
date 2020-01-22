import * as ActionTypes from '../action-types';

const initialState = {
    total_rows: 0,
    size: 10,
    accountTypes: [],
    accounts: []
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ACCOUNT_TYPES:
            return { ...state, accountTypes: payload.list, total_rows: payload.total_rows, size: payload.size };
        case ActionTypes.GET_ACCOUNTS:
            return { ...state, accounts: payload.list, total_rows: payload.total_rows, size: payload.size };
        default:
            return state;
    }
};

