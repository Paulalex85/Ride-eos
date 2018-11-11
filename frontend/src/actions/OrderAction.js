import { ActionTypes } from 'const';

class OrderAction {

    static setListOrders({ listOrders, account }) {
        return {
            type: ActionTypes.SET_LIST_ORDERS,
            listOrders,
            account
        }
    }

    static setOrder({ listOrders, order, account }) {
        return {
            type: ActionTypes.SET_ORDER,
            listOrders,
            order,
            account
        }
    }
}

export default OrderAction;