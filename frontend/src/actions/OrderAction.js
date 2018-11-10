import { ActionTypes } from 'const';

class OrderAction {

    static setListOrders({ listOrders }) {
        return {
            type: ActionTypes.SET_LIST_ORDERS,
            listOrders,
        }
    }

    static setOrder({ listOrders, order }) {
        return {
            type: ActionTypes.SET_ORDER,
            listOrders,
            order,
        }
    }
}

export default OrderAction;