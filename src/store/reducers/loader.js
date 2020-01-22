import * as ActionTypes from '../action-types';

const initialState = {
    isLoading: false
};
export default (state = initialState, { type, status }) => {
    switch (type) {
        case ActionTypes.LOADING:
            return { ...state, isLoading: status };
        default:
            return state;
    }
};

