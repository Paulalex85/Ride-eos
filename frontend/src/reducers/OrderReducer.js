import { ActionTypes } from 'const';

const initialState = {
    listOrders: [],
    orderKey: undefined,
    buyer: "",
    seller: "",
    deliver: "",
    state: 0,
    date: 0,
    dateDelay: 0,
    priceOrder: "0 SYS",
    priceDeliver: "0 SYS",
    validateBuyer: 0,
    validateSeller: 0,
    validateDeliver: 0,
    details: "",
    delay: 0,
    placeKey: undefined,
    currentActor: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_LIST_ORDERS: {
            let listJSON = action.listOrders || initialState.listOrders;
            let listObject = [];
            for (let i = 0; i < listJSON.rows.length; i++) {
                const element = listJSON.rows[i];
                let order = {
                    orderKey: element.orderKey.toString() || initialState.orderKey,
                    buyer: element.buyer || initialState.buyer,
                    seller: element.seller || initialState.seller,
                    deliver: element.deliver || initialState.deliver,
                    state: element.state.toString() || initialState.state,
                    date: element.date || initialState.date,
                    dateDelay: element.dateDelay || initialState.dateDelay,
                    priceOrder: element.priceOrder || initialState.priceOrder,
                    priceDeliver: element.priceDeliver || initialState.priceDeliver,
                    validateBuyer: element.validateBuyer.toString() || initialState.validateBuyer,
                    validateSeller: element.validateSeller.toString() || initialState.validateSeller,
                    validateDeliver: element.validateDeliver.toString() || initialState.validateDeliver,
                    details: element.details || initialState.details,
                    delay: element.delay || initialState.delay,
                    placeKey: element.placeKey.toString() || initialState.placeKey,
                }
                order.currentActor = setCurrentActor(order, action.account);
                listObject.push(order);
            }
            return Object.assign({}, state, {
                listOrders: listObject
            });
        }
        case ActionTypes.SET_ORDER: {
            let order = {
                orderKey: action.order.orderKey.toString() || initialState.orderKey,
                buyer: action.order.buyer || initialState.buyer,
                seller: action.order.seller || initialState.seller,
                deliver: action.order.deliver || initialState.deliver,
                state: action.order.state.toString() || initialState.state,
                date: action.order.date || initialState.date,
                dateDelay: action.order.dateDelay || initialState.dateDelay,
                priceOrder: action.order.priceOrder || initialState.priceOrder,
                priceDeliver: action.order.priceDeliver || initialState.priceDeliver,
                validateBuyer: action.order.validateBuyer.toString() || initialState.validateBuyer,
                validateSeller: action.order.validateSeller.toString() || initialState.validateSeller,
                validateDeliver: action.order.validateDeliver.toString() || initialState.validateDeliver,
                details: action.order.details || initialState.details,
                delay: action.order.delay || initialState.delay,
                placeKey: action.order.placeKey.toString() || initialState.placeKey,
            }
            order.currentActor = setCurrentActor(order, action.account);

            if (action.listOrders === []) {
                return Object.assign({}, state, {
                    listOrders: [order]
                });
            } else {
                let list = action.listOrders;
                for (let i = 0; i < list.length; i++) {
                    if (list[i].orderKey === order.orderKey) {
                        list[i] = order;
                        return Object.assign({}, state, {
                            listOrders: list
                        });
                    }
                }

                list.push(order);
                return Object.assign({}, state, {
                    listOrders: list
                });
            }
        }
        default:
            return state;
    }
}

function setCurrentActor(order, account) {

    if (order.seller === account) {
        return "seller";
    } else if (order.buyer === account) {
        return "buyer";
    } else if (order.deliver === account) {
        return "deliver";
    } else {
        return "";
    }
}