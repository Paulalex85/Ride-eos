import { ActionTypes } from 'const';

const initialState = {
    scatter: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_SCATTER: {
            return Object.assign({}, state, {
                scatter: action.scatter || initialState.scatter,
            });
        }
        default:
            return state;
    }
}