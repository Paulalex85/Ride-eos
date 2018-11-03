import { ActionTypes } from 'const';

const initialState = {
  account: "",
  username: "",
  balance: "0 SYS",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      return Object.assign({}, state, {
        // If the name is not specified, do not change it
        // The places that will change the name is login
        // In that cases, the `username`, `balance` will be reset
        account: typeof action.account === undefined ? state.account : action.account,
        username: action.username || initialState.username,
        balance: action.balance || initialState.balance,
      });
    }
    default:
      return state;
  }
}