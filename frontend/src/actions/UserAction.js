import { ActionTypes } from 'const';

class UserAction {

    static setScatter({ scatter }) {
        return {
            type: ActionTypes.SET_SCATTER,
            scatter
        }
    }
    static setBalance({ balance }) {
        return {
            type: ActionTypes.SET_BALANCE,
            balance
        }
    }
}

export default UserAction;