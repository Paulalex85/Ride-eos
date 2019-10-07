import { ActionTypes } from 'const';

const initialState = {
    scatter: undefined,
    balance: "0.0000 SYS"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_SCATTER: {
            return Object.assign({}, state, {
                scatter: action.scatter || initialState.scatter,
            });
        }
        case ActionTypes.SET_BALANCE: {
            return Object.assign({}, state, {
                balance: action.balance || initialState.balance,
            });
        }
        default:
            return state;
    }
}