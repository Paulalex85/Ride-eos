import { ActionTypes } from 'const';

const initialState = {
    listOffers: [],
    listApplies: [],
    offerKey: undefined,
    orderKey: undefined,
    placeKey: undefined,
    applyKey: undefined,
    deliver: undefined,
    stateOffer: -1,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_OFFER: {
            let listOffers = action.listOffers || initialState.listOffers;
            let offerJSON = action.offer;
            let offer = {
                offerKey: offerJSON.offerKey.toString() || initialState.offerKey,
                orderKey: offerJSON.orderKey.toString() || initialState.orderKey,
                placeKey: offerJSON.placeKey.toString() || initialState.placeKey,
                stateOffer: offerJSON.stateOffer.toString() || initialState.stateOffer,
                listApplies: initialState.listApplies,
            }
            if (offer.offerKey !== undefined) {
                for (let i = 0; i < listOffers.length; i++) {
                    if (listOffers[i].offerKey === offer.offerKey) {
                        listOffers[i] = offer;
                        return Object.assign({}, state, {
                            listOffers: listOffers
                        });
                    }
                }
                listOffers.push(offer);
                return Object.assign({}, state, {
                    listOffers: listOffers
                });
            }
            break;
        }
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
                    listApplies: initialState.listApplies,
                }
                listObject.push(offer);
            }
            return Object.assign({}, state, {
                listOffers: listObject
            });
        }
        case ActionTypes.SET_LIST_APPLIES: {
            let listOffers = action.listOffers || initialState.listOffers;
            let listJsonApplies = action.listApplies || initialState.listApplies;
            if (listOffers === []) {
                return Object.assign({}, state, {
                    listOffers: []
                });
            }
            else {
                for (let i = 0; i < listOffers.length; i++) {
                    listOffers[i].listApplies = [];
                }

                for (let i = 0; i < listJsonApplies.rows.length; i++) {
                    const element = listJsonApplies.rows[i];
                    let apply = {
                        applyKey: element.applyKey.toString() || initialState.applyKey,
                        deliver: element.deliver.toString() || initialState.deliver,
                        offerKey: element.offerKey.toString() || initialState.offerKey,
                    }

                    for (let j = 0; j < listOffers.length; j++) {
                        if (listOffers[j].offerKey === apply.offerKey) {
                            listOffers[j].listApplies.push(apply);
                            break;
                        }
                    }

                }
                return Object.assign({}, state, {
                    listOffers: listOffers
                });
            }

        }

        default:
            return state;
    }
}