import { ActionTypes } from 'const';

const initialState = {
    listStackpower: [],
    stackKey: undefined,
    account: "",
    endAssignment: 0,
    balance: "0 SYS",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_LIST_STACKPOWER: {
            let listJSON = action.listStackpower || initialState.listStackpower;
            let listObject = [];
            for (let i = 0; i < listJSON.rows.length; i++) {
                const element = listJSON.rows[i];
                let stackpower = {
                    stackKey: element.stackKey.toString() || initialState.stackKey,
                    account: element.account || initialState.account,
                    endAssignment: new Date(element.endAssignment + "Z") || initialState.endAssignment,
                    balance: element.balance || initialState.balance,
                }
                if (action.account === stackpower.account) {
                    listObject.push(stackpower);
                }
            }
            return Object.assign({}, state, {
                listStackpower: listObject
            });
        }
        default:
            return state;
    }
}