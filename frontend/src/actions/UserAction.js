import {ActionTypes} from 'const';

class UserAction {

    static setName({name}) {
        return {
            type: ActionTypes.SET_NAME,
            name
        }
    }

    static setBalance({balance}) {
        return {
            type: ActionTypes.SET_BALANCE,
            balance
        }
    }
}

export default UserAction;