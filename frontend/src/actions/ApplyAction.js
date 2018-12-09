import { ActionTypes } from 'const';

class ApplyAction {

    static setListApplies({ listApplies, listOffers }) {
        return {
            type: ActionTypes.SET_LIST_APPLIES,
            listApplies,
            listOffers,
        }
    }

    static setOrderApplies({ listApplies, orderKey }) {
        return {
            type: ActionTypes.SET_ORDER_APPLIES,
            listApplies,
            orderKey
        }
    }
}

export default ApplyAction;