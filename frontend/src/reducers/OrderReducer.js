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
    validateBuyer: false,
    validateSeller: false,
    validateDeliver: false,
    details: "",
    delay: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_LIST_ORDERS: {
            let listJSON = action.listOrders || initialState.listOrders;
            let listObject = [];
            console.log("coucou");
            console.log(listJSON);
            for (let i = 0; i < listJSON.rows.length; i++) {
                const element = listJSON.rows[i];
                console.log(element.orderKey);
                let order = {
                    orderKey: element.orderKey.toString() || initialState.orderKey,
                    buyer: element.buyer || initialState.buyer,
                    seller: element.seller || initialState.seller,
                    deliver: element.deliver || initialState.deliver,
                    state: element.state || initialState.state,
                    date: element.date || initialState.date,
                    dateDelay: element.dateDelay || initialState.dateDelay,
                    priceOrder: element.priceOrder || initialState.priceOrder,
                    priceDeliver: element.priceDeliver || initialState.priceDeliver,
                    validateBuyer: element.validateBuyer || initialState.validateBuyer,
                    validateSeller: element.validateSeller || initialState.validateSeller,
                    validateDeliver: element.validateDeliver || initialState.validateDeliver,
                    details: element.details || initialState.details,
                    delay: element.delay || initialState.delay,
                }
                console.log(order);
                listObject.push(order);
            }
            console.log(listJSON);
            console.log(listObject);
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
                state: action.order.state || initialState.state,
                date: action.order.date || initialState.date,
                dateDelay: action.order.dateDelay || initialState.dateDelay,
                priceOrder: action.order.priceOrder || initialState.priceOrder,
                priceDeliver: action.order.priceDeliver || initialState.priceDeliver,
                validateBuyer: action.order.validateBuyer || initialState.validateBuyer,
                validateSeller: action.order.validateSeller || initialState.validateSeller,
                validateDeliver: action.order.validateDeliver || initialState.validateDeliver,
                details: action.order.details || initialState.details,
                delay: action.order.delay || initialState.delay,
            }
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