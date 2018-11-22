import { ActionTypes } from 'const';

const initialState = {
    listOffers: [],
    offerKey: undefined,
    orderKey: undefined,
    placeKey: undefined,
    stateOffer: -1,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_LIST_OFFERS: {
            let listJSON = action.listOffers || initialState.listOffers;
            let listObject = [];
            for (let i = 0; i < listJSON.rows.length; i++) {
                const element = listJSON.rows[i];
                let offer = {
                    offerKey: element.offerKey.toString() || initialState.offerKey,
                    orderKey: element.orderKey.toString() || initialState.orderKey,
                    placeKey: element.placeKey.toString() || initialState.placeKey,
                    stateOffer: element.stateOffer.toString() || initialState.stateOffer,
                }
                listObject.push(offer);
            }
            return Object.assign({}, state, {
                listOffers: listObject
            });
        }

        default:
            return state;
    }
}