import { ActionTypes } from 'const';

class StackpowerAction {

    static setListStackpower({ listStackpower, account }) {
        return {
            type: ActionTypes.SET_LIST_STACKPOWER,
            listStackpower,
            account
        }
    }
}

export default StackpowerAction;